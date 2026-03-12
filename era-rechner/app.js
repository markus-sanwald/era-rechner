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
const elEintrittsdatum   = document.getElementById("eintrittsdatum");   // hidden input (YYYY-MM-DD)
const elDpDisplay        = document.getElementById("eintrittsdatum-display");
const elDpDropdown       = document.getElementById("datepicker-dropdown");
const elDpTitle          = document.getElementById("dp-title");
const elDpWeekdays       = document.getElementById("dp-weekdays");
const elDpDays           = document.getElementById("dp-days");
const elDpMonthSelect    = document.getElementById("dp-month-select");
const elDpToday          = document.getElementById("dp-today");
const elDpClear          = document.getElementById("dp-clear");
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
const elSteuerklasse     = document.getElementById("steuerklasse");
const elKirchensteuer    = document.getElementById("kirchensteuer");
const elNettoResult      = document.getElementById("netto-result");
const elNettoMonthly     = document.getElementById("netto-monthly");
const elNettoAnnual      = document.getElementById("netto-annual");
const elNettoToggle      = document.getElementById("netto-toggle");
const elNettoInputs      = document.getElementById("netto-inputs");
const elKinderfreibetrag = document.getElementById("kinderfreibetrag");
const elKVZusatz         = document.getElementById("kv-zusatzbeitrag");

// Compare DOM references
const elCompare          = document.getElementById("compare");
const elCompareSave      = document.getElementById("compare-save");
const elCompareTable     = document.getElementById("compare-table");
const elCompareReset     = document.getElementById("compare-reset");
const elCompareLabelSaved   = document.getElementById("compare-label-saved");
const elCompareMonthlySaved = document.getElementById("compare-monthly-saved");
const elCompareAnnualSaved  = document.getElementById("compare-annual-saved");
const elCompareLabelCurrent = document.getElementById("compare-label-current");
const elCompareMonthlyCurrent = document.getElementById("compare-monthly-current");
const elCompareAnnualCurrent  = document.getElementById("compare-annual-current");
const elCompareMonthlyDiff  = document.getElementById("compare-monthly-diff");
const elCompareAnnualDiff   = document.getElementById("compare-annual-diff");

