// generate-regions.js
// Erstellt 15 Landing Pages für ERA-Tarifgebiete
// Aufruf: node generate-regions.js

"use strict";
const fs   = require("fs");
const path = require("path");

// ERA_DATA aus data.js laden
const dataCode = fs.readFileSync("data.js", "utf8").replace("const ERA_DATA", "globalThis.ERA_DATA");
(0, eval)(dataCode);

// Aktuellstes und ältestes Jahr dynamisch ableiten
const allYears   = Object.keys(ERA_DATA).sort();
const latestYear = allYears[allYears.length - 1];
const firstYear  = allYears[0];

const SLUG_MAP = {
  "Baden-Württemberg":                      "entgelttabelle-baden-wuerttemberg",
  "Bayern":                                 "entgelttabelle-bayern",
  "Berlin/Brandenburg":                     "entgelttabelle-berlin-brandenburg",
  "Hamburg/Unterweser":                     "entgelttabelle-hamburg",
  "Hessen":                                 "entgelttabelle-hessen",
  "Niedersachsen":                          "entgelttabelle-niedersachsen",
  "Nordrhein-Westfalen":                    "entgelttabelle-nrw",
  "Osnabrück-Emsland":                      "entgelttabelle-osnabrueck-emsland",
  "Pfalz":                                  "entgelttabelle-pfalz",
  "Rheinland-Rheinhessen":                  "entgelttabelle-rheinland-rheinhessen",
  "Saarland":                               "entgelttabelle-saarland",
  "Sachsen":                                "entgelttabelle-sachsen",
  "Sachsen-Anhalt":                         "entgelttabelle-sachsen-anhalt",
  "Schleswig-Holstein/MV/NW-Niedersachsen": "entgelttabelle-schleswig-holstein",
  "Thüringen":                              "entgelttabelle-thueringen",
};

// Kurznamen nur für <title> und OG-Tags (2 Ausnahmen, sonst = Regionname)
const TITLE_SHORT = {
  "Nordrhein-Westfalen":                    "NRW",
  "Schleswig-Holstein/MV/NW-Niedersachsen": "Schleswig-Holstein",
};

// HTML-Entitäten für Umlaute/ß
function htmlEscape(str) {
  return str
    .replace(/ü/g, "&uuml;").replace(/Ü/g, "&Uuml;")
    .replace(/ö/g, "&ouml;").replace(/Ö/g, "&Ouml;")
    .replace(/ä/g, "&auml;").replace(/Ä/g, "&Auml;")
    .replace(/ß/g, "&szlig;");
}

const regions = Object.keys(ERA_DATA[firstYear].salaryData);

function egCount(regionKey) {
  return Object.keys(ERA_DATA[latestYear].salaryData[regionKey]).length;
}

function regionNavLinks(currentKey) {
  return regions.map(r => {
    const isCurrent = r === currentKey;
    // Statischer Text leer – JS überschreibt per tRegion()
    return `        <a href="/${SLUG_MAP[r]}.html" class="rp-region-link${isCurrent ? " current" : ""}" data-region="${r}"></a>`;
  }).join("\n");
}

