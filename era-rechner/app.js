"use strict";

// ---------------------------------------------------------------------------
// Theme toggle (Dark Mode)
// ---------------------------------------------------------------------------

(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  function isDark() {
    const t = root.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function applyTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.getElementById('theme-icon-moon').style.display = dark ? 'none' : '';
    document.getElementById('theme-icon-sun').style.display = dark ? '' : 'none';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(isDark());
    document.getElementById('theme-toggle').addEventListener('click', function () {
      applyTheme(!isDark());
    });
  });
})();

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
const elUrlaubsgeldPct   = document.getElementById("urlaubsgeld-pct");
const elWeihnachtsgeld   = document.getElementById("weihnachtsgeld");
const elWeihnachtsgeldPct = document.getElementById("weihnachtsgeld-pct");
const elTZugA            = document.getElementById("tzug-a");
const elTGeld            = document.getElementById("tgeld");
const elTZugB            = document.getElementById("tzug-b");
const elTZugBPct         = document.getElementById("tzug-b-pct");
const elSonderzahlung    = document.getElementById("sonderzahlung");
const elSonderzahlungRow = document.getElementById("sonderzahlung-row");
const elSonderzahlungAnnual = document.getElementById("sonderzahlung-annual");
const elWeihnachtsgeldManuell = document.getElementById("weihnachtsgeld-manuell");
const elFreiwilligeZulage     = document.getElementById("freiwillige-zulage");
const elFreiwilligeZulageRow  = document.getElementById("freiwillige-zulage-row");
const elFreiwilligeZulageAnnual = document.getElementById("freiwillige-zulage-annual");
const elAvgMonthly        = document.getElementById("avg-monthly");
const elAvgMonthlyRow     = document.getElementById("avg-monthly-row");
const elAvgMonthlyNetto   = document.getElementById("avg-monthly-netto");
const elAvgMonthlyNettoRow = document.getElementById("avg-monthly-netto-row");
const elHourly           = document.getElementById("hourly");
const elYearNotice       = document.getElementById("year-notice");
const elChart            = document.getElementById("chart");
const elChartArea        = document.getElementById("chart-area");
const elChartLegend      = document.getElementById("chart-legend");
const elChartTitle       = document.getElementById("chart-title");
const elChartViewToggle  = document.getElementById("chart-view-toggle");
const elChartViewBrutto  = document.getElementById("chart-view-brutto");
const elChartViewNetto   = document.getElementById("chart-view-netto");
const elSteuerklasse     = document.getElementById("steuerklasse");
const elKirchensteuer    = document.getElementById("kirchensteuer");
const elNettoResult      = document.getElementById("netto-result");
const elNettoMonthly     = document.getElementById("netto-monthly");
const elNettoAnnual      = document.getElementById("netto-annual");
const elNettoToggle      = document.getElementById("netto-toggle");
const elNettoInputs      = document.getElementById("netto-inputs");
const elOptionalToggle   = document.getElementById("optional-toggle");
const elOptionalInputs   = document.getElementById("optional-inputs");
const elKinderfreibetrag = document.getElementById("kinderfreibetrag");
const elKVZusatz         = document.getElementById("kv-zusatzbeitrag");
const elKvModeGkv        = document.getElementById("kv-mode-gkv");
const elKvModePkv        = document.getElementById("kv-mode-pkv");
const elKvGkvFields      = document.getElementById("kv-gkv-fields");
const elKvPkvFields      = document.getElementById("kv-pkv-fields");
const elPkvBeitrag       = document.getElementById("pkv-beitrag");

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
const elCompareNettoCols    = document.querySelectorAll(".compare-netto-col");
const elCompareNettoMonthlySaved   = document.getElementById("compare-netto-monthly-saved");
const elCompareNettoAnnualSaved    = document.getElementById("compare-netto-annual-saved");
const elCompareNettoMonthlyCurrent = document.getElementById("compare-netto-monthly-current");
const elCompareNettoAnnualCurrent  = document.getElementById("compare-netto-annual-current");
const elCompareNettoMonthlyDiff    = document.getElementById("compare-netto-monthly-diff");
const elCompareNettoAnnualDiff     = document.getElementById("compare-netto-annual-diff");

