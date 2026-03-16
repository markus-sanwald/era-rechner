# ERA Entgeltrechner
Webbasierter Rechner zur Berechnung des Entgelts nach dem ERA-Tarifvertrag (Entgeltrahmenabkommen) der Metall- und Elektroindustrie.

## Funktionen
- Berechnung des monatlichen Entgelts basierend auf Entgeltgruppe und -stufe
- Berücksichtigung von Leistungszulage und tariflicher Sonderzahlung (T-ZUG)
- Übersichtliche Ergebnisdarstellung mit Balkendiagramm
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
