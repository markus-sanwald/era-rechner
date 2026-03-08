"use strict";

// ---------------------------------------------------------------------------
// ERA Salary Data – loaded from data.json
// Structure: Year -> { salaryData: Region -> EG -> { StepName: MonthlyGross },
//                       bonusData:  Region -> { ... } }
// ---------------------------------------------------------------------------

let allData = {};
let salaryData = {};
let bonusData = {};

// ---------------------------------------------------------------------------
// DOM references
// ---------------------------------------------------------------------------

const elJahr             = document.getElementById("jahr");
const elSubtitle         = document.getElementById("subtitle");
const elBundesland       = document.getElementById("bundesland");
const elEG               = document.getElementById("eg");
const elStufe            = document.getElementById("stufe");
const elArbeitszeit      = document.getElementById("arbeitszeit");
const elArbeitszeitOutput = document.getElementById("arbeitszeit-output");
const elEintrittsdatum   = document.getElementById("eintrittsdatum");
const elUtZulage         = document.getElementById("ut-zulage");
const elUtZulageOutput   = document.getElementById("ut-zulage-output");
const elResult           = document.getElementById("result");
const elMonthly          = document.getElementById("monthly");
const elAnnual           = document.getElementById("annual");
const elBreakdown        = document.getElementById("breakdown");
const elGrundgehalt      = document.getElementById("grundgehalt");
const elUtZulageRow      = document.getElementById("ut-zulage-row");
const elUtZulagePct      = document.getElementById("ut-zulage-pct");
const elUtZulageAnnual   = document.getElementById("ut-zulage-annual");
const elUrlaubsgeld      = document.getElementById("urlaubsgeld");
const elWeihnachtsgeld   = document.getElementById("weihnachtsgeld");
const elWeihnachtsgeldPct = document.getElementById("weihnachtsgeld-pct");
const elTZugA            = document.getElementById("tzug-a");
const elTZugB            = document.getElementById("tzug-b");
const elTZugBPct         = document.getElementById("tzug-b-pct");
const elChart            = document.getElementById("chart");
const elChartArea        = document.getElementById("chart-area");
const elChartLegend      = document.getElementById("chart-legend");

const currencyFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
});

const compactFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

// ---------------------------------------------------------------------------
// Chart configuration
// ---------------------------------------------------------------------------

const MONTH_NAMES = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
                     "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

const CHART_COLORS = {
  monatsentgelt:  "#003d6b",
  utZulage:       "#4a90c4",
  urlaubsgeld:    "#2ecc71",
  tZugA:          "#e67e22",
  tZugB:          "#f1c40f",
  weihnachtsgeld: "#e2001a"
};

const CHART_LABELS = {
  monatsentgelt:  "Monatsentgelt",
  utZulage:       "ÜT-Zulage",
  urlaubsgeld:    "Urlaubsgeld",
  tZugA:          "T-ZUG A",
  tZugB:          "T-ZUG B",
  weihnachtsgeld: "Weihnachtsgeld"
};

// ---------------------------------------------------------------------------
// Helper: reset a <select> to its placeholder and disable it
// ---------------------------------------------------------------------------

function resetSelect(el, placeholder = "Bitte wählen\u2026") {
  el.innerHTML = `<option value="">${placeholder}</option>`;
  el.disabled = true;
}

// ---------------------------------------------------------------------------
// Populate Bundesland dropdown on load
// ---------------------------------------------------------------------------

function init() {
  allData = ERA_DATA;

  // Populate year dropdown (descending)
  const years = Object.keys(allData).sort((a, b) => b.localeCompare(a));
  for (const y of years) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = `ab 01.04.${y}`;
    elJahr.appendChild(opt);
  }

  loadYear(years[0]);
}

function loadYear(year) {
  salaryData = allData[year].salaryData;
  bonusData = allData[year].bonusData;

  elSubtitle.textContent = `Metall- und Elektroindustrie \u2013 g\u00fcltig ab 01.04.${year}`;

  // Reset dependent dropdowns
  resetSelect(elBundesland, "Bitte w\u00e4hlen\u2026");
  elBundesland.disabled = false;
  resetSelect(elEG, "Bitte w\u00e4hlen\u2026");
  resetSelect(elStufe, "Bitte w\u00e4hlen\u2026");
  hideResult();

  const regions = Object.keys(salaryData).sort((a, b) =>
    a.localeCompare(b, "de")
  );

  for (const region of regions) {
    const opt = document.createElement("option");
    opt.value = region;
    opt.textContent = region;
    elBundesland.appendChild(opt);
  }
}

// ---------------------------------------------------------------------------
// Event: Jahr changed → reload data for selected year
// ---------------------------------------------------------------------------

elJahr.addEventListener("change", () => {
  loadYear(elJahr.value);
});

// ---------------------------------------------------------------------------
// Event: Bundesland changed → populate EG dropdown
// ---------------------------------------------------------------------------

