"use strict";

// ---------------------------------------------------------------------------
// Netto-Schätzung
// Kombiniert pauschale Lohnsteuer je Steuerklasse mit SV-Beiträgen.
// Sozialversicherung (AN-Anteil):
//   Rente 9,3% + Arbeitslosen 1,3% + KV 7,3%+Zusatz/2 + Pflege (variabel)
// Pflegeversicherung: 1,7% Basis, kinderlose ab 23: +0,6%, ab 2. Kind: -0,25%
// Beitragsbemessungsgrenzen (BBG) werden jahresabhängig berücksichtigt.
// ---------------------------------------------------------------------------

// Progressive Lohnsteuer-Stützpunkte (monatl. Brutto → effektiver Steuersatz)
// Zwischen den Stützpunkten wird linear interpoliert.
const STEUER_STUFEN = {
  "1": [ // ledig
    [1200, 0.00], [1500, 0.03], [2000, 0.07], [2500, 0.10],
    [3000, 0.125], [3500, 0.145], [4000, 0.165], [5000, 0.195],
    [6000, 0.22], [7000, 0.24], [8000, 0.26], [10000, 0.29], [13000, 0.32]
  ],
  "2": [ // alleinerziehend (wie SK1, aber ~2-3% niedriger durch Entlastungsbetrag)
    [1500, 0.00], [2000, 0.04], [2500, 0.07], [3000, 0.10],
    [3500, 0.12], [4000, 0.14], [5000, 0.17], [6000, 0.195],
    [7000, 0.215], [8000, 0.235], [10000, 0.27], [13000, 0.30]
  ],
  "3": [ // verheiratet, Alleinverdiener (Splitting-Vorteil)
    [2200, 0.00], [3000, 0.03], [4000, 0.075], [5000, 0.11],
    [6000, 0.14], [7000, 0.165], [8000, 0.19], [10000, 0.225],
    [13000, 0.265]
  ],
  "4": [ // verheiratet, Doppelverdiener (wie SK1)
    [1200, 0.00], [1500, 0.03], [2000, 0.07], [2500, 0.10],
    [3000, 0.125], [3500, 0.145], [4000, 0.165], [5000, 0.195],
    [6000, 0.22], [7000, 0.24], [8000, 0.26], [10000, 0.29], [13000, 0.32]
  ],
  "5": [ // verheiratet, höher besteuert
    [1200, 0.115], [1500, 0.17], [2000, 0.21], [3000, 0.26],
    [4000, 0.29], [5000, 0.31], [6000, 0.33], [7000, 0.34],
    [8000, 0.35], [10000, 0.37], [13000, 0.39]
  ],
  "6": [ // Zweitjob (kein Freibetrag)
    [500, 0.12], [1000, 0.20], [2000, 0.27], [3000, 0.30],
    [5000, 0.34], [7000, 0.36], [10000, 0.39], [13000, 0.41]
  ]
};

// Lineare Interpolation zwischen Stützpunkten
function getProgressiveSteuerSatz(sk, bruttoMonatlich) {
  const stufen = STEUER_STUFEN[sk];
  if (!stufen) return 0;
  if (bruttoMonatlich <= stufen[0][0]) return stufen[0][1];
  if (bruttoMonatlich >= stufen[stufen.length - 1][0]) return stufen[stufen.length - 1][1];
  for (let i = 0; i < stufen.length - 1; i++) {
    const [x0, y0] = stufen[i];
    const [x1, y1] = stufen[i + 1];
    if (bruttoMonatlich >= x0 && bruttoMonatlich <= x1) {
      const t = (bruttoMonatlich - x0) / (x1 - x0);
      return y0 + t * (y1 - y0);
    }
  }
  return stufen[stufen.length - 1][1];
}

const KIRCHENSTEUER_ZUSCHLAG = 0.015; // ~1.5% zusätzlich
const KINDER_STEUER_ABZUG = 0.01;    // ~1% Steuervorteil pro Kinderfreibetrag