let savedComparison = (() => {
  try { const s = sessionStorage.getItem("era_savedComparison"); return s ? JSON.parse(s) : null; } catch { return null; }
})();
let lastDisplayedResult = null; // Rohwerte des letzten Berechnungsergebnisses (für Vergleich-Speichern)
let chartBruttoParams = null;   // stored brutto chart parameters for re-render
let currentNettoFaktor = null;  // (1 - abzug) when netto is available
let chartViewMode = "brutto";   // "brutto" or "netto"

// ---------------------------------------------------------------------------
// Arbeitszeit-Konstanten
// ---------------------------------------------------------------------------

const TARIFLICHE_STUNDEN = 35;
const MIN_ARBEITSZEIT = 15;
const MAX_ARBEITSZEIT = 48;
const WOCHEN_PRO_MONAT = 52 / 12;

const currencyFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
});

const compactFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});
const compactFmtNarrow = (v) => compactFmt.format(v).replace(/\s€/, "€");

function chartLabelCompact(value) {
  if (window.innerWidth < 400) {
    const locale = currentLang === 'en' ? 'en-GB' : 'de-DE';
    return (value / 1000).toLocaleString(locale, { maximumFractionDigits: 1 }) + 'k';
  }
  return compactFmtNarrow(value);
}

const fmtDE = (num, decimals = 1) => num.toFixed(decimals).replace(".", ",");

// ---------------------------------------------------------------------------
// Chart configuration
// ---------------------------------------------------------------------------

const CHART_COLORS = {
  monatsentgelt:      "#003d6b",
  utZulage:           "#4a90c4",
  freiwilligeZulage:  "#16a085",
  urlaubsgeld:        "#2ecc71",
  tZugA:              "#e67e22",
  tGeld:              "#9b59b6",
  tZugB:              "#f1c40f",
  weihnachtsgeld:     "#e2001a"
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
  document.title = t("pageTitle").replace("{year}", year);

  // Hinweis für vorläufige Werte ein-/ausblenden
  elYearNotice.classList.add("hidden");

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

onTranslationsApplied(function () {
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
});

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
  const prevStufe = elStufe.value;
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

  // Restore previous step if it exists in the new EG
  if (prevStufe && stepNames.includes(prevStufe)) {
    elStufe.value = prevStufe;
    showResult(steps[prevStufe]);
    return;
  }

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
  elArbeitszeitOutput.value = elArbeitszeit.value;
  recalcIfReady();
});

// Keine Nachkommastellen bei Arbeitszeit: Punkt/Komma blockieren
elArbeitszeitOutput.addEventListener("keydown", (e) => {
  if (e.key === "." || e.key === ",") e.preventDefault();
});

elArbeitszeitOutput.addEventListener("input", () => {
  // Dezimalstellen entfernen falls per Paste eingefügt
  const raw = elArbeitszeitOutput.value.replace(/[.,]\d*/g, "");
  if (raw !== elArbeitszeitOutput.value) elArbeitszeitOutput.value = raw;
  let v = parseInt(elArbeitszeitOutput.value, 10);
  if (isNaN(v)) return;
  v = Math.max(MIN_ARBEITSZEIT, Math.min(MAX_ARBEITSZEIT, v));
  elArbeitszeit.value = v;
  recalcIfReady();
});