function generateHTML(regionKey) {
  const slug       = SLUG_MAP[regionKey];
  const titleShort = TITLE_SHORT[regionKey] ?? regionKey;
  const count      = egCount(regionKey);
  const links      = regionNavLinks(regionKey);

  const regionHtml   = htmlEscape(regionKey);
  const titleShortHtml = htmlEscape(titleShort);

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>(function(){var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);})();</script>
  <title>IG Metall Tariftabelle ${latestYear} ${titleShortHtml} &ndash; ERA Entgelttabelle</title>
  <meta name="description" content="IG Metall Tariftabelle ${latestYear} f&uuml;r ${regionHtml}: alle ${count} Entgeltgruppen der ERA-Entgelttabelle (${firstYear} &amp; ${latestYear}) mit Monatsentgelt, Weihnachtsgeld, Urlaubsgeld, T-ZUG und Ausbildungsverg&uuml;tung.">
  <meta name="robots" content="index, follow">
  <meta name="author" content="era-rechner.de">
  <link rel="canonical" href="https://www.era-rechner.de/${slug}.html">

  <meta property="og:title" content="IG Metall Tariftabelle ${latestYear} ${titleShortHtml} &ndash; ERA Entgelttabelle">
  <meta property="og:description" content="IG Metall Tariftabelle ${latestYear} f&uuml;r ${regionHtml}: alle ${count} Entgeltgruppen der ERA-Entgelttabelle mit allen Sonderzahlungen und Ausbildungsverg&uuml;tung.">
  <meta property="og:url" content="https://www.era-rechner.de/${slug}.html">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ERA Entgeltrechner">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ERA Entgeltrechner", "item": "https://www.era-rechner.de/" },
      { "@type": "ListItem", "position": 2, "name": "IG Metall Tariftabelle ${latestYear}", "item": "https://www.era-rechner.de/tariftabelle.html" },
      { "@type": "ListItem", "position": 3, "name": "ERA Entgelttabelle ${regionKey}", "item": "https://www.era-rechner.de/${slug}.html" }
    ]
  }
  </script>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container container--table">
    <header>
      <div class="lang-switch">
        <button class="lang-btn active" data-lang="de" onclick="setLanguage('de')">DE</button>
        <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
        <span class="lang-switch-sep"></span>
        <button class="theme-btn" id="theme-toggle" aria-label="Dark Mode umschalten" title="Dark Mode umschalten">
          <svg id="theme-icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg id="theme-icon-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
      <h1>ERA Entgelttabelle ${regionHtml}</h1>
      <p class="subtitle" data-i18n="rpSubtitle">IG Metall Tariftabelle ${firstYear} &amp; ${latestYear}</p>
      <p class="header-disclaimer" data-i18n="headerDisclaimer">Unabh&auml;ngiges Open-Source-Projekt &ndash; kein offizielles Angebot der IG Metall.</p>
    </header>

    <nav class="rp-breadcrumb" aria-label="Breadcrumb">
      <a href="/">ERA Entgeltrechner</a> &rsaquo; <a href="/tariftabelle.html" data-i18n="ttoBreadcrumb">Tariftabelle</a> &rsaquo; ${regionHtml}
    </nav>

    <section class="calculator rp-intro-section">
      <p id="rp-intro-text"></p>
    </section>

    <div class="rp-year-tabs-wrap">
      <div class="rp-year-tabs" id="rp-year-tabs"></div>
    </div>

    <section class="calculator rp-section">
      <h2 id="rp-table-heading"></h2>
      <div id="rp-table"></div>
    </section>

    <div class="rp-two-col">
    <section class="calculator rp-section">
      <h2 id="rp-bonus-heading"></h2>
      <div id="rp-bonus"></div>
    </section>

    <section class="calculator rp-section">
      <h2 id="rp-ausbildung-heading"></h2>
      <div id="rp-ausbildung"></div>
    </section>
    </div>

    <div class="rp-cta">
      <p id="rp-cta-text"></p>
      <a href="/" id="rp-cta-btn" class="rp-cta-btn"></a>
    </div>

    <nav class="rp-region-nav" aria-label="Weitere Tarifgebiete">
      <h3 data-i18n="rpAllRegions">Alle Tarifgebiete</h3>
      <div class="rp-region-links">
${links}
      </div>
    </nav>

    <p class="source-note" style="text-align:center" data-i18n-html="sourceNote">Quelle: <a href="https://www.igmetall.de/tarif" target="_blank" rel="noopener noreferrer">ERA-Tarifvertrag der Metall- und Elektroindustrie (IG Metall)</a> &middot; Zuletzt gepr&uuml;ft: <time datetime="2026-05">Mai 2026</time></p>

    <footer>
      <p class="footer-feedback" data-i18n-html="footerFeedback">Anregungen, Fehler oder Feedback? <a href="mailto:info@era-rechner.de">info@era-rechner.de</a></p>
      <p class="footer-donate" data-i18n-html="footerDonate">Dieses Projekt ist werbefrei und open-source. <a href="https://paypal.me/erarechner" target="_blank" rel="noopener noreferrer">Unterst&uuml;tze es mit einer Spende via PayPal</a>.</p>
      <p class="footer-links">
        <a href="/" data-i18n="footerHome">ERA Entgeltrechner</a>
        <span class="footer-sep">&middot;</span>
        <a href="/impressum.html" data-i18n="footerImprint">Impressum</a>
        <span class="footer-sep">&middot;</span>
        <a href="/datenschutz.html" data-i18n="footerPrivacy">Datenschutz</a>
        <span class="footer-sep">&middot;</span>
        <a href="/glossar.html">Glossar</a>
        <span class="footer-sep">&middot;</span>
        <a href="https://github.com/markus-sanwald/era-rechner" target="_blank" rel="noopener noreferrer" data-i18n="footerGithub">Quellcode auf GitHub</a>
      </p>
    </footer>
  </main>

  <script>window.REGION_KEY = ${JSON.stringify(regionKey)};</script>
  <script src="data.js"></script>
  <script src="i18n.js"></script>
  <script src="theme.js"></script>
  <script src="region-page.js"></script>
