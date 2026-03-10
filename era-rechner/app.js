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
const elTZugAFrei        = document.getElementById("tzug-a-frei");
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
const elTGeld            = document.getElementById("tgeld");
const elTZugB            = document.getElementById("tzug-b");
const elTZugBPct         = document.getElementById("tzug-b-pct");
const elSonderzahlung    = document.getElementById("sonderzahlung");
const elSonderzahlungRow = document.getElementById("sonderzahlung-row");
const elSonderzahlungAnnual = document.getElementById("sonderzahlung-annual");
const elHourly           = document.getElementById("hourly");
const elYearNotice       = document.getElementById("year-notice");
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

const CHART_COLORS = {
  monatsentgelt:  "#003d6b",
  utZulage:       "#4a90c4",
  urlaubsgeld:    "#2ecc71",
  tZugA:          "#e67e22",
  tGeld:          "#9b59b6",
  tZugB:          "#f1c40f",
  weihnachtsgeld: "#e2001a"
};

// ---------------------------------------------------------------------------
// Helper: reset a <select> to its placeholder and disable it
// ---------------------------------------------------------------------------

function resetSelect(el) {
  el.innerHTML = `<option value="">${t("placeholder")}</option>`;
  el.disabled = true;
}

// ---------------------------------------------------------------------------
// Populate Bundesland dropdown on load
// ---------------------------------------------------------------------------

function init() {
  allData = ERA_DATA;

  // Apply saved language on load
  document.documentElement.lang = currentLang;
  applyTranslations();

  // Year dropdown is already populated by applyTranslations() above.
  const years = Object.keys(allData).sort((a, b) => b.localeCompare(a));
  loadYear(years[0]);
}

function loadYear(year) {
  salaryData = allData[year].salaryData;
  bonusData = allData[year].bonusData;

  elSubtitle.textContent = tReplace("subtitleWithYear", { year });

  // Hinweis für vorläufige Werte ein-/ausblenden
  if (year === "2026") {
    elYearNotice.classList.remove("hidden");
  } else {
    elYearNotice.classList.add("hidden");
  }

  // Reset dependent dropdowns
  resetSelect(elBundesland);
  elBundesland.disabled = false;
  resetSelect(elEG);
  resetSelect(elStufe);
  hideResult();

  const regions = Object.keys(salaryData).sort((a, b) =>
    a.localeCompare(b, "de")
  );

  for (const region of regions) {
    const opt = document.createElement("option");
    opt.value = region;
    opt.textContent = tRegion(region);
    elBundesland.appendChild(opt);
  }
}

// ---------------------------------------------------------------------------
// Language switch: re-render dynamic content
// ---------------------------------------------------------------------------

const _origApplyTranslations = applyTranslations;
applyTranslations = function () {
  _origApplyTranslations();

  // Re-render year options
  const selectedYear = elJahr.value;
  elJahr.innerHTML = "";
  const years = Object.keys(allData).sort((a, b) => b.localeCompare(a));
  for (const y of years) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = tReplace("yearOption", { year: y });
    elJahr.appendChild(opt);
  }
  if (selectedYear) elJahr.value = selectedYear;

  // Re-render subtitle
  const year = elJahr.value;
  if (year) {
    elSubtitle.textContent = tReplace("subtitleWithYear", { year });
  }

  // Update Bundesland option texts
  for (const opt of elBundesland.options) {
    if (opt.value === "") {
      opt.textContent = t("placeholder");
    } else {
      opt.textContent = tRegion(opt.value);
    }
  }

  // Update EG placeholder
  const egFirst = elEG.querySelector('option[value=""]');
  if (egFirst) egFirst.textContent = t("placeholder");

  // Update Stufe option texts
  for (const opt of elStufe.options) {
    if (opt.value === "") {
      opt.textContent = t("placeholder");
    } else {
      opt.textContent = tStep(opt.value);
    }
  }

  // Re-render chart and result if visible
  recalcIfReady();
};

// ---------------------------------------------------------------------------
// Event: Jahr changed → reload data for selected year
// ---------------------------------------------------------------------------

elJahr.addEventListener("change", () => {
  // Aktuelle Auswahl merken
  const prevBundesland = elBundesland.value;
  const prevEG = elEG.value;
  const prevStufe = elStufe.value;

  loadYear(elJahr.value);

  // Auswahl wiederherstellen, sofern Werte im neuen Tarifjahr existieren
  if (prevBundesland && [...elBundesland.options].some(o => o.value === prevBundesland)) {
    elBundesland.value = prevBundesland;
    elBundesland.dispatchEvent(new Event("change"));

    if (prevEG && [...elEG.options].some(o => o.value === prevEG)) {
      elEG.value = prevEG;
      elEG.dispatchEvent(new Event("change"));

      if (prevStufe && [...elStufe.options].some(o => o.value === prevStufe)) {
        elStufe.value = prevStufe;
        elStufe.dispatchEvent(new Event("change"));
      }
    }
  }
});

// ---------------------------------------------------------------------------
// Event: Bundesland changed → populate EG dropdown
// ---------------------------------------------------------------------------

