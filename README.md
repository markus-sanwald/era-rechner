# ERA Entgeltrechner

**🔗 Live: [era-rechner.de](https://www.era-rechner.de/)**

Kostenloser, werbefreier Gehaltsrechner für die Metall- und Elektroindustrie auf Basis der ERA-Entgelttabellen (Entgeltrahmenabkommen) der IG Metall.

## Funktionen
- Berechnung des monatlichen Entgelts basierend auf Entgeltgruppe und Stufe
- Alle 15 ERA-Tarifgebiete: Baden-Württemberg, Bayern, Berlin/Brandenburg, Hamburg/Unterweser, Hessen, Niedersachsen, Nordrhein-Westfalen, Osnabrück-Emsland, Pfalz, Rheinland-Rheinhessen, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein/MV/NW-Niedersachsen, Thüringen
- Sonderzahlungen: Urlaubsgeld, Weihnachtsgeld, T-ZUG A, T-ZUG B, Transformationsgeld
- Leistungszulage und individuelle Betriebszugehörigkeit
- Netto-Schätzung mit progressiver Lohnsteuer und Sozialversicherung
- Mehrsprachig (Deutsch / Englisch)
- Responsives Design für Desktop und Mobilgeräte

## Technologie
Statische Website ohne Build-Prozess oder Abhängigkeiten:
- HTML, CSS, JavaScript (Vanilla)
- Gehostet via Cloudflare Pages

## Lokale Entwicklung
Die Dateien im Ordner `era-rechner/` direkt mit einem beliebigen HTTP-Server ausliefern, z.B.:
```bash
cd era-rechner
python -m http.server 3000
```
Dann im Browser `http://localhost:3000` aufrufen.

## Unterstützung
Dieses Projekt ist werbefrei und open-source. Wenn es dir weiterhilft, freue ich mich über eine [Spende via PayPal](https://paypal.me/erarechner).

## Lizenz
Dieses Projekt steht unter der [MIT-Lizenz](/LICENSE).
