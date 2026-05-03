"use strict";

const TRANSLATIONS = {
  de: {
    // Page
    pageTitle: "ERA Entgeltrechner {year} \u2013 IG Metall Entgelttabelle & Gehaltsrechner Metall- und Elektroindustrie",
    title: "ERA Entgeltrechner",
    subtitle: "Metall- und Elektroindustrie",
    subtitleWithYear: "Metall- und Elektroindustrie",
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
    resultHourly: "Brutto-Stundenlohn",
    resultAnnual: "Bruttojahresgehalt (gesamt)",
    resultAvgMonthly: "Ø Monatsdurchschnitt (brutto)",
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

    // Footer
    footerSource: "Quelle: IG Metall ERA-Entgelttabellen",
    footerDisclaimer: "Dies ist kein offizielles Angebot der IG Metall. Alle Angaben ohne Gew\u00e4hr.",
    footerFeedback: "Anregungen, Fehler oder Feedback? <a href=\"mailto:info@era-rechner.de\">info@era-rechner.de</a>",
    footerDonate: "Dieses Projekt ist werbefrei und open-source. <a href=\"https://paypal.me/erarechner\" target=\"_blank\" rel=\"noopener noreferrer\">Unterstütze es mit einer Spende via PayPal</a>.",
    footerContact: "Kontakt",
    footerImprint: "Impressum",
    footerPrivacy: "Datenschutz",
    footerGithub: "Quellcode auf GitHub",
    backToCalculator: "\u2190 Zur\u00fcck zum Rechner",
  },

  en: {
    // Page
    pageTitle: "ERA Salary Calculator {year} \u2013 IG Metall Salary Table & Calculator | Metal and Electrical Industry",
    title: "ERA Salary Calculator",
    subtitle: "Metal and Electrical Industry",
    subtitleWithYear: "Metal and Electrical Industry",
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
    resultHourly: "Gross Hourly Wage",
    resultAnnual: "Gross Annual Salary (total)",
    resultAvgMonthly: "Avg. monthly (gross)",
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
      "Grundentgelt": "Base Salary",
      "Stufe A": "Step A",
      "Stufe B": "Step B",
      "Stufe C": "Step C",
      "Hauptstufe": "Main Step",
      "Eingangsstufe": "Entry Step",
      "1. Zusatzstufe": "1st Additional Step",
      "2. Zusatzstufe": "2nd Additional Step",
      "Grundstufe": "Base Step",
      "Zusatzstufe 1": "Additional Step 1",
      "Zusatzstufe 2": "Additional Step 2",
      "Zusatzstufe 3": "Additional Step 3"
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

    // Footer
    footerSource: "Source: IG Metall ERA salary tables",
    footerDisclaimer: "This is not an official IG Metall service. All information without guarantee.",
    footerFeedback: "Suggestions, errors or feedback? <a href=\"mailto:info@era-rechner.de\">info@era-rechner.de</a>",
    footerDonate: "This project is ad-free and open-source. <a href=\"https://paypal.me/erarechner\" target=\"_blank\" rel=\"noopener noreferrer\">Support it with a donation via PayPal</a>.",
    footerContact: "Contact",
    footerImprint: "Legal Notice",
    footerPrivacy: "Privacy Policy",
    footerGithub: "Source Code on GitHub",
    backToCalculator: "\u2190 Back to Calculator",
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
  return TRANSLATIONS[currentLang].regions[key] || key;
}

function tStep(key) {
  return TRANSLATIONS[currentLang].steps[key] || key;
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
