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

    let html = `<div class="rp-table-wrap"><table class="rp-table">
      <thead><tr>
        <th>EG</th>
        ${steps.map(s => `<th>${tStep(s)}</th>`).join("")}
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

    // Erster Render + initiale Übersetzungen
    applyTranslations();
    render();
  });
})();
