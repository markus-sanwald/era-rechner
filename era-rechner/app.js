"use strict";

// ---------------------------------------------------------------------------
// ERA Salary Data – Metall- und Elektroindustrie, gültig ab 01.04.2025
// Structure: Region -> EG -> { StepName: MonthlyGross }
// Only non-null values are included.
// ---------------------------------------------------------------------------

const salaryData = {
  "Baden-Württemberg": {
    "EG 1":  { "Grundentgelt": 2658.00 },
    "EG 2":  { "Grundentgelt": 2730.00 },
    "EG 3":  { "Grundentgelt": 2873.50 },
    "EG 4":  { "Grundentgelt": 3017.00 },
    "EG 5":  { "Grundentgelt": 3197.00 },
    "EG 6":  { "Grundentgelt": 3376.50 },
    "EG 7":  { "Grundentgelt": 3592.00 },
    "EG 8":  { "Grundentgelt": 3843.50 },
    "EG 9":  { "Grundentgelt": 4095.00 },
    "EG 10": { "Grundentgelt": 4364.00 },
    "EG 11": { "Grundentgelt": 4651.50 },
    "EG 12": { "Grundentgelt": 4975.00 },
    "EG 13": { "Grundentgelt": 5298.00 },
    "EG 14": { "Grundentgelt": 5621.50 },
    "EG 15": { "Grundentgelt": 5944.50 },
    "EG 16": { "Grundentgelt": 6340.00 },
    "EG 17": { "Grundentgelt": 6699.00 }
  },

  "Bayern": {
    "EG 1":  { "Stufe A": 2659.00 },
    "EG 2":  { "Stufe A": 2711.00, "Stufe B": 2756.00 },
    "EG 3":  { "Stufe A": 2847.00, "Stufe B": 2935.00 },
    "EG 4":  { "Stufe A": 3023.00, "Stufe B": 3111.00, "Stufe C": 3309.00 },
    "EG 5":  { "Stufe A": 3392.00, "Stufe B": 3475.00 },
    "EG 6":  { "Stufe A": 3602.00, "Stufe B": 3727.00 },
    "EG 7":  { "Stufe A": 3884.00, "Stufe B": 4042.00 },
    "EG 8":  { "Stufe A": 4213.00, "Stufe B": 4389.00 },
    "EG 9":  { "Stufe A": 4614.00, "Stufe B": 4841.00 },
    "EG 10": { "Stufe A": 5103.00, "Stufe B": 5362.00 },
    "EG 11": { "Stufe A": 5643.00, "Stufe B": 5920.00 },
    "EG 12": { "Stufe A": 6186.00, "Stufe B": 6450.00 }
  },

  "Berlin/Brandenburg": {
    "EG 1":  { "Hauptstufe": 2657.00 },
    "EG 2":  { "Hauptstufe": 2705.00 },
    "EG 3":  { "Eingangsstufe": 2764.00, "Hauptstufe": 2794.00, "1. Zusatzstufe": 2878.00, "2. Zusatzstufe": 2962.00 },
    "EG 4":  { "Eingangsstufe": 2962.00, "Hauptstufe": 3046.00, "1. Zusatzstufe": 3166.00, "2. Zusatzstufe": 3287.00 },
    "EG 5":  { "Eingangsstufe": 3287.00, "Hauptstufe": 3407.00, "1. Zusatzstufe": 3464.00, "2. Zusatzstufe": 3520.00 },
    "EG 6":  { "Eingangsstufe": 3520.00, "Hauptstufe": 3577.00, "1. Zusatzstufe": 3634.00, "2. Zusatzstufe": 3691.00 },
    "EG 7":  { "Eingangsstufe": 3691.00, "Hauptstufe": 3748.00, "1. Zusatzstufe": 3805.00, "2. Zusatzstufe": 3861.00 },
    "EG 8":  { "Eingangsstufe": 3861.00, "Hauptstufe": 3918.00, "1. Zusatzstufe": 3986.00, "2. Zusatzstufe": 4054.00 },
    "EG 9":  { "Eingangsstufe": 4054.00, "Hauptstufe": 4122.00, "1. Zusatzstufe": 4281.00, "2. Zusatzstufe": 4440.00 },
    "EG 10": { "Eingangsstufe": 4440.00, "Hauptstufe": 4599.00, "1. Zusatzstufe": 4826.00 },
    "EG 11": { "Eingangsstufe": 5054.00, "Hauptstufe": 5281.00, "1. Zusatzstufe": 5519.00 },
    "EG 12": { "Eingangsstufe": 5758.00, "Hauptstufe": 5996.00, "1. Zusatzstufe": 6223.00 },
    "EG 13": { "Eingangsstufe": 6451.00, "Hauptstufe": 6678.00 }
  },

  "Hamburg/Unterweser": {
    "EG 2":  { "Grundstufe": 2821.00, "Hauptstufe": 2924.00 },
    "EG 3":  { "Grundstufe": 2910.00, "Hauptstufe": 3015.00 },
    "EG 4":  { "Grundstufe": 3067.00, "Hauptstufe": 3156.00, "Zusatzstufe 1": 3243.00, "Zusatzstufe 2": 3331.00 },
    "EG 5":  { "Grundstufe": 3377.00, "Hauptstufe": 3465.00, "Zusatzstufe 1": 3553.00, "Zusatzstufe 2": 3637.00, "Zusatzstufe 3": 3727.00 },
    "EG 6":  { "Grundstufe": 3645.00, "Hauptstufe": 3732.00, "Zusatzstufe 1": 3866.00, "Zusatzstufe 2": 3951.00, "Zusatzstufe 3": 4038.00 },
    "EG 7":  { "Grundstufe": 3914.00, "Hauptstufe": 4033.00, "Zusatzstufe 1": 4164.00, "Zusatzstufe 2": 4282.00, "Zusatzstufe 3": 4404.00 },
    "EG 8":  { "Grundstufe": 4611.00, "Hauptstufe": 4729.00, "Zusatzstufe 1": 4864.00, "Zusatzstufe 2": 4985.00, "Zusatzstufe 3": 5102.00 },
    "EG 9":  { "Grundstufe": 5339.00, "Hauptstufe": 5494.00, "Zusatzstufe 1": 5626.00, "Zusatzstufe 2": 5783.00 },
    "EG 10": { "Grundstufe": 6089.00, "Hauptstufe": 6333.00, "Zusatzstufe 1": 6508.00 },
    "EG 11": { "Grundstufe": 6876.00, "Hauptstufe": 7117.00 }
  },

  "Hessen": {
    "EG 1":  { "Grundentgelt": 2679.00 },
    "EG 2":  { "Grundentgelt": 2743.00 },
    "EG 3":  { "Grundentgelt": 2838.00 },
    "EG 4":  { "Grundentgelt": 2998.00, "Zusatzstufe": 3061.67 },
    "EG 5":  { "Grundentgelt": 3189.00, "Zusatzstufe": 3295.33 },
    "EG 6":  { "Grundentgelt": 3508.00, "Zusatzstufe": 3635.67 },
    "EG 7":  { "Grundentgelt": 3891.00, "Zusatzstufe": 4050.33 },
    "EG 8":  { "Grundentgelt": 4369.00, "Zusatzstufe": 4560.33 },
    "EG 9":  { "Grundentgelt": 4943.00, "Zusatzstufe": 5102.33 },
    "EG 10": { "Grundentgelt": 5421.00, "Zusatzstufe": 5580.67 },
    "EG 11": { "Grundentgelt": 5900.00, "Zusatzstufe": 6218.55 }
  },

  "Niedersachsen": {
    "EG 2":  { "Stufe A": 2620.00, "Stufe B": 2702.00, "Stufe C": 2723.00 },
    "EG 3":  { "Stufe A": 2744.00, "Stufe B": 2789.00, "Stufe C": 2852.00 },
    "EG 4":  { "Stufe A": 2885.00, "Stufe B": 2922.00, "Stufe C": 3071.00 },
    "EG 5":  { "Stufe A": 3255.00, "Stufe B": 3462.00, "Stufe C": 3506.00 },
    "EG 6":  { "Stufe A": 3547.00, "Stufe B": 3594.00, "Stufe C": 3672.00 },
    "EG 7":  { "Stufe A": 3780.00, "Stufe B": 3865.00, "Stufe C": 3957.00 },
    "EG 8":  { "Stufe A": 4047.00, "Stufe B": 4179.00, "Stufe C": 4236.00 },
    "EG 9":  { "Stufe A": 4261.00, "Stufe B": 4341.00, "Stufe C": 4408.00 },
    "EG 10": { "Stufe A": 4492.00, "Stufe B": 4556.00, "Stufe C": 4607.00 },
    "EG 11": { "Stufe A": 4670.00, "Stufe B": 4889.00, "Stufe C": 5111.00 },
    "EG 12": { "Stufe A": 5327.00, "Stufe B": 5545.00, "Stufe C": 5765.00 },
    "EG 13": { "Stufe A": 6010.00, "Stufe B": 6482.00, "Stufe C": 6675.00 }
  },

  "Nordrhein-Westfalen": {
    "EG 1":  { "Grundentgelt": 2705.00 },
    "EG 2":  { "Grundentgelt": 2738.00 },
    "EG 3":  { "Grundentgelt": 2769.50 },
    "EG 4":  { "Grundentgelt": 2812.50 },
    "EG 5":  { "Grundentgelt": 2871.50 },
    "EG 6":  { "Grundentgelt": 2946.00 },
    "EG 7":  { "Grundentgelt": 3038.00 },
    "EG 8":  { "Grundentgelt": 3196.00 },
    "EG 9":  { "Grundentgelt": 3454.00 },
    "EG 10": { "Grundentgelt": 3796.50 },
    "EG 11": { "Grundentgelt": 4257.00 },
    "EG 12": { "bis 36. Monat": 4387.00, "nach 36. Monat": 4872.00 },
    "EG 13": { "bis 18. Monat": 4902.00, "nach 18. Monat": 5190.50, "nach 36. Monat": 5766.50 },
    "EG 14": { "bis 12. Monat": 5568.50, "nach 12. Monat": 5917.00, "nach 24. Monat": 6265.50, "nach 36. Monat": 6962.50 }
  },

  "Osnabrück-Emsland": {
    "EG 1":  { "Hauptstufe": 2702.00, "Zusatzstufe 1": 2744.00 },
    "EG 2":  { "Eingangsstufe": 2744.00, "Hauptstufe": 2789.00, "Zusatzstufe 1": 2829.00, "Zusatzstufe 2": 2871.00 },
    "EG 3":  { "Eingangsstufe": 2871.00, "Hauptstufe": 3039.00, "Zusatzstufe 1": 3069.00, "Zusatzstufe 2": 3103.00, "Zusatzstufe 3": 3130.00 },
    "EG 4":  { "Eingangsstufe": 3130.00, "Hauptstufe": 3462.00, "Zusatzstufe 1": 3500.00, "Zusatzstufe 2": 3535.00, "Zusatzstufe 3": 3566.00 },
    "EG 5":  { "Eingangsstufe": 3566.00, "Hauptstufe": 3756.00, "Zusatzstufe 1": 3793.00, "Zusatzstufe 2": 3830.00, "Zusatzstufe 3": 3870.00 },
    "EG 6":  { "Eingangsstufe": 3870.00, "Hauptstufe": 3923.00, "Zusatzstufe 1": 3964.00, "Zusatzstufe 2": 4004.00, "Zusatzstufe 3": 4043.00 },
    "EG 7":  { "Eingangsstufe": 4043.00, "Hauptstufe": 4139.00, "Zusatzstufe 1": 4183.00, "Zusatzstufe 2": 4224.00, "Zusatzstufe 3": 4264.00 },
    "EG 8":  { "Eingangsstufe": 4264.00, "Hauptstufe": 4408.00, "Zusatzstufe 1": 4452.00, "Zusatzstufe 2": 4497.00, "Zusatzstufe 3": 4541.00 },
    "EG 9":  { "Eingangsstufe": 4541.00, "Hauptstufe": 4673.00, "Zusatzstufe 1": 4720.00, "Zusatzstufe 2": 4766.00, "Zusatzstufe 3": 4816.00 },
    "EG 10": { "Eingangsstufe": 4816.00, "Hauptstufe": 5008.00, "Zusatzstufe 1": 5056.00, "Zusatzstufe 2": 5109.00, "Zusatzstufe 3": 5155.00 },
    "EG 11": { "Eingangsstufe": 5155.00, "Hauptstufe": 5590.00, "Zusatzstufe 1": 5648.00, "Zusatzstufe 2": 5705.00, "Zusatzstufe 3": 5761.00 },
    "EG 12": { "Eingangsstufe": 5761.00, "Hauptstufe": 6499.00 }
  },

  "Pfalz": {
    "EG 1":  { "Grundentgelt": 2679.00 },
    "EG 2":  { "Grundentgelt": 2743.00 },
    "EG 3":  { "Grundentgelt": 2838.00 },
    "EG 4":  { "Grundentgelt": 2998.00, "Zusatzstufe": 3061.67 },
    "EG 5":  { "Grundentgelt": 3189.00, "Zusatzstufe": 3295.33 },
    "EG 6":  { "Grundentgelt": 3508.00, "Zusatzstufe": 3635.67 },
    "EG 7":  { "Grundentgelt": 3891.00, "Zusatzstufe": 4029.00 },
    "EG 8":  { "Grundentgelt": 4305.00, "Zusatzstufe": 4464.67 },
    "EG 9":  { "Grundentgelt": 4784.00, "Zusatzstufe": 4996.33 },
    "EG 10": { "Grundentgelt": 5421.00, "Zusatzstufe": 5580.67 },
    "EG 11": { "Grundentgelt": 5900.00, "Zusatzstufe": 6218.55 }
  },

  "Rheinland-Rheinhessen": {
    "EG 1":  { "Grundentgelt": 2679.00 },
    "EG 2":  { "Grundentgelt": 2743.00 },
    "EG 3":  { "Grundentgelt": 2838.00 },
    "EG 4":  { "Grundentgelt": 2998.00, "Zusatzstufe": 3061.67 },
    "EG 5":  { "Grundentgelt": 3189.00, "Zusatzstufe": 3295.33 },
    "EG 6":  { "Grundentgelt": 3508.00, "Zusatzstufe": 3635.67 },
    "EG 7":  { "Grundentgelt": 3891.00, "Zusatzstufe": 4050.33 },
    "EG 8":  { "Grundentgelt": 4369.00, "Zusatzstufe": 4560.33 },
    "EG 9":  { "Grundentgelt": 4943.00, "Zusatzstufe": 5102.33 },
    "EG 10": { "Grundentgelt": 5421.00, "Zusatzstufe": 5580.67 },
    "EG 11": { "Grundentgelt": 5900.00, "Zusatzstufe": 6387.89 }
  },

  "Saarland": {
    "EG 1":  { "Grundentgelt": 2679.00 },
    "EG 2":  { "Grundentgelt": 2743.00 },
    "EG 3":  { "Grundentgelt": 2838.00 },
    "EG 4":  { "Grundentgelt": 2998.00, "Zusatzstufe": 3061.67 },
    "EG 5":  { "Grundentgelt": 3189.00, "Zusatzstufe": 3295.33 },
    "EG 6":  { "Grundentgelt": 3508.00, "Zusatzstufe": 3635.67 },
    "EG 7":  { "Grundentgelt": 3891.00, "Zusatzstufe": 4050.33 },
    "EG 8":  { "Grundentgelt": 4369.00, "Zusatzstufe": 4560.33 },
    "EG 9":  { "Grundentgelt": 4943.00, "Zusatzstufe": 5102.33 },
    "EG 10": { "Grundentgelt": 5421.00, "Zusatzstufe": 5580.67 },
    "EG 11": { "Grundentgelt": 5900.00, "Zusatzstufe": 6218.55 }
  },

  "Sachsen": {
    "EG 1":  { "Grundentgelt": 2679.00, "Zusatzstufe": 2711.00 },
    "EG 2":  { "Grundentgelt": 2743.00, "Zusatzstufe": 2774.00 },
    "EG 3":  { "Grundentgelt": 2838.00, "Zusatzstufe": 2902.00 },
    "EG 4":  { "Grundentgelt": 2998.00, "Zusatzstufe": 3093.00 },
    "EG 5":  { "Grundentgelt": 3189.00, "Zusatzstufe": 3348.00 },
    "EG 6":  { "Grundentgelt": 3508.00, "Zusatzstufe": 3667.00 },
    "EG 7":  { "Grundentgelt": 3891.00, "Zusatzstufe": 4050.00 },
    "EG 8":  { "Grundentgelt": 4369.00, "Zusatzstufe": 4528.00 },
    "EG 9":  { "Grundentgelt": 4784.00, "Zusatzstufe": 4943.00 },
    "EG 10": { "Grundentgelt": 5102.00, "Zusatzstufe": 5262.00 },
    "EG 11": { "Grundentgelt": 5581.00, "Zusatzstufe": 5740.00 },
    "EG 12": { "Grundentgelt": 5900.00, "Zusatzstufe": 6219.00 }
  },

  "Sachsen-Anhalt": {
    "EG 1":  { "Grundstufe": 2702.00, "Zusatzstufe": 2757.00 },
    "EG 2":  { "Grundstufe": 2791.00, "Zusatzstufe": 2827.00 },
    "EG 3":  { "Grundstufe": 2893.00, "Zusatzstufe": 2953.00 },
    "EG 4":  { "Grundstufe": 3050.00, "Zusatzstufe": 3153.00 },
    "EG 5":  { "Grundstufe": 3280.00, "Zusatzstufe": 3409.00 },
    "EG 6":  { "Grundstufe": 3547.00, "Zusatzstufe": 3790.00 },
    "EG 7":  { "Grundstufe": 4014.00, "Zusatzstufe": 4192.00 },
    "EG 8":  { "Grundstufe": 4337.00, "Zusatzstufe": 4561.00 },
    "EG 9":  { "Grundstufe": 4991.00, "Zusatzstufe": 5221.00 },
    "EG 10": { "Grundstufe": 5663.00, "Zusatzstufe": 5886.00 },
    "EG 11": { "Grundstufe": 6375.00, "Zusatzstufe": 6620.00 }
  },

  "Schleswig-Holstein/MV/NW-Niedersachsen": {
    "EG 2":  { "Grundstufe": 2821.00, "Hauptstufe": 2924.00 },
    "EG 3":  { "Grundstufe": 2910.00, "Hauptstufe": 3015.00, "Zusatzstufe 1": 3120.00 },
    "EG 4":  { "Grundstufe": 3067.00, "Hauptstufe": 3156.00, "Zusatzstufe 1": 3243.00, "Zusatzstufe 2": 3331.00 },
    "EG 5":  { "Grundstufe": 3377.00, "Hauptstufe": 3465.00, "Zusatzstufe 1": 3553.00, "Zusatzstufe 2": 3637.00, "Zusatzstufe 3": 3727.00 },
    "EG 6":  { "Grundstufe": 3619.00, "Hauptstufe": 3702.00, "Zusatzstufe 1": 3834.00, "Zusatzstufe 2": 3923.00, "Zusatzstufe 3": 4011.00 },
    "EG 7":  { "Grundstufe": 3857.00, "Hauptstufe": 3973.00, "Zusatzstufe 1": 4106.00, "Zusatzstufe 2": 4224.00, "Zusatzstufe 3": 4343.00 },
    "EG 8":  { "Grundstufe": 4494.00, "Hauptstufe": 4607.00, "Zusatzstufe 1": 4744.00, "Zusatzstufe 2": 4860.00, "Zusatzstufe 3": 4984.00 },
    "EG 9":  { "Grundstufe": 5160.00, "Hauptstufe": 5318.00, "Zusatzstufe 1": 5452.00, "Zusatzstufe 2": 5603.00 },
    "EG 10": { "Grundstufe": 5854.00, "Hauptstufe": 6095.00, "Zusatzstufe 1": 6268.00 },
    "EG 11": { "Grundstufe": 6580.00, "Hauptstufe": 6851.00 }
  },

  "Thüringen": {
    "EG 1":  { "Grundentgelt": 2679.00, "Zusatzstufe": 2711.00 },
    "EG 2":  { "Grundentgelt": 2743.00, "Zusatzstufe": 2774.00 },
    "EG 3":  { "Grundentgelt": 2838.00, "Zusatzstufe": 2902.00 },
    "EG 4":  { "Grundentgelt": 2998.00, "Zusatzstufe": 3093.00 },
    "EG 5":  { "Grundentgelt": 3189.00, "Zusatzstufe": 3348.00 },
    "EG 6":  { "Grundentgelt": 3508.00, "Zusatzstufe": 3667.00 },
    "EG 7":  { "Grundentgelt": 3891.00, "Zusatzstufe": 4050.00 },
    "EG 8":  { "Grundentgelt": 4369.00, "Zusatzstufe": 4528.00 },
    "EG 9":  { "Grundentgelt": 4784.00, "Zusatzstufe": 4943.00 },
    "EG 10": { "Grundentgelt": 5102.00, "Zusatzstufe": 5262.00 },
    "EG 11": { "Grundentgelt": 5581.00, "Zusatzstufe": 5740.00 },
    "EG 12": { "Grundentgelt": 5900.00, "Zusatzstufe": 6219.00 }
  }
};

