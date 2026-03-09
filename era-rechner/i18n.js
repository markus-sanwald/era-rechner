"use strict";

const TRANSLATIONS = {
  de: {
    // Page
    pageTitle: "ERA Entgeltrechner \u2013 Metall- und Elektroindustrie",
    title: "ERA Entgeltrechner",
    subtitle: "Metall- und Elektroindustrie",
    subtitleWithYear: "Metall- und Elektroindustrie",
    ariaLabel: "Gehaltsrechner",

    // Form labels
    labelYear: "Tarifjahr",
    labelRegion: "Bundesland / Tarifgebiet",
    labelGrade: "Entgeltgruppe (EG)",
    labelStep: "Stufe",
    labelHours: "W\u00f6chentliche Arbeitszeit",
    labelStartDate: "Eintrittsdatum (optional)",
    labelBonus: "\u00dcbertarifliche Zulage",

    // Placeholders
    placeholder: "Bitte w\u00e4hlen\u2026",

    // Year option
    yearOption: "ab 01.04.${year}",

    // Result
    resultMonthly: "Monatsentgelt (brutto)",
    resultAnnual: "Bruttojahresgehalt (gesamt)",

    // Breakdown
    breakdownTitle: "Aufschl\u00fcsselung",
    breakdownBase: "12 \u00d7 Monatsentgelt",
    breakdownUtZulage: "12 \u00d7 \u00dcT-Zulage",
    breakdownHolidayPay: "Urlaubsgeld",
    breakdownHolidayPayDetail: "(50\u00a0% eines ME)",
    breakdownXmasPay: "Weihnachtsgeld",
    breakdownXmasPayDetail: "(55\u00a0% eines ME)",
    breakdownTZugA: "T-ZUG A",
    breakdownTZugADetail: "(27,5\u00a0% eines ME)",
    breakdownTGeld: "T-Geld",
    breakdownTGeldDetail: "(18,4\u00a0% eines ME)",
    breakdownTZugB: "T-ZUG B",
    breakdownTZugBDetail: "(18,5\u00a0% v. Eckentgelt)",

    // Chart
    chartTitle: "Bruttoverdienst nach Monaten",
    chartMonths: ["Jan", "Feb", "M\u00e4r", "Apr", "Mai", "Jun",
                  "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    chartLabels: {
      monatsentgelt:  "Monatsentgelt",
      utZulage:       "\u00dcT-Zulage",
      urlaubsgeld:    "Urlaubsgeld",
      tZugA:          "T-ZUG A",
      tGeld:          "T-Geld",
      tZugB:          "T-ZUG B",
      weihnachtsgeld: "Weihnachtsgeld"
    },

    // Dynamic labels
    xmasPayPct: "(${pct}\u00a0% eines ME)",
    xmasPayNone: "(kein Anspruch)",
    utZulagePct: "(${pct}\u00a0% v. ME)",
    tZugBPct: "(${pct}\u00a0% v. Eckentgelt)",

    // Note
    resultNote: "Die Tabellenwerte basieren auf 35\u00a0h/Woche (tarifliche Vollzeit). " +
      "Bei abweichender Arbeitszeit wird das Entgelt anteilig berechnet (Faktor\u00a0=\u00a0Wochenstunden\u00a0/\u00a035). " +
      "Weihnachtsgeld: voller Satz nach 36\u00a0Mon. Betriebszugeh\u00f6rigkeit. " +
      "T-ZUG\u00a0B: Festbetrag auf Basis des Eckentgelts. " +
      "\u00dcT-Zulage: freiwillige Arbeitgeberzulage, nicht in Sonderzahlungen enthalten. " +
      "Schichtzuschl\u00e4ge sind nicht enthalten.",

    // Regions (identity mapping for German)
    regions: {},

    // Steps (identity mapping for German)
    steps: {},

    // Footer
    footerSource: "Quelle: IG Metall ERA-Entgelttabellen",
  },

  en: {
    // Page
    pageTitle: "ERA Salary Calculator \u2013 Metal and Electrical Industry",
    title: "ERA Salary Calculator",
    subtitle: "Metal and Electrical Industry",
    subtitleWithYear: "Metal and Electrical Industry",
    ariaLabel: "Salary Calculator",

    // Form labels
    labelYear: "Tariff Year",
    labelRegion: "Federal State / Tariff Region",
    labelGrade: "Pay Grade (EG)",
    labelStep: "Step",
    labelHours: "Weekly Working Hours",
    labelStartDate: "Start Date (optional)",
    labelBonus: "Above-tariff Bonus",

    // Placeholders
    placeholder: "Please select\u2026",

    // Year option
    yearOption: "from 04/01/${year}",

    // Result
    resultMonthly: "Monthly Salary (gross)",
    resultAnnual: "Gross Annual Salary (total)",

    // Breakdown
    breakdownTitle: "Breakdown",
    breakdownBase: "12 \u00d7 Monthly Salary",
    breakdownUtZulage: "12 \u00d7 Above-tariff Bonus",
    breakdownHolidayPay: "Holiday Pay",
    breakdownHolidayPayDetail: "(50\u00a0% of monthly)",
    breakdownXmasPay: "Christmas Bonus",
    breakdownXmasPayDetail: "(55\u00a0% of monthly)",
    breakdownTZugA: "T-ZUG A",
    breakdownTZugADetail: "(27.5\u00a0% of monthly)",
    breakdownTGeld: "T-Geld",
    breakdownTGeldDetail: "(18.4\u00a0% of monthly)",
    breakdownTZugB: "T-ZUG B",
    breakdownTZugBDetail: "(18.5\u00a0% of base salary)",

    // Chart
    chartTitle: "Gross Earnings by Month",
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chartLabels: {
      monatsentgelt:  "Monthly Salary",
      utZulage:       "Above-tariff Bonus",
      urlaubsgeld:    "Holiday Pay",
      tZugA:          "T-ZUG A",
      tGeld:          "T-Geld",
      tZugB:          "T-ZUG B",
      weihnachtsgeld: "Christmas Bonus"
    },

    // Dynamic labels
    xmasPayPct: "(${pct}\u00a0% of monthly)",
    xmasPayNone: "(not eligible)",
    utZulagePct: "(${pct}\u00a0% of monthly)",
    tZugBPct: "(${pct}\u00a0% of base salary)",

    // Note
    resultNote: "Table values are based on 35\u00a0h/week (standard full-time). " +
      "For different working hours, pay is calculated proportionally (factor\u00a0=\u00a0weekly hours\u00a0/\u00a035). " +
      "Christmas bonus: full rate after 36\u00a0months of tenure. " +
      "T-ZUG\u00a0B: fixed amount based on reference salary. " +
      "Above-tariff bonus: voluntary employer bonus, not included in special payments. " +
      "Shift premiums are not included.",

    // Regions
    regions: {
      "Baden-W\u00fcrttemberg": "Baden-W\u00fcrttemberg",
      "Bayern": "Bavaria",
      "Berlin/Brandenburg": "Berlin/Brandenburg",
      "Hamburg/Unterweser": "Hamburg/Lower Weser",
      "Hessen": "Hesse",
      "Niedersachsen": "Lower Saxony",
      "Nordrhein-Westfalen": "North Rhine-Westphalia",
      "Osnabr\u00fcck-Emsland": "Osnabr\u00fcck-Emsland",
      "Pfalz": "Palatinate",
      "Rheinland-Rheinhessen": "Rhineland-Rhenish Hesse",
      "Saarland": "Saarland",
      "Sachsen": "Saxony",
      "Sachsen-Anhalt": "Saxony-Anhalt",
      "Schleswig-Holstein/MV/NW-Niedersachsen": "Schleswig-Holstein/MV/NW-Lower Saxony",
      "Th\u00fcringen": "Thuringia"
    },

    // Steps
    steps: {
      "Grundentgelt": "Base Salary",
      "Stufe A": "Step A",
      "Stufe B": "Step B",
      "Stufe C": "Step C",
      "Hauptstufe": "Main Step",
      "Eingangsstufe": "Entry Step",
      "1. Zusatzstufe": "1st Additional Step",
      "2. Zusatzstufe": "2nd Additional Step",
      "Grundstufe": "Base Step",
      "Zusatzstufe 1": "Additional Step 1",
      "Zusatzstufe 2": "Additional Step 2",
      "Zusatzstufe 3": "Additional Step 3"
    },

    // Footer
    footerSource: "Source: IG Metall ERA salary tables",
  }
};

// ---------------------------------------------------------------------------
// i18n engine
// ---------------------------------------------------------------------------

let currentLang = localStorage.getItem("era-lang") || "de";

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.de[key] ?? key;
}

function tReplace(key, replacements) {
  let str = t(key);
  for (const [k, v] of Object.entries(replacements)) {
    str = str.replace("${" + k + "}", v);
  }
  return str;
}

function tRegion(key) {
  return TRANSLATIONS[currentLang].regions[key] || key;
}

function tStep(key) {
  return TRANSLATIONS[currentLang].steps[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("era-lang", lang);
  document.documentElement.lang = lang;
  applyTranslations();
}

function applyTranslations() {
  // Page title
  document.title = t("pageTitle");

  // All elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // All elements with data-i18n-html attribute (for content with HTML entities)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = t(key);
  });

  // aria-labels
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });

  // Update language switcher active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}