elBundesland.addEventListener("change", () => {
  resetSelect(elEG, "Bitte wählen\u2026");
  resetSelect(elStufe, "Bitte wählen\u2026");
  hideResult();

  const region = elBundesland.value;
  if (!region) return;

  const grades = salaryData[region];
  const gradeKeys = Object.keys(grades).sort((a, b) => {
    const numA = parseInt(a.replace("EG ", ""), 10);
    const numB = parseInt(b.replace("EG ", ""), 10);
    return numA - numB;
  });

  for (const key of gradeKeys) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key;
    elEG.appendChild(opt);
  }

  elEG.disabled = false;
});

// ---------------------------------------------------------------------------
// Event: EG changed → populate Stufe dropdown
// ---------------------------------------------------------------------------

elEG.addEventListener("change", () => {
  resetSelect(elStufe, "Bitte wählen\u2026");
  hideResult();

  const region = elBundesland.value;
  const grade = elEG.value;
  if (!region || !grade) return;

  const steps = salaryData[region][grade];
  if (!steps) return;

  const stepNames = Object.keys(steps);

  for (const name of stepNames) {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    elStufe.appendChild(opt);
  }

  elStufe.disabled = false;

  // Auto-select if only one step available
  if (stepNames.length === 1) {
    elStufe.value = stepNames[0];
    showResult(steps[stepNames[0]]);
  }
});

// ---------------------------------------------------------------------------
// Event: Stufe changed → calculate and display result
// ---------------------------------------------------------------------------

elStufe.addEventListener("change", () => {
  const region = elBundesland.value;
  const grade = elEG.value;
  const step = elStufe.value;

  if (!region || !grade || !step) {
    hideResult();
    return;
  }

  const monthly = salaryData[region]?.[grade]?.[step];
  if (monthly == null) {
    hideResult();
    return;
  }

  showResult(monthly);
});

// ---------------------------------------------------------------------------
// Event: Arbeitszeit slider changed → update output + recalculate
// ---------------------------------------------------------------------------