// ---------------------------------------------------------------------------
// Bonus / Sonderzahlungen – regional data (zunächst nur Baden-Württemberg)
// ---------------------------------------------------------------------------

const bonusData = {
  "Baden-Württemberg": {
    urlaubsgeld:     0.50,    // 50 % eines Monatsentgelts
    tZugA:           0.275,   // 27,5 % des individuellen Monatsentgelts
    tZugB:           0.185,   // 18,5 % vom Eckentgelt (2025)
    eckentgelt:      3197.00, // Eckentgelt BW ab 01.04.2025 (entspricht EG 5 Grundentgelt)
    minMonate:       6,       // Mindest-BZ für Anspruch auf Sonderzahlungen
    weihnachtsgeldStaffel: [  // absteigend sortiert – erster Treffer gilt
      { monate: 36, satz: 0.55 },
      { monate: 24, satz: 0.45 },
      { monate: 12, satz: 0.35 },
      { monate: 6,  satz: 0.25 }
    ]
  }
};

// ---------------------------------------------------------------------------
// DOM references
// ---------------------------------------------------------------------------

const elBundesland       = document.getElementById("bundesland");
const elEG               = document.getElementById("eg");
const elStufe            = document.getElementById("stufe");
const elArbeitszeit      = document.getElementById("arbeitszeit");
const elArbeitszeitOutput = document.getElementById("arbeitszeit-output");
const elEintrittsdatum   = document.getElementById("eintrittsdatum");
const elUtZulage         = document.getElementById("ut-zulage");
const elUtZulageOutput   = document.getElementById("ut-zulage-output");
const elResult           = document.getElementById("result");
const elMonthly          = document.getElementById("monthly");
const elAnnual           = document.getElementById("annual");
const elBreakdown        = document.getElementById("breakdown");
const elGrundgehalt      = document.getElementById("grundgehalt");
const elUtZulageRow      = document.getElementById("ut-zulage-row");
const elUtZulagePct      = document.getElementById("ut-zulage-pct");
const elUtZulageAnnual   = document.getElementById("ut-zulage-annual");
const elUrlaubsgeld      = document.getElementById("urlaubsgeld");
const elWeihnachtsgeld   = document.getElementById("weihnachtsgeld");
const elWeihnachtsgeldPct = document.getElementById("weihnachtsgeld-pct");
const elTZugA            = document.getElementById("tzug-a");
const elTZugB            = document.getElementById("tzug-b");
const elChart            = document.getElementById("chart");
const elChartArea        = document.getElementById("chart-area");
const elChartLegend      = document.getElementById("chart-legend");

const currencyFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
});

const compactFmt = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

// ---------------------------------------------------------------------------
// Chart configuration
// ---------------------------------------------------------------------------

const MONTH_NAMES = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
                     "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

const CHART_COLORS = {
  monatsentgelt:  "#003d6b",
  utZulage:       "#4a90c4",
  urlaubsgeld:    "#2ecc71",
  tZugA:          "#e67e22",
  tZugB:          "#f1c40f",
  weihnachtsgeld: "#e2001a"
};

const CHART_LABELS = {
  monatsentgelt:  "Monatsentgelt",
  utZulage:       "ÜT-Zulage",
  urlaubsgeld:    "Urlaubsgeld",
  tZugA:          "T-ZUG A",
  tZugB:          "T-ZUG B",
  weihnachtsgeld: "Weihnachtsgeld"
};

// ---------------------------------------------------------------------------
// Helper: reset a <select> to its placeholder and disable it
// ---------------------------------------------------------------------------

function resetSelect(el, placeholder = "Bitte wählen\u2026") {
  el.innerHTML = `<option value="">${placeholder}</option>`;
  el.disabled = true;
}

// ---------------------------------------------------------------------------
// Populate Bundesland dropdown on load
// ---------------------------------------------------------------------------

function init() {
  const regions = Object.keys(salaryData).sort((a, b) =>
    a.localeCompare(b, "de")
  );

  for (const region of regions) {
    const opt = document.createElement("option");
    opt.value = region;
    opt.textContent = region;
    elBundesland.appendChild(opt);
  }
}

