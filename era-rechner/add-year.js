// add-year.js
// Legt ein neues Tarifjahr in data.js an (Kopie des neuesten Jahres, hochgerechnet) oder
// finalisiert ein vorläufiges Jahr.
//
//   node add-year.js 2027 3.1               neues Jahr, Entgelte + Eckentgelt +3,1 %, preliminary: true
//   node add-year.js 2027 3.1 --azubi=2.5   zusätzlich Ausbildungsvergütung +2,5 % (Standard: unverändert)
//   node add-year.js 2027 --finalize        preliminary-Flag entfernen (nach Eintragen der offiziellen Werte)
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

if (ERA_DATA[yearArg]) { console.error(`${yearArg} existiert bereits in data.js.`); process.exit(1); }
const baseYear = Object.keys(ERA_DATA).sort().pop();
const base = ERA_DATA[baseYear];

const scale = (v, p) => Math.round(v * (1 + p / 100) * 100) / 100;
const scaleDeep = (o, p) =>
  typeof o === "number" ? scale(o, p) : Object.fromEntries(Object.entries(o).map(([k, v]) => [k, scaleDeep(v, p)]));

const next = { preliminary: true, salaryData: scaleDeep(base.salaryData, pct) };
next.bonusData = JSON.parse(JSON.stringify(base.bonusData));
for (const b of Object.values(next.bonusData)) if (typeof b.eckentgelt === "number") b.eckentgelt = scale(b.eckentgelt, pct);
if (base.ausbildungData) {
  next.ausbildungData = Object.fromEntries(
    Object.entries(base.ausbildungData).map(([r, arr]) => [r, azubiPct ? arr.map((v) => scale(v, azubiPct)) : arr])
  );
}

const block = JSON.stringify({ [yearArg]: next }, null, 2).split("\n").slice(1, -1).join("\n");
const marker = /\n  \}\n\};\n/;
if (!marker.test(src)) { console.error("Ende von ERA_DATA nicht gefunden."); process.exit(1); }
write(src.replace(marker, `\n  },\n${block}\n};\n`));

console.log(`${yearArg} angelegt (Basis ${baseYear} +${pct} %, Azubi ${azubiPct ? "+" + azubiPct + " %" : "unverändert"}), preliminary: true.`);
console.log("Noch zu tun: BBG_DATA (taxes: Fallback = letztes Jahr), offizielle Werte eintragen, node generate-regions.js, Checkliste in CLAUDE.md.");