elArbeitszeit.addEventListener("input", () => {
  elArbeitszeitOutput.textContent = `${elArbeitszeit.value}\u00a0h`;
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: Eintrittsdatum changed → recalculate if result is visible
// ---------------------------------------------------------------------------

elEintrittsdatum.addEventListener("change", () => {
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: ÜT-Zulage slider changed → update output + recalculate
// ---------------------------------------------------------------------------

elUtZulage.addEventListener("input", () => {
  const v = parseFloat(elUtZulage.value);
  elUtZulageOutput.textContent = `${v.toFixed(1).replace(".", ",")}\u00a0%`;
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Shared: recalculate if all required fields are filled
// ---------------------------------------------------------------------------

function recalcIfReady() {
  const region = elBundesland.value;
  const grade = elEG.value;
  const step = elStufe.value;
  if (!region || !grade || !step) return;

  const monthly = salaryData[region]?.[grade]?.[step];
  if (monthly == null) return;

  showResult(monthly);
}

// ---------------------------------------------------------------------------
// Betriebszugehörigkeit helpers
// ---------------------------------------------------------------------------

function berechneMonate(eintrittsdatum) {
  const heute = new Date();
  const eintritt = new Date(eintrittsdatum);
  let monate = (heute.getFullYear() - eintritt.getFullYear()) * 12
             + (heute.getMonth() - eintritt.getMonth());
  if (heute.getDate() < eintritt.getDate()) monate--;
  return Math.max(0, monate);
}

function getWeihnachtsgeldSatz(monate, staffel) {
  for (const stufe of staffel) {
    if (monate >= stufe.monate) return stufe.satz;
  }
  return 0;
}

// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------

function showResult(tabellenMonthly) {
  const region = elBundesland.value;
  const bonus = bonusData[region];

  // Arbeitszeitfaktor: Tabellenwerte basieren auf 35 h/Woche
  const wochenstunden = parseInt(elArbeitszeit.value, 10) || 35;
  const azFaktor = wochenstunden / 35;

  // Angepasstes Monatsentgelt
  const monthly = tabellenMonthly * azFaktor;

  // ÜT-Zulage (übertarifliche Zulage)
  const utPct = parseFloat(elUtZulage.value) || 0;
  const utMonatlich = monthly * (utPct / 100);
  const utJaehrlich = utMonatlich * 12;

  const grundgehalt = monthly * 12;

  elMonthly.textContent = currencyFmt.format(monthly + utMonatlich);

  if (bonus) {
    const datumStr = elEintrittsdatum.value;
    const monate = datumStr ? berechneMonate(datumStr) : null;
    const hatAnspruch = monate === null || monate >= bonus.minMonate;

    // Weihnachtsgeld-Satz bestimmen
    let wgSatz;
    if (monate === null) {
      wgSatz = bonus.weihnachtsgeldStaffel[0].satz;
    } else {
      wgSatz = getWeihnachtsgeldSatz(monate, bonus.weihnachtsgeldStaffel);
    }

    // Sonderzahlungen basieren auf Grundentgelt (ohne ÜT-Zulage)
    const urlaubsgeld     = hatAnspruch ? monthly * bonus.urlaubsgeld : 0;
    const weihnachtsgeld  = hatAnspruch ? monthly * wgSatz : 0;
    const tZugA           = hatAnspruch ? monthly * bonus.tZugA : 0;
    const tZugB           = hatAnspruch ? bonus.eckentgelt * azFaktor * bonus.tZugB : 0;
    const total           = grundgehalt + utJaehrlich + urlaubsgeld + weihnachtsgeld + tZugA + tZugB;

    elAnnual.textContent         = currencyFmt.format(total);
    elGrundgehalt.textContent    = currencyFmt.format(grundgehalt);
    elUrlaubsgeld.textContent    = currencyFmt.format(urlaubsgeld);
    elWeihnachtsgeld.textContent = currencyFmt.format(weihnachtsgeld);
    elTZugA.textContent          = currencyFmt.format(tZugA);
    elTZugB.textContent          = currencyFmt.format(tZugB);

    // ÜT-Zulage Zeile ein-/ausblenden
    if (utPct > 0) {
      elUtZulageAnnual.textContent = currencyFmt.format(utJaehrlich);
      elUtZulagePct.textContent = `(${utPct.toFixed(1).replace(".", ",")}\u00a0% v. ME)`;
      elUtZulageRow.classList.remove("hidden");
    } else {
      elUtZulageRow.classList.add("hidden");
    }

    // Dynamische Prozentanzeige im Label
    const pctText = hatAnspruch
      ? `(${(wgSatz * 100).toFixed(0).replace(".", ",")}\u00a0% eines ME)`
      : "(kein Anspruch)";
    elWeihnachtsgeldPct.textContent = pctText;

    // T-ZUG B Prozentsatz dynamisch anzeigen
    const tZugBPct = (bonus.tZugB * 100).toFixed(1).replace(".", ",");
    elTZugBPct.textContent = `(${tZugBPct}\u00a0% v. Eckentgelt)`;

    elBreakdown.classList.remove("hidden");

    // Chart rendern
    renderChart(monthly, utMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tZugB);
  } else {
    const total = grundgehalt + utJaehrlich;
    elAnnual.textContent = currencyFmt.format(total);
    elBreakdown.classList.add("hidden");
    elChart.classList.add("hidden");
  }

  elResult.classList.remove("hidden");
}

// ---------------------------------------------------------------------------
// Chart: Bruttoverdienst nach Monaten (nur Baden-Württemberg)
// Auszahlungsmonate: Feb → T-ZUG B, Jun → Urlaubsgeld,
//                    Jul → T-ZUG A, Nov → Weihnachtsgeld
// ---------------------------------------------------------------------------

function renderChart(monthly, utMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tZugB) {
  const baseSegCount = 1 + (utMonatlich > 0 ? 1 : 0);

  const data = MONTH_NAMES.map((label, i) => {
    const segs = [{ key: "monatsentgelt", value: monthly }];
    if (utMonatlich > 0) segs.push({ key: "utZulage", value: utMonatlich });
    if (i === 1  && tZugB > 0)          segs.push({ key: "tZugB",          value: tZugB });
    if (i === 5  && urlaubsgeld > 0)     segs.push({ key: "urlaubsgeld",    value: urlaubsgeld });
    if (i === 6  && tZugA > 0)           segs.push({ key: "tZugA",          value: tZugA });
    if (i === 10 && weihnachtsgeld > 0)  segs.push({ key: "weihnachtsgeld", value: weihnachtsgeld });
    const total = segs.reduce((s, seg) => s + seg.value, 0);
    return { label, segs, total };
  });

  const maxTotal = Math.max(...data.map(d => d.total));

  let barsHtml = "";
  for (const month of data) {
    const pct = maxTotal > 0 ? (month.total / maxTotal) * 100 : 0;

    let segsHtml = "";
    for (const seg of month.segs) {
      const segPct = month.total > 0 ? (seg.value / month.total) * 100 : 0;
      segsHtml += `<div class="chart-seg" style="height:${segPct.toFixed(1)}%;background:${CHART_COLORS[seg.key]}" title="${CHART_LABELS[seg.key]}: ${currencyFmt.format(seg.value)}"></div>`;
    }

    const hasBonus = month.segs.length > baseSegCount;
    const totalHtml = hasBonus
      ? `<span class="chart-total">${compactFmt.format(month.total)}</span>`
      : "";

    barsHtml += `<div class="chart-col">${totalHtml}<div class="chart-stack" style="height:${pct.toFixed(1)}%">${segsHtml}</div><span class="chart-lbl">${month.label}</span></div>`;
  }

  elChartArea.innerHTML = barsHtml;

  // Legende – nur tatsächlich vorhandene Segmente anzeigen
  const allKeys = new Set();
  for (const month of data) {
    for (const seg of month.segs) allKeys.add(seg.key);
  }
  const legendOrder = ["monatsentgelt", "utZulage", "tZugB", "urlaubsgeld", "tZugA", "weihnachtsgeld"];
  elChartLegend.innerHTML = legendOrder
    .filter(k => allKeys.has(k))
    .map(k => `<div class="chart-legend-item"><span class="chart-legend-color" style="background:${CHART_COLORS[k]}"></span>${CHART_LABELS[k]}</div>`)
    .join("");

  elChart.classList.remove("hidden");
}

function hideResult() {
  elResult.classList.add("hidden");
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

init();