elArbeitszeitOutput.addEventListener("blur", () => {
  let v = parseInt(elArbeitszeitOutput.value, 10);
  if (isNaN(v)) v = TARIFLICHE_STUNDEN;
  v = Math.max(MIN_ARBEITSZEIT, Math.min(MAX_ARBEITSZEIT, v));
  elArbeitszeitOutput.value = v;
  elArbeitszeit.value = v;
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
    elDpWeekdays.classList.remove("hidden");
    elDpDays.classList.remove("hidden");
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
      elDpWeekdays.classList.add("hidden");
      elDpDays.classList.add("hidden");
      this.renderMonthSelect();
    } else {
      elDpMonthSelect.classList.add("hidden");
      elDpWeekdays.classList.remove("hidden");
      elDpDays.classList.remove("hidden");
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
document.querySelector(".dp-prev-year")?.addEventListener("click", () => datepicker.prevYear());
document.querySelector(".dp-prev-month")?.addEventListener("click", () => datepicker.prevMonth());
document.querySelector(".dp-next-month")?.addEventListener("click", () => datepicker.nextMonth());
document.querySelector(".dp-next-year")?.addEventListener("click", () => datepicker.nextYear());

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
    elDpWeekdays.classList.remove("hidden");
    elDpDays.classList.remove("hidden");
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
const dpOutsideClickHandler = (e) => {
  const wrapper = elDpDisplay.closest(".datepicker-wrapper");
  if (!wrapper.contains(e.target)) {
    datepicker.close();
  }
};
document.addEventListener("click", dpOutsideClickHandler);

// Close on Escape key
const dpEscapeHandler = (e) => {
  if (e.key === "Escape") datepicker.close();
};
document.addEventListener("keydown", dpEscapeHandler);

// Hidden input change → recalculate
elEintrittsdatum.addEventListener("change", () => {
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: ÜT-Zulage slider changed → update output + recalculate
// ---------------------------------------------------------------------------

elUtZulage.addEventListener("input", () => {
  // Slider arbeitet mit ganzen Zahlen → Zahlenfeld übernimmt exakt diesen Wert
  elUtZulageOutput.value = parseFloat(elUtZulage.value).toFixed(2);
  recalcIfReady();
});

// Max. zwei Nachkommastellen bei Leistungszulage (Slider bleibt auf ganze Zahlen)
elUtZulageOutput.addEventListener("input", () => {
  let raw = elUtZulageOutput.value;
  // Auf zwei Nachkommastellen begrenzen (z.B. "12.345" → "12.34")
  const match = raw.match(/^(\d*[.,]?\d{0,2})/);
  if (match && match[1] !== raw) {
    elUtZulageOutput.value = match[1];
    raw = match[1];
  }
  let v = parseFloat(raw.replace(",", "."));
  if (isNaN(v)) return;
  v = Math.max(0, Math.min(30, v));
  // Slider rastet auf nächste 0,1-Stelle
  elUtZulage.value = Math.round(v * 10) / 10;
  recalcIfReady();
});

elUtZulageOutput.addEventListener("blur", () => {
  let v = parseFloat(elUtZulageOutput.value);
  if (isNaN(v)) v = 0;
  v = Math.max(0, Math.min(30, v));
  v = Math.round(v * 100) / 100;
  elUtZulageOutput.value = v.toFixed(2);
  elUtZulage.value = Math.round(v * 10) / 10;
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

elWeihnachtsgeldManuell.addEventListener("change", () => {
  recalcIfReady();
});

elFreiwilligeZulage.addEventListener("input", () => {
  recalcIfReady();
});

elFreiwilligeZulage.addEventListener("blur", () => {
  let v = parseFloat(elFreiwilligeZulage.value);
  if (isNaN(v) || v < 0) v = 0;
  elFreiwilligeZulage.value = v > 0 ? v : "";
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

// ---------------------------------------------------------------------------
// KV-Modus: GKV / PKV
// ---------------------------------------------------------------------------

function switchKvMode(mode) {
  const isPkv = mode === "pkv";
  elKvModeGkv.classList.toggle("active", !isPkv);
  elKvModePkv.classList.toggle("active", isPkv);
  elKvGkvFields.classList.toggle("hidden", isPkv);
  elKvPkvFields.classList.toggle("hidden", !isPkv);
  recalcIfReady();
}

elKvModeGkv.addEventListener("click", () => {
  if (!elKvModeGkv.classList.contains("active")) switchKvMode("gkv");
});

elKvModePkv.addEventListener("click", () => {
  if (!elKvModePkv.classList.contains("active")) switchKvMode("pkv");
});

elPkvBeitrag.addEventListener("input", () => {
  recalcIfReady();
});

elPkvBeitrag.addEventListener("blur", () => {
  let v = parseFloat(elPkvBeitrag.value);
  if (isNaN(v) || v < 0) v = 0;
  elPkvBeitrag.value = v > 0 ? v : "";
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

elOptionalToggle.addEventListener("click", () => {
  const expanded = elOptionalToggle.getAttribute("aria-expanded") === "true";
  elOptionalToggle.setAttribute("aria-expanded", !expanded);
  elOptionalInputs.classList.toggle("hidden");

  const i18nSpan = elOptionalToggle.querySelector("[data-i18n]");
  if (expanded) {
    i18nSpan.setAttribute("data-i18n", "optionalToggle");
    i18nSpan.textContent = t("optionalToggle");
  } else {
    i18nSpan.setAttribute("data-i18n", "optionalToggleHide");
    i18nSpan.textContent = t("optionalToggleHide");
  }
});

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
    elPkvBeitrag.value = "";
    switchKvMode("gkv");
    elNettoResult.classList.add("hidden");
    currentNettoFaktor = null;
    updateChartViewToggle();
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

function berechneMonate(eintrittsdatum, stichtag) {
  // Weihnachtsgeld-Stichtag ist der 31.12. des Tarifjahres (Betriebszugehörigkeit bis Jahresende).
  const ref = stichtag ?? new Date();
  const eintritt = new Date(eintrittsdatum);
  if (isNaN(eintritt.getTime())) return null;
  let monate = (ref.getFullYear() - eintritt.getFullYear()) * 12
             + (ref.getMonth() - eintritt.getMonth());
  if (ref.getDate() < eintritt.getDate()) monate--;
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

function calcSalary(tabellenMonthly) {
  const region = elBundesland.value;
  const bonus = bonusData[region];

  // Arbeitszeitfaktor: Tabellenwerte basieren auf TARIFLICHE_STUNDEN h/Woche
  const wochenstunden = parseInt(elArbeitszeit.value, 10) || TARIFLICHE_STUNDEN;
  const azFaktor = wochenstunden / TARIFLICHE_STUNDEN;

  // Angepasstes Monatsentgelt
  const monthly = tabellenMonthly * azFaktor;

  // ÜT-Zulage (übertarifliche Zulage)
  const utPct = parseFloat(elUtZulageOutput.value) || 0;
  const utMonatlich = monthly * (utPct / 100);
  const utJaehrlich = utMonatlich * 12;

  // Freiwillige monatliche Zulage (absoluter Betrag)
  const freiwilligeZulageMonatlich = Math.max(0, parseFloat(elFreiwilligeZulage.value) || 0);
  const freiwilligeZulageJaehrlich = freiwilligeZulageMonatlich * 12;

  const grundgehalt = monthly * 12;

  // Brutto-Stundenlohn: Monatsentgelt / (Wochenstunden × WOCHEN_PRO_MONAT)
  const monatsStunden = wochenstunden * WOCHEN_PRO_MONAT;
  const stundenlohn = (monthly + utMonatlich + freiwilligeZulageMonatlich) / monatsStunden;

  // Optionale Sonderzahlung
  const sonderzahlung = parseFloat(elSonderzahlung.value) || 0;

  const result = { monthly, utPct, utMonatlich, utJaehrlich, freiwilligeZulageMonatlich, freiwilligeZulageJaehrlich, grundgehalt, wochenstunden, stundenlohn, sonderzahlung };

  if (!bonus) {
    result.total = grundgehalt + utJaehrlich + freiwilligeZulageJaehrlich + sonderzahlung;
    return result;
  }

  const datumStr = elEintrittsdatum.value;
  // Weihnachtsgeld-Stichtag: 31. Dezember des gewählten Tarifjahres
  const wgStichtag = new Date(parseInt(elJahr.value, 10), 11, 31);
  const monate = datumStr ? berechneMonate(datumStr, wgStichtag) : null;
  const hatAnspruch = monate === null || monate >= bonus.minMonate;

  // Weihnachtsgeld-Satz bestimmen
  const wgSatz = monate === null
    ? bonus.weihnachtsgeldStaffel[0].satz
    : getWeihnachtsgeldSatz(monate, bonus.weihnachtsgeldStaffel);

  // Sonderzahlungen basieren auf Monatsentgelt brutto (inkl. Leistungszulage und freiwilliger Zulage)
  const monatsentgeltBrutto = monthly + utMonatlich + freiwilligeZulageMonatlich;
  const urlaubsgeld     = hatAnspruch ? monatsentgeltBrutto * bonus.urlaubsgeld : 0;
  const wgDynamisch     = hatAnspruch ? monatsentgeltBrutto * wgSatz : 0;
  const wgManuellVal    = elWeihnachtsgeldManuell.value.trim();
  const wgIstManuell    = wgManuellVal !== "" && !isNaN(parseFloat(wgManuellVal));
  const wgSatzEffektiv  = wgIstManuell ? Math.min(55, Math.max(0, parseFloat(wgManuellVal))) / 100 : wgSatz;
  const weihnachtsgeld  = wgIstManuell ? monatsentgeltBrutto * wgSatzEffektiv : wgDynamisch;
  const tZugAFreiTage   = elTZugAFrei.checked;
  const tZugA           = hatAnspruch && !tZugAFreiTage ? monatsentgeltBrutto * bonus.tZugA : 0;
  const tGeld           = hatAnspruch && bonus.tGeld ? monatsentgeltBrutto * bonus.tGeld : 0;
  const tZugB           = hatAnspruch ? bonus.eckentgelt * azFaktor * bonus.tZugB : 0;
  const total           = grundgehalt + utJaehrlich + freiwilligeZulageJaehrlich + urlaubsgeld + weihnachtsgeld + tZugA + tGeld + tZugB + sonderzahlung;

  return { ...result, bonus, hatAnspruch, wgSatz, wgDynamisch, wgIstManuell, urlaubsgeld, weihnachtsgeld, tZugA, tGeld, tZugB, total };
}

function displayResult(r) {
  elMonthly.textContent = currencyFmt.format(r.monthly + r.utMonatlich + r.freiwilligeZulageMonatlich);
  elHourly.textContent = currencyFmt.format(r.stundenlohn);
  elAnnual.textContent = currencyFmt.format(r.total);

  // Ø Monatsdurchschnitt brutto
  if (r.bonus) {
    elAvgMonthly.textContent = currencyFmt.format(r.total / 12);
    elAvgMonthlyRow.classList.remove("hidden");
  } else {
    elAvgMonthlyRow.classList.add("hidden");
  }

  if (r.bonus) {
    elGrundgehalt.textContent    = currencyFmt.format(r.grundgehalt);
    elUrlaubsgeld.textContent    = currencyFmt.format(r.urlaubsgeld);
    elUrlaubsgeldPct.textContent = tReplace("holidayPayPct", { pct: fmtDE(r.bonus.urlaubsgeld * 100, 0) });
    elWeihnachtsgeld.textContent = currencyFmt.format(r.weihnachtsgeld);
    elTZugA.textContent          = currencyFmt.format(r.tZugA);
    elTGeld.textContent          = currencyFmt.format(r.tGeld);
    elTZugB.textContent          = currencyFmt.format(r.tZugB);

    // Sonderzahlung Zeile ein-/ausblenden
    if (r.sonderzahlung > 0) {
      elSonderzahlungAnnual.textContent = currencyFmt.format(r.sonderzahlung);
      elSonderzahlungRow.classList.remove("hidden");
    } else {
      elSonderzahlungRow.classList.add("hidden");
    }

    // Freiwillige Zulage Zeile ein-/ausblenden
    if (r.freiwilligeZulageMonatlich > 0) {
      elFreiwilligeZulageAnnual.textContent = currencyFmt.format(r.freiwilligeZulageJaehrlich);
      elFreiwilligeZulageRow.classList.remove("hidden");
    } else {
      elFreiwilligeZulageRow.classList.add("hidden");
    }

    // ÜT-Zulage Zeile ein-/ausblenden
    if (r.utPct > 0) {
      elUtZulageAnnual.textContent = currencyFmt.format(r.utJaehrlich);
      elUtZulagePct.textContent = tReplace("utZulagePct", {
        pct: fmtDE(r.utPct, 2)
      });
      elUtZulageRow.classList.remove("hidden");
    } else {
      elUtZulageRow.classList.add("hidden");
    }

    // Dynamische Prozentanzeige im Label + Placeholder für manuelles Feld
    const wgPctAnzeige = r.wgIstManuell
      ? parseFloat(elWeihnachtsgeldManuell.value)
      : (r.hatAnspruch ? r.wgSatz * 100 : null);
    const pctText = wgPctAnzeige !== null
      ? tReplace("xmasPayPct", { pct: fmtDE(wgPctAnzeige, 0) })
      : t("xmasPayNone");
    elWeihnachtsgeldPct.textContent = pctText;

    // T-ZUG B Prozentsatz dynamisch anzeigen
    const tZugBPctVal = fmtDE(r.bonus.tZugB * 100);
    elTZugBPct.textContent = tReplace("tZugBPct", { pct: tZugBPctVal });

    elBreakdown.classList.remove("hidden");

    // Chart rendern
    chartBruttoParams = { monthly: r.monthly, utMonatlich: r.utMonatlich, freiwilligeZulageMonatlich: r.freiwilligeZulageMonatlich, urlaubsgeld: r.urlaubsgeld, weihnachtsgeld: r.weihnachtsgeld, tZugA: r.tZugA, tGeld: r.tGeld, tZugB: r.tZugB };
    renderChart(r.monthly, r.utMonatlich, r.freiwilligeZulageMonatlich, r.urlaubsgeld, r.weihnachtsgeld, r.tZugA, r.tGeld, r.tZugB);
    updateChartViewToggle();
  } else {
    elBreakdown.classList.add("hidden");
    elChart.classList.add("hidden");
  }

  elResult.classList.remove("hidden");
  const monatsBrutto = r.monthly + r.utMonatlich + r.freiwilligeZulageMonatlich;
  const netto = updateNettoEstimate(monatsBrutto, r.total);
  updateChartViewToggle();

  // Rohwerte für Vergleich-Speichern zwischenspeichern (kein DOM-Parsing nötig)
  lastDisplayedResult = {
    monthly: monatsBrutto,
    annual:  r.total,
    nettoMonthly: netto ? netto.monthly : null,
    nettoAnnual:  netto ? netto.annual  : null
  };

  // Ø Monatsdurchschnitt netto
  if (netto && r.bonus) {
    elAvgMonthlyNetto.textContent = currencyFmt.format(netto.annual / 12);
    elAvgMonthlyNettoRow.classList.remove("hidden");
  } else {
    elAvgMonthlyNettoRow.classList.add("hidden");
  }

  updateCompare(monatsBrutto, r.total, netto);
}

function showResult(tabellenMonthly) {
  const r = calcSalary(tabellenMonthly);
  displayResult(r);
}

// ---------------------------------------------------------------------------
// Chart: Bruttoverdienst nach Monaten
// Auszahlungsmonate: Feb → T-ZUG B, Jun → Urlaubsgeld,
//                    Jul → T-ZUG A + T-Geld, Nov → Weihnachtsgeld
// ---------------------------------------------------------------------------

function renderChart(monthly, utMonatlich, freiwilligeZulageMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tGeld, tZugB) {
  const monthNames = t("chartMonths");
  const chartLabels = t("chartLabels");
  const baseSegCount = 1 + (utMonatlich > 0 ? 1 : 0) + (freiwilligeZulageMonatlich > 0 ? 1 : 0);

  const data = monthNames.map((label, i) => {
    const segs = [{ key: "monatsentgelt", value: monthly }];
    if (utMonatlich > 0) segs.push({ key: "utZulage", value: utMonatlich });
    if (freiwilligeZulageMonatlich > 0) segs.push({ key: "freiwilligeZulage", value: freiwilligeZulageMonatlich });
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
      segsHtml += `<div class="chart-seg" style="height:${segPct.toFixed(1)}%;background:${CHART_COLORS[seg.key]}" data-tip="${chartLabels[seg.key]}: ${currencyFmt.format(seg.value)}"></div>`;
    }

    const hasBonus = month.segs.length > baseSegCount;
    const totalHtml = hasBonus
      ? `<span class="chart-total">${chartLabelCompact(month.total)}</span>`
      : `<span class="chart-total" style="visibility:hidden">0 \u20ac</span>`;

    barsHtml += `<div class="chart-col">${totalHtml}<div class="chart-bar-area"><div class="chart-stack" style="height:${pct.toFixed(1)}%">${segsHtml}</div></div><span class="chart-lbl">${month.label}</span></div>`;
  }

  elChartArea.innerHTML = barsHtml;

  // Legende – nur tatsächlich vorhandene Segmente anzeigen
  const allKeys = new Set();
  for (const month of data) {
    for (const seg of month.segs) allKeys.add(seg.key);
  }
  const legendOrder = ["monatsentgelt", "utZulage", "freiwilligeZulage", "tZugB", "urlaubsgeld", "tZugA", "tGeld", "weihnachtsgeld"];
  elChartLegend.innerHTML = legendOrder
    .filter(k => allKeys.has(k))
    .map(k => `<div class="chart-legend-item"><span class="chart-legend-color" style="background:${CHART_COLORS[k]}"></span>${chartLabels[k]}</div>`)
    .join("");

  elChart.classList.remove("hidden");
}

// ---------------------------------------------------------------------------
// Chart Brutto/Netto-Umschalter
// ---------------------------------------------------------------------------

function updateChartViewToggle() {
  const nettoAvailable = currentNettoFaktor != null;
  elChartViewToggle.classList.toggle("hidden", !nettoAvailable);

  // If netto no longer available but was showing netto, switch back
  if (!nettoAvailable && chartViewMode === "netto") {
    switchChartView("brutto");
  }

  // If netto is available and already in netto mode, re-render with updated factor
  if (nettoAvailable && chartViewMode === "netto" && chartBruttoParams) {
    renderChartNetto();
  }
}

function renderChartNetto() {
  if (!chartBruttoParams || !currentNettoFaktor) return;
  const p = chartBruttoParams;
  const f = currentNettoFaktor;
  renderChart(
    p.monthly * f, p.utMonatlich * f, p.freiwilligeZulageMonatlich * f, p.urlaubsgeld * f,
    p.weihnachtsgeld * f, p.tZugA * f, p.tGeld * f, p.tZugB * f
  );
  elChartTitle.setAttribute("data-i18n", "chartTitleNetto");
  elChartTitle.textContent = t("chartTitleNetto");
}

function switchChartView(mode) {
  chartViewMode = mode;
  elChartViewBrutto.classList.toggle("active", mode === "brutto");
  elChartViewNetto.classList.toggle("active", mode === "netto");

  if (mode === "netto") {
    renderChartNetto();
  } else if (chartBruttoParams) {
    const p = chartBruttoParams;
    renderChart(p.monthly, p.utMonatlich, p.freiwilligeZulageMonatlich, p.urlaubsgeld, p.weihnachtsgeld, p.tZugA, p.tGeld, p.tZugB);
    elChartTitle.setAttribute("data-i18n", "chartTitle");
    elChartTitle.textContent = t("chartTitle");
  }
}

elChartViewBrutto.addEventListener("click", () => {
  if (chartViewMode !== "brutto") switchChartView("brutto");
});

elChartViewNetto.addEventListener("click", () => {
  if (chartViewMode !== "netto") switchChartView("netto");
});

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
  const utPct = parseFloat(elUtZulageOutput.value) || 0;
  const sonderzahlung = parseFloat(elSonderzahlung.value) || 0;
  const details = [wochenstunden + "\u00a0h"];
  if (utPct > 0) details.push("\u00dcT " + fmtDE(utPct) + "\u00a0%");
  if (sonderzahlung > 0) details.push("SZ " + compactFmt.format(sonderzahlung));
  return details.join(" \u00b7 ");
}

function formatDiff(value) {
  const prefix = value > 0 ? "+" : "";
  return prefix + currencyFmt.format(value);
}

function updateCompare(currentMonthly, currentAnnual, currentNetto) {
  // Always show the save button when result is visible
  elCompareSave.classList.remove("hidden");

  if (!savedComparison) {
    elCompare.classList.add("hidden");
    return;
  }

  elCompare.classList.remove("hidden");

  // Populate table
  elCompareLabelSaved.textContent = '';
  elCompareLabelSaved.appendChild(document.createTextNode(savedComparison.label + ', ' + savedComparison.region));
  const savedDetailsSpan = document.createElement('span');
  savedDetailsSpan.className = 'compare-details';
  savedDetailsSpan.textContent = savedComparison.details;
  elCompareLabelSaved.appendChild(savedDetailsSpan);
  elCompareMonthlySaved.textContent = currencyFmt.format(savedComparison.monthly);
  elCompareAnnualSaved.textContent = currencyFmt.format(savedComparison.annual);

  const currentLabel = getCurrentLabel();
  const currentDetails = getCurrentDetails();
  elCompareLabelCurrent.textContent = '';
  elCompareLabelCurrent.appendChild(document.createTextNode(t("compareCurrent") + ' (' + currentLabel + ')'));
  const currentDetailsSpan = document.createElement('span');
  currentDetailsSpan.className = 'compare-details';
  currentDetailsSpan.textContent = currentDetails;
  elCompareLabelCurrent.appendChild(currentDetailsSpan);
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

  // Netto columns: show only if both saved and current have netto data
  const showNetto = savedComparison.nettoMonthly != null && currentNetto;
  elCompareNettoCols.forEach(col => col.classList.toggle("hidden", !showNetto));

  if (showNetto) {
    elCompareNettoMonthlySaved.textContent = currencyFmt.format(savedComparison.nettoMonthly);
    elCompareNettoAnnualSaved.textContent = currencyFmt.format(savedComparison.nettoAnnual);
    elCompareNettoMonthlyCurrent.textContent = currencyFmt.format(currentNetto.monthly);
    elCompareNettoAnnualCurrent.textContent = currencyFmt.format(currentNetto.annual);

    const nettoMonthlyDiff = currentNetto.monthly - savedComparison.nettoMonthly;
    const nettoAnnualDiff = currentNetto.annual - savedComparison.nettoAnnual;
    elCompareNettoMonthlyDiff.textContent = formatDiff(nettoMonthlyDiff);
    elCompareNettoAnnualDiff.textContent = formatDiff(nettoAnnualDiff);

    const isZeroNettoMonthly = Math.abs(nettoMonthlyDiff) < 0.005;
    const isZeroNettoAnnual = Math.abs(nettoAnnualDiff) < 0.005;
    elCompareNettoMonthlyDiff.className = "compare-netto-col " + (isZeroNettoMonthly ? "compare-neutral" : nettoMonthlyDiff > 0 ? "compare-positive" : "compare-negative");
    elCompareNettoAnnualDiff.className = "compare-netto-col " + (isZeroNettoAnnual ? "compare-neutral" : nettoAnnualDiff > 0 ? "compare-positive" : "compare-negative");
  }

  elCompareTable.classList.remove("hidden");
}

elCompareSave.addEventListener("click", () => {
  if (!lastDisplayedResult) return;

  const region = elBundesland.value;
  const shortRegion = tRegion(region).length > 20
    ? tRegion(region).substring(0, 18) + "\u2026"
    : tRegion(region);

  savedComparison = {
    label: getCurrentLabel(),
    region: shortRegion,
    details: getCurrentDetails(),
    monthly: lastDisplayedResult.monthly,
    annual: lastDisplayedResult.annual,
    nettoMonthly: lastDisplayedResult.nettoMonthly,
    nettoAnnual: lastDisplayedResult.nettoAnnual
  };
  try { sessionStorage.setItem("era_savedComparison", JSON.stringify(savedComparison)); } catch { /* private mode */ }

  // Update button text to indicate saved
  elCompareSave.textContent = t("compareSave");

  // Trigger re-render of compare section
  recalcIfReady();
});

elCompareReset.addEventListener("click", () => {
  savedComparison = null;
  try { sessionStorage.removeItem("era_savedComparison"); } catch { /* private mode */ }
  elCompare.classList.add("hidden");
  elCompareSave.textContent = t("compareSave");
});

// ---------------------------------------------------------------------------
// Chart Tooltip (Desktop hover + Mobile tap)
// ---------------------------------------------------------------------------

function initChartTooltip() {
  const tip = document.createElement('div');
  tip.className = 'chart-tooltip';
  document.body.appendChild(tip);

  let hideTimer = null;

  function show(text, x, y) {
    clearTimeout(hideTimer);
    tip.textContent = text;
    tip.classList.add('visible');
    position(x, y);
  }

  function hide(delay = 0) {
    hideTimer = setTimeout(() => tip.classList.remove('visible'), delay);
  }

  function position(x, y) {
    const margin = 12;
    const w = tip.offsetWidth || 140;
    const h = tip.offsetHeight || 28;
    let left = x + margin;
    let top = y - h - margin;
    if (left + w > window.innerWidth - 4) left = x - w - margin;
    if (top < 4) top = y + margin;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  elChartArea.addEventListener('mouseover', e => {
    const seg = e.target.closest('.chart-seg');
    if (seg && seg.dataset.tip) show(seg.dataset.tip, e.clientX, e.clientY);
  });
  elChartArea.addEventListener('mousemove', e => {
    if (tip.classList.contains('visible')) position(e.clientX, e.clientY);
  });
  elChartArea.addEventListener('mouseout', e => {
    if (e.target.closest('.chart-seg')) hide();
  });

  elChartArea.addEventListener('touchstart', e => {
    const seg = e.target.closest('.chart-seg');
    if (!seg || !seg.dataset.tip) return;
    const touch = e.touches[0];
    show(seg.dataset.tip, touch.clientX, touch.clientY);
    hide(2500);
  }, { passive: true });
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

initChartTooltip();

// ResizeObserver: Chart neu rendern wenn Schwelle 400px überschritten wird
(function () {
  let wasCompact = window.innerWidth < 400;
  const ro = new ResizeObserver(() => {
    const isCompact = window.innerWidth < 400;
    if (isCompact !== wasCompact) {
      wasCompact = isCompact;
      if (typeof chartBruttoParams !== 'undefined' && chartBruttoParams) {
        switchChartView(chartViewMode);
      }
    }
  });
  ro.observe(elChartArea);
})();

init();
