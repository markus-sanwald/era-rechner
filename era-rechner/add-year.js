// add-year.js
// Legt ein neues Tarifjahr in data.js an (Kopie des neuesten Jahres, hochgerechnet) oder
// finalisiert ein vorläufiges Jahr.
//
//   node add-year.js 2027 3.1               neues Jahr, Entgelte + Eckentgelt +3,1 %, preliminary: true
//   node add-year.js 2027 3.1 --azubi=2.5   zusätzlich Ausbildungsvergütung +2,5 % (Standard: unverändert)
//   node add-year.js 2027 2.0 --ab=2027-05-01   Erhöhung gilt nicht ab 01.04. (steuert den Hinweistext)
//   node add-year.js 2027 --finalize        preliminary-Flag entfernen (nach Eintragen der offiziellen Werte)
//
// Optionale Felder je Jahr in data.js (von Hand ergänzen):
//   "hinweis": "<i18n-Schlüssel>"   Zusatztext im Vorläufig-Banner (z. B. Quelle der Hochrechnung)
//   "einmalzahlung": { "monat": 3, "betraege": [150, 300, 450], "standard": 150 }   wählbare Einmalzahlung
//
// Danach: Werte in data.js gegen das offizielle IG-Metall-PDF prüfen/überschreiben,
// dann `node generate-regions.js` und die Checkliste in CLAUDE.md („Neues Tarifjahr“) abarbeiten.
"use strict";
const fs = require("fs");

const [, , yearArg, pctArg, ...rest] = process.argv;
if (!/^\d{4}$/.test(yearArg || "")) {
  console.error("Aufruf: node add-year.js <Jahr> <Prozent> [--azubi=<Prozent>] | node add-year.js <Jahr> --finalize");
  process.exit(1);
}

let src = fs.readFileSync("data.js", "utf8");
const crlf = src.includes("\r\n");
if (crlf) src = src.replace(/\r\n/g, "\n");

const ERA_DATA = (0, eval)(src.replace("const ERA_DATA =", "globalThis.__ERA =").replace(/\nconst BBG_DATA[\s\S]*$/, "") + "\n__ERA");
const write = (s) => fs.writeFileSync("data.js", crlf ? s.replace(/\n/g, "\r\n") : s);

// --- Finalisieren -----------------------------------------------------------
if (pctArg === "--finalize") {
  const re = new RegExp(`(\n  "${yearArg}": \{\n)    "preliminary": true,\n`);
  if (!re.test(src)) { console.error(`${yearArg}: kein preliminary-Flag gefunden.`); process.exit(1); }
  write(src.replace(re, "$1"));
  console.log(`${yearArg} ist jetzt final (preliminary-Flag entfernt).`);
  process.exit(0);
}

// --- Neues Jahr anlegen -------------------------------------------------------
const pct = parseFloat(String(pctArg).replace(",", "."));
if (isNaN(pct)) { console.error("Prozentwert fehlt, z. B. 3.1"); process.exit(1); }
const azubiArg = rest.find((a) => a.startsWith("--azubi="));
const azubiPct = azubiArg ? parseFloat(azubiArg.split("=")[1].replace(",", ".")) : 0;
const abArg = rest.find((a) => a.startsWith("--ab="));
const gueltigAb = abArg ? abArg.split("=")[1] : null;
if (gueltigAb && !/^\d{4}-\d{2}-\d{2}$/.test(gueltigAb)) { console.error("--ab erwartet JJJJ-MM-TT"); process.exit(1); }

if (ERA_DATA[yearArg]) { console.error(`${yearArg} existiert bereits in data.js.`); process.exit(1); }
const baseYear = Object.keys(ERA_DATA).sort().pop();
const base = ERA_DATA[baseYear];

// Rundung wie in den offiziellen Tabellen des Basisjahres: je Tarifgebiet auf volle Euro oder
// 0,50 €, wenn alle bisherigen Werte des Gebiets das erfüllen. Gemischte Gebiete (z. B. Hessen mit
// ,33/,67-Werten) runden je Zelle so, wie der bisherige Wert gerundet war.
const werteVon = (o) => (typeof o === "number" ? [o] : Object.values(o).flatMap(werteVon));
const rundungsSchritt = (werte) =>
  werte.every((v) => Math.abs(v - Math.round(v)) < 1e-6) ? 1
  : werte.every((v) => Math.abs(v * 2 - Math.round(v * 2)) < 1e-6) ? 0.5 : 0.01;
const scale = (v, p, schritt) => {
  const st = schritt < 0.5 ? rundungsSchritt([v]) : schritt;
  return Math.round((v * (1 + p / 100)) / st) * st;
};
const scaleDeep = (o, p, schritt) =>
  typeof o === "number" ? Number(scale(o, p, schritt).toFixed(2))
  : Object.fromEntries(Object.entries(o).map(([k, v]) => [k, scaleDeep(v, p, schritt)]));

const next = { preliminary: true };
if (gueltigAb) next.gueltigAb = gueltigAb;
next.salaryData = Object.fromEntries(
  Object.entries(base.salaryData).map(([r, t]) => [r, scaleDeep(t, pct, rundungsSchritt(werteVon(t)))])
);
// Eckentgelt = Referenzzelle der Tabelle (EG aus eckentgeltEG, sonst EG 5). Die Zelle wird im
// Basisjahr über den Betrag gesucht und im neuen Jahr übernommen, damit beide konsistent bleiben.
next.bonusData = JSON.parse(JSON.stringify(base.bonusData));
for (const [r, b] of Object.entries(next.bonusData)) {
  if (typeof b.eckentgelt !== "number") continue;
  const eg = `EG ${b.eckentgeltEG ?? 5}`;
  const stufe = Object.keys(base.salaryData[r]?.[eg] || {}).find((s) => Math.abs(base.salaryData[r][eg][s] - b.eckentgelt) < 0.005);
  if (!stufe) { console.error(`${r}: Eckentgelt ${b.eckentgelt} in ${eg} nicht gefunden.`); process.exit(1); }
  b.eckentgelt = next.salaryData[r][eg][stufe];
}
if (base.ausbildungData) {
  next.ausbildungData = Object.fromEntries(
    Object.entries(base.ausbildungData).map(([r, arr]) =>
      [r, azubiPct ? arr.map((v) => Number(scale(v, azubiPct, rundungsSchritt(arr)).toFixed(2))) : arr])
  );
}

const block = JSON.stringify({ [yearArg]: next }, null, 2).split("\n").slice(1, -1).join("\n");
const marker = /\n  \}\n\};\n/;
if (!marker.test(src)) { console.error("Ende von ERA_DATA nicht gefunden."); process.exit(1); }
write(src.replace(marker, `\n  },\n${block}\n};\n`));

console.log(`${yearArg} angelegt (Basis ${baseYear} +${pct} %, Azubi ${azubiPct ? "+" + azubiPct + " %" : "unverändert"}), preliminary: true.`);
console.log("Noch zu tun: BBG_DATA (taxes: Fallback = letztes Jahr), offizielle Werte eintragen, node generate-regions.js, Checkliste in CLAUDE.md.");