let savedComparison = null;  // { label, monthly, annual }

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

  // Update datepicker placeholder and re-render if open
  elDpDisplay.placeholder = currentLang === "de" ? "TT.MM.JJJJ" : "DD.MM.YYYY";
  const wrapper = elDpDisplay.closest(".datepicker-wrapper");
  if (wrapper.classList.contains("open")) {
    datepicker.render();
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
// Custom Datepicker
// ---------------------------------------------------------------------------

const datepicker = {
  viewMonth: new Date().getMonth(),
  viewYear: new Date().getFullYear(),
  selectedDate: null,
  monthSelectMode: false,

  open() {
    const wrapper = elDpDisplay.closest(".datepicker-wrapper");
    wrapper.classList.add("open");
    this.monthSelectMode = false;
    elDpMonthSelect.classList.add("hidden");
    elDpWeekdays.style.display = "";
    elDpDays.style.display = "";
    this.render();
  },

  close() {
    const wrapper = elDpDisplay.closest(".datepicker-wrapper");
    wrapper.classList.remove("open");
    this.monthSelectMode = false;
  },

  toggle() {
    const wrapper = elDpDisplay.closest(".datepicker-wrapper");
    if (wrapper.classList.contains("open")) {
      this.close();
    } else {
      this.open();
    }
  },

  render() {
    const months = t("dpMonths");
    const weekdays = t("dpWeekdays");

    // Title
    elDpTitle.textContent = `${months[this.viewMonth]} ${this.viewYear}`;

    // Weekday headers
    elDpWeekdays.innerHTML = weekdays.map(d => `<span>${d}</span>`).join("");

    // Calculate days
    const firstDay = new Date(this.viewYear, this.viewMonth, 1);
    // Monday = 0, Sunday = 6
    let startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    const daysInPrev = new Date(this.viewYear, this.viewMonth, 0).getDate();

    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const selStr = this.selectedDate || "";

    let html = "";

    // Previous month days
    for (let i = startOffset - 1; i >= 0; i--) {
      const day = daysInPrev - i;
      const m = this.viewMonth === 0 ? 12 : this.viewMonth;
      const y = this.viewMonth === 0 ? this.viewYear - 1 : this.viewYear;
      const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      html += `<button type="button" class="dp-day other-month" data-date="${dateStr}">${day}</button>`;
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${this.viewYear}-${String(this.viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const classes = ["dp-day"];
      if (dateStr === todayStr) classes.push("today");
      if (dateStr === selStr) classes.push("selected");
      html += `<button type="button" class="${classes.join(" ")}" data-date="${dateStr}">${day}</button>`;
    }

    // Next month days to fill grid
    const totalCells = startOffset + daysInMonth;
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remaining; day++) {
      const m = this.viewMonth + 2 > 12 ? 1 : this.viewMonth + 2;
      const y = this.viewMonth + 2 > 12 ? this.viewYear + 1 : this.viewYear;
      const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      html += `<button type="button" class="dp-day other-month" data-date="${dateStr}">${day}</button>`;
    }

    elDpDays.innerHTML = html;

    // Render month select if in that mode
    if (this.monthSelectMode) {
      this.renderMonthSelect();
    }
  },

  renderMonthSelect() {
    const months = t("dpMonths");
    elDpMonthSelect.innerHTML = months.map((name, i) => {
      const cls = i === this.viewMonth ? "dp-month-opt active" : "dp-month-opt";
      return `<button type="button" class="${cls}" data-month="${i}">${name.substring(0, 3)}</button>`;
    }).join("");
    // Add year row
    const currentYear = new Date().getFullYear();
    const yearStart = currentYear - 20;
    let yearHtml = "";
    for (let y = currentYear; y >= yearStart; y--) {
      const cls = y === this.viewYear ? "dp-month-opt active" : "dp-month-opt";
      yearHtml += `<button type="button" class="${cls}" data-year="${y}">${y}</button>`;
    }
    elDpMonthSelect.innerHTML += yearHtml;
  },

  selectDate(dateStr) {
    this.selectedDate = dateStr;
    elEintrittsdatum.value = dateStr;

    // Format for display: DD.MM.YYYY
    const [y, m, d] = dateStr.split("-");
    elDpDisplay.value = `${d}.${m}.${y}`;

    this.close();
    elEintrittsdatum.dispatchEvent(new Event("change"));
  },

  clearDate() {
    this.selectedDate = null;
    elEintrittsdatum.value = "";
    elDpDisplay.value = "";
    this.close();
    elEintrittsdatum.dispatchEvent(new Event("change"));
  },

  goToToday() {
    const today = new Date();
    this.viewMonth = today.getMonth();
    this.viewYear = today.getFullYear();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    this.selectDate(dateStr);
  },

  prevMonth() {
    if (this.viewMonth === 0) { this.viewMonth = 11; this.viewYear--; }
    else { this.viewMonth--; }
    this.render();
  },

  nextMonth() {
    if (this.viewMonth === 11) { this.viewMonth = 0; this.viewYear++; }
    else { this.viewMonth++; }
    this.render();
  },

  prevYear() {
    this.viewYear--;
    this.render();
  },

  nextYear() {
    this.viewYear++;
    this.render();
  },

  toggleMonthSelect() {
    this.monthSelectMode = !this.monthSelectMode;
    if (this.monthSelectMode) {
      elDpMonthSelect.classList.remove("hidden");
      elDpWeekdays.style.display = "none";
      elDpDays.style.display = "none";
      this.renderMonthSelect();
    } else {
      elDpMonthSelect.classList.add("hidden");
      elDpWeekdays.style.display = "";
      elDpDays.style.display = "";
    }
  }
};

// Open/close
elDpDisplay.addEventListener("click", () => datepicker.toggle());

// Day click
elDpDays.addEventListener("click", (e) => {
  const btn = e.target.closest(".dp-day");
  if (!btn) return;
  datepicker.selectDate(btn.dataset.date);
});

// Navigation
document.querySelector(".dp-prev-year").addEventListener("click", () => datepicker.prevYear());
document.querySelector(".dp-prev-month").addEventListener("click", () => datepicker.prevMonth());
document.querySelector(".dp-next-month").addEventListener("click", () => datepicker.nextMonth());
document.querySelector(".dp-next-year").addEventListener("click", () => datepicker.nextYear());

// Title click → month/year selector
elDpTitle.addEventListener("click", () => datepicker.toggleMonthSelect());

// Month/Year select click
elDpMonthSelect.addEventListener("click", (e) => {
  e.stopPropagation();
  const btn = e.target.closest("[data-month]");
  const ybtn = e.target.closest("[data-year]");
  if (btn) {
    datepicker.viewMonth = parseInt(btn.dataset.month, 10);
    // Switch back to calendar view after selecting month
    datepicker.monthSelectMode = false;
    elDpMonthSelect.classList.add("hidden");
    elDpWeekdays.style.display = "";
    elDpDays.style.display = "";
    datepicker.render();
  }
  if (ybtn) {
    datepicker.viewYear = parseInt(ybtn.dataset.year, 10);
    datepicker.render();
    datepicker.renderMonthSelect();
  }
});

// Footer buttons
elDpToday.addEventListener("click", () => datepicker.goToToday());
elDpClear.addEventListener("click", () => datepicker.clearDate());

// Close on outside click
document.addEventListener("click", (e) => {
  const wrapper = elDpDisplay.closest(".datepicker-wrapper");
  if (!wrapper.contains(e.target)) {
    datepicker.close();
  }
});

// Hidden input change → recalculate
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
// Event: Steuerklasse / Kirchensteuer changed → recalculate
// ---------------------------------------------------------------------------

elSteuerklasse.addEventListener("change", () => {
  recalcIfReady();
});

elKirchensteuer.addEventListener("change", () => {
  recalcIfReady();
});

elKinderfreibetrag.addEventListener("change", () => {
  recalcIfReady();
});

elKVZusatz.addEventListener("input", () => {
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: Netto-Schätzung Toggle
// ---------------------------------------------------------------------------

elNettoToggle.addEventListener("click", () => {
  const expanded = elNettoToggle.getAttribute("aria-expanded") === "true";
  elNettoToggle.setAttribute("aria-expanded", !expanded);
  elNettoInputs.classList.toggle("hidden");

  if (expanded) {
    // Collapsed: reset all netto inputs and hide result
    elSteuerklasse.value = "";
    elKirchensteuer.checked = false;
    elKinderfreibetrag.value = "0";
    elKVZusatz.value = "2.5";
    elNettoResult.classList.add("hidden");
    elNettoToggle.querySelector("[data-i18n]").textContent = t("nettoToggle");
  } else {
    elNettoToggle.querySelector("[data-i18n]").textContent = t("nettoToggleHide");
    recalcIfReady();
  }
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

    elResult.classList.remove("hidden");
    updateCompare(monthly + utMonatlich, total);
    updateNettoEstimate(monthly + utMonatlich, total);
  } else {
    const total = grundgehalt + utJaehrlich + sonderzahlung;
    elAnnual.textContent = currencyFmt.format(total);
    elBreakdown.classList.add("hidden");
    elChart.classList.add("hidden");

    elResult.classList.remove("hidden");
    updateCompare(monthly + utMonatlich, total);
    updateNettoEstimate(monthly + utMonatlich, total);
  }
}

// ---------------------------------------------------------------------------
// Netto-Schätzung
// Kombiniert pauschale Lohnsteuer je Steuerklasse mit SV-Beiträgen.
// Sozialversicherung (AN-Anteil 2025):
//   Rente 9,3% + Arbeitslosen 1,3% + KV 7,3%+Zusatz/2 + Pflege (variabel)
// Pflegeversicherung: 1,7% Basis, kinderlose ab 23: +0,6%, ab 2. Kind: -0,25%
// ---------------------------------------------------------------------------

// Pauschale Lohnsteuer-Sätze (nur Steuer, ohne SV)
const STEUER_SAETZE = {
  "1": 0.145,   // ledig
  "2": 0.115,   // alleinerziehend
  "3": 0.060,   // verheiratet, Alleinverdiener
  "4": 0.145,   // verheiratet, Doppelverdiener
  "5": 0.240,   // verheiratet, Geringverdiener
  "6": 0.280    // Zweitjob
};

const KIRCHENSTEUER_ZUSCHLAG = 0.015; // ~1.5% zusätzlich
const KINDER_STEUER_ABZUG = 0.01;    // ~1% Steuervorteil pro Kinderfreibetrag

// SV-Konstanten (AN-Anteil 2025)
const SV_RENTE = 0.093;
const SV_ARBEITSLOSEN = 0.013;
const SV_KV_BASIS = 0.073;  // AN-Anteil Basis-KV
const SV_PFLEGE_BASIS = 0.017;
const SV_PFLEGE_KINDERLOS_ZUSCHLAG = 0.006;
const SV_PFLEGE_KIND_ABZUG = 0.0025; // pro Kind ab dem 2.

function updateNettoEstimate(bruttoMonatlich, bruttoJaehrlich) {
  const sk = elSteuerklasse.value;
  if (!sk || !STEUER_SAETZE[sk]) {
    elNettoResult.classList.add("hidden");
    return;
  }

  const kinder = parseFloat(elKinderfreibetrag.value) || 0;
  const kvZusatz = (parseFloat(elKVZusatz.value) || 0) / 100;

  // --- Lohnsteuer ---
  let steuer = STEUER_SAETZE[sk];
  // Kinder reduzieren Steuerlast
  steuer = Math.max(0, steuer - kinder * KINDER_STEUER_ABZUG);
  if (elKirchensteuer.checked) {
    steuer += KIRCHENSTEUER_ZUSCHLAG;
  }

  // --- Sozialversicherung (AN-Anteil) ---
  const kvAnteil = SV_KV_BASIS + kvZusatz / 2;

  // Pflegeversicherung
  let pflege = SV_PFLEGE_BASIS;
  if (kinder === 0) {
    pflege += SV_PFLEGE_KINDERLOS_ZUSCHLAG; // Kinderlosenzuschlag
  } else if (kinder >= 2) {
    // Ab 2. Kind Abzug (max bis 5 Kinder = 4 Abzüge)
    const abzugKinder = Math.min(kinder - 1, 4);
    pflege = Math.max(0, pflege - abzugKinder * SV_PFLEGE_KIND_ABZUG);
  }

  const sv = SV_RENTE + SV_ARBEITSLOSEN + kvAnteil + pflege;

  // --- Gesamt-Abzug ---
  const abzug = steuer + sv;

  const nettoMonatlich = bruttoMonatlich * (1 - abzug);
  const nettoJaehrlich = bruttoJaehrlich * (1 - abzug);

  elNettoMonthly.textContent = currencyFmt.format(nettoMonatlich);
  elNettoAnnual.textContent = currencyFmt.format(nettoJaehrlich);
  elNettoResult.classList.remove("hidden");
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
  elCompareSave.classList.add("hidden");
  elCompare.classList.add("hidden");
}

// ---------------------------------------------------------------------------
// Compare feature
// ---------------------------------------------------------------------------

function getCurrentLabel() {
  const eg = elEG.value;
  const stufe = elStufe.value;
  const parts = [eg];
  if (stufe && stufe !== "Grundentgelt") parts.push(tStep(stufe));
  return parts.join(", ");
}

function getCurrentDetails() {
  const wochenstunden = parseInt(elArbeitszeit.value, 10) || 35;
  const utPct = parseFloat(elUtZulage.value) || 0;
  const sonderzahlung = parseFloat(elSonderzahlung.value) || 0;
  const details = [wochenstunden + "\u00a0h"];
  if (utPct > 0) details.push("\u00dcT " + utPct.toFixed(1).replace(".", ",") + "\u00a0%");
  if (sonderzahlung > 0) details.push("SZ " + compactFmt.format(sonderzahlung));
  return details.join(" \u00b7 ");
}

function formatDiff(value) {
  const prefix = value > 0 ? "+" : "";
  return prefix + currencyFmt.format(value);
}

function updateCompare(currentMonthly, currentAnnual) {
  // Always show the save button when result is visible
  elCompareSave.classList.remove("hidden");

  if (!savedComparison) {
    elCompare.classList.add("hidden");
    return;
  }

  elCompare.classList.remove("hidden");

  // Populate table
  elCompareLabelSaved.innerHTML = savedComparison.label + ', ' + savedComparison.region
    + '<span class="compare-details">' + savedComparison.details + '</span>';
  elCompareMonthlySaved.textContent = currencyFmt.format(savedComparison.monthly);
  elCompareAnnualSaved.textContent = currencyFmt.format(savedComparison.annual);

  const currentLabel = getCurrentLabel();
  const currentDetails = getCurrentDetails();
  elCompareLabelCurrent.innerHTML = t("compareCurrent") + ' (' + currentLabel + ')'
    + '<span class="compare-details">' + currentDetails + '</span>';
  elCompareMonthlyCurrent.textContent = currencyFmt.format(currentMonthly);
  elCompareAnnualCurrent.textContent = currencyFmt.format(currentAnnual);

  // Diff
  const monthlyDiff = currentMonthly - savedComparison.monthly;
  const annualDiff = currentAnnual - savedComparison.annual;

  elCompareMonthlyDiff.textContent = formatDiff(monthlyDiff);
  elCompareAnnualDiff.textContent = formatDiff(annualDiff);

  // Color: black for zero, green for positive, red for negative
  // Use small threshold to account for floating-point rounding from currency parsing
  const isZeroMonthly = Math.abs(monthlyDiff) < 0.005;
  const isZeroAnnual = Math.abs(annualDiff) < 0.005;
  elCompareMonthlyDiff.className = isZeroMonthly ? "compare-neutral" : monthlyDiff > 0 ? "compare-positive" : "compare-negative";
  elCompareAnnualDiff.className = isZeroAnnual ? "compare-neutral" : annualDiff > 0 ? "compare-positive" : "compare-negative";

  elCompareTable.classList.remove("hidden");
}

elCompareSave.addEventListener("click", () => {
  // Read current values from displayed result
  const monthlyText = elMonthly.textContent;
  const annualText = elAnnual.textContent;
  // Parse currency string back to number
  const parseDE = str => parseFloat(str.replace(/[^\d,\-]/g, "").replace(",", "."));

  const region = elBundesland.value;
  const shortRegion = tRegion(region).length > 20
    ? tRegion(region).substring(0, 18) + "\u2026"
    : tRegion(region);

  savedComparison = {
    label: getCurrentLabel(),
    region: shortRegion,
    details: getCurrentDetails(),
    monthly: parseDE(monthlyText),
    annual: parseDE(annualText)
  };

  // Update button text to indicate saved
  elCompareSave.textContent = t("compareSave");

  // Trigger re-render of compare section
  recalcIfReady();
});

elCompareReset.addEventListener("click", () => {
  savedComparison = null;
  elCompare.classList.add("hidden");
  elCompareSave.textContent = t("compareSave");
});

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

init();
