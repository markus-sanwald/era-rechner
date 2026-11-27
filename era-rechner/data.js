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
        "eckentgelt": 3592,
        "eckentgeltEG": 7,
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
        "eckentgelt": 3475,
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
        "eckentgelt": 3407,
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
        "eckentgelt": 3465,
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
        "eckentgelt": 3462,
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
        "eckentgelt": 3196,
        "eckentgeltEG": 8,
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
        "eckentgelt": 3462,
        "eckentgeltEG": 4,
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
        "eckentgelt": 3465,
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
    },
    "ausbildungData": {
      "Baden-Württemberg":                      [1267.00, 1337.50, 1443.00, 1513.50],
      "Bayern":                                 [1264.00, 1324.00, 1401.00, 1452.00],
      "Berlin/Brandenburg":                     [1232.00, 1296.00, 1359.00, 1419.00],
      "Hamburg/Unterweser":                     [1332.00, 1366.00, 1400.00, 1434.00],
      "Hessen":                                 [1223.00, 1288.00, 1376.00, 1422.00],
      "Niedersachsen":                          [1226.00, 1294.00, 1396.00, 1464.00],
      "Nordrhein-Westfalen":                    [1205.59, 1258.65, 1337.47, 1440.99],
      "Osnabrück-Emsland":                      [1226.00, 1294.00, 1396.00, 1464.00],
      "Pfalz":                                  [1223.00, 1288.00, 1376.00, 1422.00],
      "Rheinland-Rheinhessen":                  [1223.00, 1288.00, 1376.00, 1422.00],
      "Saarland":                               [1223.00, 1288.00, 1376.00, 1422.00],
      "Sachsen":                                [1234.00, 1297.00, 1359.00, 1422.00],
      "Sachsen-Anhalt":                         [1233.00, 1298.00, 1394.00, 1459.00],
      "Schleswig-Holstein/MV/NW-Niedersachsen": [1332.00, 1366.00, 1400.00, 1434.00],
      "Thüringen":                              [1234.00, 1297.00, 1359.00, 1422.00]
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
        "eckentgelt": 3703.50,
        "eckentgeltEG": 7,
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
        "eckentgelt": 3583.00,
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
        "eckentgelt": 3513.00,
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
        "eckentgelt": 3572.00,
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
        "eckentgelt": 3569.00,
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
        "eckentgelt": 3295.00,
        "eckentgeltEG": 8,
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
        "eckentgelt": 3569.00,
        "eckentgeltEG": 4,
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
        "eckentgelt": 3572.00,
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
    },
    "ausbildungData": {
      "Baden-Württemberg":                      [1303.50, 1377.50, 1488.50, 1563.00],
      "Bayern":                                 [1303.00, 1365.00, 1444.50, 1497.00],
      "Berlin/Brandenburg":                     [1272.00, 1335.00, 1402.00, 1461.00],
      "Hamburg/Unterweser":                     [1373.00, 1408.00, 1443.00, 1478.00],
      "Hessen":                                 [1261.00, 1328.00, 1419.00, 1466.00],
      "Niedersachsen":                          [1264.00, 1334.00, 1439.00, 1509.00],
      "Nordrhein-Westfalen":                    [1242.96, 1297.67, 1378.93, 1485.66],
      "Osnabrück-Emsland":                      [1264.00, 1334.00, 1439.00, 1509.00],
      "Pfalz":                                  [1261.00, 1328.00, 1419.00, 1466.00],
      "Rheinland-Rheinhessen":                  [1261.00, 1328.00, 1419.00, 1466.00],
      "Saarland":                               [1261.00, 1328.00, 1419.00, 1466.00],
      "Sachsen":                                [1272.00, 1337.00, 1401.00, 1466.00],
      "Sachsen-Anhalt":                         [1271.00, 1338.00, 1437.00, 1504.00],
      "Schleswig-Holstein/MV/NW-Niedersachsen": [1373.00, 1408.00, 1443.00, 1478.00],
      "Thüringen":                              [1272.00, 1337.00, 1401.00, 1466.00]
    }
  },
  "2027": {
    "preliminary": true,
    "gueltigAb": "2027-05-01",
    "hinweis": "yearNoticeAbschluss2026",
    "einmalzahlung": { "monat": 3, "betraege": [150, 300, 450], "standard": 150 },
    "salaryData": {
      "Baden-Württemberg": {
        "EG 1": {
          "Grundentgelt": 2795.5
        },
        "EG 2": {
          "Grundentgelt": 2871
        },
        "EG 3": {
          "Grundentgelt": 3022
        },
        "EG 4": {
          "Grundentgelt": 3173
        },
        "EG 5": {
          "Grundentgelt": 3362
        },
        "EG 6": {
          "Grundentgelt": 3550.5
        },
        "EG 7": {
          "Grundentgelt": 3777.5
        },
        "EG 8": {
          "Grundentgelt": 4042
        },
        "EG 9": {
          "Grundentgelt": 4306.5
        },
        "EG 10": {
          "Grundentgelt": 4589.5
        },
        "EG 11": {
          "Grundentgelt": 4892
        },
        "EG 12": {
          "Grundentgelt": 5231.5
        },
        "EG 13": {
          "Grundentgelt": 5572
        },
        "EG 14": {
          "Grundentgelt": 5911.5
        },
        "EG 15": {
          "Grundentgelt": 6251.5
        },
        "EG 16": {
          "Grundentgelt": 6667
        },
        "EG 17": {
          "Grundentgelt": 7044.5
        }
      },
      "Bayern": {
        "EG 1": {
          "Stufe A": 2796
        },
        "EG 2": {
          "Stufe A": 2851,
          "Stufe B": 2898
        },
        "EG 3": {
          "Stufe A": 2994,
          "Stufe B": 3087
        },
        "EG 4": {
          "Stufe A": 3179,
          "Stufe B": 3271,
          "Stufe C": 3480
        },
        "EG 5": {
          "Stufe A": 3567,
          "Stufe B": 3655
        },
        "EG 6": {
          "Stufe A": 3788,
          "Stufe B": 3920
        },
        "EG 7": {
          "Stufe A": 4084,
          "Stufe B": 4250
        },
        "EG 8": {
          "Stufe A": 4431,
          "Stufe B": 4616
        },
        "EG 9": {
          "Stufe A": 4852,
          "Stufe B": 5091
        },
        "EG 10": {
          "Stufe A": 5366,
          "Stufe B": 5639
        },
        "EG 11": {
          "Stufe A": 5934,
          "Stufe B": 6226
        },
        "EG 12": {
          "Stufe A": 6506,
          "Stufe B": 6783
        }
      },
      "Berlin/Brandenburg": {
        "EG 1": {
          "Hauptstufe": 2795
        },
        "EG 2": {
          "Hauptstufe": 2845
        },
        "EG 3": {
          "Eingangsstufe": 2907,
          "Hauptstufe": 2939,
          "1. Zusatzstufe": 3027,
          "2. Zusatzstufe": 3115
        },
        "EG 4": {
          "Eingangsstufe": 3115,
          "Hauptstufe": 3204,
          "1. Zusatzstufe": 3330,
          "2. Zusatzstufe": 3457
        },
        "EG 5": {
          "Eingangsstufe": 3457,
          "Hauptstufe": 3583,
          "1. Zusatzstufe": 3643,
          "2. Zusatzstufe": 3703
        },
        "EG 6": {
          "Eingangsstufe": 3703,
          "Hauptstufe": 3763,
          "1. Zusatzstufe": 3822,
          "2. Zusatzstufe": 3882
        },
        "EG 7": {
          "Eingangsstufe": 3882,
          "Hauptstufe": 3941,
          "1. Zusatzstufe": 4001,
          "2. Zusatzstufe": 4061
        },
        "EG 8": {
          "Eingangsstufe": 4061,
          "Hauptstufe": 4121,
          "1. Zusatzstufe": 4192,
          "2. Zusatzstufe": 4265
        },
        "EG 9": {
          "Eingangsstufe": 4265,
          "Hauptstufe": 4336,
          "1. Zusatzstufe": 4503,
          "2. Zusatzstufe": 4671
        },
        "EG 10": {
          "Eingangsstufe": 4671,
          "Hauptstufe": 4838,
          "1. Zusatzstufe": 5077
        },
        "EG 11": {
          "Eingangsstufe": 5315,
          "Hauptstufe": 5554,
          "1. Zusatzstufe": 5805
        },
        "EG 12": {
          "Eingangsstufe": 6056,
          "Hauptstufe": 6307,
          "1. Zusatzstufe": 6545
        },
        "EG 13": {
          "Eingangsstufe": 6784,
          "Hauptstufe": 7023
        }
      },
      "Hamburg/Unterweser": {
        "EG 2": {
          "Grundstufe": 2966,
          "Hauptstufe": 3075
        },
        "EG 3": {
          "Grundstufe": 3060,
          "Hauptstufe": 3170
        },
        "EG 4": {
          "Grundstufe": 3225,
          "Hauptstufe": 3319,
          "Zusatzstufe 1": 3411,
          "Zusatzstufe 2": 3503
        },
        "EG 5": {
          "Grundstufe": 3552,
          "Hauptstufe": 3643,
          "Zusatzstufe 1": 3736,
          "Zusatzstufe 2": 3825,
          "Zusatzstufe 3": 3920
        },
        "EG 6": {
          "Grundstufe": 3833,
          "Hauptstufe": 3925,
          "Zusatzstufe 1": 4066,
          "Zusatzstufe 2": 4154,
          "Zusatzstufe 3": 4246
        },
        "EG 7": {
          "Grundstufe": 4116,
          "Hauptstufe": 4241,
          "Zusatzstufe 1": 4379,
          "Zusatzstufe 2": 4503,
          "Zusatzstufe 3": 4632
        },
        "EG 8": {
          "Grundstufe": 4849,
          "Hauptstufe": 4974,
          "Zusatzstufe 1": 5115,
          "Zusatzstufe 2": 5243,
          "Zusatzstufe 3": 5365
        },
        "EG 9": {
          "Grundstufe": 5615,
          "Hauptstufe": 5777,
          "Zusatzstufe 1": 5916,
          "Zusatzstufe 2": 6081
        },
        "EG 10": {
          "Grundstufe": 6404,
          "Hauptstufe": 6660,
          "Zusatzstufe 1": 6844
        },
        "EG 11": {
          "Grundstufe": 7231,
          "Hauptstufe": 7485
        }
      },
      "Hessen": {
        "EG 1": {
          "Grundentgelt": 2817
        },
        "EG 2": {
          "Grundentgelt": 2885
        },
        "EG 3": {
          "Grundentgelt": 2985
        },
        "EG 4": {
          "Grundentgelt": 3153,
          "Zusatzstufe": 3219.8
        },
        "EG 5": {
          "Grundentgelt": 3354,
          "Zusatzstufe": 3465.62
        },
        "EG 6": {
          "Grundentgelt": 3689,
          "Zusatzstufe": 3823.3
        },
        "EG 7": {
          "Grundentgelt": 4091,
          "Zusatzstufe": 4259.18
        },
        "EG 8": {
          "Grundentgelt": 4595,
          "Zusatzstufe": 4796
        },
        "EG 9": {
          "Grundentgelt": 5198,
          "Zusatzstufe": 5365.88
        },
        "EG 10": {
          "Grundentgelt": 5702,
          "Zusatzstufe": 5869.42
        },
        "EG 11": {
          "Grundentgelt": 6205,
          "Zusatzstufe": 6539.83
        }
      },
      "Niedersachsen": {
        "EG 2": {
          "Stufe A": 2755,
          "Stufe B": 2842,
          "Stufe C": 2863
        },
        "EG 3": {
          "Stufe A": 2886,
          "Stufe B": 2933,
          "Stufe C": 2999
        },
        "EG 4": {
          "Stufe A": 3033,
          "Stufe B": 3073,
          "Stufe C": 3229
        },
        "EG 5": {
          "Stufe A": 3423,
          "Stufe B": 3640,
          "Stufe C": 3687
        },
        "EG 6": {
          "Stufe A": 3730,
          "Stufe B": 3779,
          "Stufe C": 3862
        },
        "EG 7": {
          "Stufe A": 3975,
          "Stufe B": 4065,
          "Stufe C": 4162
        },
        "EG 8": {
          "Stufe A": 4255,
          "Stufe B": 4395,
          "Stufe C": 4454
        },
        "EG 9": {
          "Stufe A": 4481,
          "Stufe B": 4566,
          "Stufe C": 4636
        },
        "EG 10": {
          "Stufe A": 4724,
          "Stufe B": 4791,
          "Stufe C": 4845
        },
        "EG 11": {
          "Stufe A": 4911,
          "Stufe B": 5142,
          "Stufe C": 5374
        },
        "EG 12": {
          "Stufe A": 5602,
          "Stufe B": 5831,
          "Stufe C": 6063
        },
        "EG 13": {
          "Stufe A": 6320,
          "Stufe B": 6817,
          "Stufe C": 7020
        }
      },
      "Nordrhein-Westfalen": {
        "EG 1": {
          "Grundentgelt": 2845
        },
        "EG 2": {
          "Grundentgelt": 2879.5
        },
        "EG 3": {
          "Grundentgelt": 2912.5
        },
        "EG 4": {
          "Grundentgelt": 2957.5
        },
        "EG 5": {
          "Grundentgelt": 3019.5
        },
        "EG 6": {
          "Grundentgelt": 3098.5
        },
        "EG 7": {
          "Grundentgelt": 3194.5
        },
        "EG 8": {
          "Grundentgelt": 3361
        },
        "EG 9": {
          "Grundentgelt": 3632
        },
        "EG 10": {
          "Grundentgelt": 3992.5
        },
        "EG 11": {
          "Grundentgelt": 4477
        },
        "EG 12": {
          "bis 36. Monat": 4613.5,
          "nach 36. Monat": 5123.5
        },
        "EG 13": {
          "bis 18. Monat": 5155,
          "nach 18. Monat": 5458.5,
          "nach 36. Monat": 6064.5
        },
        "EG 14": {
          "bis 12. Monat": 5856,
          "nach 12. Monat": 6222.5,
          "nach 24. Monat": 6588.5,
          "nach 36. Monat": 7322
        }
      },
      "Osnabrück-Emsland": {
        "EG 1": {
          "Hauptstufe": 2842,
          "Zusatzstufe 1": 2886
        },
        "EG 2": {
          "Eingangsstufe": 2886,
          "Hauptstufe": 2933,
          "Zusatzstufe 1": 2975,
          "Zusatzstufe 2": 3019
        },
        "EG 3": {
          "Eingangsstufe": 3019,
          "Hauptstufe": 3196,
          "Zusatzstufe 1": 3227,
          "Zusatzstufe 2": 3263,
          "Zusatzstufe 3": 3292
        },
        "EG 4": {
          "Eingangsstufe": 3292,
          "Hauptstufe": 3640,
          "Zusatzstufe 1": 3681,
          "Zusatzstufe 2": 3718,
          "Zusatzstufe 3": 3751
        },
        "EG 5": {
          "Eingangsstufe": 3751,
          "Hauptstufe": 3949,
          "Zusatzstufe 1": 3989,
          "Zusatzstufe 2": 4028,
          "Zusatzstufe 3": 4070
        },
        "EG 6": {
          "Eingangsstufe": 4070,
          "Hauptstufe": 4126,
          "Zusatzstufe 1": 4169,
          "Zusatzstufe 2": 4211,
          "Zusatzstufe 3": 4251
        },
        "EG 7": {
          "Eingangsstufe": 4251,
          "Hauptstufe": 4352,
          "Zusatzstufe 1": 4399,
          "Zusatzstufe 2": 4442,
          "Zusatzstufe 3": 4484
        },
        "EG 8": {
          "Eingangsstufe": 4484,
          "Hauptstufe": 4636,
          "Zusatzstufe 1": 4682,
          "Zusatzstufe 2": 4729,
          "Zusatzstufe 3": 4776
        },
        "EG 9": {
          "Eingangsstufe": 4776,
          "Hauptstufe": 4914,
          "Zusatzstufe 1": 4963,
          "Zusatzstufe 2": 5012,
          "Zusatzstufe 3": 5064
        },
        "EG 10": {
          "Eingangsstufe": 5064,
          "Hauptstufe": 5266,
          "Zusatzstufe 1": 5317,
          "Zusatzstufe 2": 5372,
          "Zusatzstufe 3": 5421
        },
        "EG 11": {
          "Eingangsstufe": 5421,
          "Hauptstufe": 5878,
          "Zusatzstufe 1": 5939,
          "Zusatzstufe 2": 6000,
          "Zusatzstufe 3": 6059
        },
        "EG 12": {
          "Eingangsstufe": 6059,
          "Hauptstufe": 6834
        }
      },
      "Pfalz": {
        "EG 1": {
          "Grundentgelt": 2817
        },
        "EG 2": {
          "Grundentgelt": 2885
        },
        "EG 3": {
          "Grundentgelt": 2985
        },
        "EG 4": {
          "Grundentgelt": 3153,
          "Zusatzstufe": 3219.8
        },
        "EG 5": {
          "Grundentgelt": 3354,
          "Zusatzstufe": 3465.62
        },
        "EG 6": {
          "Grundentgelt": 3689,
          "Zusatzstufe": 3823.3
        },
        "EG 7": {
          "Grundentgelt": 4091,
          "Zusatzstufe": 4236.74
        },
        "EG 8": {
          "Grundentgelt": 4528,
          "Zusatzstufe": 4695.4
        },
        "EG 9": {
          "Grundentgelt": 5031,
          "Zusatzstufe": 5254.36
        },
        "EG 10": {
          "Grundentgelt": 5702,
          "Zusatzstufe": 5869.42
        },
        "EG 11": {
          "Grundentgelt": 6205,
          "Zusatzstufe": 6539.83
        }
      },
      "Rheinland-Rheinhessen": {
        "EG 1": {
          "Grundentgelt": 2817
        },
        "EG 2": {
          "Grundentgelt": 2885
        },
        "EG 3": {
          "Grundentgelt": 2985
        },
        "EG 4": {
          "Grundentgelt": 3153,
          "Zusatzstufe": 3219.8
        },
        "EG 5": {
          "Grundentgelt": 3354,
          "Zusatzstufe": 3465.62
        },
        "EG 6": {
          "Grundentgelt": 3689,
          "Zusatzstufe": 3823.3
        },
        "EG 7": {
          "Grundentgelt": 4091,
          "Zusatzstufe": 4259.18
        },
        "EG 8": {
          "Grundentgelt": 4595,
          "Zusatzstufe": 4796
        },
        "EG 9": {
          "Grundentgelt": 5198,
          "Zusatzstufe": 5365.88
        },
        "EG 10": {
          "Grundentgelt": 5702,
          "Zusatzstufe": 5869.42
        },
        "EG 11": {
          "Grundentgelt": 6205,
          "Zusatzstufe": 6717.91
        }
      },
      "Saarland": {
        "EG 1": {
          "Grundentgelt": 2817
        },
        "EG 2": {
          "Grundentgelt": 2885
        },
        "EG 3": {
          "Grundentgelt": 2985
        },
        "EG 4": {
          "Grundentgelt": 3153,
          "Zusatzstufe": 3219.8
        },
        "EG 5": {
          "Grundentgelt": 3354,
          "Zusatzstufe": 3465.62
        },
        "EG 6": {
          "Grundentgelt": 3689,
          "Zusatzstufe": 3823.3
        },
        "EG 7": {
          "Grundentgelt": 4091,
          "Zusatzstufe": 4259.18
        },
        "EG 8": {
          "Grundentgelt": 4595,
          "Zusatzstufe": 4796
        },
        "EG 9": {
          "Grundentgelt": 5198,
          "Zusatzstufe": 5365.88
        },
        "EG 10": {
          "Grundentgelt": 5702,
          "Zusatzstufe": 5869.42
        },
        "EG 11": {
          "Grundentgelt": 6205,
          "Zusatzstufe": 6539.83
        }
      },
      "Sachsen": {
        "EG 1": {
          "Grundentgelt": 2817,
          "Zusatzstufe": 2851
        },
        "EG 2": {
          "Grundentgelt": 2885,
          "Zusatzstufe": 2918
        },
        "EG 3": {
          "Grundentgelt": 2985,
          "Zusatzstufe": 3052
        },
        "EG 4": {
          "Grundentgelt": 3153,
          "Zusatzstufe": 3253
        },
        "EG 5": {
          "Grundentgelt": 3354,
          "Zusatzstufe": 3521
        },
        "EG 6": {
          "Grundentgelt": 3689,
          "Zusatzstufe": 3857
        },
        "EG 7": {
          "Grundentgelt": 4091,
          "Zusatzstufe": 4260
        },
        "EG 8": {
          "Grundentgelt": 4595,
          "Zusatzstufe": 4762
        },
        "EG 9": {
          "Grundentgelt": 5031,
          "Zusatzstufe": 5198
        },
        "EG 10": {
          "Grundentgelt": 5366,
          "Zusatzstufe": 5534
        },
        "EG 11": {
          "Grundentgelt": 5869,
          "Zusatzstufe": 6036
        },
        "EG 12": {
          "Grundentgelt": 6205,
          "Zusatzstufe": 6540
        }
      },
      "Sachsen-Anhalt": {
        "EG 1": {
          "Grundstufe": 2842,
          "Zusatzstufe": 2899
        },
        "EG 2": {
          "Grundstufe": 2936,
          "Zusatzstufe": 2973
        },
        "EG 3": {
          "Grundstufe": 3043,
          "Zusatzstufe": 3106
        },
        "EG 4": {
          "Grundstufe": 3208,
          "Zusatzstufe": 3316
        },
        "EG 5": {
          "Grundstufe": 3450,
          "Zusatzstufe": 3585
        },
        "EG 6": {
          "Grundstufe": 3730,
          "Zusatzstufe": 3985
        },
        "EG 7": {
          "Grundstufe": 4221,
          "Zusatzstufe": 4408
        },
        "EG 8": {
          "Grundstufe": 4560,
          "Zusatzstufe": 4796
        },
        "EG 9": {
          "Grundstufe": 5249,
          "Zusatzstufe": 5491
        },
        "EG 10": {
          "Grundstufe": 5956,
          "Zusatzstufe": 6189
        },
        "EG 11": {
          "Grundstufe": 6704,
          "Zusatzstufe": 6962
        }
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "EG 2": {
          "Grundstufe": 2966,
          "Hauptstufe": 3075
        },
        "EG 3": {
          "Grundstufe": 3060,
          "Hauptstufe": 3170,
          "Zusatzstufe 1": 3281
        },
        "EG 4": {
          "Grundstufe": 3225,
          "Hauptstufe": 3319,
          "Zusatzstufe 1": 3411,
          "Zusatzstufe 2": 3503
        },
        "EG 5": {
          "Grundstufe": 3552,
          "Hauptstufe": 3643,
          "Zusatzstufe 1": 3736,
          "Zusatzstufe 2": 3825,
          "Zusatzstufe 3": 3920
        },
        "EG 6": {
          "Grundstufe": 3806,
          "Hauptstufe": 3893,
          "Zusatzstufe 1": 4032,
          "Zusatzstufe 2": 4126,
          "Zusatzstufe 3": 4218
        },
        "EG 7": {
          "Grundstufe": 4057,
          "Hauptstufe": 4178,
          "Zusatzstufe 1": 4318,
          "Zusatzstufe 2": 4442,
          "Zusatzstufe 3": 4568
        },
        "EG 8": {
          "Grundstufe": 4726,
          "Hauptstufe": 4845,
          "Zusatzstufe 1": 4989,
          "Zusatzstufe 2": 5111,
          "Zusatzstufe 3": 5242
        },
        "EG 9": {
          "Grundstufe": 5426,
          "Hauptstufe": 5593,
          "Zusatzstufe 1": 5733,
          "Zusatzstufe 2": 5893
        },
        "EG 10": {
          "Grundstufe": 6156,
          "Hauptstufe": 6410,
          "Zusatzstufe 1": 6591
        },
        "EG 11": {
          "Grundstufe": 6920,
          "Hauptstufe": 7204
        }
      },
      "Thüringen": {
        "EG 1": {
          "Grundentgelt": 2817,
          "Zusatzstufe": 2851
        },
        "EG 2": {
          "Grundentgelt": 2885,
          "Zusatzstufe": 2918
        },
        "EG 3": {
          "Grundentgelt": 2985,
          "Zusatzstufe": 3052
        },
        "EG 4": {
          "Grundentgelt": 3153,
          "Zusatzstufe": 3253
        },
        "EG 5": {
          "Grundentgelt": 3354,
          "Zusatzstufe": 3521
        },
        "EG 6": {
          "Grundentgelt": 3689,
          "Zusatzstufe": 3857
        },
        "EG 7": {
          "Grundentgelt": 4091,
          "Zusatzstufe": 4260
        },
        "EG 8": {
          "Grundentgelt": 4595,
          "Zusatzstufe": 4762
        },
        "EG 9": {
          "Grundentgelt": 5031,
          "Zusatzstufe": 5198
        },
        "EG 10": {
          "Grundentgelt": 5366,
          "Zusatzstufe": 5534
        },
        "EG 11": {
          "Grundentgelt": 5869,
          "Zusatzstufe": 6036
        },
        "EG 12": {
          "Grundentgelt": 6205,
          "Zusatzstufe": 6540
        }
      }
    },
    "bonusData": {
      "Baden-Württemberg": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3777.5,
        "eckentgeltEG": 7,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Bayern": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3655,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Berlin/Brandenburg": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3583,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Hamburg/Unterweser": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3643,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Hessen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3354,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Niedersachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3640,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Nordrhein-Westfalen": {
        "urlaubsgeld": 0.72,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3361,
        "eckentgeltEG": 8,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Osnabrück-Emsland": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3640,
        "eckentgeltEG": 4,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Pfalz": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3354,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Rheinland-Rheinhessen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3354,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Saarland": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3354,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Sachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3354,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Sachsen-Anhalt": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3450,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3643,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Thüringen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3354,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      }
    },
    "ausbildungData": {
      "Baden-Württemberg": [
        1329.5,
        1405,
        1518.5,
        1594.5
      ],
      "Bayern": [
        1329,
        1392.5,
        1473.5,
        1527
      ],
      "Berlin/Brandenburg": [
        1297,
        1362,
        1430,
        1490
      ],
      "Hamburg/Unterweser": [
        1400,
        1436,
        1472,
        1508
      ],
      "Hessen": [
        1286,
        1355,
        1447,
        1495
      ],
      "Niedersachsen": [
        1289,
        1361,
        1468,
        1539
      ],
      "Nordrhein-Westfalen": [
        1267.82,
        1323.62,
        1406.51,
        1515.37
      ],
      "Osnabrück-Emsland": [
        1289,
        1361,
        1468,
        1539
      ],
      "Pfalz": [
        1286,
        1355,
        1447,
        1495
      ],
      "Rheinland-Rheinhessen": [
        1286,
        1355,
        1447,
        1495
      ],
      "Saarland": [
        1286,
        1355,
        1447,
        1495
      ],
      "Sachsen": [
        1297,
        1364,
        1429,
        1495
      ],
      "Sachsen-Anhalt": [
        1296,
        1365,
        1466,
        1534
      ],
      "Schleswig-Holstein/MV/NW-Niedersachsen": [
        1400,
        1436,
        1472,
        1508
      ],
      "Thüringen": [
        1297,
        1364,
        1429,
        1495
      ]
    }
  },
  "2028": {
    "preliminary": true,
    "gueltigAb": "2028-04-01",
    "hinweis": "yearNoticeAbschluss2026",
    "salaryData": {
      "Baden-Württemberg": {
        "EG 1": {
          "Grundentgelt": 2860
        },
        "EG 2": {
          "Grundentgelt": 2937
        },
        "EG 3": {
          "Grundentgelt": 3091.5
        },
        "EG 4": {
          "Grundentgelt": 3246
        },
        "EG 5": {
          "Grundentgelt": 3439.5
        },
        "EG 6": {
          "Grundentgelt": 3632
        },
        "EG 7": {
          "Grundentgelt": 3864.5
        },
        "EG 8": {
          "Grundentgelt": 4135
        },
        "EG 9": {
          "Grundentgelt": 4405.5
        },
        "EG 10": {
          "Grundentgelt": 4695
        },
        "EG 11": {
          "Grundentgelt": 5004.5
        },
        "EG 12": {
          "Grundentgelt": 5352
        },
        "EG 13": {
          "Grundentgelt": 5700
        },
        "EG 14": {
          "Grundentgelt": 6047.5
        },
        "EG 15": {
          "Grundentgelt": 6395.5
        },
        "EG 16": {
          "Grundentgelt": 6820.5
        },
        "EG 17": {
          "Grundentgelt": 7206.5
        }
      },
      "Bayern": {
        "EG 1": {
          "Stufe A": 2860
        },
        "EG 2": {
          "Stufe A": 2917,
          "Stufe B": 2965
        },
        "EG 3": {
          "Stufe A": 3063,
          "Stufe B": 3158
        },
        "EG 4": {
          "Stufe A": 3252,
          "Stufe B": 3346,
          "Stufe C": 3560
        },
        "EG 5": {
          "Stufe A": 3649,
          "Stufe B": 3739
        },
        "EG 6": {
          "Stufe A": 3875,
          "Stufe B": 4010
        },
        "EG 7": {
          "Stufe A": 4178,
          "Stufe B": 4348
        },
        "EG 8": {
          "Stufe A": 4533,
          "Stufe B": 4722
        },
        "EG 9": {
          "Stufe A": 4964,
          "Stufe B": 5208
        },
        "EG 10": {
          "Stufe A": 5489,
          "Stufe B": 5769
        },
        "EG 11": {
          "Stufe A": 6070,
          "Stufe B": 6369
        },
        "EG 12": {
          "Stufe A": 6656,
          "Stufe B": 6939
        }
      },
      "Berlin/Brandenburg": {
        "EG 1": {
          "Hauptstufe": 2859
        },
        "EG 2": {
          "Hauptstufe": 2910
        },
        "EG 3": {
          "Eingangsstufe": 2974,
          "Hauptstufe": 3007,
          "1. Zusatzstufe": 3097,
          "2. Zusatzstufe": 3187
        },
        "EG 4": {
          "Eingangsstufe": 3187,
          "Hauptstufe": 3278,
          "1. Zusatzstufe": 3407,
          "2. Zusatzstufe": 3537
        },
        "EG 5": {
          "Eingangsstufe": 3537,
          "Hauptstufe": 3665,
          "1. Zusatzstufe": 3727,
          "2. Zusatzstufe": 3788
        },
        "EG 6": {
          "Eingangsstufe": 3788,
          "Hauptstufe": 3850,
          "1. Zusatzstufe": 3910,
          "2. Zusatzstufe": 3971
        },
        "EG 7": {
          "Eingangsstufe": 3971,
          "Hauptstufe": 4032,
          "1. Zusatzstufe": 4093,
          "2. Zusatzstufe": 4154
        },
        "EG 8": {
          "Eingangsstufe": 4154,
          "Hauptstufe": 4216,
          "1. Zusatzstufe": 4288,
          "2. Zusatzstufe": 4363
        },
        "EG 9": {
          "Eingangsstufe": 4363,
          "Hauptstufe": 4436,
          "1. Zusatzstufe": 4607,
          "2. Zusatzstufe": 4778
        },
        "EG 10": {
          "Eingangsstufe": 4778,
          "Hauptstufe": 4949,
          "1. Zusatzstufe": 5194
        },
        "EG 11": {
          "Eingangsstufe": 5437,
          "Hauptstufe": 5682,
          "1. Zusatzstufe": 5939
        },
        "EG 12": {
          "Eingangsstufe": 6195,
          "Hauptstufe": 6452,
          "1. Zusatzstufe": 6696
        },
        "EG 13": {
          "Eingangsstufe": 6940,
          "Hauptstufe": 7185
        }
      },
      "Hamburg/Unterweser": {
        "EG 2": {
          "Grundstufe": 3034,
          "Hauptstufe": 3146
        },
        "EG 3": {
          "Grundstufe": 3130,
          "Hauptstufe": 3243
        },
        "EG 4": {
          "Grundstufe": 3299,
          "Hauptstufe": 3395,
          "Zusatzstufe 1": 3489,
          "Zusatzstufe 2": 3584
        },
        "EG 5": {
          "Grundstufe": 3634,
          "Hauptstufe": 3727,
          "Zusatzstufe 1": 3822,
          "Zusatzstufe 2": 3913,
          "Zusatzstufe 3": 4010
        },
        "EG 6": {
          "Grundstufe": 3921,
          "Hauptstufe": 4015,
          "Zusatzstufe 1": 4160,
          "Zusatzstufe 2": 4250,
          "Zusatzstufe 3": 4344
        },
        "EG 7": {
          "Grundstufe": 4211,
          "Hauptstufe": 4339,
          "Zusatzstufe 1": 4480,
          "Zusatzstufe 2": 4607,
          "Zusatzstufe 3": 4739
        },
        "EG 8": {
          "Grundstufe": 4961,
          "Hauptstufe": 5088,
          "Zusatzstufe 1": 5233,
          "Zusatzstufe 2": 5364,
          "Zusatzstufe 3": 5488
        },
        "EG 9": {
          "Grundstufe": 5744,
          "Hauptstufe": 5910,
          "Zusatzstufe 1": 6052,
          "Zusatzstufe 2": 6221
        },
        "EG 10": {
          "Grundstufe": 6551,
          "Hauptstufe": 6813,
          "Zusatzstufe 1": 7001
        },
        "EG 11": {
          "Grundstufe": 7397,
          "Hauptstufe": 7657
        }
      },
      "Hessen": {
        "EG 1": {
          "Grundentgelt": 2882
        },
        "EG 2": {
          "Grundentgelt": 2951
        },
        "EG 3": {
          "Grundentgelt": 3054
        },
        "EG 4": {
          "Grundentgelt": 3226,
          "Zusatzstufe": 3293.86
        },
        "EG 5": {
          "Grundentgelt": 3431,
          "Zusatzstufe": 3545.33
        },
        "EG 6": {
          "Grundentgelt": 3774,
          "Zusatzstufe": 3911.24
        },
        "EG 7": {
          "Grundentgelt": 4185,
          "Zusatzstufe": 4357.14
        },
        "EG 8": {
          "Grundentgelt": 4701,
          "Zusatzstufe": 4906
        },
        "EG 9": {
          "Grundentgelt": 5318,
          "Zusatzstufe": 5489.3
        },
        "EG 10": {
          "Grundentgelt": 5833,
          "Zusatzstufe": 6004.42
        },
        "EG 11": {
          "Grundentgelt": 6348,
          "Zusatzstufe": 6690.25
        }
      },
      "Niedersachsen": {
        "EG 2": {
          "Stufe A": 2818,
          "Stufe B": 2907,
          "Stufe C": 2929
        },
        "EG 3": {
          "Stufe A": 2952,
          "Stufe B": 3000,
          "Stufe C": 3068
        },
        "EG 4": {
          "Stufe A": 3103,
          "Stufe B": 3144,
          "Stufe C": 3303
        },
        "EG 5": {
          "Stufe A": 3502,
          "Stufe B": 3724,
          "Stufe C": 3772
        },
        "EG 6": {
          "Stufe A": 3816,
          "Stufe B": 3866,
          "Stufe C": 3951
        },
        "EG 7": {
          "Stufe A": 4066,
          "Stufe B": 4158,
          "Stufe C": 4258
        },
        "EG 8": {
          "Stufe A": 4353,
          "Stufe B": 4496,
          "Stufe C": 4556
        },
        "EG 9": {
          "Stufe A": 4584,
          "Stufe B": 4671,
          "Stufe C": 4743
        },
        "EG 10": {
          "Stufe A": 4833,
          "Stufe B": 4901,
          "Stufe C": 4956
        },
        "EG 11": {
          "Stufe A": 5024,
          "Stufe B": 5260,
          "Stufe C": 5498
        },
        "EG 12": {
          "Stufe A": 5731,
          "Stufe B": 5965,
          "Stufe C": 6202
        },
        "EG 13": {
          "Stufe A": 6465,
          "Stufe B": 6974,
          "Stufe C": 7181
        }
      },
      "Nordrhein-Westfalen": {
        "EG 1": {
          "Grundentgelt": 2910.5
        },
        "EG 2": {
          "Grundentgelt": 2945.5
        },
        "EG 3": {
          "Grundentgelt": 2979.5
        },
        "EG 4": {
          "Grundentgelt": 3025.5
        },
        "EG 5": {
          "Grundentgelt": 3089
        },
        "EG 6": {
          "Grundentgelt": 3170
        },
        "EG 7": {
          "Grundentgelt": 3268
        },
        "EG 8": {
          "Grundentgelt": 3438.5
        },
        "EG 9": {
          "Grundentgelt": 3715.5
        },
        "EG 10": {
          "Grundentgelt": 4084.5
        },
        "EG 11": {
          "Grundentgelt": 4580
        },
        "EG 12": {
          "bis 36. Monat": 4719.5,
          "nach 36. Monat": 5241.5
        },
        "EG 13": {
          "bis 18. Monat": 5273.5,
          "nach 18. Monat": 5584,
          "nach 36. Monat": 6204
        },
        "EG 14": {
          "bis 12. Monat": 5990.5,
          "nach 12. Monat": 6365.5,
          "nach 24. Monat": 6740,
          "nach 36. Monat": 7490.5
        }
      },
      "Osnabrück-Emsland": {
        "EG 1": {
          "Hauptstufe": 2907,
          "Zusatzstufe 1": 2952
        },
        "EG 2": {
          "Eingangsstufe": 2952,
          "Hauptstufe": 3000,
          "Zusatzstufe 1": 3043,
          "Zusatzstufe 2": 3088
        },
        "EG 3": {
          "Eingangsstufe": 3088,
          "Hauptstufe": 3270,
          "Zusatzstufe 1": 3301,
          "Zusatzstufe 2": 3338,
          "Zusatzstufe 3": 3368
        },
        "EG 4": {
          "Eingangsstufe": 3368,
          "Hauptstufe": 3724,
          "Zusatzstufe 1": 3766,
          "Zusatzstufe 2": 3804,
          "Zusatzstufe 3": 3837
        },
        "EG 5": {
          "Eingangsstufe": 3837,
          "Hauptstufe": 4040,
          "Zusatzstufe 1": 4081,
          "Zusatzstufe 2": 4121,
          "Zusatzstufe 3": 4164
        },
        "EG 6": {
          "Eingangsstufe": 4164,
          "Hauptstufe": 4221,
          "Zusatzstufe 1": 4265,
          "Zusatzstufe 2": 4308,
          "Zusatzstufe 3": 4349
        },
        "EG 7": {
          "Eingangsstufe": 4349,
          "Hauptstufe": 4452,
          "Zusatzstufe 1": 4500,
          "Zusatzstufe 2": 4544,
          "Zusatzstufe 3": 4587
        },
        "EG 8": {
          "Eingangsstufe": 4587,
          "Hauptstufe": 4743,
          "Zusatzstufe 1": 4790,
          "Zusatzstufe 2": 4838,
          "Zusatzstufe 3": 4886
        },
        "EG 9": {
          "Eingangsstufe": 4886,
          "Hauptstufe": 5027,
          "Zusatzstufe 1": 5077,
          "Zusatzstufe 2": 5127,
          "Zusatzstufe 3": 5180
        },
        "EG 10": {
          "Eingangsstufe": 5180,
          "Hauptstufe": 5387,
          "Zusatzstufe 1": 5439,
          "Zusatzstufe 2": 5496,
          "Zusatzstufe 3": 5546
        },
        "EG 11": {
          "Eingangsstufe": 5546,
          "Hauptstufe": 6013,
          "Zusatzstufe 1": 6076,
          "Zusatzstufe 2": 6138,
          "Zusatzstufe 3": 6198
        },
        "EG 12": {
          "Eingangsstufe": 6198,
          "Hauptstufe": 6991
        }
      },
      "Pfalz": {
        "EG 1": {
          "Grundentgelt": 2882
        },
        "EG 2": {
          "Grundentgelt": 2951
        },
        "EG 3": {
          "Grundentgelt": 3054
        },
        "EG 4": {
          "Grundentgelt": 3226,
          "Zusatzstufe": 3293.86
        },
        "EG 5": {
          "Grundentgelt": 3431,
          "Zusatzstufe": 3545.33
        },
        "EG 6": {
          "Grundentgelt": 3774,
          "Zusatzstufe": 3911.24
        },
        "EG 7": {
          "Grundentgelt": 4185,
          "Zusatzstufe": 4334.19
        },
        "EG 8": {
          "Grundentgelt": 4632,
          "Zusatzstufe": 4803.39
        },
        "EG 9": {
          "Grundentgelt": 5147,
          "Zusatzstufe": 5375.21
        },
        "EG 10": {
          "Grundentgelt": 5833,
          "Zusatzstufe": 6004.42
        },
        "EG 11": {
          "Grundentgelt": 6348,
          "Zusatzstufe": 6690.25
        }
      },
      "Rheinland-Rheinhessen": {
        "EG 1": {
          "Grundentgelt": 2882
        },
        "EG 2": {
          "Grundentgelt": 2951
        },
        "EG 3": {
          "Grundentgelt": 3054
        },
        "EG 4": {
          "Grundentgelt": 3226,
          "Zusatzstufe": 3293.86
        },
        "EG 5": {
          "Grundentgelt": 3431,
          "Zusatzstufe": 3545.33
        },
        "EG 6": {
          "Grundentgelt": 3774,
          "Zusatzstufe": 3911.24
        },
        "EG 7": {
          "Grundentgelt": 4185,
          "Zusatzstufe": 4357.14
        },
        "EG 8": {
          "Grundentgelt": 4701,
          "Zusatzstufe": 4906
        },
        "EG 9": {
          "Grundentgelt": 5318,
          "Zusatzstufe": 5489.3
        },
        "EG 10": {
          "Grundentgelt": 5833,
          "Zusatzstufe": 6004.42
        },
        "EG 11": {
          "Grundentgelt": 6348,
          "Zusatzstufe": 6872.42
        }
      },
      "Saarland": {
        "EG 1": {
          "Grundentgelt": 2882
        },
        "EG 2": {
          "Grundentgelt": 2951
        },
        "EG 3": {
          "Grundentgelt": 3054
        },
        "EG 4": {
          "Grundentgelt": 3226,
          "Zusatzstufe": 3293.86
        },
        "EG 5": {
          "Grundentgelt": 3431,
          "Zusatzstufe": 3545.33
        },
        "EG 6": {
          "Grundentgelt": 3774,
          "Zusatzstufe": 3911.24
        },
        "EG 7": {
          "Grundentgelt": 4185,
          "Zusatzstufe": 4357.14
        },
        "EG 8": {
          "Grundentgelt": 4701,
          "Zusatzstufe": 4906
        },
        "EG 9": {
          "Grundentgelt": 5318,
          "Zusatzstufe": 5489.3
        },
        "EG 10": {
          "Grundentgelt": 5833,
          "Zusatzstufe": 6004.42
        },
        "EG 11": {
          "Grundentgelt": 6348,
          "Zusatzstufe": 6690.25
        }
      },
      "Sachsen": {
        "EG 1": {
          "Grundentgelt": 2882,
          "Zusatzstufe": 2917
        },
        "EG 2": {
          "Grundentgelt": 2951,
          "Zusatzstufe": 2985
        },
        "EG 3": {
          "Grundentgelt": 3054,
          "Zusatzstufe": 3122
        },
        "EG 4": {
          "Grundentgelt": 3226,
          "Zusatzstufe": 3328
        },
        "EG 5": {
          "Grundentgelt": 3431,
          "Zusatzstufe": 3602
        },
        "EG 6": {
          "Grundentgelt": 3774,
          "Zusatzstufe": 3946
        },
        "EG 7": {
          "Grundentgelt": 4185,
          "Zusatzstufe": 4358
        },
        "EG 8": {
          "Grundentgelt": 4701,
          "Zusatzstufe": 4872
        },
        "EG 9": {
          "Grundentgelt": 5147,
          "Zusatzstufe": 5318
        },
        "EG 10": {
          "Grundentgelt": 5489,
          "Zusatzstufe": 5661
        },
        "EG 11": {
          "Grundentgelt": 6004,
          "Zusatzstufe": 6175
        },
        "EG 12": {
          "Grundentgelt": 6348,
          "Zusatzstufe": 6690
        }
      },
      "Sachsen-Anhalt": {
        "EG 1": {
          "Grundstufe": 2907,
          "Zusatzstufe": 2966
        },
        "EG 2": {
          "Grundstufe": 3004,
          "Zusatzstufe": 3041
        },
        "EG 3": {
          "Grundstufe": 3113,
          "Zusatzstufe": 3177
        },
        "EG 4": {
          "Grundstufe": 3282,
          "Zusatzstufe": 3392
        },
        "EG 5": {
          "Grundstufe": 3529,
          "Zusatzstufe": 3667
        },
        "EG 6": {
          "Grundstufe": 3816,
          "Zusatzstufe": 4077
        },
        "EG 7": {
          "Grundstufe": 4318,
          "Zusatzstufe": 4509
        },
        "EG 8": {
          "Grundstufe": 4665,
          "Zusatzstufe": 4906
        },
        "EG 9": {
          "Grundstufe": 5370,
          "Zusatzstufe": 5617
        },
        "EG 10": {
          "Grundstufe": 6093,
          "Zusatzstufe": 6331
        },
        "EG 11": {
          "Grundstufe": 6858,
          "Zusatzstufe": 7122
        }
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "EG 2": {
          "Grundstufe": 3034,
          "Hauptstufe": 3146
        },
        "EG 3": {
          "Grundstufe": 3130,
          "Hauptstufe": 3243,
          "Zusatzstufe 1": 3356
        },
        "EG 4": {
          "Grundstufe": 3299,
          "Hauptstufe": 3395,
          "Zusatzstufe 1": 3489,
          "Zusatzstufe 2": 3584
        },
        "EG 5": {
          "Grundstufe": 3634,
          "Hauptstufe": 3727,
          "Zusatzstufe 1": 3822,
          "Zusatzstufe 2": 3913,
          "Zusatzstufe 3": 4010
        },
        "EG 6": {
          "Grundstufe": 3894,
          "Hauptstufe": 3983,
          "Zusatzstufe 1": 4125,
          "Zusatzstufe 2": 4221,
          "Zusatzstufe 3": 4315
        },
        "EG 7": {
          "Grundstufe": 4150,
          "Hauptstufe": 4274,
          "Zusatzstufe 1": 4417,
          "Zusatzstufe 2": 4544,
          "Zusatzstufe 3": 4673
        },
        "EG 8": {
          "Grundstufe": 4835,
          "Hauptstufe": 4956,
          "Zusatzstufe 1": 5104,
          "Zusatzstufe 2": 5229,
          "Zusatzstufe 3": 5363
        },
        "EG 9": {
          "Grundstufe": 5551,
          "Hauptstufe": 5722,
          "Zusatzstufe 1": 5865,
          "Zusatzstufe 2": 6029
        },
        "EG 10": {
          "Grundstufe": 6298,
          "Hauptstufe": 6557,
          "Zusatzstufe 1": 6743
        },
        "EG 11": {
          "Grundstufe": 7079,
          "Hauptstufe": 7370
        }
      },
      "Thüringen": {
        "EG 1": {
          "Grundentgelt": 2882,
          "Zusatzstufe": 2917
        },
        "EG 2": {
          "Grundentgelt": 2951,
          "Zusatzstufe": 2985
        },
        "EG 3": {
          "Grundentgelt": 3054,
          "Zusatzstufe": 3122
        },
        "EG 4": {
          "Grundentgelt": 3226,
          "Zusatzstufe": 3328
        },
        "EG 5": {
          "Grundentgelt": 3431,
          "Zusatzstufe": 3602
        },
        "EG 6": {
          "Grundentgelt": 3774,
          "Zusatzstufe": 3946
        },
        "EG 7": {
          "Grundentgelt": 4185,
          "Zusatzstufe": 4358
        },
        "EG 8": {
          "Grundentgelt": 4701,
          "Zusatzstufe": 4872
        },
        "EG 9": {
          "Grundentgelt": 5147,
          "Zusatzstufe": 5318
        },
        "EG 10": {
          "Grundentgelt": 5489,
          "Zusatzstufe": 5661
        },
        "EG 11": {
          "Grundentgelt": 6004,
          "Zusatzstufe": 6175
        },
        "EG 12": {
          "Grundentgelt": 6348,
          "Zusatzstufe": 6690
        }
      }
    },
    "bonusData": {
      "Baden-Württemberg": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3864.5,
        "eckentgeltEG": 7,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Bayern": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3739,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Berlin/Brandenburg": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3665,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Hamburg/Unterweser": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3727,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Hessen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3431,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Niedersachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3724,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Nordrhein-Westfalen": {
        "urlaubsgeld": 0.72,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3438.5,
        "eckentgeltEG": 8,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Osnabrück-Emsland": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3724,
        "eckentgeltEG": 4,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Pfalz": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3431,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Rheinland-Rheinhessen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3431,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Saarland": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3431,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Sachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3431,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Sachsen-Anhalt": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3529,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Schleswig-Holstein/MV/NW-Niedersachsen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3727,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      },
      "Thüringen": {
        "urlaubsgeld": 0.69,
        "tZugA": 0.275,
        "tGeld": 0.184,
        "tZugB": 0.265,
        "eckentgelt": 3431,
        "minMonate": 6,
        "weihnachtsgeldStaffel": [
          {
            "monate": 36,
            "satz": 0.55
          },
          {
            "monate": 24,
            "satz": 0.45
          },
          {
            "monate": 12,
            "satz": 0.35
          },
          {
            "monate": 6,
            "satz": 0.25
          }
        ]
      }
    },
    "ausbildungData": {
      "Baden-Württemberg": [
        1360,
        1437.5,
        1553.5,
        1631
      ],
      "Bayern": [
        1359.5,
        1424.5,
        1507.5,
        1562
      ],
      "Berlin/Brandenburg": [
        1327,
        1393,
        1463,
        1524
      ],
      "Hamburg/Unterweser": [
        1432,
        1469,
        1506,
        1543
      ],
      "Hessen": [
        1316,
        1386,
        1480,
        1529
      ],
      "Niedersachsen": [
        1319,
        1392,
        1502,
        1574
      ],
      "Nordrhein-Westfalen": [
        1296.98,
        1354.06,
        1438.86,
        1550.22
      ],
      "Osnabrück-Emsland": [
        1319,
        1392,
        1502,
        1574
      ],
      "Pfalz": [
        1316,
        1386,
        1480,
        1529
      ],
      "Rheinland-Rheinhessen": [
        1316,
        1386,
        1480,
        1529
      ],
      "Saarland": [
        1316,
        1386,
        1480,
        1529
      ],
      "Sachsen": [
        1327,
        1395,
        1462,
        1529
      ],
      "Sachsen-Anhalt": [
        1326,
        1396,
        1500,
        1569
      ],
      "Schleswig-Holstein/MV/NW-Niedersachsen": [
        1432,
        1469,
        1506,
        1543
      ],
      "Thüringen": [
        1327,
        1395,
        1462,
        1529
      ]
    }
  }
};

// Beitragsbemessungsgrenzen (monatlich, seit 2025 bundeseinheitlich) pro Jahr
// RV/AV = Renten- und Arbeitslosenversicherung, KV/PV = Kranken- und Pflegeversicherung
// Quelle: Sozialversicherungs-Rechengrößenverordnung (bundesregierung.de). Fehlt ein Jahr
// (z. B. 2028), nutzt taxes.js das neueste vorhandene.
const BBG_DATA = {
  "2025": { rvAv: 8050, kvPv: 5512.50 },
  "2026": { rvAv: 8450, kvPv: 5812.50 },
  "2027": { rvAv: 8850, kvPv: 6375 }
};