// ---------------------------------------------------------------------------
// Event: Bundesland changed → populate EG dropdown
// ---------------------------------------------------------------------------

elBundesland.addEventListener("change", () => {
  resetSelect(elEG, "Bitte wählen\u2026");
  resetSelect(elStufe, "Bitte wählen\u2026");
  hideResult();

  const region = elBundesland.value;
  if (!region) return;

  const grades = salaryData[region];
  const gradeKeys = Object.keys(grades).sort((a, b) => {
    const numA = parseInt(a.replace("EG ", ""), 10);
    const numB = parseInt(b.replace("EG ", ""), 10);
    return numA - numB;
  });

  for (const key of gradeKeys) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key;
    elEG.appendChild(opt);
  }

  elEG.disabled = false;
});

// ---------------------------------------------------------------------------
// Event: EG changed → populate Stufe dropdown
// ---------------------------------------------------------------------------

elEG.addEventListener("change", () => {
  resetSelect(elStufe, "Bitte wählen\u2026");
  hideResult();

  const region = elBundesland.value;
  const grade = elEG.value;
  if (!region || !grade) return;

  const steps = salaryData[region][grade];
  if (!steps) return;

  const stepNames = Object.keys(steps);

  for (const name of stepNames) {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    elStufe.appendChild(opt);
  }

  elStufe.disabled = false;

  // Auto-select if only one step available
  if (stepNames.length === 1) {
    elStufe.value = stepNames[0];
    showResult(steps[stepNames[0]]);
  }
});

