"use strict";

// ---------------------------------------------------------------------------
// Theme toggle (Dark Mode) → siehe theme.js (auf allen Seiten geteilt)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Region Page – Entgelttabelle & Sonderzahlungen
// Benötigt: data.js + i18n.js + theme.js vor diesem Script, window.REGION_KEY gesetzt
// ---------------------------------------------------------------------------
(function () {
  const regionKey = window.REGION_KEY;
  const years     = Object.keys(ERA_DATA).sort();
  let   activeYear = years[years.length - 1];

  // Stufen-System je Tarifgebiet (steuert region-bewusste Tooltips + Info-Text).
  // Regionen ohne Eintrag (NRW: reine Zeitstufen, Baden-Württemberg: nur Grundentgelt)
  // erhalten keine Stufen-Tooltips/-Erklärung.
  const STEP_SYSTEM = {
    "Hamburg/Unterweser":                      "nordmetall",
    "Schleswig-Holstein/MV/NW-Niedersachsen":  "nordmetall",
    "Berlin/Brandenburg":                      "berlin",
    "Osnabrück-Emsland":                       "osnabrueck",
    "Bayern":                                  "bayern",
    "Niedersachsen":                           "niedersachsen",
    "Sachsen-Anhalt":                          "sachsenanhalt",
    "Hessen":                                  "zusatz",
    "Pfalz":                                   "zusatz",
    "Saarland":                                "zusatz",
    "Sachsen":                                 "zusatz",
    "Rheinland-Rheinhessen":                   "zusatz",
    "Thüringen":                               "zusatz",
  };
  const stepSystem = STEP_SYSTEM[regionKey] ?? null;

  // Logische Reihenfolge der Stufen-Spalten (kleiner = weiter links).
  const STEP_ORDER = {
    "Grundentgelt":   0,
    "Stufe A":        0,
    "Grundstufe":     1,
    "Eingangsstufe":  1,
    "Stufe B":        2,
    "Hauptstufe":     2,
    "Stufe C":        3,
    "Zusatzstufe":    3,
    "Zusatzstufe 1":  3,
    "1. Zusatzstufe": 3,
    "Zusatzstufe 2":  4,
    "2. Zusatzstufe": 4,
    "Zusatzstufe 3":  5,
  };

  const fmt = new Intl.NumberFormat("de-DE", {
    style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2
  });
  const pct = v => (v * 100).toFixed(1).replace(".", ",") + " %";

  // ----- Intro -----
  function renderIntro() {
    const el = document.getElementById("rp-intro-text");
    if (!el) return;
    const egCount = Object.keys(ERA_DATA[activeYear].salaryData[regionKey]).length;
    el.innerHTML = tReplace("rpIntro", { region: regionKey, count: egCount });

    let el2 = document.getElementById("rp-region-intro");
    if (!el2) {
      el2 = document.createElement("p");
      el2.id = "rp-region-intro";
      el.parentNode.insertBefore(el2, el.nextSibling);
    }
    el2.textContent = tRegionIntro(regionKey);

    // Stufen-Erklärung (nur Regionen mit mehrstufigem, nicht rein zeitbasiertem System)
    let el3 = document.getElementById("rp-step-info");
    const stepText = stepSystem ? tStepInfo(stepSystem) : "";
    if (stepText) {
      if (!el3) {
        el3 = document.createElement("p");
        el3.id = "rp-step-info";
        el3.className = "rp-step-info";
        el2.parentNode.insertBefore(el3, el2.nextSibling);
      }
      el3.innerHTML = `<strong>${t("rpStepInfoLabel")}</strong> ${stepText}`;
    } else if (el3) {
      el3.remove();
    }
  }

  // ----- Section Headings -----
  function renderHeadings() {
    const tableH2 = document.getElementById("rp-table-heading");
    const bonusH2 = document.getElementById("rp-bonus-heading");
    const validFrom = tReplace("rpValidFrom", { year: activeYear });
    if (tableH2) tableH2.innerHTML = `${t("rpTableHeading")} <span class="rp-year-label">${validFrom}</span>`;
    if (bonusH2) bonusH2.innerHTML = `${t("rpBonusHeading")} <span class="rp-year-label">${validFrom}</span>`;
  }

  // ----- Year Tabs -----
  function renderYearTabs() {
    const el = document.getElementById("rp-year-tabs");
    el.innerHTML = years.map(y =>
      `<button type="button" class="rp-year-tab${y === activeYear ? " active" : ""}" data-year="${y}">${y}</button>`
    ).join("");
  }

  // ----- Salary Table -----
  function renderSalaryTable() {
    const salaryData = ERA_DATA[activeYear].salaryData[regionKey];
    const egs = Object.keys(salaryData);

    const steps = [];
    egs.forEach(eg => {
      Object.keys(salaryData[eg]).forEach(s => {
        if (!steps.includes(s)) steps.push(s);
      });
    });
    // Logische Spaltenreihenfolge (sonst richtet sie sich nach dem ersten Auftauchen
    // je EG → z. B. Hauptstufe vor Eingangsstufe). Unbekannte Stufen (NRW-Zeitstufen)
    // behalten via stabiler Sortierung ihre ursprüngliche Reihenfolge.
    const rank = s => {
      const r = STEP_ORDER[s];
      return r === undefined ? Infinity : r;
    };
    steps.sort((a, b) => rank(a) - rank(b));

    let html = `<div class="rp-table-wrap"><table class="rp-table">
      <thead><tr>
        <th>EG</th>
        ${steps.map(s => {
          const tip = tStepTooltip(s, stepSystem);
          if (!tip) return `<th>${tStep(s)}</th>`;
          const esc = tip.replace(/"/g, "&quot;");
          return `<th><span class="rp-th-info" tabindex="0" role="note" aria-label="${esc}" data-tip="${esc}">${tStep(s)}<span class="rp-th-icon" aria-hidden="true">i</span></span></th>`;
        }).join("")}
      </tr></thead>
      <tbody>`;

    egs.forEach(eg => {
      html += `<tr><td class="rp-eg">${eg}</td>`;
      steps.forEach(s => {
        const v = salaryData[eg][s];
        html += `<td>${v !== undefined ? fmt.format(v) : '<span class="rp-na">–</span>'}</td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody></table></div>`;
    document.getElementById("rp-table").innerHTML = html;
  }

  // ----- Bonus Info -----
  function renderBonus() {
    const b  = ERA_DATA[activeYear].bonusData[regionKey];
    const el = document.getElementById("rp-bonus");

    const tZugBAmt = b.eckentgelt
      ? fmt.format(Math.round(b.eckentgelt * b.tZugB))
      : "–";

    const wgRows = [...b.weihnachtsgeldStaffel]
      .sort((a, x) => a.monate - x.monate)
      .map(s => `<tr>
          <td>${tReplace("rpBonusTenure", { months: s.monate })}</td>
          <td class="rp-right">${pct(s.satz)}</td>
        </tr>`)
      .join("");

    el.innerHTML = `
      <div class="rp-bonus-grid">
        <div class="rp-bonus-card">
          <div class="rp-bonus-name">${t("rpBonusLabelUrlaubsgeld")}</div>
          <div class="rp-bonus-val">${pct(b.urlaubsgeld)}</div>
          <div class="rp-bonus-note">${t("rpBonusOfMonthly")}</div>
        </div>
        <div class="rp-bonus-card">
          <div class="rp-bonus-name">${t("rpBonusLabelTZugA")}</div>
          <div class="rp-bonus-val">${pct(b.tZugA)}</div>
          <div class="rp-bonus-note">${t("rpBonusTZugANote")}</div>
        </div>
        <div class="rp-bonus-card">
          <div class="rp-bonus-name">${t("rpBonusLabelTGeld")}</div>
          <div class="rp-bonus-val">${pct(b.tGeld)}</div>
          <div class="rp-bonus-note">${t("rpBonusOfMonthly")}</div>
        </div>
        <div class="rp-bonus-card">
          <div class="rp-bonus-name">${t("rpBonusLabelTZugB")}</div>
          <div class="rp-bonus-val">≈ ${tZugBAmt}</div>
          <div class="rp-bonus-note">${pct(b.tZugB)} ${t("rpBonusTZugBNote")}</div>
        </div>
        <div class="rp-bonus-card rp-bonus-card--wide">
          <div class="rp-bonus-name">${t("rpBonusLabelWeihnachtsgeld")}</div>
          <table class="rp-wg-table">
            <tbody>${wgRows}</tbody>
          </table>
        </div>
      </div>`;
  }

  // ----- CTA -----
  function renderCta() {
    const ctaText = document.getElementById("rp-cta-text");
    const ctaBtn  = document.getElementById("rp-cta-btn");
    if (ctaText) ctaText.textContent = t("rpCtaText");
    if (ctaBtn) {
      ctaBtn.textContent = tReplace("rpCtaBtn", { region: regionKey });
      ctaBtn.href = `/?region=${encodeURIComponent(regionKey)}&jahr=${activeYear}`;
    }
  }

  // ----- Region Nav Pills (via tRegion – stimmt mit Dropdown überein) -----
  function renderRegionNav() {
    document.querySelectorAll(".rp-region-link[data-region]").forEach(el => {
      el.textContent = tRegion(el.dataset.region);
    });
  }

  // ----- Alles rendern (ohne applyTranslations – wird separat via setLanguage getriggert) -----
  function render() {
    renderYearTabs();
    renderHeadings();
    renderIntro();
    renderSalaryTable();
    renderBonus();
    renderCta();
    renderRegionNav();
  }

  // Jahr-Tab-Klick
  document.addEventListener("DOMContentLoaded", function () {
    // URL-Parameter ?lang= hat Vorrang vor localStorage
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang === "en" || urlLang === "de") setLanguage(urlLang);

    document.getElementById("rp-year-tabs").addEventListener("click", function (e) {
      const btn = e.target.closest("[data-year]");
      if (!btn) return;
      activeYear = btn.dataset.year;
      render();
    });

    // Sprachumschalter – _setLanguage ruft applyTranslations() auf, danach neu rendern
    const _setLanguage = window.setLanguage;
    window.setLanguage = function (lang) {
      _setLanguage(lang);  // → ruft applyTranslations() intern auf
      render();            // → aktualisiert dynamische Inhalte (Tabelle, Bonus, Nav, etc.)
    };

    // Step-Tooltips: ein wiederverwendbares, an <body> gehängtes Element,
    // damit es nicht vom horizontalen Scroll-Container der Tabelle abgeschnitten wird.
    setupStepTooltips();

    // Erster Render + initiale Übersetzungen
    applyTranslations();
    render();
  });

  function setupStepTooltips() {
    const tip = document.createElement("div");
    tip.className = "rp-tip";
    document.body.appendChild(tip);

    function show(el) {
      const text = el.getAttribute("data-tip");
      if (!text) return;
      tip.textContent = text;
      tip.classList.add("visible");
      const r = el.getBoundingClientRect();
      const tr = tip.getBoundingClientRect();
      const margin = 8;
      let left = r.left + r.width / 2 - tr.width / 2;
      left = Math.max(margin, Math.min(left, window.innerWidth - tr.width - margin));
      let top = r.bottom + 6;
      if (top + tr.height > window.innerHeight - margin) top = r.top - tr.height - 6;
      tip.style.left = `${left}px`;
      tip.style.top  = `${Math.max(margin, top)}px`;
    }
    function hide() { tip.classList.remove("visible"); }

    document.addEventListener("mouseover", e => {
      const el = e.target.closest(".rp-th-info");
      if (el) show(el);
    });
    document.addEventListener("mouseout", e => {
      if (e.target.closest(".rp-th-info")) hide();
    });
    document.addEventListener("focusin", e => {
      const el = e.target.closest(".rp-th-info");
      if (el) show(el);
    });
    document.addEventListener("focusout", e => {
      if (e.target.closest(".rp-th-info")) hide();
    });
    window.addEventListener("scroll", hide, true);
  }
})();
