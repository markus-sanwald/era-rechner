"use strict";
const ERA_DATA = {
  "2025": {
    "salaryData": {
      "Baden-Württemberg": {
        "EG 1": {
          "Grundentgelt": 2658
        },
        "EG 2": {
          "Grundentgelt": 2730
        },
        "EG 3": {
          "Grundentgelt": 2873.5
        },
        "EG 4": {
          "Grundentgelt": 3017
        },
        "EG 5": {
          "Grundentgelt": 3197
        },
        "EG 6": {
          "Grundentgelt": 3376.5
        },
        "EG 7": {
          "Grundentgelt": 3592
        },
        "EG 8": {
          "Grundentgelt": 3843.5
        },
        "EG 9": {
          "Grundentgelt": 4095
        },
        "EG 10": {
          "Grundentgelt": 4364
        },
        "EG 11": {
          "Grundentgelt": 4651.5
        },
        "EG 12": {
          "Grundentgelt": 4975
        },
        "EG 13": {
          "Grundentgelt": 5298
        },
        "EG 14": {
          "Grundentgelt": 5621.5
        },
        "EG 15": {
          "Grundentgelt": 5944.5
        },
        "EG 16": {
          "Grundentgelt": 6340
        },
        "EG 17": {
          "Grundentgelt": 6699
        }
      },
      "Bayern": {
        "EG 1": {
          "Stufe A": 2659
        },
        "EG 2": {
          "Stufe A": 2711,
          "Stufe B": 2756
        },
        "EG 3": {
          "Stufe A": 2847,
          "Stufe B": 2935
        },
        "EG 4": {
          "Stufe A": 3023,
          "Stufe B": 3111,
          "Stufe C": 3309
        },
        "EG 5": {
          "Stufe A": 3392,
          "Stufe B": 3475
        },
        "EG 6": {
          "Stufe A": 3602,
          "Stufe B": 3727
        },
        "EG 7": {
          "Stufe A": 3884,
          "Stufe B": 4042
        },
        "EG 8": {
          "Stufe A": 4213,
          "Stufe B": 4389
        },
        "EG 9": {
          "Stufe A": 4614,
          "Stufe B": 4841
        },
        "EG 10": {
          "Stufe A": 5103,
          "Stufe B": 5362
        },
        "EG 11": {
          "Stufe A": 5643,
          "Stufe B": 5920
        },
        "EG 12": {
          "Stufe A": 6186,
          "Stufe B": 6450
        }
      },
      "Berlin/Brandenburg": {
        "EG 1": {
          "Hauptstufe": 2657
        },
        "EG 2": {
          "Hauptstufe": 2705
        },
        "EG 3": {
          "Eingangsstufe": 2764,
          "Hauptstufe": 2794,
          "1. Zusatzstufe": 2878,
          "2. Zusatzstufe": 2962
        },
        "EG 4": {
          "Eingangsstufe": 2962,
          "Hauptstufe": 3046,
          "1. Zusatzstufe": 3166,
          "2. Zusatzstufe": 3287
        },
        "EG 5": {
          "Eingangsstufe": 3287,
          "Hauptstufe": 3407,
          "1. Zusatzstufe": 3464,
          "2. Zusatzstufe": 3520
        },
        "EG 6": {
          "Eingangsstufe": 3520,
          "Hauptstufe": 3577,
          "1. Zusatzstufe": 3634,
          "2. Zusatzstufe": 3691
        },
        "EG 7": {
          "Eingangsstufe": 3691,
          "Hauptstufe": 3748,
          "1. Zusatzstufe": 3805,
          "2. Zusatzstufe": 3861
        },
        "EG 8": {
          "Eingangsstufe": 3861,
          "Hauptstufe": 3918,
          "1. Zusatzstufe": 3986,
          "2. Zusatzstufe": 4054
        },
        "EG 9": {
          "Eingangsstufe": 4054,
          "Hauptstufe": 4122,
          "1. Zusatzstufe": 4281,
          "2. Zusatzstufe": 4440
        },
        "EG 10": {
          "Eingangsstufe": 4440,
          "Hauptstufe": 4599,
          "1. Zusatzstufe": 4826
        },
        "EG 11": {
          "Eingangsstufe": 5054,
          "Hauptstufe": 5281,
          "1. Zusatzstufe": 5519
        },
        "EG 12": {
          "Eingangsstufe": 5758,
          "Hauptstufe": 5996,
          "1. Zusatzstufe": 6223
        },
        "EG 13": {
          "Eingangsstufe": 6451,
          "Hauptstufe": 6678
        }
      },
      "Hamburg/Unterweser": {
        "EG 2": {
          "Grundstufe": 2821,
          "Hauptstufe": 2924
        },
        "EG 3": {
          "Grundstufe": 2910,
          "Hauptstufe": 3015
        },
        "EG 4": {
          "Grundstufe": 3067,
          "Hauptstufe": 3156,
          "Zusatzstufe 1": 3243,
          "Zusatzstufe 2": 3331
        },
        "EG 5": {
          "Grundstufe": 3377,
          "Hauptstufe": 3465,
          "Zusatzstufe 1": 3553,
          "Zusatzstufe 2": 3637,
          "Zusatzstufe 3": 3727
        },
        "EG 6": {
          "Grundstufe": 3645,
          "Hauptstufe": 3732,
          "Zusatzstufe 1": 3866,
          "Zusatzstufe 2": 3951,
          "Zusatzstufe 3": 4038
        },
        "EG 7": {
          "Grundstufe": 3914,
          "Hauptstufe": 4033,
          "Zusatzstufe 1": 4164,
          "Zusatzstufe 2": 4282,
          "Zusatzstufe 3": 4404
        },
        "EG 8": {
          "Grundstufe": 4611,
          "Hauptstufe": 4729,
          "Zusatzstufe 1": 4864,
          "Zusatzstufe 2": 4985,
          "Zusatzstufe 3": 5102
        },
        "EG 9": {
          "Grundstufe": 5339,
          "Hauptstufe": 5494,
          "Zusatzstufe 1": 5626,
          "Zusatzstufe 2": 5783
        },
        "EG 10": {
          "Grundstufe": 6089,
          "Hauptstufe": 6333,
          "Zusatzstufe 1": 6508
        },
        "EG 11": {
          "Grundstufe": 6876,
          "Hauptstufe": 7117
        }
      },
      "Hessen": {
        "EG 1": {
          "Grundentgelt": 2679
        },
        "EG 2": {
          "Grundentgelt": 2743
        },
        "EG 3": {
          "Grundentgelt": 2838
        },
        "EG 4": {
          "Grundentgelt": 2998,
          "Zusatzstufe": 3061.67
        },
        "EG 5": {
          "Grundentgelt": 3189,
          "Zusatzstufe": 3295.33
        },
        "EG 6": {
          "Grundentgelt": 3508,
          "Zusatzstufe": 3635.67
        },
        "EG 7": {
          "Grundentgelt": 3891,
          "Zusatzstufe": 4050.33
        },
        "EG 8": {
          "Grundentgelt": 4369,
          "Zusatzstufe": 4560.33
        },
        "EG 9": {
          "Grundentgelt": 4943,
          "Zusatzstufe": 5102.33
        },
        "EG 10": {
          "Grundentgelt": 5421,
          "Zusatzstufe": 5580.67
        },
        "EG 11": {
          "Grundentgelt": 5900,
          "Zusatzstufe": 6218.55
        }
      },
      "Niedersachsen": {
        "EG 2": {
          "Stufe A": 2620,
          "Stufe B": 2702,
          "Stufe C": 2723
        },
        "EG 3": {
          "Stufe A": 2744,
          "Stufe B": 2789,
          "Stufe C": 2852
        },
        "EG 4": {
          "Stufe A": 2885,
          "Stufe B": 2922,
          "Stufe C": 3071
        },
        "EG 5": {
          "Stufe A": 3255,
          "Stufe B": 3462,
          "Stufe C": 3506
        },
        "EG 6": {
          "Stufe A": 3547,
          "Stufe B": 3594,
          "Stufe C": 3672
        },
        "EG 7": {
          "Stufe A": 3780,
          "Stufe B": 3865,
          "Stufe C": 3957
        },
        "EG 8": {
          "Stufe A": 4047,
          "Stufe B": 4179,
          "Stufe C": 4236
        },
        "EG 9": {
          "Stufe A": 4261,
          "Stufe B": 4341,
          "Stufe C": 4408
        },
        "EG 10": {
          "Stufe A": 4492,
          "Stufe B": 4556,
          "Stufe C": 4607
        },
        "EG 11": {
          "Stufe A": 4670,
          "Stufe B": 4889,
          "Stufe C": 5111
        },
        "EG 12": {
          "Stufe A": 5327,
          "Stufe B": 5545,
          "Stufe C": 5765
        },
        "EG 13": {
          "Stufe A": 6010,
          "Stufe B": 6482,
          "Stufe C": 6675
        }
      },
      "Nordrhein-Westfalen": {
        "EG 1": {
          "Grundentgelt": 2705
        },
        "EG 2": {
          "Grundentgelt": 2738
        },
        "EG 3": {
          "Grundentgelt": 2769.5
        },
        "EG 4": {
          "Grundentgelt": 2812.5
        },
        "EG 5": {
          "Grundentgelt": 2871.5
        },
        "EG 6": {
          "Grundentgelt": 2946
        },
        "EG 7": {
          "Grundentgelt": 3038
        },
        "EG 8": {
          "Grundentgelt": 3196
        },
        "EG 9": {
          "Grundentgelt": 3454
        },
        "EG 10": {
          "Grundentgelt": 3796.5
        },
        "EG 11": {
          "Grundentgelt": 4257
        },
        "EG 12": {
          "bis 36. Monat": 4387,
          "nach 36. Monat": 4872
        },
        "EG 13": {
          "bis 18. Monat": 4902,
          "nach 18. Monat": 5190.5,
          "nach 36. Monat": 5766.5
        },
        "EG 14": {
          "bis 12. Monat": 5568.5,
          "nach 12. Monat": 5917,
          "nach 24. Monat": 6265.5,
          "nach 36. Monat": 6962.5
        }
      },
      "Osnabrück-Emsland": {
        "EG 1": {
          "Hauptstufe": 2702,
          "Zusatzstufe 1": 2744
        },
        "EG 2": {
          "Eingangsstufe": 2744,
          "Hauptstufe": 2789,
          "Zusatzstufe 1": 2829,
          "Zusatzstufe 2": 2871
        },
        "EG 3": {
          "Eingangsstufe": 2871,
          "Hauptstufe": 3039,
          "Zusatzstufe 1": 3069,
          "Zusatzstufe 2": 3103,
          "Zusatzstufe 3": 3130
        },
        "EG 4": {
          "Eingangsstufe": 3130,
          "Hauptstufe": 3462,
          "Zusatzstufe 1": 3500,
          "Zusatzstufe 2": 3535,
          "Zusatzstufe 3": 3566
        },
        "EG 5": {
          "Eingangsstufe": 3566,
          "Hauptstufe": 3756,
          "Zusatzstufe 1": 3793,
          "Zusatzstufe 2": 3830,
          "Zusatzstufe 3": 3870
        },
        "EG 6": {
          "Eingangsstufe": 3870,
          "Hauptstufe": 3923,
          "Zusatzstufe 1": 3964,
          "Zusatzstufe 2": 4004,
          "Zusatzstufe 3": 4043
        },
        "EG 7": {
          "Eingangsstufe": 4043,
          "Hauptstufe": 4139,
          "Zusatzstufe 1": 4183,
          "Zusatzstufe 2": 4224,
          "Zusatzstufe 3": 4264
        },
        "EG 8": {
          "Eingangsstufe": 4264,
          "Hauptstufe": 4408,
          "Zusatzstufe 1": 4452,
          "Zusatzstufe 2": 4497,
          "Zusatzstufe 3": 4541
        },
        "EG 9": {
          "Eingangsstufe": 4541,
          "Hauptstufe": 4673,
          "Zusatzstufe 1": 4720,
          "Zusatzstufe 2": 4766,
          "Zusatzstufe 3": 4816
        },
        "EG 10": {
          "Eingangsstufe": 4816,
          "Hauptstufe": 5008,
          "Zusatzstufe 1": 5056,
          "Zusatzstufe 2": 5109,
          "Zusatzstufe 3": 5155
        },
        "EG 11": {
          "Eingangsstufe": 5155,
          "Hauptstufe": 5590,
          "Zusatzstufe 1": 5648,
          "Zusatzstufe 2": 5705,
          "Zusatzstufe 3": 5761
        },
        "EG 12": {
          "Eingangsstufe": 5761,
          "Hauptstufe": 6499
        }
      },
      "Pfalz": {
        "EG 1": {
          "Grundentgelt": 2679
        },
        "EG 2": {
          "Grundentgelt": 2743
        },
        "EG 3": {
          "Grundentgelt": 2838
        },
        "EG 4": {
          "Grundentgelt": 2998,
          "Zusatzstufe": 3061.67
        },
        "EG 5": {
          "Grundentgelt": 3189,
          "Zusatzstufe": 3295.33
        },
        "EG 6": {
          "Grundentgelt": 3508,
          "Zusatzstufe": 3635.67
        },
        "EG 7": {
          "Grundentgelt": 3891,
          "Zusatzstufe": 4029
        },
        "EG 8": {
          "Grundentgelt": 4305,
          "Zusatzstufe": 4464.67
        },
        "EG 9": {
          "Grundentgelt": 4784,
          "Zusatzstufe": 4996.33
        },
        "EG 10": {
          "Grundentgelt": 5421,
          "Zusatzstufe": 5580.67
        },
        "EG 11": {
          "Grundentgelt": 5900,
          "Zusatzstufe": 6218.55
        }
      },
      "Rheinland-Rheinhessen": {
        "EG 1": {
          "Grundentgelt": 2679
        },
        "EG 2": {
          "Grundentgelt": 2743
        },
        "EG 3": {
          "Grundentgelt": 2838
        },
        "EG 4": {
          "Grundentgelt": 2998,
          "Zusatzstufe": 3061.67
        },
        "EG 5": {
          "Grundentgelt": 3189,
          "Zusatzstufe": 3295.33
        },
        "EG 6": {
          "Grundentgelt": 3508,
          "Zusatzstufe": 3635.67
        },
        "EG 7": {
          "Grundentgelt": 3891,
          "Zusatzstufe": 4050.33
        },
        "EG 8": {
          "Grundentgelt": 4369,
          "Zusatzstufe": 4560.33
        },
        "EG 9": {
          "Grundentgelt": 4943,
          "Zusatzstufe": 5102.33
        },
        "EG 10": {
          "Grundentgelt": 5421,
          "Zusatzstufe": 5580.67
        },
        "EG 11": {
          "Grundentgelt": 5900,
          "Zusatzstufe": 6387.89
        }
      },
      "Saarland": {
        "EG 1": {
          "Grundentgelt": 2679
        },
        "EG 2": {
          "Grundentgelt": 2743
        },
        "EG 3": {
          "Grundentgelt": 2838
        },
        "EG 4": {
          "Grundentgelt": 2998,
          "Zusatzstufe": 3061.67
        },
        "EG 5": {
          "Grundentgelt": 3189,
          "Zusatzstufe": 3295.33
        },
        "EG 6": {
          "Grundentgelt": 3508,
          "Zusatzstufe": 3635.67
        },
        "EG 7": {
          "Grundentgelt": 3891,
          "Zusatzstufe": 4050.33
        },
        "EG 8": {
          "Grundentgelt": 4369,
          "Zusatzstufe": 4560.33
        },
        "EG 9": {
          "Grundentgelt": 4943,
          "Zusatzstufe": 5102.33
        },
        "EG 10": {
          "Grundentgelt": 5421,
          "Zusatzstufe": 5580.67
        },
        "EG 11": {
          "Grundentgelt": 5900,
          "Zusatzstufe": 6218.55
        }
      },
      "Sachsen": {
        "EG 1": {
          "Grundentgelt": 2679,
          "Zusatzstufe": 2711
        },
        "EG 2": {
          "Grundentgelt": 2743,
          "Zusatzstufe": 2774
        },
        "EG 3": {
          "Grundentgelt": 2838,
          "Zusatzstufe": 2902
        },
        "EG 4": {
          "Grundentgelt": 2998,
          "Zusatzstufe": 3093
        },
        "EG 5": {
          "Grundentgelt": 3189,
          "Zusatzstufe": 3348
        },
        "EG 6": {
          "Grundentgelt": 3508,
          "Zusatzstufe": 3667
        },
        "EG 7": {
          "Grundentgelt": 3891,
          "Zusatzstufe": 4050
        },
        "EG 8": {
          "Grundentgelt": 4369,
          "Zusatzstufe": 4528
        },
        "EG 9": {
          "Grundentgelt": 4784,
          "Zusatzstufe": 4943
        },
        "EG 10": {
          "Grundentgelt": 5102,
          "Zusatzstufe": 5262
        },
        "EG 11": {
          "Grundentgelt": 5581,
          "Zusatzstufe": 5740
        },
        "EG 12": {
          "Grundentgelt": 5900,
          "Zusatzstufe": 6219
        }
      },
      "Sachsen-Anhalt": {
        "EG 1": {
          "Grundstufe": 2702,
          "Zusatzstufe": 2757
        },
        "EG 2": {
          "Grundstufe": 2791,
          "Zusatzstufe": 2827
        },
        "EG 3": {
          "Grundstufe": 2893,
          "Zusatzstufe": 2953
        },
        "EG 4": {
          "Grundstufe": 3050,
          "Zusatzstufe": 3153
        },
        "EG 5": {
          "Grundstufe": 3280,
          "Zusatzstufe": 3409
        },
        "EG 6": {
          "Grundstufe": 3547,
          "Zusatzstufe": 3790
        },
        "EG 7": {
          "Grundstufe": 4014,
          "Zusatzstufe": 4192
        },
        "EG 8": {
          "Grundstufe": 4337,
          "Zusatzstufe": 4561
        },
        "EG 9": {
          "Grundstufe": 4991,
          "Zusatzstufe": 5221
        },
        "EG 10": {
          "Grundstufe": 5663,
          "Zusatzstufe": 5886
        },
        "EG 11": {
          "Grundstufe": 6375,
          "Zusatzstufe": 6620
        }
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "EG 2": {
          "Grundstufe": 2821,
          "Hauptstufe": 2924
        },
        "EG 3": {
          "Grundstufe": 2910,
          "Hauptstufe": 3015,
          "Zusatzstufe 1": 3120
        },
        "EG 4": {
          "Grundstufe": 3067,
          "Hauptstufe": 3156,
          "Zusatzstufe 1": 3243,
          "Zusatzstufe 2": 3331
        },
        "EG 5": {
          "Grundstufe": 3377,
          "Hauptstufe": 3465,
          "Zusatzstufe 1": 3553,
          "Zusatzstufe 2": 3637,
          "Zusatzstufe 3": 3727
        },
        "EG 6": {
          "Grundstufe": 3619,
          "Hauptstufe": 3702,
          "Zusatzstufe 1": 3834,
          "Zusatzstufe 2": 3923,
          "Zusatzstufe 3": 4011
        },
        "EG 7": {
          "Grundstufe": 3857,
          "Hauptstufe": 3973,
          "Zusatzstufe 1": 4106,
          "Zusatzstufe 2": 4224,
          "Zusatzstufe 3": 4343
        },
        "EG 8": {
          "Grundstufe": 4494,
          "Hauptstufe": 4607,
          "Zusatzstufe 1": 4744,
          "Zusatzstufe 2": 4860,
          "Zusatzstufe 3": 4984
        },
        "EG 9": {
          "Grundstufe": 5160,
          "Hauptstufe": 5318,
          "Zusatzstufe 1": 5452,
          "Zusatzstufe 2": 5603
        },
        "EG 10": {
          "Grundstufe": 5854,
          "Hauptstufe": 6095,
          "Zusatzstufe 1": 6268
        },
        "EG 11": {
          "Grundstufe": 6580,
          "Hauptstufe": 6851
        }
      },
      "Thüringen": {
        "EG 1": {
          "Grundentgelt": 2679,
          "Zusatzstufe": 2711
        },
        "EG 2": {
          "Grundentgelt": 2743,
          "Zusatzstufe": 2774
        },
        "EG 3": {
          "Grundentgelt": 2838,
          "Zusatzstufe": 2902
        },
        "EG 4": {
          "Grundentgelt": 2998,
          "Zusatzstufe": 3093
        },
        "EG 5": {
          "Grundentgelt": 3189,
          "Zusatzstufe": 3348
        },
        "EG 6": {
          "Grundentgelt": 3508,
          "Zusatzstufe": 3667
        },
        "EG 7": {
          "Grundentgelt": 3891,
          "Zusatzstufe": 4050
        },
        "EG 8": {
          "Grundentgelt": 4369,
          "Zusatzstufe": 4528
        },
        "EG 9": {
          "Grundentgelt": 4784,
          "Zusatzstufe": 4943
        },
        "EG 10": {
          "Grundentgelt": 5102,
          "Zusatzstufe": 5262
        },
        "EG 11": {
          "Grundentgelt": 5581,
          "Zusatzstufe": 5740
        },
        "EG 12": {
          "Grundentgelt": 5900,
          "Zusatzstufe": 6219
        }
      }
    },
    "bonusData": {
      "Baden-Württemberg": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3197,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Bayern": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3392,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Berlin/Brandenburg": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3287,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Hamburg/Unterweser": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3377,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Hessen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3189,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Niedersachsen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3255,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Nordrhein-Westfalen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3454,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Osnabrück-Emsland": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3566,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Pfalz": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3189,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Rheinland-Rheinhessen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3189,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Saarland": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3189,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Sachsen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3189,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Sachsen-Anhalt": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3280,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3377,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Thüringen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.185,
        "eckentgelt": 3189,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      }
    }
  },
  "2026": {
    "salaryData": {
      "Baden-Württemberg": {
        "EG 1": {
          "Grundentgelt": 2740.4
        },
        "EG 2": {
          "Grundentgelt": 2814.63
        },
        "EG 3": {
          "Grundentgelt": 2962.58
        },
        "EG 4": {
          "Grundentgelt": 3110.53
        },
        "EG 5": {
          "Grundentgelt": 3296.11
        },
        "EG 6": {
          "Grundentgelt": 3481.17
        },
        "EG 7": {
          "Grundentgelt": 3703.35
        },
        "EG 8": {
          "Grundentgelt": 3962.65
        },
        "EG 9": {
          "Grundentgelt": 4221.95
        },
        "EG 10": {
          "Grundentgelt": 4499.28
        },
        "EG 11": {
          "Grundentgelt": 4795.7
        },
        "EG 12": {
          "Grundentgelt": 5129.22
        },
        "EG 13": {
          "Grundentgelt": 5462.24
        },
        "EG 14": {
          "Grundentgelt": 5795.77
        },
        "EG 15": {
          "Grundentgelt": 6128.78
        },
        "EG 16": {
          "Grundentgelt": 6536.54
        },
        "EG 17": {
          "Grundentgelt": 6906.67
        }
      },
      "Bayern": {
        "EG 1": {
          "Stufe A": 2741.43
        },
        "EG 2": {
          "Stufe A": 2795.04,
          "Stufe B": 2841.44
        },
        "EG 3": {
          "Stufe A": 2935.26,
          "Stufe B": 3025.98
        },
        "EG 4": {
          "Stufe A": 3116.71,
          "Stufe B": 3207.44,
          "Stufe C": 3411.58
        },
        "EG 5": {
          "Stufe A": 3497.15,
          "Stufe B": 3582.73
        },
        "EG 6": {
          "Stufe A": 3713.66,
          "Stufe B": 3842.54
        },
        "EG 7": {
          "Stufe A": 4004.4,
          "Stufe B": 4167.3
        },
        "EG 8": {
          "Stufe A": 4343.6,
          "Stufe B": 4525.06
        },
        "EG 9": {
          "Stufe A": 4757.03,
          "Stufe B": 4991.07
        },
        "EG 10": {
          "Stufe A": 5261.19,
          "Stufe B": 5528.22
        },
        "EG 11": {
          "Stufe A": 5817.93,
          "Stufe B": 6103.52
        },
        "EG 12": {
          "Stufe A": 6377.77,
          "Stufe B": 6649.95
        }
      },
      "Berlin/Brandenburg": {
        "EG 1": {
          "Hauptstufe": 2739.37
        },
        "EG 2": {
          "Hauptstufe": 2788.85
        },
        "EG 3": {
          "Eingangsstufe": 2849.68,
          "Hauptstufe": 2880.61,
          "1. Zusatzstufe": 2967.22,
          "2. Zusatzstufe": 3053.82
        },
        "EG 4": {
          "Eingangsstufe": 3053.82,
          "Hauptstufe": 3140.43,
          "1. Zusatzstufe": 3264.15,
          "2. Zusatzstufe": 3388.9
        },
        "EG 5": {
          "Eingangsstufe": 3388.9,
          "Hauptstufe": 3512.62,
          "1. Zusatzstufe": 3571.38,
          "2. Zusatzstufe": 3629.12
        },
        "EG 6": {
          "Eingangsstufe": 3629.12,
          "Hauptstufe": 3687.89,
          "1. Zusatzstufe": 3746.65,
          "2. Zusatzstufe": 3805.42
        },
        "EG 7": {
          "Eingangsstufe": 3805.42,
          "Hauptstufe": 3864.19,
          "1. Zusatzstufe": 3922.95,
          "2. Zusatzstufe": 3980.69
        },
        "EG 8": {
          "Eingangsstufe": 3980.69,
          "Hauptstufe": 4039.46,
          "1. Zusatzstufe": 4109.57,
          "2. Zusatzstufe": 4179.67
        },
        "EG 9": {
          "Eingangsstufe": 4179.67,
          "Hauptstufe": 4249.78,
          "1. Zusatzstufe": 4413.71,
          "2. Zusatzstufe": 4577.64
        },
        "EG 10": {
          "Eingangsstufe": 4577.64,
          "Hauptstufe": 4741.57,
          "1. Zusatzstufe": 4975.61
        },
        "EG 11": {
          "Eingangsstufe": 5210.67,
          "Hauptstufe": 5444.71,
          "1. Zusatzstufe": 5690.09
        },
        "EG 12": {
          "Eingangsstufe": 5936.5,
          "Hauptstufe": 6181.88,
          "1. Zusatzstufe": 6415.91
        },
        "EG 13": {
          "Eingangsstufe": 6650.98,
          "Hauptstufe": 6885.02
        }
      },
      "Hamburg/Unterweser": {
        "EG 2": {
          "Grundstufe": 2908.45,
          "Hauptstufe": 3014.64
        },
        "EG 3": {
          "Grundstufe": 3000.21,
          "Hauptstufe": 3108.46
        },
        "EG 4": {
          "Grundstufe": 3162.08,
          "Hauptstufe": 3253.84,
          "Zusatzstufe 1": 3343.53,
          "Zusatzstufe 2": 3434.26
        },
        "EG 5": {
          "Grundstufe": 3481.69,
          "Hauptstufe": 3572.41,
          "Zusatzstufe 1": 3663.14,
          "Zusatzstufe 2": 3749.75,
          "Zusatzstufe 3": 3842.54
        },
        "EG 6": {
          "Grundstufe": 3758,
          "Hauptstufe": 3847.69,
          "Zusatzstufe 1": 3985.85,
          "Zusatzstufe 2": 4073.48,
          "Zusatzstufe 3": 4163.18
        },
        "EG 7": {
          "Grundstufe": 4035.33,
          "Hauptstufe": 4158.02,
          "Zusatzstufe 1": 4293.08,
          "Zusatzstufe 2": 4414.74,
          "Zusatzstufe 3": 4540.52
        },
        "EG 8": {
          "Grundstufe": 4753.94,
          "Hauptstufe": 4875.6,
          "Zusatzstufe 1": 5014.78,
          "Zusatzstufe 2": 5139.54,
          "Zusatzstufe 3": 5260.16
        },
        "EG 9": {
          "Grundstufe": 5504.51,
          "Hauptstufe": 5664.31,
          "Zusatzstufe 1": 5800.41,
          "Zusatzstufe 2": 5962.27
        },
        "EG 10": {
          "Grundstufe": 6277.76,
          "Hauptstufe": 6529.32,
          "Zusatzstufe 1": 6709.75
        },
        "EG 11": {
          "Grundstufe": 7089.16,
          "Hauptstufe": 7337.63
        }
      },
      "Hessen": {
        "EG 1": {
          "Grundentgelt": 2762.05
        },
        "EG 2": {
          "Grundentgelt": 2828.03
        },
        "EG 3": {
          "Grundentgelt": 2925.98
        },
        "EG 4": {
          "Grundentgelt": 3090.94,
          "Zusatzstufe": 3156.58
        },
        "EG 5": {
          "Grundentgelt": 3287.86,
          "Zusatzstufe": 3397.49
        },
        "EG 6": {
          "Grundentgelt": 3616.75,
          "Zusatzstufe": 3748.38
        },
        "EG 7": {
          "Grundentgelt": 4011.62,
          "Zusatzstufe": 4175.89
        },
        "EG 8": {
          "Grundentgelt": 4504.44,
          "Zusatzstufe": 4701.7
        },
        "EG 9": {
          "Grundentgelt": 5096.23,
          "Zusatzstufe": 5260.5
        },
        "EG 10": {
          "Grundentgelt": 5589.05,
          "Zusatzstufe": 5753.67
        },
        "EG 11": {
          "Grundentgelt": 6082.9,
          "Zusatzstufe": 6411.33
        }
      },
      "Niedersachsen": {
        "EG 2": {
          "Stufe A": 2701.22,
          "Stufe B": 2785.76,
          "Stufe C": 2807.41
        },
        "EG 3": {
          "Stufe A": 2829.06,
          "Stufe B": 2875.46,
          "Stufe C": 2940.41
        },
        "EG 4": {
          "Stufe A": 2974.44,
          "Stufe B": 3012.58,
          "Stufe C": 3166.2
        },
        "EG 5": {
          "Stufe A": 3355.91,
          "Stufe B": 3569.32,
          "Stufe C": 3614.69
        },
        "EG 6": {
          "Stufe A": 3656.96,
          "Stufe B": 3705.41,
          "Stufe C": 3785.83
        },
        "EG 7": {
          "Stufe A": 3897.18,
          "Stufe B": 3984.81,
          "Stufe C": 4079.67
        },
        "EG 8": {
          "Stufe A": 4172.46,
          "Stufe B": 4308.55,
          "Stufe C": 4367.32
        },
        "EG 9": {
          "Stufe A": 4393.09,
          "Stufe B": 4475.57,
          "Stufe C": 4544.65
        },
        "EG 10": {
          "Stufe A": 4631.25,
          "Stufe B": 4697.24,
          "Stufe C": 4749.82
        },
        "EG 11": {
          "Stufe A": 4814.77,
          "Stufe B": 5040.56,
          "Stufe C": 5269.44
        },
        "EG 12": {
          "Stufe A": 5492.14,
          "Stufe B": 5716.9,
          "Stufe C": 5943.71
        },
        "EG 13": {
          "Stufe A": 6196.31,
          "Stufe B": 6682.94,
          "Stufe C": 6881.92
        }
      },
      "Nordrhein-Westfalen": {
        "EG 1": {
          "Grundentgelt": 2788.85
        },
        "EG 2": {
          "Grundentgelt": 2822.88
        },
        "EG 3": {
          "Grundentgelt": 2855.35
        },
        "EG 4": {
          "Grundentgelt": 2899.69
        },
        "EG 5": {
          "Grundentgelt": 2960.52
        },
        "EG 6": {
          "Grundentgelt": 3037.33
        },
        "EG 7": {
          "Grundentgelt": 3132.18
        },
        "EG 8": {
          "Grundentgelt": 3295.08
        },
        "EG 9": {
          "Grundentgelt": 3561.07
        },
        "EG 10": {
          "Grundentgelt": 3914.19
        },
        "EG 11": {
          "Grundentgelt": 4388.97
        },
        "EG 12": {
          "bis 36. Monat": 4523,
          "nach 36. Monat": 5023.03
        },
        "EG 13": {
          "bis 18. Monat": 5053.96,
          "nach 18. Monat": 5351.41,
          "nach 36. Monat": 5945.26
        },
        "EG 14": {
          "bis 12. Monat": 5741.12,
          "nach 12. Monat": 6100.43,
          "nach 24. Monat": 6459.73,
          "nach 36. Monat": 7178.34
        }
      },
      "Osnabrück-Emsland": {
        "EG 1": {
          "Hauptstufe": 2785.76,
          "Zusatzstufe 1": 2829.06
        },
        "EG 2": {
          "Eingangsstufe": 2829.06,
          "Hauptstufe": 2875.46,
          "Zusatzstufe 1": 2916.7,
          "Zusatzstufe 2": 2960
        },
        "EG 3": {
          "Eingangsstufe": 2960,
          "Hauptstufe": 3133.21,
          "Zusatzstufe 1": 3164.14,
          "Zusatzstufe 2": 3199.19,
          "Zusatzstufe 3": 3227.03
        },
        "EG 4": {
          "Eingangsstufe": 3227.03,
          "Hauptstufe": 3569.32,
          "Zusatzstufe 1": 3608.5,
          "Zusatzstufe 2": 3644.58,
          "Zusatzstufe 3": 3676.55
        },
        "EG 5": {
          "Eingangsstufe": 3676.55,
          "Hauptstufe": 3872.44,
          "Zusatzstufe 1": 3910.58,
          "Zusatzstufe 2": 3948.73,
          "Zusatzstufe 3": 3989.97
        },
        "EG 6": {
          "Eingangsstufe": 3989.97,
          "Hauptstufe": 4044.61,
          "Zusatzstufe 1": 4086.88,
          "Zusatzstufe 2": 4128.12,
          "Zusatzstufe 3": 4168.33
        },
        "EG 7": {
          "Eingangsstufe": 4168.33,
          "Hauptstufe": 4267.31,
          "Zusatzstufe 1": 4312.67,
          "Zusatzstufe 2": 4354.94,
          "Zusatzstufe 3": 4396.18
        },
        "EG 8": {
          "Eingangsstufe": 4396.18,
          "Hauptstufe": 4544.65,
          "Zusatzstufe 1": 4590.01,
          "Zusatzstufe 2": 4636.41,
          "Zusatzstufe 3": 4681.77
        },
        "EG 9": {
          "Eingangsstufe": 4681.77,
          "Hauptstufe": 4817.86,
          "Zusatzstufe 1": 4866.32,
          "Zusatzstufe 2": 4913.75,
          "Zusatzstufe 3": 4965.3
        },
        "EG 10": {
          "Eingangsstufe": 4965.3,
          "Hauptstufe": 5163.25,
          "Zusatzstufe 1": 5212.74,
          "Zusatzstufe 2": 5267.38,
          "Zusatzstufe 3": 5314.8
        },
        "EG 11": {
          "Eingangsstufe": 5314.8,
          "Hauptstufe": 5763.29,
          "Zusatzstufe 1": 5823.09,
          "Zusatzstufe 2": 5881.86,
          "Zusatzstufe 3": 5939.59
        },
        "EG 12": {
          "Eingangsstufe": 5939.59,
          "Hauptstufe": 6700.47
        }
      },
      "Pfalz": {
        "EG 1": {
          "Grundentgelt": 2762.05
        },
        "EG 2": {
          "Grundentgelt": 2828.03
        },
        "EG 3": {
          "Grundentgelt": 2925.98
        },
        "EG 4": {
          "Grundentgelt": 3090.94,
          "Zusatzstufe": 3156.58
        },
        "EG 5": {
          "Grundentgelt": 3287.86,
          "Zusatzstufe": 3397.49
        },
        "EG 6": {
          "Grundentgelt": 3616.75,
          "Zusatzstufe": 3748.38
        },
        "EG 7": {
          "Grundentgelt": 4011.62,
          "Zusatzstufe": 4153.9
        },
        "EG 8": {
          "Grundentgelt": 4438.46,
          "Zusatzstufe": 4603.07
        },
        "EG 9": {
          "Grundentgelt": 4932.3,
          "Zusatzstufe": 5151.22
        },
        "EG 10": {
          "Grundentgelt": 5589.05,
          "Zusatzstufe": 5753.67
        },
        "EG 11": {
          "Grundentgelt": 6082.9,
          "Zusatzstufe": 6411.33
        }
      },
      "Rheinland-Rheinhessen": {
        "EG 1": {
          "Grundentgelt": 2762.05
        },
        "EG 2": {
          "Grundentgelt": 2828.03
        },
        "EG 3": {
          "Grundentgelt": 2925.98
        },
        "EG 4": {
          "Grundentgelt": 3090.94,
          "Zusatzstufe": 3156.58
        },
        "EG 5": {
          "Grundentgelt": 3287.86,
          "Zusatzstufe": 3397.49
        },
        "EG 6": {
          "Grundentgelt": 3616.75,
          "Zusatzstufe": 3748.38
        },
        "EG 7": {
          "Grundentgelt": 4011.62,
          "Zusatzstufe": 4175.89
        },
        "EG 8": {
          "Grundentgelt": 4504.44,
          "Zusatzstufe": 4701.7
        },
        "EG 9": {
          "Grundentgelt": 5096.23,
          "Zusatzstufe": 5260.5
        },
        "EG 10": {
          "Grundentgelt": 5589.05,
          "Zusatzstufe": 5753.67
        },
        "EG 11": {
          "Grundentgelt": 6082.9,
          "Zusatzstufe": 6585.91
        }
      },
      "Saarland": {
        "EG 1": {
          "Grundentgelt": 2762.05
        },
        "EG 2": {
          "Grundentgelt": 2828.03
        },
        "EG 3": {
          "Grundentgelt": 2925.98
        },
        "EG 4": {
          "Grundentgelt": 3090.94,
          "Zusatzstufe": 3156.58
        },
        "EG 5": {
          "Grundentgelt": 3287.86,
          "Zusatzstufe": 3397.49
        },
        "EG 6": {
          "Grundentgelt": 3616.75,
          "Zusatzstufe": 3748.38
        },
        "EG 7": {
          "Grundentgelt": 4011.62,
          "Zusatzstufe": 4175.89
        },
        "EG 8": {
          "Grundentgelt": 4504.44,
          "Zusatzstufe": 4701.7
        },
        "EG 9": {
          "Grundentgelt": 5096.23,
          "Zusatzstufe": 5260.5
        },
        "EG 10": {
          "Grundentgelt": 5589.05,
          "Zusatzstufe": 5753.67
        },
        "EG 11": {
          "Grundentgelt": 6082.9,
          "Zusatzstufe": 6411.33
        }
      },
      "Sachsen": {
        "EG 1": {
          "Grundentgelt": 2762.05,
          "Zusatzstufe": 2795.04
        },
        "EG 2": {
          "Grundentgelt": 2828.03,
          "Zusatzstufe": 2859.99
        },
        "EG 3": {
          "Grundentgelt": 2925.98,
          "Zusatzstufe": 2991.96
        },
        "EG 4": {
          "Grundentgelt": 3090.94,
          "Zusatzstufe": 3188.88
        },
        "EG 5": {
          "Grundentgelt": 3287.86,
          "Zusatzstufe": 3451.79
        },
        "EG 6": {
          "Grundentgelt": 3616.75,
          "Zusatzstufe": 3780.68
        },
        "EG 7": {
          "Grundentgelt": 4011.62,
          "Zusatzstufe": 4175.55
        },
        "EG 8": {
          "Grundentgelt": 4504.44,
          "Zusatzstufe": 4668.37
        },
        "EG 9": {
          "Grundentgelt": 4932.3,
          "Zusatzstufe": 5096.23
        },
        "EG 10": {
          "Grundentgelt": 5260.16,
          "Zusatzstufe": 5425.12
        },
        "EG 11": {
          "Grundentgelt": 5754.01,
          "Zusatzstufe": 5917.94
        },
        "EG 12": {
          "Grundentgelt": 6082.9,
          "Zusatzstufe": 6411.79
        }
      },
      "Sachsen-Anhalt": {
        "EG 1": {
          "Grundstufe": 2785.76,
          "Zusatzstufe": 2842.47
        },
        "EG 2": {
          "Grundstufe": 2877.52,
          "Zusatzstufe": 2914.64
        },
        "EG 3": {
          "Grundstufe": 2982.68,
          "Zusatzstufe": 3044.54
        },
        "EG 4": {
          "Grundstufe": 3144.55,
          "Zusatzstufe": 3250.74
        },
        "EG 5": {
          "Grundstufe": 3381.68,
          "Zusatzstufe": 3514.68
        },
        "EG 6": {
          "Grundstufe": 3656.96,
          "Zusatzstufe": 3907.49
        },
        "EG 7": {
          "Grundstufe": 4138.43,
          "Zusatzstufe": 4321.95
        },
        "EG 8": {
          "Grundstufe": 4471.45,
          "Zusatzstufe": 4702.39
        },
        "EG 9": {
          "Grundstufe": 5145.72,
          "Zusatzstufe": 5382.85
        },
        "EG 10": {
          "Grundstufe": 5838.55,
          "Zusatzstufe": 6068.47
        },
        "EG 11": {
          "Grundstufe": 6572.62,
          "Zusatzstufe": 6825.22
        }
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "EG 2": {
          "Grundstufe": 2908.45,
          "Hauptstufe": 3014.64
        },
        "EG 3": {
          "Grundstufe": 3000.21,
          "Hauptstufe": 3108.46,
          "Zusatzstufe 1": 3216.72
        },
        "EG 4": {
          "Grundstufe": 3162.08,
          "Hauptstufe": 3253.84,
          "Zusatzstufe 1": 3343.53,
          "Zusatzstufe 2": 3434.26
        },
        "EG 5": {
          "Grundstufe": 3481.69,
          "Hauptstufe": 3572.41,
          "Zusatzstufe 1": 3663.14,
          "Zusatzstufe 2": 3749.75,
          "Zusatzstufe 3": 3842.54
        },
        "EG 6": {
          "Grundstufe": 3731.19,
          "Hauptstufe": 3816.76,
          "Zusatzstufe 1": 3952.85,
          "Zusatzstufe 2": 4044.61,
          "Zusatzstufe 3": 4135.34
        },
        "EG 7": {
          "Grundstufe": 3976.57,
          "Hauptstufe": 4096.16,
          "Zusatzstufe 1": 4233.29,
          "Zusatzstufe 2": 4354.94,
          "Zusatzstufe 3": 4477.63
        },
        "EG 8": {
          "Grundstufe": 4633.31,
          "Hauptstufe": 4749.82,
          "Zusatzstufe 1": 4891.06,
          "Zusatzstufe 2": 5010.66,
          "Zusatzstufe 3": 5138.5
        },
        "EG 9": {
          "Grundstufe": 5319.96,
          "Hauptstufe": 5482.86,
          "Zusatzstufe 1": 5621.01,
          "Zusatzstufe 2": 5776.69
        },
        "EG 10": {
          "Grundstufe": 6035.47,
          "Hauptstufe": 6283.95,
          "Zusatzstufe 1": 6462.31
        },
        "EG 11": {
          "Grundstufe": 6783.98,
          "Hauptstufe": 7063.38
        }
      },
      "Thüringen": {
        "EG 1": {
          "Grundentgelt": 2762.05,
          "Zusatzstufe": 2795.04
        },
        "EG 2": {
          "Grundentgelt": 2828.03,
          "Zusatzstufe": 2859.99
        },
        "EG 3": {
          "Grundentgelt": 2925.98,
          "Zusatzstufe": 2991.96
        },
        "EG 4": {
          "Grundentgelt": 3090.94,
          "Zusatzstufe": 3188.88
        },
        "EG 5": {
          "Grundentgelt": 3287.86,
          "Zusatzstufe": 3451.79
        },
        "EG 6": {
          "Grundentgelt": 3616.75,
          "Zusatzstufe": 3780.68
        },
        "EG 7": {
          "Grundentgelt": 4011.62,
          "Zusatzstufe": 4175.55
        },
        "EG 8": {
          "Grundentgelt": 4504.44,
          "Zusatzstufe": 4668.37
        },
        "EG 9": {
          "Grundentgelt": 4932.3,
          "Zusatzstufe": 5096.23
        },
        "EG 10": {
          "Grundentgelt": 5260.16,
          "Zusatzstufe": 5425.12
        },
        "EG 11": {
          "Grundentgelt": 5754.01,
          "Zusatzstufe": 5917.94
        },
        "EG 12": {
          "Grundentgelt": 6082.9,
          "Zusatzstufe": 6411.79
        }
      }
    },
    "bonusData": {
      "Baden-Württemberg": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3296.11,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Bayern": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3497.15,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Berlin/Brandenburg": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3388.9,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Hamburg/Unterweser": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3481.69,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Hessen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3287.86,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Niedersachsen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3355.91,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Nordrhein-Westfalen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3561.07,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Osnabrück-Emsland": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3676.55,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Pfalz": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3287.86,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Rheinland-Rheinhessen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3287.86,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Saarland": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3287.86,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Sachsen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3287.86,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Sachsen-Anhalt": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3381.68,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3481.69,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Thüringen": {
        "urlaubsgeld": 0.5,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3287.86,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      }
    }
  }
};