// ---------------------------------------------------------------------------
// Event: Stufe changed → calculate and display result
// ---------------------------------------------------------------------------

elStufe.addEventListener("change", () => {
  const region = elBundesland.value;
  const grade = elEG.value;
  const step = elStufe.value;

  if (!region || !grade || !step) {
    hideResult();
    return;
  }

  const monthly = salaryData[region]?.[grade]?.[step];
  if (monthly == null) {
    hideResult();
    return;
  }

  showResult(monthly);
});

// ---------------------------------------------------------------------------
// Event: Arbeitszeit slider changed → update output + recalculate
// ---------------------------------------------------------------------------

elArbeitszeit.addEventListener("input", () => {
  elArbeitszeitOutput.textContent = `${elArbeitszeit.value}\u00a0h`;
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: Eintrittsdatum changed → recalculate if result is visible
// ---------------------------------------------------------------------------

elEintrittsdatum.addEventListener("change", () => {
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Event: ÜT-Zulage slider changed → update output + recalculate
// ---------------------------------------------------------------------------

elUtZulage.addEventListener("input", () => {
  elUtZulageOutput.textContent = `${elUtZulage.value}\u00a0%`;
  recalcIfReady();
});

// ---------------------------------------------------------------------------
// Shared: recalculate if all required fields are filled
// ---------------------------------------------------------------------------

function recalcIfReady() {
  const region = elBundesland.value;
  const grade = elEG.value;
  const step = elStufe.value;
  if (!region || !grade || !step) return;

  const monthly = salaryData[region]?.[grade]?.[step];
  if (monthly == null) return;

  showResult(monthly);
}

// ---------------------------------------------------------------------------
// Betriebszugehörigkeit helpers
// ---------------------------------------------------------------------------

function berechneMonate(eintrittsdatum) {
  const heute = new Date();
  const eintritt = new Date(eintrittsdatum);
  let monate = (heute.getFullYear() - eintritt.getFullYear()) * 12
             + (heute.getMonth() - eintritt.getMonth());
  if (heute.getDate() < eintritt.getDate()) monate--;
  return Math.max(0, monate);
}

function getWeihnachtsgeldSatz(monate, staffel) {
  for (const stufe of staffel) {
    if (monate >= stufe.monate) return stufe.satz;
  }
  return 0;
}

// ---------------------------------------------------------------------------
// Display helpers
// ---------------------------------------------------------------------------

function showResult(tabellenMonthly) {
  const region = elBundesland.value;
  const bonus = bonusData[region];

  // Arbeitszeitfaktor: Tabellenwerte basieren auf 35 h/Woche
  const wochenstunden = parseInt(elArbeitszeit.value, 10) || 35;
  const azFaktor = wochenstunden / 35;

  // Angepasstes Monatsentgelt
  const monthly = tabellenMonthly * azFaktor;

  // ÜT-Zulage (übertarifliche Zulage)
  const utPct = parseInt(elUtZulage.value, 10) || 0;
  const utMonatlich = monthly * (utPct / 100);
  const utJaehrlich = utMonatlich * 12;

  const grundgehalt = monthly * 12;

  elMonthly.textContent = currencyFmt.format(monthly + utMonatlich);

  if (bonus) {
    const datumStr = elEintrittsdatum.value;
    const monate = datumStr ? berechneMonate(datumStr) : null;
    const hatAnspruch = monate === null || monate >= bonus.minMonate;

    // Weihnachtsgeld-Satz bestimmen
    let wgSatz;
    if (monate === null) {
      wgSatz = bonus.weihnachtsgeldStaffel[0].satz;
    } else {
      wgSatz = getWeihnachtsgeldSatz(monate, bonus.weihnachtsgeldStaffel);
    }

    // Sonderzahlungen basieren auf Grundentgelt (ohne ÜT-Zulage)
    const urlaubsgeld     = hatAnspruch ? monthly * bonus.urlaubsgeld : 0;
    const weihnachtsgeld  = hatAnspruch ? monthly * wgSatz : 0;
    const tZugA           = hatAnspruch ? monthly * bonus.tZugA : 0;
    const tZugB           = hatAnspruch ? bonus.eckentgelt * azFaktor * bonus.tZugB : 0;
    const total           = grundgehalt + utJaehrlich + urlaubsgeld + weihnachtsgeld + tZugA + tZugB;

    elAnnual.textContent         = currencyFmt.format(total);
    elGrundgehalt.textContent    = currencyFmt.format(grundgehalt);
    elUrlaubsgeld.textContent    = currencyFmt.format(urlaubsgeld);
    elWeihnachtsgeld.textContent = currencyFmt.format(weihnachtsgeld);
    elTZugA.textContent          = currencyFmt.format(tZugA);
    elTZugB.textContent          = currencyFmt.format(tZugB);

    // ÜT-Zulage Zeile ein-/ausblenden
    if (utPct > 0) {
      elUtZulageAnnual.textContent = currencyFmt.format(utJaehrlich);
      elUtZulagePct.textContent = `(${utPct}\u00a0% v. ME)`;
      elUtZulageRow.classList.remove("hidden");
    } else {
      elUtZulageRow.classList.add("hidden");
    }

    // Dynamische Prozentanzeige im Label
    const pctText = hatAnspruch
      ? `(${(wgSatz * 100).toFixed(0).replace(".", ",")}\u00a0% eines ME)`
      : "(kein Anspruch)";
    elWeihnachtsgeldPct.textContent = pctText;

    elBreakdown.classList.remove("hidden");

    // Chart rendern
    renderChart(monthly, utMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tZugB);
  } else {
    const total = grundgehalt + utJaehrlich;
    elAnnual.textContent = currencyFmt.format(total);
    elBreakdown.classList.add("hidden");
    elChart.classList.add("hidden");
  }

  elResult.classList.remove("hidden");
}

// ---------------------------------------------------------------------------
// Chart: Bruttoverdienst nach Monaten (nur Baden-Württemberg)
// Auszahlungsmonate: Feb → T-ZUG B, Jun → Urlaubsgeld,
//                    Jul → T-ZUG A, Nov → Weihnachtsgeld
// ---------------------------------------------------------------------------

function renderChart(monthly, utMonatlich, urlaubsgeld, weihnachtsgeld, tZugA, tZugB) {
  const baseSegCount = 1 + (utMonatlich > 0 ? 1 : 0);

  const data = MONTH_NAMES.map((label, i) => {
    const segs = [{ key: "monatsentgelt", value: monthly }];
    if (utMonatlich > 0) segs.push({ key: "utZulage", value: utMonatlich });
    if (i === 1  && tZugB > 0)          segs.push({ key: "tZugB",          value: tZugB });
    if (i === 5  && urlaubsgeld > 0)     segs.push({ key: "urlaubsgeld",    value: urlaubsgeld });
    if (i === 6  && tZugA > 0)           segs.push({ key: "tZugA",          value: tZugA });
    if (i === 10 && weihnachtsgeld > 0)  segs.push({ key: "weihnachtsgeld", value: weihnachtsgeld });
    const total = segs.reduce((s, seg) => s + seg.value, 0);
    return { label, segs, total };
  });

  const maxTotal = Math.max(...data.map(d => d.total));

  let barsHtml = "";
  for (const month of data) {
    const pct = maxTotal > 0 ? (month.total / maxTotal) * 100 : 0;

    let segsHtml = "";
    for (const seg of month.segs) {
      const segPct = month.total > 0 ? (seg.value / month.total) * 100 : 0;
      segsHtml += `<div class="chart-seg" style="height:${segPct.toFixed(1)}%;background:${CHART_COLORS[seg.key]}" title="${CHART_LABELS[seg.key]}: ${currencyFmt.format(seg.value)}"></div>`;
    }

    const hasBonus = month.segs.length > baseSegCount;
    const totalHtml = hasBonus
      ? `<span class="chart-total">${compactFmt.format(month.total)}</span>`
      : "";

    barsHtml += `<div class="chart-col">${totalHtml}<div class="chart-stack" style="height:${pct.toFixed(1)}%">${segsHtml}</div><span class="chart-lbl">${month.label}</span></div>`;
  }

  elChartArea.innerHTML = barsHtml;

  // Legende – nur tatsächlich vorhandene Segmente anzeigen
  const allKeys = new Set();
  for (const month of data) {
    for (const seg of month.segs) allKeys.add(seg.key);
  }
  const legendOrder = ["monatsentgelt", "utZulage", "tZugB", "urlaubsgeld", "tZugA", "weihnachtsgeld"];
  elChartLegend.innerHTML = legendOrder
    .filter(k => allKeys.has(k))
    .map(k => `<div class="chart-legend-item"><span class="chart-legend-color" style="background:${CHART_COLORS[k]}"></span>${CHART_LABELS[k]}</div>`)
    .join("");

  elChart.classList.remove("hidden");
}

function hideResult() {
  elResult.classList.add("hidden");
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

init();
