"use strict";

const TRANSLATIONS = {
  de: {
    // Page
    pageTitle: "ERA Entgeltrechner {year} \u2013 IG Metall Gehaltsrechner",
    title: "ERA Entgeltrechner \u2013 IG Metall",
    subtitle: "Gehaltsrechner Metall- und Elektroindustrie",
    subtitleWithYear: "Gehaltsrechner ${year} \u00b7 Metall- und Elektroindustrie",
    headerDisclaimer: "Unabh\u00e4ngiges Open-Source-Projekt \u2013 kein offizielles Angebot der IG Metall.",
    ariaLabel: "Gehaltsrechner",

    // Form labels
    labelYear: "Tarifjahr",
    labelRegion: "Bundesland / Tarifgebiet",
    labelGrade: "Entgeltgruppe (EG)",
    labelStep: "Stufe",
    labelHours: "W\u00f6chentliche Arbeitszeit",
    labelStartDate: "Eintrittsdatum",
    labelTZugADaysOff: "T-ZUG A als freie Tage nehmen",
    labelBonus: "Leistungszulage",
    labelSonderzahlung: "Sonderzahlung / Gewinnbeteiligung (j\u00e4hrlich)",
    labelFreiwilligeZulage: "Freiwillige monatliche Zulage",
    labelWeihnachtsgeldManuell: "Weihnachtsgeld-Satz (manuell \u00fcbersteuern)",
    wgManuellAuto: "automatisch",

    // Datepicker
    dpMonths: ["Januar", "Februar", "M\u00e4rz", "April", "Mai", "Juni",
               "Juli", "August", "September", "Oktober", "November", "Dezember"],
    dpWeekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    dpToday: "Heute",
    dpClear: "L\u00f6schen",

    // Placeholders
    placeholder: "Bitte w\u00e4hlen\u2026",

    // Year option
    yearOption: "ab 01.04.${year}",

    // Year notice
    yearNotice2026: "Die Werte ab 01.04.2026 sind vorl\u00e4ufig (Vorjahreswerte + 3,1\u00a0%).",

    // Result
    resultMonthly: "Monatsentgelt (brutto)",
    resultMonthlySub: "ohne Sonderzahlungen",
    resultHourly: "Brutto-Stundenlohn",
    resultAnnual: "Bruttojahresgehalt (gesamt)",
    resultAvgMonthly: "Ø Monatsdurchschnitt (brutto)",
    resultAvgMonthlySub: "inkl. Sonderzahlungen",
    resultAvgMonthlyNetto: "Ø Monatsdurchschnitt (netto)",

    // Netto Estimate
    labelSteuerklasse: "Steuerklasse",
    steuerklasseNone: "\u2013 keine Angabe \u2013",
    steuerklasse1: "Steuerklasse 1 (ledig)",
    steuerklasse2: "Steuerklasse 2 (alleinerziehend)",
    steuerklasse3: "Steuerklasse 3 (verheiratet, Alleinverdiener)",
    steuerklasse4: "Steuerklasse 4 (verheiratet, Doppelverdiener)",
    steuerklasse5: "Steuerklasse 5 (verheiratet, Zweitverdiener)",
    steuerklasse6: "Steuerklasse 6 (Zweitjob)",
    labelKinder: "Kinderfreibetr\u00e4ge",
    labelKvMode: "Krankenversicherung",
    kvModeGkv: "Gesetzlich (GKV)",
    kvModePkv: "Privat (PKV)",
    labelKVZusatz: "KV-Zusatzbeitrag (%)",
    labelPkvBeitrag: "PKV-Monatsbeitrag (Eigenanteil)",
    hintPkvBeitrag: "Anteil nach AG-Zuschuss, inkl. privater Pflegeversicherung (Gesamtbeitrag minus Arbeitgeberzuschuss)",
    labelKirchensteuer: "Kirchensteuer",
    optionalToggle: "Weitere Optionen einblenden",
    optionalToggleHide: "Weitere Optionen ausblenden",
    nettoToggle: "Netto-Sch\u00e4tzung einblenden",
    nettoToggleHide: "Netto-Sch\u00e4tzung ausblenden",
    resultNettoMonthly: "Gesch\u00e4tztes monatliches Netto",
    resultNettoAnnual: "Gesch\u00e4tztes Jahresnetto",
    nettoHint: "\u2139 Grobe Sch\u00e4tzung auf Basis pauschaler Abzugss\u00e4tze. Kein Ersatz f\u00fcr eine individuelle Steuerberechnung.",

    // Breakdown
    breakdownTitle: "Aufschl\u00fcsselung",
    breakdownBase: "12 \u00d7 Monatsentgelt",
    breakdownUtZulage: "12 \u00d7 Leistungszulage",
    breakdownHolidayPay: "Urlaubsgeld",
    breakdownHolidayPayDetail: "(69\u00a0% eines ME)",
    breakdownXmasPay: "Weihnachtsgeld",
    breakdownXmasPayDetail: "(55\u00a0% eines ME)",
    breakdownTZugA: "T-ZUG A",
    breakdownTZugADetail: "(27,5\u00a0% eines ME)",
    breakdownTGeld: "T-Geld",
    breakdownTGeldDetail: "(18,4\u00a0% eines ME)",
    breakdownTZugB: "T-ZUG B",
    breakdownTZugBDetail: "(18,5\u00a0% v. Eckentgelt)",
    breakdownSonderzahlung: "Sonderzahlung",
    breakdownFreiwilligeZulage: "12 × Freiwillige Zulage",

    // Tooltips
    tooltipBase: "Tarifliches Monatsentgelt gem\u00e4\u00df ERA-Entgelttabelle, ggf. angepasst an die individuelle Wochenarbeitszeit.",
    tooltipUtZulage: "Freiwillige Leistungszulage des Arbeitgebers oberhalb des Tarifentgelts. Wird nicht bei Sonderzahlungen ber\u00fccksichtigt.",
    tooltipHolidayPay: "Zus\u00e4tzliches Urlaubsgeld, das einmal j\u00e4hrlich im Juni ausgezahlt wird. Berechnung auf Basis des tariflichen Monatsentgelts.",
    tooltipXmasPay: "Jahressonderzahlung im November. Der volle Satz (55\u00a0%) wird nach 36 Monaten Betriebszugeh\u00f6rigkeit erreicht. Vorher gestaffelt: 25\u00a0% (ab 6 Mon.), 35\u00a0% (ab 12 Mon.), 45\u00a0% (ab 24 Mon.).",
    tooltipTZugA: "Tarifliches Zusatzgeld A \u2013 Auszahlung im Juli. Kann alternativ in freie Tage umgewandelt werden (bis zu 8 Tage). Wird bei Umwandlung nicht ausgezahlt.",
    tooltipTGeld: "Transformationsgeld \u2013 Auszahlung im Juli zusammen mit T-ZUG\u00a0A. Dient der Finanzierung von Qualifizierung und Transformation in der Metall- und Elektroindustrie.",
    tooltipTZugB: "Tarifliches Zusatzgeld B \u2013 fester Betrag auf Basis des Eckentgelts (EG\u00a05), unabh\u00e4ngig von der pers\u00f6nlichen Entgeltgruppe. Ab 2026: 26,5\u00a0% (vorher 18,5\u00a0%). Auszahlung im Februar.",

    // Chart
    chartTitle: "Bruttoverdienst nach Monaten",
    chartTitleNetto: "Nettoverdienst nach Monaten (Sch\u00e4tzung)",
    chartViewBrutto: "Brutto",
    chartViewNetto: "Netto",
    chartMonths: ["Jan", "Feb", "M\u00e4r", "Apr", "Mai", "Jun",
                  "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    chartLabels: {
      monatsentgelt:      "Monatsentgelt",
      utZulage:           "Leistungszulage",
      freiwilligeZulage:  "Freiwillige Zulage",
      urlaubsgeld:        "Urlaubsgeld",
      tZugA:              "T-ZUG A",
      tGeld:              "T-Geld",
      tZugB:              "T-ZUG B",
      weihnachtsgeld:     "Weihnachtsgeld"
    },

    // Dynamic labels
    holidayPayPct: "(${pct}\u00a0% eines ME)",
    xmasPayPct: "(${pct}\u00a0% eines ME)",
    xmasPayNone: "(kein Anspruch)",
    xmasPayManual: "(manuell)",
    utZulagePct: "(${pct}\u00a0% v. ME)",
    tZugBPct: "(${pct}\u00a0% v. Eckentgelt)",


    // Regions (identity mapping for German)
    regions: {},

    // Steps (identity mapping for German)
    steps: {},

    // Compare
    compareSave: "Zum Vergleich merken",
    compareTitle: "Vergleich",
    compareDiff: "Differenz",
    compareCurrent: "Aktuell",
    compareBruttoMonthly: "Monatl.<br>Brutto",
    compareBruttoAnnual: "Jahres\u00ADbrutto",
    compareNettoMonthly: "Monatl.<br>Netto",
    compareNettoAnnual: "Jahres\u00ADnetto",
    compareReset: "Vergleich zur\u00fccksetzen",

    // Contact Form
    contactTitle: "Kontakt",
    contactIntro: "Anregungen, Fehler oder Feedback? Schreib mir eine Nachricht:",
    contactName: "Name",
    contactEmail: "E-Mail",
    contactSubject: "Betreff",
    contactSubjectFeedback: "Feedback",
    contactSubjectBug: "Fehler melden",
    contactSubjectFeature: "Verbesserungsvorschlag",
    contactSubjectOther: "Sonstiges",
    contactMessage: "Nachricht",
    contactSend: "Nachricht senden",
    contactSuccess: "Danke f\u00fcr deine Nachricht! Sie wurde erfolgreich gesendet.",

    // SEO Content
    seoTitle: "ERA Entgelttabelle 2026 \u2013 Tariflohn in der Metall- und Elektroindustrie berechnen",
    seoText1: "Dieser kostenlose Open-Source-Rechner basiert auf den ERA-Entgelttabellen der Metall- und Elektroindustrie und wird nach jeder Tarifrunde aktualisiert. Er unterst\u00fctzt alle 15 Tarifgebiete von Baden-W\u00fcrttemberg bis Th\u00fcringen und berechnet neben dem monatlichen Bruttolohn auch alle tariflichen Sonderzahlungen: Weihnachtsgeld, Urlaubsgeld, T-ZUG\u00a0A, Transformationsgeld und T-ZUG\u00a0B.",
    seoText2: "Die IG Metall ERA-Entgelttabellen unterscheiden sich je nach Bundesland und Entgeltgruppe (EG\u00a01 bis EG\u00a017). Mit diesem Rechner l\u00e4sst sich das pers\u00f6nliche Jahresbrutto schnell ermitteln \u2013 inkl. anteiliger Berechnung bei Teilzeit und optionaler Leistungszulage.",
    seoDisclaimer: "Unabh\u00e4ngiges Open-Source-Projekt \u2013 kein offizielles Angebot der IG Metall.",

    // FAQ
    regionNavTitle: "ERA Entgelttabellen nach Tarifgebiet",
    regionNavIntro: "W\u00e4hle dein Tarifgebiet f\u00fcr die vollst\u00e4ndige Entgelttabelle mit allen Entgeltgruppen und Sonderzahlungen:",
    rpIntro: "Die ERA Entgelttabelle f\u00fcr das Tarifgebiet <strong>${region}</strong> listet alle ${count} Entgeltgruppen (EG) mit den monatlichen Grundentgelten nach dem IG Metall Tarifvertrag. G\u00fcltig f\u00fcr Vollzeit (35 Std./Woche). Mit dem Rechner kannst du dein individuelles Gehalt inkl. Teilzeit, Leistungszulage und Nettolohn berechnen.",
    rpTableHeading: "Entgelttabelle",
    rpBonusHeading: "Sonderzahlungen",
    rpCtaText: "Berechne dein pers\u00f6nliches Gehalt inkl. Teilzeit, Leistungszulage und Nettolohn:",
    rpCtaBtn: "Gehaltsrechner f\u00fcr ${region} \u00f6ffnen \u2192",
    rpAllRegions: "Alle Tarifgebiete",
    rpSubtitle: "IG Metall Gehaltstabelle 2025 & 2026",
    rpBonusLabelUrlaubsgeld: "Urlaubsgeld",
    rpBonusLabelTZugA: "T-ZUG A",
    rpBonusLabelTGeld: "Transformationsgeld",
    rpBonusLabelTZugB: "T-ZUG B (Jahresbetrag)",
    rpBonusLabelWeihnachtsgeld: "Weihnachtsgeld",
    rpBonusOfMonthly: "des Monatsentgelts",
    rpBonusTZugANote: "oder bis zu 8 freie Tage",
    rpBonusTZugBNote: "des Eckentgelts EG\u00a05",
    rpBonusTenure: "ab ${months} Monaten Betriebszugeh\u00f6rigkeit",
    faqTitle: "H\u00e4ufige Fragen zum ERA Rechner",
    faq1Q: "Was ist das ERA-Entgeltsystem der Metall- und Elektroindustrie?",
    faq1A: "Das Entgeltrahmenabkommen (ERA) ist das Entgeltsystem f\u00fcr die Metall- und Elektroindustrie in Deutschland. Es regelt die Eingruppierung in Entgeltgruppen (EG\u00a01\u201317, je nach Tarifgebiet) und wird zwischen den Arbeitgeberverb\u00e4nden und der IG Metall ausgehandelt. Die ERA-Entgelttabellen legen die monatlichen Grundentgelte f\u00fcr jede Entgeltgruppe und jedes Tarifgebiet fest.",
    faq2Q: "Wie aktuell sind die Entgelttabellen in diesem Rechner?",
    faq2A: "Der Rechner enth\u00e4lt die offiziellen ERA-Entgelttabellen f\u00fcr 2025 und 2026 (g\u00fcltig ab 01.04.2026) f\u00fcr alle 15 Tarifgebiete. Die Werte werden nach jeder Tarifrunde zeitnah aktualisiert.",
    faq3Q: "Welche Sonderzahlungen sind im Jahresbrutto enthalten?",
    faq3A: "Das berechnete Bruttojahresgehalt enth\u00e4lt neben dem monatlichen Entgelt auch: Urlaubsgeld (69\u00a0% eines Monatsentgelts, in NRW 72\u00a0%), Weihnachtsgeld (25\u201355\u00a0% je nach Betriebszugeh\u00f6rigkeit), T-ZUG\u00a0A (27,5\u00a0%), Transformationsgeld (18,4\u00a0%) und T-ZUG\u00a0B (fester Betrag auf Basis des Eckentgelts). Alle Sonderzahlungen au\u00dfer T-ZUG\u00a0B berechnen sich auf Basis des Monatsentgelts inkl. Leistungszulage.",
    faq4Q: "Was ist die Leistungszulage und wie wirkt sie sich aus?",
    faq4A: "Die Leistungszulage ist ein prozentualer Aufschlag auf das tarifliche Grundentgelt, den der Arbeitgeber individuell gew\u00e4hrt. Sie erh\u00f6ht das monatliche Bruttoentgelt und flie\u00dft in die Berechnung von Urlaubsgeld, Weihnachtsgeld, T-ZUG\u00a0A und Transformationsgeld ein. Der T-ZUG\u00a0B basiert auf dem Eckentgelt (EG\u00a05) und ist unabh\u00e4ngig davon.",
    faq5Q: "Ist dies ein offizielles Angebot der IG Metall?",
    faq5A: "Nein. Dieser Rechner ist ein unabh\u00e4ngiges, kostenloses und werbefreies Open-Source-Projekt. Er basiert auf den \u00f6ffentlich verf\u00fcgbaren ERA-Entgelttabellen, ist jedoch kein offizielles Angebot der IG Metall oder eines Arbeitgeberverbandes. Alle Angaben ohne Gew\u00e4hr.",
    faq6Q: "Wie genau ist die Netto-Sch\u00e4tzung?",
    faq6A: "Die Netto-Sch\u00e4tzung ist eine N\u00e4herung auf Basis progressiver Lohnsteuers\u00e4tze und der aktuellen Sozialversicherungsbeitr\u00e4ge (inkl. Beitragsbemessungsgrenzen). Sie ersetzt keine individuelle Steuerberechnung \u2013 f\u00fcr verbindliche Werte empfehlen wir den offiziellen Lohnsteuerrechner des Bundesfinanzministeriums.",
    faq7Q: "F\u00fcr welche Bundesl\u00e4nder und Tarifgebiete gilt der Rechner?",
    faq7A: "Der Rechner unterst\u00fctzt alle 15 ERA-Tarifgebiete: Baden-W\u00fcrttemberg, Bayern, Berlin/Brandenburg, Hamburg/Unterweser, Hessen, Niedersachsen, Nordrhein-Westfalen, Osnabr\u00fcck-Emsland, Pfalz, Rheinland-Rheinhessen, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein/MV/NW-Niedersachsen und Th\u00fcringen.",
    faq8Q: "Wie kann ich das Projekt unterst\u00fctzen?",
    faq8A: "Der Rechner ist kostenlos, werbefrei und wird in der Freizeit gepflegt. Wer das Projekt unterst\u00fctzen m\u00f6chte, kann das gerne \u00fcber eine kleine Spende via PayPal tun \u2013 das hilft, den Dienst langfristig am Laufen zu halten.",
    faq9Q: "Was ist der Unterschied zwischen T-ZUG A und T-ZUG B?",
    faq9A: "T-ZUG A betr\u00e4gt 27,5\u00a0% eines Monatsentgelts und kann wahlweise als Geldleistung oder als bis zu 8 bezahlte freie Tage genommen werden. T-ZUG B ist ein j\u00e4hrlicher Festbetrag, der sich nach dem Eckentgelt (EG\u00a05) der jeweiligen Region richtet \u2013 unabh\u00e4ngig von der pers\u00f6nlichen Entgeltgruppe. Beide Zahlungen werden einmal j\u00e4hrlich ausgezahlt.",
    faq10Q: "Wie berechne ich mein ERA-Gehalt bei Teilzeit?",
    faq10A: "Das Teilzeitgehalt ergibt sich aus: Grundentgelt \u00d7 (tats\u00e4chliche Wochenstunden \u00f7 35). Bei 28\u00a0Stunden in der Woche betr\u00e4gt das Entgelt also 80\u00a0% des Vollzeitwertes. Alle Sonderzahlungen wie Urlaubsgeld, Weihnachtsgeld und T-ZUG werden anteilig auf Basis dieses angepassten Monatsentgelts berechnet. Im Rechner einfach die gew\u00fcnschten Wochenstunden eintragen \u2013 alles wird automatisch umgerechnet.",
    faq11Q: "Was bedeutet Leistungszulage und wie beeinflusst sie Sonderzahlungen?",
    faq11A: "Die Leistungszulage ist ein individueller prozentualer Aufschlag auf das tarifliche Grundentgelt (0\u201330\u00a0%), den der Arbeitgeber gew\u00e4hrt. Sie erh\u00f6ht nicht nur das monatliche Bruttogehalt, sondern wirkt sich auch auf Urlaubsgeld, Weihnachtsgeld, T-ZUG\u00a0A und Transformationsgeld aus, da diese als Prozentsatz des Monatsentgelts berechnet werden. Einzige Ausnahme: T-ZUG\u00a0B basiert auf dem Eckentgelt EG\u00a05 und ist von der pers\u00f6nlichen Leistungszulage unabh\u00e4ngig.",

    // Footer
    footerSource: "Quelle: IG Metall ERA-Entgelttabellen",
    footerDisclaimer: "Dies ist kein offizielles Angebot der IG Metall. Alle Angaben ohne Gew\u00e4hr.",
    footerFeedback: "Anregungen, Fehler oder Feedback? <a href=\"mailto:info@era-rechner.de\">info@era-rechner.de</a>",
    footerDonate: "Dieses Projekt ist werbefrei und open-source. <a href=\"https://paypal.me/erarechner\" target=\"_blank\" rel=\"noopener noreferrer\">Unterstütze es mit einer Spende via PayPal</a>.",
    footerHome: "ERA Entgeltrechner",
    footerContact: "Kontakt",
    footerImprint: "Impressum",
    footerPrivacy: "Datenschutz",
    footerGithub: "Quellcode auf GitHub",
    backToCalculator: "\u2190 Zur\u00fcck zum Rechner",

    // Glossar
    glossarTitle: "ERA Glossar",
    glossarSubtitle: "Begriffe der Metall- und Elektroindustrie erkl\u00e4rt",
    glossarHeading: "ERA-Begriffe von A\u00a0bis\u00a0Z",
    glossarIntro: "Das ERA-Entgeltsystem hat eigene Fachbegriffe. Hier findest du alle wichtigen Begriffe kurz erkl\u00e4rt \u2013 mit direktem Link zum <a href=\"/\">ERA Entgeltrechner</a>.",
    glossarCtaText: "Jetzt dein pers\u00f6nliches ERA-Gehalt berechnen:",
    glossarCtaBtn: "Zum ERA Entgeltrechner",
    gQ_betriebsz: "Betriebszugeh\u00f6rigkeit",
    gA_betriebsz: "Die Dauer der ununterbrochenen Zugeh\u00f6rigkeit zum Betrieb. Sie beeinflusst ma\u00dfgeblich den Weihnachtsgeld-Satz: Bis zu einem Jahr Zugeh\u00f6rigkeit erh\u00e4ltst du 25\u00a0%, ab einem Jahr 35\u00a0%, ab drei Jahren 45\u00a0% und ab f\u00fcnf Jahren 55\u00a0% eines Monatsentgelts. Ma\u00dfgeblicher Stichtag f\u00fcr die Berechnung ist der <strong>31.\u00a0Dezember des jeweiligen Tarifjahres</strong> \u2013 es z\u00e4hlt also die vollendete Betriebszugeh\u00f6rigkeit bis Jahresende, nicht der Auszahlungszeitpunkt im November. Im <a href=\"/\">ERA Rechner</a> wird die Betriebszugeh\u00f6rigkeit automatisch aus dem eingetragenen Eintrittsdatum berechnet.",
    gQ_eckentgelt: "Eckentgelt",
    gA_eckentgelt: "Das Grundentgelt der Referenz-Entgeltgruppe EG\u00a05 im jeweiligen Tarifgebiet. Das Eckentgelt ist ein zentraler Referenzwert im ERA-System: T-ZUG\u00a0B richtet sich nach dem Eckentgelt \u2013 unabh\u00e4ngig davon, in welcher EG der Besch\u00e4ftigte eingruppiert ist. Das Eckentgelt wird bei jeder Tarifrunde gemeinsam mit allen anderen Entgelttabellenwerten angehoben.",
    gQ_eg: "Entgeltgruppe (EG)",
    gA_eg: "Die Einstufung eines Arbeitsplatzes in das ERA-Entgeltschema nach den Anforderungen der T\u00e4tigkeit (Wissen, Denken, Handlungsspielraum). Je nach Tarifgebiet gibt es EG\u00a01 bis EG\u00a012 (Bayern) oder EG\u00a01 bis EG\u00a017 (z.\u00a0B. Baden-W\u00fcrttemberg). Die Entgeltgruppe bestimmt das tarifliche Grundentgelt. Die Eingruppierung erfolgt durch Stellenbewertung, nicht nach dem Berufsbild.",
    gQ_era: "ERA \u2013 Entgeltrahmenabkommen",
    gA_era: "ERA steht f\u00fcr Entgeltrahmenabkommen und ist der Tarifvertrag, der das Entgeltsystem f\u00fcr Besch\u00e4ftigte in der Metall- und Elektroindustrie regelt. ERA wurde zwischen 2004 und 2009 in den meisten Tarifgebieten eingef\u00fchrt und ersetzte die fr\u00fcheren, getrennten Lohn- und Gehaltsrahmentarifvertr\u00e4ge. Es vereint gewerbliche Arbeitnehmer und Angestellte in einem einheitlichen System mit gemeinsamen Entgeltgruppen, Grundentgelten und Sonderzahlungen. Vertragspartner sind die <a href=\"https://www.igmetall.de\" target=\"_blank\" rel=\"noopener noreferrer\">IG Metall</a> und die Arbeitgeberverb\u00e4nde der Metall- und Elektroindustrie.",
    gQ_grundentgelt: "Grundentgelt",
    gA_grundentgelt: "Das in der ERA-Entgelttabelle festgelegte monatliche Bruttoentgelt f\u00fcr eine bestimmte Entgeltgruppe und Stufe. Es ist der Ausgangswert f\u00fcr alle weiteren Berechnungen: Leistungszulage, Urlaubsgeld, Weihnachtsgeld, T-ZUG\u00a0A und Transformationsgeld werden alle auf Basis des Grundentgelts (zzgl. Leistungszulage) ermittelt. Ausnahme: T-ZUG\u00a0B basiert auf dem Eckentgelt (EG\u00a05), nicht auf dem pers\u00f6nlichen Grundentgelt.",
    gQ_jahresbrutto: "Jahresbrutto",
    gA_jahresbrutto: "Die Summe aller Bruttoverg\u00fctungen eines Jahres. Im ERA-System setzt sich das Jahresbrutto zusammen aus: 12\u00a0\u00d7\u00a0Monatsentgelt (Grundentgelt + Leistungszulage) + Urlaubsgeld (69\u00a0%) + Weihnachtsgeld (25\u201355\u00a0%) + T-ZUG\u00a0A (27,5\u00a0%) + Transformationsgeld (18,4\u00a0%) + T-ZUG\u00a0B (Festbetrag). Der <a href=\"/\">ERA Entgeltrechner</a> berechnet das Jahresbrutto automatisch inkl. aller tariflichen Sonderzahlungen.",
    gQ_leistung: "Leistungszulage",
    gA_leistung: "Ein individueller prozentualer Aufschlag auf das tarifliche Grundentgelt, den der Arbeitgeber f\u00fcr \u00fcbertarifliche Leistung gew\u00e4hrt. Tariflich m\u00f6glich sind 0\u00a0bis 30\u00a0%. Die Leistungszulage erh\u00f6ht nicht nur das monatliche Bruttogehalt, sondern wirkt sich auch auf Urlaubsgeld, Weihnachtsgeld, T-ZUG\u00a0A und Transformationsgeld aus, da diese als Prozentsatz des Monatsentgelts berechnet werden. T-ZUG\u00a0B dagegen basiert auf dem Eckentgelt und ist von der pers\u00f6nlichen Leistungszulage unabh\u00e4ngig.",
    gQ_stufe: "Stufe (A\u2013E)",
    gA_stufe: "Innerhalb einer Entgeltgruppe gibt es in vielen Tarifgebieten Erfahrungsstufen A bis E (nicht in allen Regionen). Die Einreihung h\u00e4ngt von Betriebs- und Berufserfahrung ab. Stufe\u00a0A ist die Einstiegsstufe, Stufe\u00a0E die h\u00f6chste. Der Aufstieg von Stufe zu Stufe erfolgt in der Regel automatisch nach einer definierten Anzahl von Jahren in der jeweiligen Gruppe.",
    gQ_tarifgebiet: "Tarifgebiet",
    gA_tarifgebiet: "Der regionale Geltungsbereich eines ERA-Tarifvertrags. In Deutschland gibt es 15 ERA-Tarifgebiete: Baden-W\u00fcrttemberg, Bayern, Berlin/Brandenburg, Hamburg/Unterweser, Hessen, Niedersachsen, Nordrhein-Westfalen, Osnabr\u00fcck-Emsland, Pfalz, Rheinland-Rheinhessen, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein/MV/NW-Niedersachsen und Th\u00fcringen. Jedes Tarifgebiet verhandelt eigenst\u00e4ndig und hat eigene Entgelttabellen \u2013 daher k\u00f6nnen die Grundentgelte zwischen Regionen abweichen.",
    gQ_teilzeit: "Teilzeit im ERA",
    gA_teilzeit: "Bei Teilzeit wird das Entgelt anteilig berechnet: Grundentgelt \u00d7 (tats\u00e4chliche Wochenstunden \u00f7 35). Bei 28\u00a0Stunden pro Woche entspricht das 80\u00a0% des Vollzeitwerts. Alle prozentualen Sonderzahlungen (Urlaubsgeld, Weihnachtsgeld, T-ZUG\u00a0A, Transformationsgeld) werden auf Basis dieses angepassten Monatsentgelts berechnet. Im <a href=\"/\">ERA Entgeltrechner</a> gen\u00fcgt es, die Wochenstunden einzutragen \u2013 alles wird automatisch umgerechnet.",
    gQ_transformation: "Transformationsgeld (T-Geld)",
    gA_transformation: "Eine j\u00e4hrliche Sonderzahlung von 18,4\u00a0% eines Monatsentgelts, die ab 2024 gilt. Das Transformationsgeld wurde in der Tarifrunde 2021 vereinbart und soll Besch\u00e4ftigte beim Strukturwandel der Branche (Digitalisierung, Elektromobilit\u00e4t) unterst\u00fctzen. Es berechnet sich wie Urlaubsgeld und Weihnachtsgeld auf Basis des Monatsentgelts inklusive Leistungszulage.",
    gQ_tzugA: "T-ZUG A \u2013 Tarifliches Zus\u00e4tzgeld A",
    gA_tzugA: "Eine j\u00e4hrliche Sonderzahlung von 27,5\u00a0% eines Monatsentgelts. Der Besch\u00e4ftigte kann w\u00e4hlen: entweder die Geldleistung oder bis zu 8 bezahlte freie Tage \u2013 allerdings nur unter bestimmten Voraussetzungen (z.\u00a0B. Pflege von Angeh\u00f6rigen, Kinderbetreuung unter 8 Jahren oder Schichtarbeit). T-ZUG\u00a0A berechnet sich auf Basis des Monatsentgelts inkl. Leistungszulage. Im Rechner kann die Wahlm\u00f6glichkeit unter \u201eWeitere Optionen\u201c eingestellt werden.",
    gQ_tzugB: "T-ZUG B \u2013 Tarifliches Zus\u00e4tzgeld B",
    gA_tzugB: "Ein j\u00e4hrlicher Festbetrag, der sich nach dem Eckentgelt (EG\u00a05) des jeweiligen Tarifgebiets berechnet. T-ZUG\u00a0B ist f\u00fcr alle Besch\u00e4ftigten im Tarifgebiet gleich hoch \u2013 unabh\u00e4ngig von der pers\u00f6nlichen Entgeltgruppe oder Leistungszulage. Er wird einmal j\u00e4hrlich ausgezahlt. Bei Teilzeit wird T-ZUG\u00a0B anteilig gew\u00e4hrt.",
    gQ_urlaubsgeld: "Urlaubsgeld",
    gA_urlaubsgeld: "Eine j\u00e4hrliche Sonderzahlung von 69\u00a0% eines Monatsentgelts (in NRW 72\u00a0%). Das Urlaubsgeld wird in der Regel im Sommer ausgezahlt und berechnet sich auf Basis des Monatsentgelts inklusive Leistungszulage. Es ist eine tarifliche Leistung und gilt f\u00fcr alle Besch\u00e4ftigten im jeweiligen ERA-Tarifgebiet.",
    gQ_weihnacht: "Weihnachtsgeld",
    gA_weihnacht: "Eine j\u00e4hrliche Sonderzahlung, deren H\u00f6he von der Betriebszugeh\u00f6rigkeit abh\u00e4ngt: 25\u00a0% (bis 1 Jahr), 35\u00a0% (1\u20133 Jahre), 45\u00a0% (3\u20135 Jahre) oder 55\u00a0% (ab 5 Jahren Zugeh\u00f6rigkeit) eines Monatsentgelts. In einigen Tarifgebieten gelten abweichende S\u00e4tze. Ma\u00dfgeblicher Stichtag f\u00fcr die Staffeleinordnung ist der <strong>31.\u00a0Dezember des Tarifjahres</strong>: Wer z.\u00a0B. am 15.\u00a0November eintritt, hat zum 31.\u00a0Dezember desselben Jahres noch keine 12\u00a0Monate Zugeh\u00f6rigkeit vollendet und erh\u00e4lt den Einsteigersatz von 25\u00a0%. Das Weihnachtsgeld wird \u00fcblicherweise im November ausgezahlt. Im Rechner wird der Satz anhand des eingetragenen Eintrittsdatums automatisch bestimmt.",
  },

  en: {
    // Page
    pageTitle: "ERA Salary Calculator {year} \u2013 IG Metall Pay Calculator",
    title: "ERA Salary Calculator \u2013 IG Metall",
    subtitle: "Pay Calculator for Metal and Electrical Industry",
    subtitleWithYear: "Pay Calculator ${year} \u00b7 Metal and Electrical Industry",
    headerDisclaimer: "Independent open-source project \u2013 not an official IG Metall service.",
    ariaLabel: "Salary Calculator",

    // Form labels
    labelYear: "Tariff Year",
    labelRegion: "Federal State / Tariff Region",
    labelGrade: "Pay Grade (EG)",
    labelStep: "Step",
    labelHours: "Weekly Working Hours",
    labelStartDate: "Start Date",
    labelTZugADaysOff: "Take T-ZUG A as days off",
    labelBonus: "Performance Bonus",
    labelSonderzahlung: "Special Payment / Profit Sharing (annual)",
    labelFreiwilligeZulage: "Voluntary monthly allowance",
    labelWeihnachtsgeldManuell: "Christmas Bonus Rate (manual override)",
    wgManuellAuto: "automatic",

    // Datepicker
    dpMonths: ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"],
    dpWeekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    dpToday: "Today",
    dpClear: "Clear",

    // Placeholders
    placeholder: "Please select\u2026",

    // Year option
    yearOption: "from 04/01/${year}",

    // Year notice
    yearNotice2026: "Values from 04/01/2026 are preliminary (previous year + 3.1\u00a0%).",

    // Result
    resultMonthly: "Monthly Salary (gross)",
    resultMonthlySub: "excl. special payments",
    resultHourly: "Gross Hourly Wage",
    resultAnnual: "Gross Annual Salary (total)",
    resultAvgMonthly: "Avg. monthly (gross)",
    resultAvgMonthlySub: "incl. special payments",
    resultAvgMonthlyNetto: "Avg. monthly (net)",

    // Netto Estimate
    labelSteuerklasse: "Tax class",
    steuerklasseNone: "\u2013 not specified \u2013",
    steuerklasse1: "Tax class 1 (single)",
    steuerklasse2: "Tax class 2 (single parent)",
    steuerklasse3: "Tax class 3 (married, sole earner)",
    steuerklasse4: "Tax class 4 (married, dual income)",
    steuerklasse5: "Tax class 5 (married, secondary earner)",
    steuerklasse6: "Tax class 6 (second job)",
    labelKinder: "Child tax allowances",
    labelKvMode: "Health insurance",
    kvModeGkv: "Statutory (GKV)",
    kvModePkv: "Private (PKV)",
    labelKVZusatz: "Health ins. surcharge (%)",
    labelPkvBeitrag: "PKV monthly premium (employee share)",
    hintPkvBeitrag: "Share after employer subsidy, incl. private long-term care insurance (total premium minus employer subsidy)",
    labelKirchensteuer: "Church tax",
    optionalToggle: "Show more options",
    optionalToggleHide: "Hide more options",
    nettoToggle: "Show net estimate",
    nettoToggleHide: "Hide net estimate",
    resultNettoMonthly: "Estimated monthly net",
    resultNettoAnnual: "Estimated annual net",
    nettoHint: "\u2139 Rough estimate based on flat deduction rates. Not a substitute for individual tax calculation.",

    // Breakdown
    breakdownTitle: "Breakdown",
    breakdownBase: "12 \u00d7 Monthly Salary",
    breakdownUtZulage: "12 \u00d7 Performance Bonus",
    breakdownHolidayPay: "Holiday Pay",
    breakdownHolidayPayDetail: "(69\u00a0% of monthly)",
    breakdownXmasPay: "Christmas Bonus",
    breakdownXmasPayDetail: "(55\u00a0% of monthly)",
    breakdownTZugA: "T-ZUG A",
    breakdownTZugADetail: "(27.5\u00a0% of monthly)",
    breakdownTGeld: "T-Geld",
    breakdownTGeldDetail: "(18.4\u00a0% of monthly)",
    breakdownTZugB: "T-ZUG B",
    breakdownTZugBDetail: "(18.5\u00a0% of base salary)",
    breakdownSonderzahlung: "Special Payment",
    breakdownFreiwilligeZulage: "12 × Voluntary Allowance",

    // Tooltips
    tooltipBase: "Tariff monthly salary according to the ERA pay table, adjusted for individual weekly working hours if applicable.",
    tooltipUtZulage: "Voluntary performance bonus from the employer above the tariff salary. Not included in special payment calculations.",
    tooltipHolidayPay: "Additional holiday pay, paid once a year in June. Calculated based on the tariff monthly salary.",
    tooltipXmasPay: "Annual bonus paid in November. The full rate (55\u00a0%) is reached after 36 months of tenure. Graduated before: 25\u00a0% (from 6 mo.), 35\u00a0% (from 12 mo.), 45\u00a0% (from 24 mo.).",
    tooltipTZugA: "Additional tariff payment A \u2013 paid in July. Can alternatively be converted into days off (up to 8 days). Not paid out if converted.",
    tooltipTGeld: "Transformation payment \u2013 paid in July together with T-ZUG\u00a0A. Finances qualification and transformation in the metal and electrical industry.",
    tooltipTZugB: "Additional tariff payment B \u2013 fixed amount based on the reference salary (EG\u00a05), independent of personal pay grade. From 2026: 26.5\u00a0% (previously 18.5\u00a0%). Paid in February.",

    // Chart
    chartTitle: "Gross Earnings by Month",
    chartTitleNetto: "Net Earnings by Month (Estimate)",
    chartViewBrutto: "Gross",
    chartViewNetto: "Net",
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chartLabels: {
      monatsentgelt:      "Monthly Salary",
      utZulage:           "Performance Bonus",
      freiwilligeZulage:  "Voluntary Allowance",
      urlaubsgeld:        "Holiday Pay",
      tZugA:              "T-ZUG A",
      tGeld:              "T-Geld",
      tZugB:              "T-ZUG B",
      weihnachtsgeld:     "Christmas Bonus"
    },

    // Dynamic labels
    holidayPayPct: "(${pct}\u00a0% of monthly)",
    xmasPayPct: "(${pct}\u00a0% of monthly)",
    xmasPayNone: "(not eligible)",
    xmasPayManual: "(manual)",
    utZulagePct: "(${pct}\u00a0% of monthly)",
    tZugBPct: "(${pct}\u00a0% of base salary)",


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
      "Grundentgelt":   "Base Salary",
      "Stufe A":        "Step A",
      "Stufe B":        "Step B",
      "Stufe C":        "Step C",
      "Hauptstufe":     "Main Step",
      "Eingangsstufe":  "Entry Step",
      "Grundstufe":     "Base Step",
      "Zusatzstufe":    "Additional Step",
      "1. Zusatzstufe": "1st Additional Step",
      "2. Zusatzstufe": "2nd Additional Step",
      "Zusatzstufe 1":  "Additional Step 1",
      "Zusatzstufe 2":  "Additional Step 2",
      "Zusatzstufe 3":  "Additional Step 3",
      "bis 12. Monat":  "up to 12 months",
      "bis 18. Monat":  "up to 18 months",
      "bis 36. Monat":  "up to 36 months",
      "nach 12. Monat": "after 12 months",
      "nach 18. Monat": "after 18 months",
      "nach 24. Monat": "after 24 months",
      "nach 36. Monat": "after 36 months"
    },

    // Compare
    compareSave: "Save for comparison",
    compareTitle: "Comparison",
    compareDiff: "Difference",
    compareCurrent: "Current",
    compareBruttoMonthly: "Monthly<br>Gross",
    compareBruttoAnnual: "Annual<br>Gross",
    compareNettoMonthly: "Monthly<br>Net",
    compareNettoAnnual: "Annual<br>Net",
    compareReset: "Reset comparison",

    // Contact Form
    contactTitle: "Contact",
    contactIntro: "Suggestions, errors or feedback? Send me a message:",
    contactName: "Name",
    contactEmail: "Email",
    contactSubject: "Subject",
    contactSubjectFeedback: "Feedback",
    contactSubjectBug: "Report a bug",
    contactSubjectFeature: "Feature request",
    contactSubjectOther: "Other",
    contactMessage: "Message",
    contactSend: "Send message",
    contactSuccess: "Thank you for your message! It has been sent successfully.",

    // SEO Content
    seoTitle: "ERA Salary Table 2026 \u2013 Calculate Collectively Agreed Pay in the Metal & Electrical Industry",
    seoText1: "This free calculator is based on the ERA salary tables for the German metal and electrical industry (effective 01.04.2026) and is updated after each wage round. It supports all 15 bargaining regions and calculates monthly gross pay plus all collectively agreed special payments: Christmas bonus, holiday pay, T-ZUG\u00a0A, transformation payment, and T-ZUG\u00a0B.",
    seoText2: "The IG Metall ERA salary tables vary by federal state and pay group (EG\u00a01 to EG\u00a017). This calculator makes it easy to determine your annual gross salary \u2013 including pro-rata calculation for part-time work and an optional performance allowance.",
    seoDisclaimer: "Independent open-source project \u2013 not an official IG Metall service.",

    // FAQ
    regionNavTitle: "ERA Salary Tables by Collective Bargaining Region",
    regionNavIntro: "Select your region for the full salary table with all pay groups and special payments:",
    rpIntro: "The ERA salary table for the <strong>${region}</strong> collective bargaining region lists all ${count} pay groups (EG) with monthly base salaries under the IG Metall collective agreement. Valid for full-time (35 hrs/week). Use the calculator for your individual salary including part-time, performance allowance and net pay.",
    rpTableHeading: "Salary Table",
    rpBonusHeading: "Special Payments",
    rpCtaText: "Calculate your personal salary including part-time, performance allowance and net pay:",
    rpCtaBtn: "Open salary calculator for ${region} →",
    rpAllRegions: "All Collective Bargaining Regions",
    rpSubtitle: "IG Metall Salary Table 2025 & 2026",
    rpBonusLabelUrlaubsgeld: "Holiday Pay",
    rpBonusLabelTZugA: "T-ZUG A",
    rpBonusLabelTGeld: "Transformation Payment",
    rpBonusLabelTZugB: "T-ZUG B (Annual Amount)",
    rpBonusLabelWeihnachtsgeld: "Christmas Bonus",
    rpBonusOfMonthly: "of monthly salary",
    rpBonusTZugANote: "or up to 8 paid days off",
    rpBonusTZugBNote: "of reference salary EG 5",
    rpBonusTenure: "from ${months} months of employment",
    faqTitle: "Frequently Asked Questions about ERA Salary Tables",
    faq1Q: "What is the ERA pay system in the metal and electrical industry?",
    faq1A: "The ERA (Entgeltrahmenabkommen) is the pay framework agreement for Germany's metal and electrical industry. It regulates the classification into pay groups (EG\u00a01\u201317, depending on the region) and is negotiated between employer associations and IG Metall. The ERA salary tables set the monthly base pay for each pay group and region.",
    faq2Q: "How up to date are the salary tables in this calculator?",
    faq2A: "The calculator contains the official ERA salary tables for 2025 and 2026 (effective 01.04.2026) for all 15 bargaining regions. Values are updated promptly after each wage round.",
    faq3Q: "Which special payments are included in the annual gross salary?",
    faq3A: "The calculated annual gross includes: holiday pay (69\u00a0% of one monthly salary, 72\u00a0% in NRW), Christmas bonus (25\u201355\u00a0% depending on tenure), T-ZUG\u00a0A (27.5\u00a0%), transformation payment (18.4\u00a0%), and T-ZUG\u00a0B (fixed amount based on the reference salary). All special payments except T-ZUG\u00a0B are calculated on the monthly salary including performance allowance.",
    faq4Q: "What is the performance allowance and how does it affect the result?",
    faq4A: "The performance allowance (Leistungszulage) is a percentage surcharge on the collectively agreed base pay, granted individually by the employer. It increases the monthly gross and feeds into the calculation of holiday pay, Christmas bonus, T-ZUG\u00a0A, and transformation payment. T-ZUG\u00a0B is based on the reference salary (EG\u00a05) and is unaffected.",
    faq5Q: "Is this an official IG Metall service?",
    faq5A: "No. This calculator is an independent, free, and ad-free open-source project. It is based on the publicly available ERA salary tables but is not an official service of IG Metall or any employer association. All information without guarantee.",
    faq6Q: "How accurate is the net salary estimate?",
    faq6A: "The net estimate is an approximation based on progressive income tax rates and current social security contributions (including contribution assessment ceilings). It does not replace an individual tax calculation \u2013 for binding values we recommend the official wage tax calculator of the German Federal Ministry of Finance.",
    faq7Q: "Which federal states and collective bargaining regions does the calculator cover?",
    faq7A: "The calculator covers all 15 ERA collective bargaining regions: Baden-W\u00fcrttemberg, Bayern, Berlin/Brandenburg, Hamburg/Unterweser, Hessen, Niedersachsen, Nordrhein-Westfalen, Osnabr\u00fcck-Emsland, Pfalz, Rheinland-Rheinhessen, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein/MV/NW-Niedersachsen and Th\u00fcringen.",
    faq8Q: "How can I support this project?",
    faq8A: "This calculator is free, ad-free, and maintained in spare time. If you find it useful, a small donation via PayPal is very much appreciated \u2013 it helps keep the service running long-term.",
    faq9Q: "What is the difference between T-ZUG A and T-ZUG B?",
    faq9A: "T-ZUG A equals 27.5 % of one monthly salary and can be taken either as a cash payment or as up to 8 paid days off. T-ZUG B is a fixed annual amount based on the reference salary (EG 5) of the respective region \u2013 regardless of your personal pay group. Both payments are made once a year.",
    faq10Q: "How do I calculate my ERA salary for part-time work?",
    faq10A: "The part-time salary is calculated as: base salary \u00d7 (actual weekly hours \u00f7 35). Working 28 hours a week therefore gives you 80 % of the full-time value. All special payments such as holiday pay, Christmas bonus and T-ZUG are calculated proportionally based on this adjusted monthly salary. Simply enter your weekly hours in the calculator \u2013 everything is adjusted automatically.",
    faq11Q: "What is the performance allowance and how does it affect special payments?",
    faq11A: "The performance allowance (Leistungszulage) is an individual percentage surcharge on the collectively agreed base pay (0\u201330 %), granted by the employer. It increases not only the monthly gross salary but also affects holiday pay, Christmas bonus, T-ZUG A and transformation payment, as these are calculated as a percentage of the monthly salary. The only exception: T-ZUG B is based on the reference salary EG 5 and is independent of the personal performance allowance.",

    // Footer
    footerSource: "Source: IG Metall ERA salary tables",
    footerDisclaimer: "This is not an official IG Metall service. All information without guarantee.",
    footerFeedback: "Suggestions, errors or feedback? <a href=\"mailto:info@era-rechner.de\">info@era-rechner.de</a>",
    footerDonate: "This project is ad-free and open-source. <a href=\"https://paypal.me/erarechner\" target=\"_blank\" rel=\"noopener noreferrer\">Support it with a donation via PayPal</a>.",
    footerHome: "ERA Pay Calculator",
    footerContact: "Contact",
    footerImprint: "Legal Notice",
    footerPrivacy: "Privacy Policy",
    footerGithub: "Source Code on GitHub",
    backToCalculator: "\u2190 Back to Calculator",

    // Glossar
    glossarTitle: "ERA Glossary",
    glossarSubtitle: "Terms of the Metal and Electrical Industry explained",
    glossarHeading: "ERA Terms from A to Z",
    glossarIntro: "The ERA pay system has its own terminology. Here you will find all key terms explained concisely \u2013 with a direct link to the <a href=\"/\">ERA Pay Calculator</a>.",
    glossarCtaText: "Calculate your personal ERA salary now:",
    glossarCtaBtn: "Go to ERA Pay Calculator",
    gQ_betriebsz: "Length of Service (Tenure)",
    gA_betriebsz: "The duration of uninterrupted employment with the company. It mainly determines the Christmas bonus rate: up to one year 25\u00a0%, from one year 35\u00a0%, from three years 45\u00a0%, and from five years 55\u00a0% of one monthly salary. The relevant reference date is <strong>31 December of the respective tariff year</strong> \u2013 what counts is the completed tenure by year-end, not the payment date in November. In the <a href=\"/\">ERA Pay Calculator</a>, tenure is automatically calculated from the entered start date.",
    gQ_eckentgelt: "Reference Salary (Eckentgelt)",
    gA_eckentgelt: "The base salary of the reference pay group EG\u00a05 in the respective collective bargaining region. The reference salary is a central benchmark in the ERA system: T-ZUG\u00a0B is based on it \u2013 regardless of the employee's personal pay group. It is increased with every wage round alongside all other salary table values.",
    gQ_eg: "Pay Group (EG)",
    gA_eg: "The classification of a job into the ERA pay scheme based on job requirements (knowledge, thinking, autonomy). Depending on the region, there are EG\u00a01 to EG\u00a012 (Bavaria) or EG\u00a01 to EG\u00a017 (e.g. Baden-W\u00fcrttemberg). The pay group determines the collectively agreed base salary. Classification is done through job evaluation, not by job title.",
    gQ_era: "ERA \u2013 Pay Framework Agreement",
    gA_era: "ERA stands for Entgeltrahmenabkommen (Pay Framework Agreement) and is the collective agreement governing the pay system for employees in Germany's metal and electrical industry. Introduced between 2004 and 2009, it replaced the previously separate pay agreements for blue-collar and white-collar workers, unifying both in a single system with common pay groups and special payments. The contracting parties are <a href=\"https://www.igmetall.de\" target=\"_blank\" rel=\"noopener noreferrer\">IG Metall</a> and the employer associations.",
    gQ_grundentgelt: "Base Salary (Grundentgelt)",
    gA_grundentgelt: "The monthly gross salary specified in the ERA salary table for a given pay group and step. It is the starting value for all further calculations: performance allowance, holiday pay, Christmas bonus, T-ZUG\u00a0A and transformation payment are all calculated on this basis (plus performance allowance). Exception: T-ZUG\u00a0B is based on the reference salary (EG\u00a05), not the personal base salary.",
    gQ_jahresbrutto: "Annual Gross Salary",
    gA_jahresbrutto: "The total of all gross remuneration in a year. In the ERA system it consists of: 12\u00a0\u00d7 monthly salary (base + performance allowance) + holiday pay (69\u00a0%) + Christmas bonus (25\u201355\u00a0%) + T-ZUG\u00a0A (27.5\u00a0%) + transformation payment (18.4\u00a0%) + T-ZUG\u00a0B (fixed amount). The <a href=\"/\">ERA Pay Calculator</a> calculates the annual gross automatically including all collectively agreed special payments.",
    gQ_leistung: "Performance Allowance (Leistungszulage)",
    gA_leistung: "An individual percentage surcharge on the collectively agreed base salary, granted by the employer for above-standard performance. Tariff-wise, 0\u201330\u00a0% is possible. It increases not only the monthly gross but also affects holiday pay, Christmas bonus, T-ZUG\u00a0A and transformation payment, as these are calculated as a percentage of the monthly salary. T-ZUG\u00a0B, however, is based on the reference salary and is independent of the personal performance allowance.",
    gQ_stufe: "Step (A\u2013E)",
    gA_stufe: "Within a pay group, many collective bargaining regions have experience steps A to E (not in all regions). Classification depends on company and professional experience. Step A is the entry level, Step E the highest. Progression from step to step typically happens automatically after a defined number of years in the respective pay group.",
    gQ_tarifgebiet: "Collective Bargaining Region",
    gA_tarifgebiet: "The regional scope of an ERA collective agreement. There are 15 ERA collective bargaining regions in Germany: Baden-W\u00fcrttemberg, Bavaria, Berlin/Brandenburg, Hamburg/Lower Weser, Hesse, Lower Saxony, North Rhine-Westphalia, Osnabr\u00fcck-Emsland, Palatinate, Rhineland-Rhenish Hesse, Saarland, Saxony, Saxony-Anhalt, Schleswig-Holstein/MV/NW-Lower Saxony and Thuringia. Each region negotiates independently and has its own salary tables \u2013 so base salaries may differ between regions.",
    gQ_teilzeit: "Part-Time in ERA",
    gA_teilzeit: "For part-time work, salary is calculated proportionally: base salary \u00d7 (actual weekly hours \u00f7 35). At 28\u00a0hours per week this equals 80\u00a0% of the full-time value. All percentage-based special payments (holiday pay, Christmas bonus, T-ZUG\u00a0A, transformation payment) are based on this adjusted monthly salary. In the <a href=\"/\">ERA Pay Calculator</a>, simply enter the weekly hours \u2013 everything is converted automatically.",
    gQ_transformation: "Transformation Payment (T-Geld)",
    gA_transformation: "An annual special payment of 18.4\u00a0% of one monthly salary, effective from 2024. Agreed in the 2021 wage round, it supports employees during the industry's structural change (digitalisation, electromobility). It is calculated in the same way as holiday pay and Christmas bonus, based on the monthly salary including performance allowance.",
    gQ_tzugA: "T-ZUG A \u2013 Additional Tariff Payment A",
    gA_tzugA: "An annual special payment of 27.5\u00a0% of one monthly salary. The employee can choose: either the cash payment or up to 8 paid days off \u2013 but only under certain conditions (e.g. caring for relatives, childcare for children under 8, or shift work). T-ZUG\u00a0A is calculated based on the monthly salary including performance allowance. In the calculator, the option can be set under \"More options\".",
    gQ_tzugB: "T-ZUG B \u2013 Additional Tariff Payment B",
    gA_tzugB: "A fixed annual amount based on the reference salary (EG\u00a05) of the respective collective bargaining region. T-ZUG\u00a0B is the same for all employees in a region \u2013 regardless of their personal pay group or performance allowance. It is paid once a year. For part-time employees, T-ZUG\u00a0B is granted proportionally.",
    gQ_urlaubsgeld: "Holiday Pay (Urlaubsgeld)",
    gA_urlaubsgeld: "An annual special payment of 69\u00a0% of one monthly salary (72\u00a0% in NRW). Holiday pay is usually paid in summer and is calculated based on the monthly salary including performance allowance. It is a collectively agreed benefit and applies to all employees in the respective ERA collective bargaining region.",
    gQ_weihnacht: "Christmas Bonus (Weihnachtsgeld)",
    gA_weihnacht: "An annual special payment whose amount depends on length of service: 25\u00a0% (up to 1 year), 35\u00a0% (1\u20133 years), 45\u00a0% (3\u20135 years) or 55\u00a0% (5+ years) of one monthly salary. Some regions have different rates. The relevant reference date for the tier classification is <strong>31 December of the tariff year</strong>: for example, someone starting on 15 November has not yet completed 12 months by 31 December and therefore receives the entry rate of 25\u00a0%. Usually paid in November. In the calculator, the rate is automatically determined from the entered start date.",
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
  return TRANSLATIONS[currentLang].regions[key] ?? key;
}

function tStep(key) {
  return TRANSLATIONS[currentLang].steps[key] ?? key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("era-lang", lang);
  document.documentElement.lang = lang;
  applyTranslations();
}

const _translationCallbacks = [];

function onTranslationsApplied(callback) {
  _translationCallbacks.push(callback);
}

function applyTranslations() {
  // Page title (mit aktuellem Tarifjahr)
  const elJahrSel = document.getElementById("jahr");
  const currentYear = elJahrSel?.value || new Date().getFullYear();
  document.title = t("pageTitle").replace("{year}", currentYear);

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

  // Notify registered callbacks
  for (const cb of _translationCallbacks) cb();
}
