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
  <title>ERA Entgelttabelle ${titleShortHtml} ${latestYear} &ndash; IG Metall Gehaltstabelle</title>
  <meta name="description" content="ERA Entgelttabelle ${regionHtml} ${firstYear} &amp; ${latestYear} &ndash; alle ${count} Entgeltgruppen nach IG Metall Tarifvertrag. Monatsentgelt, Weihnachtsgeld, Urlaubsgeld und T-ZUG auf einen Blick.">
  <meta name="robots" content="index, follow">
  <meta name="author" content="era-rechner.de">
  <link rel="canonical" href="https://www.era-rechner.de/${slug}.html">

  <meta property="og:title" content="ERA Entgelttabelle ${titleShortHtml} ${latestYear} &ndash; IG Metall">
  <meta property="og:description" content="ERA Entgelttabelle ${regionHtml} ${firstYear} &amp; ${latestYear} &ndash; alle ${count} Entgeltgruppen nach IG Metall Tarifvertrag.">
  <meta property="og:url" content="https://www.era-rechner.de/${slug}.html">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ERA Entgeltrechner">

  <link rel="alternate" hreflang="de" href="https://www.era-rechner.de/${slug}.html">
  <link rel="alternate" hreflang="x-default" href="https://www.era-rechner.de/${slug}.html">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ERA Entgeltrechner", "item": "https://www.era-rechner.de/" },
      { "@type": "ListItem", "position": 2, "name": "ERA Entgelttabelle ${regionKey}", "item": "https://www.era-rechner.de/${slug}.html" }
    ]
  }
  </script>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
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
      <p class="subtitle" data-i18n="rpSubtitle">IG Metall Gehaltstabelle ${firstYear} &amp; ${latestYear}</p>
      <p class="header-disclaimer" data-i18n="headerDisclaimer">Unabh&auml;ngiges Open-Source-Projekt &ndash; kein offizielles Angebot der IG Metall.</p>
    </header>

    <nav class="rp-breadcrumb" aria-label="Breadcrumb">
      <a href="/">ERA Entgeltrechner</a> &rsaquo; ${regionHtml}
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

    <section class="calculator rp-section">
      <h2 id="rp-bonus-heading"></h2>
      <div id="rp-bonus"></div>
    </section>

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
        <a href="https://github.com/markus-sanwald/era-rechner" target="_blank" rel="noopener noreferrer" data-i18n="footerGithub">Quellcode auf GitHub</a>
      </p>
    </footer>
  </main>

  <script>window.REGION_KEY = ${JSON.stringify(regionKey)};</script>
  <script src="data.js"></script>
  <script src="i18n.js"></script>
  <script src="region-page.js"></script>
</body>
</html>`;
}

regions.forEach(regionKey => {
  const slug     = SLUG_MAP[regionKey];
  const filePath = path.join(__dirname, `${slug}.html`);
  fs.writeFileSync(filePath, generateHTML(regionKey), "utf8");
  console.log(`  ✓  ${slug}.html`);
});

console.log(`\n✅  ${regions.length} Regionseiten erstellt.`);
