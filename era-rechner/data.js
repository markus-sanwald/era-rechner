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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.72,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
        "urlaubsgeld": 0.69,
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
          "Grundentgelt": 2740.50
        },
        "EG 2": {
          "Grundentgelt": 2814.50
        },
        "EG 3": {
          "Grundentgelt": 2962.50
        },
        "EG 4": {
          "Grundentgelt": 3111.00
        },
        "EG 5": {
          "Grundentgelt": 3296.00
        },
        "EG 6": {
          "Grundentgelt": 3481.00
        },
        "EG 7": {
          "Grundentgelt": 3703.50
        },
        "EG 8": {
          "Grundentgelt": 3962.50
        },
        "EG 9": {
          "Grundentgelt": 4222.00
        },
        "EG 10": {
          "Grundentgelt": 4499.50
        },
        "EG 11": {
          "Grundentgelt": 4796.00
        },
        "EG 12": {
          "Grundentgelt": 5129.00
        },
        "EG 13": {
          "Grundentgelt": 5462.50
        },
        "EG 14": {
          "Grundentgelt": 5795.50
        },
        "EG 15": {
          "Grundentgelt": 6129.00
        },
        "EG 16": {
          "Grundentgelt": 6536.50
        },
        "EG 17": {
          "Grundentgelt": 6906.50
        }
      },
      "Bayern": {
        "EG 1": {
          "Stufe A": 2741.00
        },
        "EG 2": {
          "Stufe A": 2795.00,
          "Stufe B": 2841.00
        },
        "EG 3": {
          "Stufe A": 2935.00,
          "Stufe B": 3026.00
        },
        "EG 4": {
          "Stufe A": 3117.00,
          "Stufe B": 3207.00,
          "Stufe C": 3412.00
        },
        "EG 5": {
          "Stufe A": 3497.00,
          "Stufe B": 3583.00
        },
        "EG 6": {
          "Stufe A": 3714.00,
          "Stufe B": 3843.00
        },
        "EG 7": {
          "Stufe A": 4004.00,
          "Stufe B": 4167.00
        },
        "EG 8": {
          "Stufe A": 4344.00,
          "Stufe B": 4525.00
        },
        "EG 9": {
          "Stufe A": 4757.00,
          "Stufe B": 4991.00
        },
        "EG 10": {
          "Stufe A": 5261.00,
          "Stufe B": 5528.00
        },
        "EG 11": {
          "Stufe A": 5818.00,
          "Stufe B": 6104.00
        },
        "EG 12": {
          "Stufe A": 6378.00,
          "Stufe B": 6650.00
        }
      },
      "Berlin/Brandenburg": {
        "EG 1": {
          "Hauptstufe": 2740.00
        },
        "EG 2": {
          "Hauptstufe": 2789.00
        },
        "EG 3": {
          "Eingangsstufe": 2850.00,
          "Hauptstufe": 2881.00,
          "1. Zusatzstufe": 2968.00,
          "2. Zusatzstufe": 3054.00
        },
        "EG 4": {
          "Eingangsstufe": 3054.00,
          "Hauptstufe": 3141.00,
          "1. Zusatzstufe": 3265.00,
          "2. Zusatzstufe": 3389.00
        },
        "EG 5": {
          "Eingangsstufe": 3389.00,
          "Hauptstufe": 3513.00,
          "1. Zusatzstufe": 3572.00,
          "2. Zusatzstufe": 3630.00
        },
        "EG 6": {
          "Eingangsstufe": 3630.00,
          "Hauptstufe": 3689.00,
          "1. Zusatzstufe": 3747.00,
          "2. Zusatzstufe": 3806.00
        },
        "EG 7": {
          "Eingangsstufe": 3806.00,
          "Hauptstufe": 3864.00,
          "1. Zusatzstufe": 3923.00,
          "2. Zusatzstufe": 3981.00
        },
        "EG 8": {
          "Eingangsstufe": 3981.00,
          "Hauptstufe": 4040.00,
          "1. Zusatzstufe": 4110.00,
          "2. Zusatzstufe": 4181.00
        },
        "EG 9": {
          "Eingangsstufe": 4181.00,
          "Hauptstufe": 4251.00,
          "1. Zusatzstufe": 4415.00,
          "2. Zusatzstufe": 4579.00
        },
        "EG 10": {
          "Eingangsstufe": 4579.00,
          "Hauptstufe": 4743.00,
          "1. Zusatzstufe": 4977.00
        },
        "EG 11": {
          "Eingangsstufe": 5211.00,
          "Hauptstufe": 5445.00,
          "1. Zusatzstufe": 5691.00
        },
        "EG 12": {
          "Eingangsstufe": 5937.00,
          "Hauptstufe": 6183.00,
          "1. Zusatzstufe": 6417.00
        },
        "EG 13": {
          "Eingangsstufe": 6651.00,
          "Hauptstufe": 6885.00
        }
      },
      "Hamburg/Unterweser": {
        "EG 2": {
          "Grundstufe": 2908.00,
          "Hauptstufe": 3015.00
        },
        "EG 3": {
          "Grundstufe": 3000.00,
          "Hauptstufe": 3108.00
        },
        "EG 4": {
          "Grundstufe": 3162.00,
          "Hauptstufe": 3254.00,
          "Zusatzstufe 1": 3344.00,
          "Zusatzstufe 2": 3434.00
        },
        "EG 5": {
          "Grundstufe": 3482.00,
          "Hauptstufe": 3572.00,
          "Zusatzstufe 1": 3663.00,
          "Zusatzstufe 2": 3750.00,
          "Zusatzstufe 3": 3843.00
        },
        "EG 6": {
          "Grundstufe": 3758.00,
          "Hauptstufe": 3848.00,
          "Zusatzstufe 1": 3986.00,
          "Zusatzstufe 2": 4073.00,
          "Zusatzstufe 3": 4163.00
        },
        "EG 7": {
          "Grundstufe": 4035.00,
          "Hauptstufe": 4158.00,
          "Zusatzstufe 1": 4293.00,
          "Zusatzstufe 2": 4415.00,
          "Zusatzstufe 3": 4541.00
        },
        "EG 8": {
          "Grundstufe": 4754.00,
          "Hauptstufe": 4876.00,
          "Zusatzstufe 1": 5015.00,
          "Zusatzstufe 2": 5140.00,
          "Zusatzstufe 3": 5260.00
        },
        "EG 9": {
          "Grundstufe": 5505.00,
          "Hauptstufe": 5664.00,
          "Zusatzstufe 1": 5800.00,
          "Zusatzstufe 2": 5962.00
        },
        "EG 10": {
          "Grundstufe": 6278.00,
          "Hauptstufe": 6529.00,
          "Zusatzstufe 1": 6710.00
        },
        "EG 11": {
          "Grundstufe": 7089.00,
          "Hauptstufe": 7338.00
        }
      },
      "Hessen": {
        "EG 1": {
          "Grundentgelt": 2762.00
        },
        "EG 2": {
          "Grundentgelt": 2828.00
        },
        "EG 3": {
          "Grundentgelt": 2926.00
        },
        "EG 4": {
          "Grundentgelt": 3091.00,
          "Zusatzstufe": 3156.67
        },
        "EG 5": {
          "Grundentgelt": 3288.00,
          "Zusatzstufe": 3397.67
        },
        "EG 6": {
          "Grundentgelt": 3617.00,
          "Zusatzstufe": 3748.33
        },
        "EG 7": {
          "Grundentgelt": 4011.00,
          "Zusatzstufe": 4175.67
        },
        "EG 8": {
          "Grundentgelt": 4505.00,
          "Zusatzstufe": 4702.00
        },
        "EG 9": {
          "Grundentgelt": 5096.00,
          "Zusatzstufe": 5260.67
        },
        "EG 10": {
          "Grundentgelt": 5590.00,
          "Zusatzstufe": 5754.33
        },
        "EG 11": {
          "Grundentgelt": 6083.00,
          "Zusatzstufe": 6411.60
        }
      },
      "Niedersachsen": {
        "EG 2": {
          "Stufe A": 2701.00,
          "Stufe B": 2786.00,
          "Stufe C": 2807.00
        },
        "EG 3": {
          "Stufe A": 2829.00,
          "Stufe B": 2875.00,
          "Stufe C": 2940.00
        },
        "EG 4": {
          "Stufe A": 2974.00,
          "Stufe B": 3013.00,
          "Stufe C": 3166.00
        },
        "EG 5": {
          "Stufe A": 3356.00,
          "Stufe B": 3569.00,
          "Stufe C": 3615.00
        },
        "EG 6": {
          "Stufe A": 3657.00,
          "Stufe B": 3705.00,
          "Stufe C": 3786.00
        },
        "EG 7": {
          "Stufe A": 3897.00,
          "Stufe B": 3985.00,
          "Stufe C": 4080.00
        },
        "EG 8": {
          "Stufe A": 4172.00,
          "Stufe B": 4309.00,
          "Stufe C": 4367.00
        },
        "EG 9": {
          "Stufe A": 4393.00,
          "Stufe B": 4476.00,
          "Stufe C": 4545.00
        },
        "EG 10": {
          "Stufe A": 4631.00,
          "Stufe B": 4697.00,
          "Stufe C": 4750.00
        },
        "EG 11": {
          "Stufe A": 4815.00,
          "Stufe B": 5041.00,
          "Stufe C": 5269.00
        },
        "EG 12": {
          "Stufe A": 5492.00,
          "Stufe B": 5717.00,
          "Stufe C": 5944.00
        },
        "EG 13": {
          "Stufe A": 6196.00,
          "Stufe B": 6683.00,
          "Stufe C": 6882.00
        }
      },
      "Nordrhein-Westfalen": {
        "EG 1": {
          "Grundentgelt": 2789.00
        },
        "EG 2": {
          "Grundentgelt": 2823.00
        },
        "EG 3": {
          "Grundentgelt": 2855.50
        },
        "EG 4": {
          "Grundentgelt": 2899.50
        },
        "EG 5": {
          "Grundentgelt": 2960.50
        },
        "EG 6": {
          "Grundentgelt": 3037.50
        },
        "EG 7": {
          "Grundentgelt": 3132.00
        },
        "EG 8": {
          "Grundentgelt": 3295.00
        },
        "EG 9": {
          "Grundentgelt": 3561.00
        },
        "EG 10": {
          "Grundentgelt": 3914.00
        },
        "EG 11": {
          "Grundentgelt": 4389.00
        },
        "EG 12": {
          "bis 36. Monat": 4523.00,
          "nach 36. Monat": 5023.00
        },
        "EG 13": {
          "bis 18. Monat": 5054.00,
          "nach 18. Monat": 5351.50,
          "nach 36. Monat": 5945.50
        },
        "EG 14": {
          "bis 12. Monat": 5741.00,
          "nach 12. Monat": 6100.50,
          "nach 24. Monat": 6459.50,
          "nach 36. Monat": 7178.50
        }
      },
      "Osnabrück-Emsland": {
        "EG 1": {
          "Hauptstufe": 2786.00,
          "Zusatzstufe 1": 2829.00
        },
        "EG 2": {
          "Eingangsstufe": 2829.00,
          "Hauptstufe": 2875.00,
          "Zusatzstufe 1": 2917.00,
          "Zusatzstufe 2": 2960.00
        },
        "EG 3": {
          "Eingangsstufe": 2960.00,
          "Hauptstufe": 3133.00,
          "Zusatzstufe 1": 3164.00,
          "Zusatzstufe 2": 3199.00,
          "Zusatzstufe 3": 3227.00
        },
        "EG 4": {
          "Eingangsstufe": 3227.00,
          "Hauptstufe": 3569.00,
          "Zusatzstufe 1": 3609.00,
          "Zusatzstufe 2": 3645.00,
          "Zusatzstufe 3": 3677.00
        },
        "EG 5": {
          "Eingangsstufe": 3677.00,
          "Hauptstufe": 3872.00,
          "Zusatzstufe 1": 3911.00,
          "Zusatzstufe 2": 3949.00,
          "Zusatzstufe 3": 3990.00
        },
        "EG 6": {
          "Eingangsstufe": 3990.00,
          "Hauptstufe": 4045.00,
          "Zusatzstufe 1": 4087.00,
          "Zusatzstufe 2": 4128.00,
          "Zusatzstufe 3": 4168.00
        },
        "EG 7": {
          "Eingangsstufe": 4168.00,
          "Hauptstufe": 4267.00,
          "Zusatzstufe 1": 4313.00,
          "Zusatzstufe 2": 4355.00,
          "Zusatzstufe 3": 4396.00
        },
        "EG 8": {
          "Eingangsstufe": 4396.00,
          "Hauptstufe": 4545.00,
          "Zusatzstufe 1": 4590.00,
          "Zusatzstufe 2": 4636.00,
          "Zusatzstufe 3": 4682.00
        },
        "EG 9": {
          "Eingangsstufe": 4682.00,
          "Hauptstufe": 4818.00,
          "Zusatzstufe 1": 4866.00,
          "Zusatzstufe 2": 4914.00,
          "Zusatzstufe 3": 4965.00
        },
        "EG 10": {
          "Eingangsstufe": 4965.00,
          "Hauptstufe": 5163.00,
          "Zusatzstufe 1": 5213.00,
          "Zusatzstufe 2": 5267.00,
          "Zusatzstufe 3": 5315.00
        },
        "EG 11": {
          "Eingangsstufe": 5315.00,
          "Hauptstufe": 5763.00,
          "Zusatzstufe 1": 5823.00,
          "Zusatzstufe 2": 5882.00,
          "Zusatzstufe 3": 5940.00
        },
        "EG 12": {
          "Eingangsstufe": 5940.00,
          "Hauptstufe": 6700.00
        }
      },
      "Pfalz": {
        "EG 1": {
          "Grundentgelt": 2762.00
        },
        "EG 2": {
          "Grundentgelt": 2828.00
        },
        "EG 3": {
          "Grundentgelt": 2926.00
        },
        "EG 4": {
          "Grundentgelt": 3091.00,
          "Zusatzstufe": 3156.67
        },
        "EG 5": {
          "Grundentgelt": 3288.00,
          "Zusatzstufe": 3397.67
        },
        "EG 6": {
          "Grundentgelt": 3617.00,
          "Zusatzstufe": 3748.33
        },
        "EG 7": {
          "Grundentgelt": 4011.00,
          "Zusatzstufe": 4153.67
        },
        "EG 8": {
          "Grundentgelt": 4439.00,
          "Zusatzstufe": 4603.33
        },
        "EG 9": {
          "Grundentgelt": 4932.00,
          "Zusatzstufe": 5151.33
        },
        "EG 10": {
          "Grundentgelt": 5590.00,
          "Zusatzstufe": 5754.33
        },
        "EG 11": {
          "Grundentgelt": 6083.00,
          "Zusatzstufe": 6411.60
        }
      },
      "Rheinland-Rheinhessen": {
        "EG 1": {
          "Grundentgelt": 2762.00
        },
        "EG 2": {
          "Grundentgelt": 2828.00
        },
        "EG 3": {
          "Grundentgelt": 2926.00
        },
        "EG 4": {
          "Grundentgelt": 3091.00,
          "Zusatzstufe": 3156.67
        },
        "EG 5": {
          "Grundentgelt": 3288.00,
          "Zusatzstufe": 3397.67
        },
        "EG 6": {
          "Grundentgelt": 3617.00,
          "Zusatzstufe": 3748.33
        },
        "EG 7": {
          "Grundentgelt": 4011.00,
          "Zusatzstufe": 4175.67
        },
        "EG 8": {
          "Grundentgelt": 4505.00,
          "Zusatzstufe": 4702.00
        },
        "EG 9": {
          "Grundentgelt": 5096.00,
          "Zusatzstufe": 5260.67
        },
        "EG 10": {
          "Grundentgelt": 5590.00,
          "Zusatzstufe": 5754.33
        },
        "EG 11": {
          "Grundentgelt": 6083.00,
          "Zusatzstufe": 6586.19
        }
      },
      "Saarland": {
        "EG 1": {
          "Grundentgelt": 2762.00
        },
        "EG 2": {
          "Grundentgelt": 2828.00
        },
        "EG 3": {
          "Grundentgelt": 2926.00
        },
        "EG 4": {
          "Grundentgelt": 3091.00,
          "Zusatzstufe": 3156.67
        },
        "EG 5": {
          "Grundentgelt": 3288.00,
          "Zusatzstufe": 3397.67
        },
        "EG 6": {
          "Grundentgelt": 3617.00,
          "Zusatzstufe": 3748.33
        },
        "EG 7": {
          "Grundentgelt": 4011.00,
          "Zusatzstufe": 4175.67
        },
        "EG 8": {
          "Grundentgelt": 4505.00,
          "Zusatzstufe": 4702.00
        },
        "EG 9": {
          "Grundentgelt": 5096.00,
          "Zusatzstufe": 5260.67
        },
        "EG 10": {
          "Grundentgelt": 5590.00,
          "Zusatzstufe": 5754.33
        },
        "EG 11": {
          "Grundentgelt": 6083.00,
          "Zusatzstufe": 6411.60
        }
      },
      "Sachsen": {
        "EG 1": {
          "Grundentgelt": 2762.00,
          "Zusatzstufe": 2795.00
        },
        "EG 2": {
          "Grundentgelt": 2828.00,
          "Zusatzstufe": 2861.00
        },
        "EG 3": {
          "Grundentgelt": 2926.00,
          "Zusatzstufe": 2992.00
        },
        "EG 4": {
          "Grundentgelt": 3091.00,
          "Zusatzstufe": 3189.00
        },
        "EG 5": {
          "Grundentgelt": 3288.00,
          "Zusatzstufe": 3452.00
        },
        "EG 6": {
          "Grundentgelt": 3617.00,
          "Zusatzstufe": 3781.00
        },
        "EG 7": {
          "Grundentgelt": 4011.00,
          "Zusatzstufe": 4176.00
        },
        "EG 8": {
          "Grundentgelt": 4505.00,
          "Zusatzstufe": 4669.00
        },
        "EG 9": {
          "Grundentgelt": 4932.00,
          "Zusatzstufe": 5096.00
        },
        "EG 10": {
          "Grundentgelt": 5261.00,
          "Zusatzstufe": 5425.00
        },
        "EG 11": {
          "Grundentgelt": 5754.00,
          "Zusatzstufe": 5918.00
        },
        "EG 12": {
          "Grundentgelt": 6083.00,
          "Zusatzstufe": 6412.00
        }
      },
      "Sachsen-Anhalt": {
        "EG 1": {
          "Grundstufe": 2786.00,
          "Zusatzstufe": 2842.00
        },
        "EG 2": {
          "Grundstufe": 2878.00,
          "Zusatzstufe": 2915.00
        },
        "EG 3": {
          "Grundstufe": 2983.00,
          "Zusatzstufe": 3045.00
        },
        "EG 4": {
          "Grundstufe": 3145.00,
          "Zusatzstufe": 3251.00
        },
        "EG 5": {
          "Grundstufe": 3382.00,
          "Zusatzstufe": 3515.00
        },
        "EG 6": {
          "Grundstufe": 3657.00,
          "Zusatzstufe": 3907.00
        },
        "EG 7": {
          "Grundstufe": 4138.00,
          "Zusatzstufe": 4322.00
        },
        "EG 8": {
          "Grundstufe": 4471.00,
          "Zusatzstufe": 4702.00
        },
        "EG 9": {
          "Grundstufe": 5146.00,
          "Zusatzstufe": 5383.00
        },
        "EG 10": {
          "Grundstufe": 5839.00,
          "Zusatzstufe": 6068.00
        },
        "EG 11": {
          "Grundstufe": 6573.00,
          "Zusatzstufe": 6825.00
        }
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "EG 2": {
          "Grundstufe": 2908.00,
          "Hauptstufe": 3015.00
        },
        "EG 3": {
          "Grundstufe": 3000.00,
          "Hauptstufe": 3108.00,
          "Zusatzstufe 1": 3217.00
        },
        "EG 4": {
          "Grundstufe": 3162.00,
          "Hauptstufe": 3254.00,
          "Zusatzstufe 1": 3344.00,
          "Zusatzstufe 2": 3434.00
        },
        "EG 5": {
          "Grundstufe": 3482.00,
          "Hauptstufe": 3572.00,
          "Zusatzstufe 1": 3663.00,
          "Zusatzstufe 2": 3750.00,
          "Zusatzstufe 3": 3843.00
        },
        "EG 6": {
          "Grundstufe": 3731.00,
          "Hauptstufe": 3817.00,
          "Zusatzstufe 1": 3953.00,
          "Zusatzstufe 2": 4045.00,
          "Zusatzstufe 3": 4135.00
        },
        "EG 7": {
          "Grundstufe": 3977.00,
          "Hauptstufe": 4096.00,
          "Zusatzstufe 1": 4233.00,
          "Zusatzstufe 2": 4355.00,
          "Zusatzstufe 3": 4478.00
        },
        "EG 8": {
          "Grundstufe": 4633.00,
          "Hauptstufe": 4750.00,
          "Zusatzstufe 1": 4891.00,
          "Zusatzstufe 2": 5011.00,
          "Zusatzstufe 3": 5139.00
        },
        "EG 9": {
          "Grundstufe": 5320.00,
          "Hauptstufe": 5483.00,
          "Zusatzstufe 1": 5621.00,
          "Zusatzstufe 2": 5777.00
        },
        "EG 10": {
          "Grundstufe": 6035.00,
          "Hauptstufe": 6284.00,
          "Zusatzstufe 1": 6462.00
        },
        "EG 11": {
          "Grundstufe": 6784.00,
          "Hauptstufe": 7063.00
        }
      },
      "Thüringen": {
        "EG 1": {
          "Grundentgelt": 2762.00,
          "Zusatzstufe": 2795.00
        },
        "EG 2": {
          "Grundentgelt": 2828.00,
          "Zusatzstufe": 2861.00
        },
        "EG 3": {
          "Grundentgelt": 2926.00,
          "Zusatzstufe": 2992.00
        },
        "EG 4": {
          "Grundentgelt": 3091.00,
          "Zusatzstufe": 3189.00
        },
        "EG 5": {
          "Grundentgelt": 3288.00,
          "Zusatzstufe": 3452.00
        },
        "EG 6": {
          "Grundentgelt": 3617.00,
          "Zusatzstufe": 3781.00
        },
        "EG 7": {
          "Grundentgelt": 4011.00,
          "Zusatzstufe": 4176.00
        },
        "EG 8": {
          "Grundentgelt": 4505.00,
          "Zusatzstufe": 4669.00
        },
        "EG 9": {
          "Grundentgelt": 4932.00,
          "Zusatzstufe": 5096.00
        },
        "EG 10": {
          "Grundentgelt": 5261.00,
          "Zusatzstufe": 5425.00
        },
        "EG 11": {
          "Grundentgelt": 5754.00,
          "Zusatzstufe": 5918.00
        },
        "EG 12": {
          "Grundentgelt": 6083.00,
          "Zusatzstufe": 6412.00
        }
      }
    },
    "bonusData": {
      "Baden-Württemberg": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3296.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Bayern": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3497.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Berlin/Brandenburg": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3389.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Hamburg/Unterweser": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3482.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Hessen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3288.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Niedersachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3356.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Nordrhein-Westfalen": {
        "urlaubsgeld": 0.72,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3561.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Osnabrück-Emsland": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3677.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Pfalz": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3288.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Rheinland-Rheinhessen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3288.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Saarland": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3288.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Sachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3288.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Sachsen-Anhalt": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3382.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3482.00,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          { "monate": 36, "satz": 0.55 },
          { "monate": 24, "satz": 0.45 },
          { "monate": 12, "satz": 0.35 },
          { "monate": 6,  "satz": 0.25 }
        ]
      },
      "Thüringen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3288.00,
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

// Beitragsbemessungsgrenzen (monatlich, West) pro Jahr
// RV/AV = Renten- und Arbeitslosenversicherung, KV/PV = Kranken- und Pflegeversicherung
const BBG_DATA = {
  "2025": { rvAv: 7550, kvPv: 5512.50 },
  "2026": { rvAv: 7800, kvPv: 5687.50 }
};