elBundesland.addEventListener("change", () => {
  resetSelect(elEG);
  resetSelect(elStufe);
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
  resetSelect(elStufe);
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
    opt.textContent = tStep(name);
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
// Event: T-ZUG A als freie Tage checkbox changed → recalculate
// ---------------------------------------------------------------------------

elTZugAFrei.addEventListener("change", () => {
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: Sonderzahlung changed → recalculate
// ---------------------------------------------------------------------------

elSonderzahlung.addEventListener("input", () => {
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

  // Brutto-Stundenlohn: Monatsentgelt / (Wochenstunden × 52 / 12)
  const monatsStunden = wochenstunden * 52 / 12;
  const stundenlohn = (monthly + utMonatlich) / monatsStunden;
  elHourly.textContent = currencyFmt.format(stundenlohn);

  // Optionale Sonderzahlung
  const sonderzahlung = parseFloat(elSonderzahlung.value) || 0;

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
    const tZugAFreiTage   = elTZugAFrei.checked;
    const tZugA           = hatAnspruch && !tZugAFreiTage ? monthly * bonus.tZugA : 0;
    const tGeld           = hatAnspruch && bonus.tGeld ? monthly * bonus.tGeld : 0;
    const tZugB           = hatAnspruch ? bonus.eckentgelt * azFaktor * bonus.tZugB : 0;
    const total           = grundgehalt + utJaehrlich + urlaubsgeld + weihnachtsgeld + tZugA + tGeld + tZugB + sonderzahlung;

    elAnnual.textContent         = currencyFmt.format(total);
    elGrundgehalt.textContent    = currencyFmt.format(grundgehalt);
    elUrlaubsgeld.textContent    = currencyFmt.format(urlaubsgeld);
    elWeihnachtsgeld.textContent = currencyFmt.format(weihnachtsgeld);
    elTZugA.textContent          = currencyFmt.format(tZugA);
    elTGeld.textContent          = currencyFmt.format(tGeld);
    elTZugB.textContent          = currencyFmt.format(tZugB);

    // Sonderzahlung Zeile ein-/ausblenden
    if (sonderzahlung > 0) {
      elSonderzahlungAnnual.textContent = currencyFmt.format(sonderzahlung);
      elSonderzahlungRow.classList.remove("hidden");
    } else {
      elSonderzahlungRow.classList.add("hidden");
    }

    // ÜT-Zulage Zeile ein-/ausblenden
    if (utPct > 0) {
      elUtZulageAnnual.textContent = currencyFmt.format(utJaehrlich);
      elUtZulagePct.textContent = tReplace("utZulagePct", {
        pct: utPct.toFixed(1).replace(".", ",")
      });
      elUtZulageRow.classList.remove("hidden");
    } else {
      elUtZulageRow.classList.add("hidden");
    }

    // Dynamische Prozentanzeige im Label
    const pctText = hatAnspruch
      ? tReplace("xmasPayPct", {
          pct: (wgSatz * 100).toFixed(0).replace(".", ",")
        })
      : t("xmasPayNone");
    elWeihnachtsgeldPct.textContent = pctText;

    // T-ZUG B Prozentsatz dynamisch anzeigen
    const tZugBPctVal = (bonus.tZugB * 100).toFixed(1).replace(".", ",");
    elTZugBPct.textContent = tReplace("tZugBPct", { pct: tZugBPctVal });

    elBreakdown.classList.remove("hidden");

    // Chart rendern
    renderChart(monthly, utMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tGeld, tZugB);
  } else {
    const total = grundgehalt + utJaehrlich + sonderzahlung;
    elAnnual.textContent = currencyFmt.format(total);
    elBreakdown.classList.add("hidden");
    elChart.classList.add("hidden");
  }

  elResult.classList.remove("hidden");
}

// ---------------------------------------------------------------------------
// Chart: Bruttoverdienst nach Monaten
// Auszahlungsmonate: Feb → T-ZUG B, Jun → Urlaubsgeld,
//                    Jul → T-ZUG A + T-Geld, Nov → Weihnachtsgeld
// ---------------------------------------------------------------------------

function renderChart(monthly, utMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tGeld, tZugB) {
  const monthNames = t("chartMonths");
  const chartLabels = t("chartLabels");
  const baseSegCount = 1 + (utMonatlich > 0 ? 1 : 0);

  const data = monthNames.map((label, i) => {
    const segs = [{ key: "monatsentgelt", value: monthly }];
    if (utMonatlich > 0) segs.push({ key: "utZulage", value: utMonatlich });
    if (i === 1  && tZugB > 0)          segs.push({ key: "tZugB",          value: tZugB });
    if (i === 5  && urlaubsgeld > 0)     segs.push({ key: "urlaubsgeld",    value: urlaubsgeld });
    if (i === 6  && tZugA > 0)           segs.push({ key: "tZugA",          value: tZugA });
    if (i === 6  && tGeld > 0)           segs.push({ key: "tGeld",          value: tGeld });
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
      segsHtml += `<div class="chart-seg" style="height:${segPct.toFixed(1)}%;background:${CHART_COLORS[seg.key]}" title="${chartLabels[seg.key]}: ${currencyFmt.format(seg.value)}"></div>`;
    }

    const hasBonus = month.segs.length > baseSegCount;
    const totalHtml = hasBonus
      ? `<span class="chart-total">${compactFmt.format(month.total)}</span>`
      : `<span class="chart-total" style="visibility:hidden">0 \u20ac</span>`;

    barsHtml += `<div class="chart-col">${totalHtml}<div class="chart-bar-area"><div class="chart-stack" style="height:${pct.toFixed(1)}%">${segsHtml}</div></div><span class="chart-lbl">${month.label}</span></div>`;
  }

  elChartArea.innerHTML = barsHtml;

  // Legende – nur tatsächlich vorhandene Segmente anzeigen
  const allKeys = new Set();
  for (const month of data) {
    for (const seg of month.segs) allKeys.add(seg.key);
  }
  const legendOrder = ["monatsentgelt", "utZulage", "tZugB", "urlaubsgeld", "tZugA", "tGeld", "weihnachtsgeld"];
  elChartLegend.innerHTML = legendOrder
    .filter(k => allKeys.has(k))
    .map(k => `<div class="chart-legend-item"><span class="chart-legend-color" style="background:${CHART_COLORS[k]}"></span>${chartLabels[k]}</div>`)
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