</body>
</html>`;
}

// Übersichts-/Hub-Seite: "IG Metall Tariftabelle {Jahr}" ohne Regionsbezug.
// URL bleibt jahreslos (tariftabelle.html), damit sie nächstes Jahr nicht migriert werden muss –
// Title/H1/Inhalt tragen das aktuelle Jahr dynamisch wie bei den Regionsseiten.
function generateOverviewHTML() {
  const links = regionNavLinks(null);
  const slugMapJson = JSON.stringify(SLUG_MAP);

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>(function(){var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);})();</script>
  <title>IG Metall Tariftabelle ${latestYear} &ndash; Alle Tarifgebiete im &Uuml;berblick</title>
  <meta name="description" content="IG Metall Tariftabelle ${latestYear} im &Uuml;berblick: Entgeltgruppen und Grundentgelte aller 15 ERA-Tarifgebiete auf einen Blick, mit Link zur vollst&auml;ndigen Tabelle je Region.">
  <meta name="robots" content="index, follow">
  <meta name="author" content="era-rechner.de">
  <link rel="canonical" href="https://www.era-rechner.de/tariftabelle.html">

  <meta property="og:title" content="IG Metall Tariftabelle ${latestYear} &ndash; Alle Tarifgebiete im &Uuml;berblick">
  <meta property="og:description" content="IG Metall Tariftabelle ${latestYear} im &Uuml;berblick: Entgeltgruppen und Grundentgelte aller 15 ERA-Tarifgebiete auf einen Blick.">
  <meta property="og:url" content="https://www.era-rechner.de/tariftabelle.html">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ERA Entgeltrechner">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ERA Entgeltrechner", "item": "https://www.era-rechner.de/" },
      { "@type": "ListItem", "position": 2, "name": "IG Metall Tariftabelle ${latestYear}", "item": "https://www.era-rechner.de/tariftabelle.html" }
    ]
  }
  </script>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container container--table">
    <header>
      <div class="lang-switch">
        <button class="lang-btn active" data-lang="de" onclick="setLanguage('de')">DE</button>
        <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
        <span class="lang-switch-sep"></span>
        <button class="theme-btn" id="theme-toggle" aria-label="Dark Mode umschalten" title="Dark Mode umschalten">
          <svg id="theme-icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg id="theme-icon-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
      <h1>IG Metall Tariftabelle ${latestYear}</h1>
      <p class="subtitle" data-i18n="ttoSubtitle">Alle 15 Tarifgebiete im &Uuml;berblick</p>
      <p class="header-disclaimer" data-i18n="headerDisclaimer">Unabh&auml;ngiges Open-Source-Projekt &ndash; kein offizielles Angebot der IG Metall.</p>
    </header>

    <nav class="rp-breadcrumb" aria-label="Breadcrumb">
      <a href="/">ERA Entgeltrechner</a> &rsaquo; IG Metall Tariftabelle ${latestYear}
    </nav>

    <section class="calculator rp-intro-section">
      <p id="tto-intro-text"></p>
    </section>

    <div class="rp-year-tabs-wrap">
      <div class="rp-year-tabs" id="tto-year-tabs"></div>
    </div>

    <section class="calculator rp-section">
      <h2 id="tto-table-heading"></h2>
      <div class="rp-table-wrap tto-table-wrap"><table class="rp-table tto-table" id="tto-table">
        <thead><tr>
          <th data-i18n="ttoColRegion">Tarifgebiet</th>
          <th data-i18n="ttoColEgCount">Entgeltgruppen</th>
          <th data-i18n="ttoColFrom">Grundentgelt ab</th>
          <th data-i18n="ttoColTo">Grundentgelt bis</th>
          <th></th>
        </tr></thead>
        <tbody id="tto-table-body"></tbody>
      </table></div>
    </section>

    <section class="calculator rp-section">
      <h2 data-i18n="ttoChartHeading">Grundentgelt-Spannen im Regionsvergleich</h2>
      <p class="tto-chart-caption" data-i18n="ttoChartCaption">Grundentgelt von der niedrigsten bis zur h&ouml;chsten Entgeltgruppe, ohne Sonderzahlungen. Sortiert nach H&ouml;chstwert.</p>
      <div class="tto-chart" id="tto-chart"></div>
      <div class="tto-chart-axis">
        <span class="tto-chart-axis-spacer" aria-hidden="true"></span>
        <div class="tto-chart-axis-track" id="tto-chart-axis-track"></div>
      </div>
    </section>

    <div class="rp-cta">
      <p data-i18n="ttoCtaText">Berechne dein pers&ouml;nliches Gehalt inkl. aller Sonderzahlungen und Nettolohn:</p>
      <a href="/" class="rp-cta-btn" data-i18n="ttoCtaBtn">Zum ERA Entgeltrechner &rarr;</a>
    </div>

    <nav class="rp-region-nav" aria-label="Alle Tarifgebiete">
      <h3 data-i18n="rpAllRegions">Alle Tarifgebiete</h3>
      <div class="rp-region-links">
${links}
      </div>
    </nav>

    <p class="source-note" style="text-align:center" data-i18n-html="sourceNote">Quelle: <a href="https://www.igmetall.de/tarif" target="_blank" rel="noopener noreferrer">ERA-Tarifvertrag der Metall- und Elektroindustrie (IG Metall)</a> &middot; Zuletzt gepr&uuml;ft: <time datetime="2026-05">Mai 2026</time></p>

    <footer>
      <p class="footer-feedback" data-i18n-html="footerFeedback">Anregungen, Fehler oder Feedback? <a href="mailto:info@era-rechner.de">info@era-rechner.de</a></p>
      <p class="footer-donate" data-i18n-html="footerDonate">Dieses Projekt ist werbefrei und open-source. <a href="https://paypal.me/erarechner" target="_blank" rel="noopener noreferrer">Unterst&uuml;tze es mit einer Spende via PayPal</a>.</p>
      <p class="footer-links">
        <a href="/" data-i18n="footerHome">ERA Entgeltrechner</a>
        <span class="footer-sep">&middot;</span>
        <a href="/impressum.html" data-i18n="footerImprint">Impressum</a>
        <span class="footer-sep">&middot;</span>
        <a href="/datenschutz.html" data-i18n="footerPrivacy">Datenschutz</a>
        <span class="footer-sep">&middot;</span>
        <a href="/glossar.html">Glossar</a>
        <span class="footer-sep">&middot;</span>
        <a href="https://github.com/markus-sanwald/era-rechner" target="_blank" rel="noopener noreferrer" data-i18n="footerGithub">Quellcode auf GitHub</a>
      </p>
    </footer>
  </main>

  <script src="data.js"></script>
  <script src="i18n.js"></script>
  <script src="theme.js"></script>
  <script>
    (function () {
      var SLUG_MAP  = ${slugMapJson};
      var years     = Object.keys(ERA_DATA).sort();
      var activeYear = years[years.length - 1];
      var eur = function (v) {
        return v.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      };

      function computeStats() {
        var regionKeys = Object.keys(ERA_DATA[activeYear].salaryData);
        return regionKeys.map(function (regionKey) {
          var salaryData = ERA_DATA[activeYear].salaryData[regionKey];
          var egs        = Object.keys(salaryData);
          var fromVal    = Math.min.apply(null, Object.values(salaryData[egs[0]]));
          var toVal      = Math.max.apply(null, Object.values(salaryData[egs[egs.length - 1]]));
          return { regionKey: regionKey, slug: SLUG_MAP[regionKey], count: egs.length, fromVal: fromVal, toVal: toVal };
        });
      }

      function renderYearTabs() {
        var el = document.getElementById("tto-year-tabs");
        el.innerHTML = years.map(function (y) {
          return '<button type="button" class="rp-year-tab' + (y === activeYear ? " active" : "") + '" data-year="' + y + '">' + y + "</button>";
        }).join("");
      }

      function renderTable(stats) {
        document.getElementById("tto-table-heading").textContent = tReplace("ttoTableHeading", { year: activeYear });
        document.getElementById("tto-table-body").innerHTML = stats.map(function (s) {
          return '<tr class="rp-table-row-link" onclick="location.href=\\'/' + s.slug + '.html\\'">' +
            '<td class="rp-eg"><a href="/' + s.slug + '.html">' + s.regionKey + "</a></td>" +
            '<td data-label="' + t("ttoColEgCount") + '">' + s.count + "</td>" +
            '<td data-label="' + t("ttoColFrom") + '">' + eur(s.fromVal) + "&nbsp;€</td>" +
            '<td data-label="' + t("ttoColTo") + '">' + eur(s.toVal) + "&nbsp;€</td>" +
            '<td class="rp-table-arrow" aria-hidden="true">›</td>' +
            "</tr>";
        }).join("");
      }

      function renderChart(stats) {
        var chartMin   = Math.floor(Math.min.apply(null, stats.map(function (s) { return s.fromVal; })) / 500) * 500;
        var chartMax   = Math.ceil(Math.max.apply(null, stats.map(function (s) { return s.toVal; })) / 500) * 500;
        var chartRange = chartMax - chartMin;
        var pct = function (v) { return ((v - chartMin) / chartRange * 100).toFixed(2); };

        var sorted = stats.slice().sort(function (a, b) { return b.toVal - a.toVal; });
        var rowsHtml = sorted.map(function (s) {
          var left  = pct(s.fromVal);
          var width = (pct(s.toVal) - pct(s.fromVal)).toFixed(2);
          return '<div class="tto-chart-row">' +
            '<a href="/' + s.slug + '.html" class="tto-chart-label">' + s.regionKey + "</a>" +
            '<div class="tto-chart-track">' +
            '<div class="tto-chart-range" style="left:' + left + '%;width:' + width + '%" title="' + s.regionKey + ": " + eur(s.fromVal) + " – " + eur(s.toVal) + ' €"></div>' +
            "</div></div>";
        }).join("");

        var ticks = [];
        for (var v = chartMin; v <= chartMax; v += 1000) ticks.push(v);
        var gridHtml = ticks.map(function (v) {
          return '<span class="tto-chart-gridline" style="left:' + pct(v) + '%"></span>';
        }).join("");
        var axisHtml = ticks.map(function (v) {
          return '<span class="tto-chart-tick" style="left:' + pct(v) + '%">' + (v / 1000).toLocaleString("de-DE") + "k</span>";
        }).join("");

        document.getElementById("tto-chart").innerHTML = '<div class="tto-chart-grid" aria-hidden="true">' + gridHtml + "</div>" + rowsHtml;
        document.getElementById("tto-chart-axis-track").innerHTML = axisHtml;
      }

      function render() {
        var stats = computeStats();
        renderYearTabs();
        document.getElementById("tto-intro-text").innerHTML = tReplace("ttoIntro", { year: activeYear });
        renderTable(stats);
        renderChart(stats);
        document.querySelectorAll(".rp-region-link[data-region]").forEach(function (el) {
          el.textContent = tRegion(el.dataset.region);
        });
      }

      document.getElementById("tto-year-tabs").addEventListener("click", function (e) {
        var btn = e.target.closest("[data-year]");
        if (!btn) return;
        activeYear = btn.dataset.year;
        render();
      });

      var urlLang = new URLSearchParams(window.location.search).get("lang");
      if (urlLang === "en" || urlLang === "de") setLanguage(urlLang);
      onTranslationsApplied(render);
      document.documentElement.lang = currentLang;
      applyTranslations();
      render();
    })();
  </script>
</body>
</html>`;
}

regions.forEach(regionKey => {
  const slug     = SLUG_MAP[regionKey];
  const filePath = path.join(__dirname, `${slug}.html`);
  // CRLF, damit die generierten Dateien zu den Windows-Zeilenenden des Repos passen
  const html = generateHTML(regionKey).replace(/\r?\n/g, "\r\n");
  fs.writeFileSync(filePath, html, "utf8");
  console.log(`  ✓  ${slug}.html`);
});

const overviewHtml = generateOverviewHTML().replace(/\r?\n/g, "\r\n");
fs.writeFileSync(path.join(__dirname, "tariftabelle.html"), overviewHtml, "utf8");
console.log(`  ✓  tariftabelle.html`);

console.log(`\n✅  ${regions.length} Regionseiten + 1 &Uuml;bersichtsseite erstellt.`.replace("&Uuml;", "Ü"));