// SV-Beitragssätze (AN-Anteil)
const SV_RENTE = 0.093;
const SV_ARBEITSLOSEN = 0.013;
const SV_KV_BASIS = 0.073;  // AN-Anteil Basis-KV
const SV_PFLEGE_BASIS = 0.017;
const SV_PFLEGE_KINDERLOS_ZUSCHLAG = 0.006;
const SV_PFLEGE_KIND_ABZUG = 0.0025; // pro Kind ab dem 2.

function getBBG(year) {
  return BBG_DATA[year] || BBG_DATA[Object.keys(BBG_DATA).sort().pop()];
}

function updateNettoEstimate(bruttoMonatlich, bruttoJaehrlich) {
  const sk = elSteuerklasse.value;
  if (!sk || !STEUER_STUFEN[sk]) {
    elNettoResult.classList.add("hidden");
    currentNettoFaktor = null;
    return;
  }

  const kinder = parseFloat(elKinderfreibetrag.value) || 0;
  const kvZusatz = (parseFloat(elKVZusatz.value) || 0) / 100;
  const bbg = getBBG(elJahr.value);

  // --- Lohnsteuer (progressiv) ---
  let steuerSatz = getProgressiveSteuerSatz(sk, bruttoMonatlich);
  steuerSatz = Math.max(0, steuerSatz - kinder * KINDER_STEUER_ABZUG);
  if (elKirchensteuer.checked) {
    steuerSatz += KIRCHENSTEUER_ZUSCHLAG;
  }
  const steuerAbzug = bruttoMonatlich * steuerSatz;

  // --- Sozialversicherung (AN-Anteil) mit BBG ---
  const basisRvAv = Math.min(bruttoMonatlich, bbg.rvAv);
  const basisKvPv = Math.min(bruttoMonatlich, bbg.kvPv);

  const renteAbzug = basisRvAv * SV_RENTE;
  const alAbzug    = basisRvAv * SV_ARBEITSLOSEN;

  let kvPvAbzug;
  if (elKvModePkv.classList.contains("active")) {
    // PKV: fixer Monatsbeitrag (Eigenanteil, inkl. privater PV)
    kvPvAbzug = Math.max(0, parseFloat(elPkvBeitrag.value) || 0);
  } else {
    // GKV: prozentual auf beitragspflichtiges Entgelt
    const kvAnteil = SV_KV_BASIS + kvZusatz / 2;
    const kvAbzug  = basisKvPv * kvAnteil;

    let pflegeSatz = SV_PFLEGE_BASIS;
    if (kinder === 0) {
      pflegeSatz += SV_PFLEGE_KINDERLOS_ZUSCHLAG;
    } else if (kinder >= 2) {
      const abzugKinder = Math.min(kinder - 1, 4);
      pflegeSatz = Math.max(0, pflegeSatz - abzugKinder * SV_PFLEGE_KIND_ABZUG);
    }
    kvPvAbzug = kvAbzug + basisKvPv * pflegeSatz;
  }

  const svAbzug = renteAbzug + alAbzug + kvPvAbzug;

  // --- Gesamt-Abzug ---
  const gesamtAbzug = steuerAbzug + svAbzug;
  const nettoMonatlich = bruttoMonatlich - gesamtAbzug;

  // Effektiver Faktor (BBG-bereinigt) auch auf Sonderzahlungen anwenden
  currentNettoFaktor = bruttoMonatlich > 0 ? nettoMonatlich / bruttoMonatlich : null;
  const nettoJaehrlich = bruttoJaehrlich * currentNettoFaktor;

  elNettoMonthly.textContent = currencyFmt.format(nettoMonatlich);
  elNettoAnnual.textContent = currencyFmt.format(nettoJaehrlich);
  elNettoResult.classList.remove("hidden");

  return { monthly: nettoMonatlich, annual: nettoJaehrlich };
}
