var mining_requires_one_from = [
  23,
  400,
  2807,
  4669,
  4670,
  137,
  146,
  1327,
  1328,
  1328,
  1329,
  1330,
  1331,
  1332,
  1333,
  1334,
  5128,
  5129,
  5130,
  5131,
  148,
  529,
  393,
  535,
  1335,
  1336,
  1337,
  1338,
  1464,
  1465,
  1466,
  3898,
  3899,
  3900,
  3901
],
mining_vein_requires_one_from = [
  400,
  2807,
  1335,
  1336,
  1337,
  1338,
  1464,
  1465,
  1466,
  3898,
  3899,
  3900,
  3901,
  5128,
  5129,
  5130,
  5131
],
clay_ore_script = {
  desc: 'Clay is used for jewelry. Requires level 1 mining.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 30,
          level: 0,
          base_chance: 0.55,
          next: !1,
          duration: 2000,
          xp: 8
        }
      ]
    }
  ]
},
clay_ore_script_tutorial = {
  desc: 'Clay is used for jewelry. Requires level 1 mining.',
  results: [
    {
      requires_one_from: [
        23,
        400,
        2807
      ],
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 30,
          level: 0,
          base_chance: 0.97,
          max_chance: 0.97,
          next: !1,
          duration: 2000,
          xp: 2
        }
      ]
    }
  ]
},
sand_ore_script = {
  desc: 'Sand is used for alchemy. Requires level 1 mining. Contains a crystal gem.',
  results: [
    {
      requires_one_from: [
        286,
        2807,
        5007,
        5008,
        5034,
        5035,
        5116,
        5117
      ],
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 2696,
          level: 1,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 2697,
          level: 1,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 1300,
          level: 1,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 2698,
          level: 1,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 187,
          level: 1,
          base_chance: 0.35,
          next: !1,
          duration: 2000,
          xp: 8
        }
      ]
    }
  ]
},
sand_ore_script_tutorial = {
  desc: 'Sand is used for alchemy. Requires level 1 mining.',
  results: [
    {
      requires_one_from: [
        286,
        2807,
        5007,
        5008,
        5034,
        5035,
        5116,
        5117
      ],
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 187,
          level: 1,
          base_chance: 0.97,
          max_chance: 0.97,
          next: !1,
          duration: 2000,
          xp: 2
        }
      ]
    }
  ]
},
copper_ore_script = {
  desc: 'Copper is used for forging. Requires level 1 mining. Contains a crystal gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 2696,
          level: 1,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 2697,
          level: 1,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 1300,
          level: 1,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 32,
          level: 1,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 10
        }
      ]
    }
  ]
},
tin_ore_script = {
  desc: 'Tin is used for forging. Requires level 1 mining. Contains a crystal gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 2696,
          level: 1,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 2697,
          level: 1,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 1300,
          level: 1,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 8
        },
        {
          id: 33,
          level: 1,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 10
        }
      ]
    }
  ]
},
iron_ore_script = {
  desc: 'Iron is used for forging. Requires level 25 mining. Contains an emerald gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1903,
          level: 25,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 1904,
          level: 25,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 198,
          level: 25,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 31,
          level: 25,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 20
        }
      ]
    }
  ]
},
iron_vein_script = {
  desc: 'Iron is used for forging. Requires level 25 mining. Contains an emerald gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1903,
          level: 25,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 1904,
          level: 25,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 198,
          level: 25,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 1905,
          level: 25,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 20
        },
        {
          id: 31,
          level: 25,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 20
        }
      ]
    }
  ]
},
coal_ore_script = {
  desc: 'Coal is used for forging. Requires level 40 mining. Contains a ruby gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1906,
          level: 40,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 1907,
          level: 40,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 196,
          level: 40,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 186,
          level: 40,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 35
        }
      ]
    }
  ]
},
coal_vein_script = {
  desc: 'Coal is used for forging. Requires level 40 mining. Contains a ruby gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1906,
          level: 40,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 1907,
          level: 40,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 196,
          level: 40,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 1908,
          level: 40,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 35
        },
        {
          id: 186,
          level: 40,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 35
        }
      ]
    }
  ]
},
silver_ore_script = {
  desc: 'Silver is used for jewelry. Requires level 25 mining. Contains a sapphire gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1900,
          level: 25,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 1901,
          level: 25,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 200,
          level: 25,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 185,
          level: 25,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 25
        }
      ]
    }
  ]
},
silver_vein_script = {
  desc: 'Silver is used for jewelry. Requires level 25 mining. Contains a sapphire gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1900,
          level: 25,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 1901,
          level: 25,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 200,
          level: 25,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 1902,
          level: 25,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 25
        },
        {
          id: 185,
          level: 25,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 25
        }
      ]
    }
  ]
},
gold_ore_script = {
  desc: 'Gold is used for jewelry. Requires level 45 mining. Contains a diamond gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1909,
          level: 45,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 1910,
          level: 45,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 194,
          level: 45,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 184,
          level: 45,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 40
        }
      ]
    }
  ]
},
gold_vein_script = {
  desc: 'Gold is used for jewelry. Requires level 45 mining. Contains a diamond gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1909,
          level: 45,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 1910,
          level: 45,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 194,
          level: 45,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 1911,
          level: 45,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 40
        },
        {
          id: 184,
          level: 45,
          base_chance: 0.3,
          next: !1,
          duration: 2000,
          xp: 40
        }
      ]
    }
  ]
},
white_gold_ore_script = {
  desc: 'White gold is used for jewelry. Requires level 55 mining. Contains an amethyst gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1912,
          level: 55,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1913,
          level: 55,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 385,
          level: 55,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 484,
          level: 55,
          base_chance: 0.35,
          next: !1,
          duration: 2000,
          xp: 50
        }
      ]
    }
  ]
},
white_gold_vein_script = {
  desc: 'White gold is used for jewelry. Requires level 55 mining. Contains an amethyst gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1912,
          level: 55,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1913,
          level: 55,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 385,
          level: 55,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1914,
          level: 55,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 484,
          level: 55,
          base_chance: 0.35,
          next: !1,
          duration: 2000,
          xp: 50
        }
      ]
    }
  ]
},
azurite_ore_script = {
  desc: 'Azurite is used for forging. Requires level 60 mining. Contains an opal gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1915,
          level: 60,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1916,
          level: 60,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 387,
          level: 60,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 383,
          level: 60,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 55
        }
      ]
    }
  ]
},
azurite_vein_script = {
  desc: 'Azurite is used for forging. Requires level 60 mining. Contains an opal gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1915,
          level: 60,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1916,
          level: 60,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 387,
          level: 60,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1917,
          level: 60,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 383,
          level: 60,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 55
        }
      ]
    }
  ]
},
platinum_ore_script = {
  desc: 'Platinum is used for jewelry. Requires level 75 mining. Contains a jadeite gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1918,
          level: 75,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 1919,
          level: 75,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 389,
          level: 75,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 373,
          level: 75,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 75
        }
      ]
    }
  ]
},
platinum_vein_script = {
  desc: 'Platinum is used for jewelry. Requires level 75 mining. Contains a jadeite gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1918,
          level: 75,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 1919,
          level: 75,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 389,
          level: 75,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 1920,
          level: 75,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 75
        },
        {
          id: 373,
          level: 75,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 75
        }
      ]
    }
  ]
},
fire_ore_script = {
  desc: 'Fire ore is used for forging. Requires level 80 mining. Contains an opal gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1915,
          level: 80,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1916,
          level: 80,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 387,
          level: 80,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 657,
          level: 80,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 85
        }
      ]
    }
  ]
},
fire_vein_script = {
  desc: 'Fire ore is used for forging. Requires level 80 mining. Contains an opal gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1915,
          level: 80,
          base_chance: 0.005,
          max_chance: 0.005,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1916,
          level: 80,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 387,
          level: 80,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 1917,
          level: 80,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 55
        },
        {
          id: 3794,
          level: 80,
          base_chance: 0.00008,
          max_chance: 0.00008,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 657,
          level: 80,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 85
        }
      ]
    }
  ]
},
dragon_ore_script = {
  desc: 'Dragonstone ore is used for forging. Requires level 110 mining. Contains a star diamond gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1921,
          level: 110,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1922,
          level: 110,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1580,
          level: 110,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1447,
          level: 110,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 100
        }
      ]
    }
  ]
},
dragon_vein_script = {
  desc: 'Dragonstone ore is used for forging. Requires level 110 mining. Contains a star diamond gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1921,
          level: 110,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1922,
          level: 110,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1580,
          level: 110,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1923,
          level: 110,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 3794,
          level: 110,
          base_chance: 0.0001,
          max_chance: 0.0001,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1447,
          level: 110,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 100
        }
      ]
    }
  ]
},
dragon_vein_script_illusion = {
  desc: 'Dragonstone ore is used for forging. Requires level 110 mining. Contains a star diamond gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1921,
          level: 110,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1922,
          level: 110,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1580,
          level: 110,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1923,
          level: 110,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1447,
          level: 110,
          base_chance: 0.35,
          next: !1,
          duration: 2000,
          xp: 100
        }
      ]
    }
  ]
},
redhodium_ore_script = {
  desc: 'Redhodium is used for jewelry. Requires level 90 mining. Contains a star diamond gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1921,
          level: 90,
          base_chance: 0.0035,
          max_chance: 0.0035,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1922,
          level: 90,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1580,
          level: 90,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1887,
          level: 90,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 95
        }
      ]
    }
  ]
},
redhodium_vein_script = {
  desc: 'Redhodium is used for jewelry. Requires level 90 mining. Contains a star diamond gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1921,
          level: 90,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1922,
          level: 90,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1580,
          level: 90,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1923,
          level: 90,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 2022,
          level: 90,
          base_chance: 0.0001,
          max_chance: 0.0001,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1887,
          level: 90,
          base_chance: 0.25,
          next: !1,
          duration: 2000,
          xp: 95
        }
      ]
    }
  ]
},
redhodium_vein_script2 = {
  desc: 'Redhodium is used for jewelry. Requires level 90 mining. Contains a star diamond gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 1921,
          level: 90,
          base_chance: 0.004,
          max_chance: 0.004,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1922,
          level: 90,
          base_chance: 0.003,
          max_chance: 0.003,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1580,
          level: 90,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1923,
          level: 90,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 100
        },
        {
          id: 1887,
          level: 90,
          base_chance: 0.35,
          next: !1,
          duration: 2000,
          xp: 95
        }
      ]
    }
  ]
},
kaolinite_ore_script = {
  desc: 'Kaolinite is used for jewelry. Requires level 50 mining.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 2913,
          level: 50,
          base_chance: 0.7,
          next: !1,
          duration: 2000,
          xp: 50
        }
      ]
    }
  ]
},
graveyard_script = {
  desc: 'Bones are used for alchemy. Requires level 15 mining.',
  results: [
    {
      requires_one_from: [
        286,
        2807,
        5007,
        5008,
        5034,
        5035,
        5116,
        5117
      ],
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 270,
          level: 15,
          base_chance: 0.05,
          max_chance: 0.05,
          next: !0,
          duration: 2000,
          xp: 15
        },
        {
          id: 271,
          level: 15,
          base_chance: 0.05,
          max_chance: 0.05,
          next: !0,
          duration: 2000,
          xp: 15
        },
        {
          id: 272,
          level: 15,
          base_chance: 0.05,
          max_chance: 0.05,
          next: !0,
          duration: 2000,
          xp: 15
        },
        {
          id: 273,
          level: 15,
          base_chance: 0.05,
          max_chance: 0.05,
          next: !0,
          duration: 2000,
          xp: 15
        },
        {
          id: 274,
          level: 15,
          base_chance: 0.05,
          max_chance: 0.05,
          next: !1,
          duration: 2000,
          xp: 15
        }
      ]
    }
  ]
},
swamp_script = {
  desc: 'Fangs are used for alchemy. Requires level 35 mining.',
  results: [
    {
      requires_one_from: [
        286,
        2807,
        5007,
        5008,
        5034,
        5035,
        5116,
        5117
      ],
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 207,
          level: 35,
          base_chance: 0.06,
          max_chance: 0.06,
          next: !0,
          duration: 2000,
          xp: 32
        },
        {
          id: 215,
          level: 35,
          base_chance: 0.06,
          max_chance: 0.06,
          next: !0,
          duration: 2000,
          xp: 32
        },
        {
          id: 230,
          level: 35,
          base_chance: 0.06,
          max_chance: 0.06,
          next: !1,
          duration: 2000,
          xp: 32
        }
      ]
    }
  ]
},
edoylerite_ore_script = {
  desc: 'Edoylerite ore is used for forging. Requires level 120 mining. Contains a Tanzanite gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 3950,
          level: 120,
          base_chance: 0.0018,
          max_chance: 0.0018,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3951,
          level: 120,
          base_chance: 0.0013,
          max_chance: 0.0013,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3952,
          level: 120,
          base_chance: 0.0003,
          max_chance: 0.0003,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3585,
          level: 120,
          base_chance: 0.05,
          next: !1,
          duration: 2000,
          xp: 550
        }
      ]
    }
  ]
},
edoylerite_vein_script = {
  desc: 'Edoylerite ore is used for forging. Requires level 120 mining. Contains a Tanzanite gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 3950,
          level: 120,
          base_chance: 0.0023,
          max_chance: 0.0023,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3951,
          level: 120,
          base_chance: 0.0013,
          max_chance: 0.0013,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3952,
          level: 120,
          base_chance: 0.0008,
          max_chance: 0.0008,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3953,
          level: 120,
          base_chance: 0.0003,
          max_chance: 0.0003,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3794,
          level: 120,
          base_chance: 0.00012,
          max_chance: 0.00012,
          next: !0,
          duration: 2000,
          xp: 550
        },
        {
          id: 3585,
          level: 120,
          base_chance: 0.05,
          next: !1,
          duration: 2000,
          xp: 550
        }
      ]
    }
  ]
},
abelsonite_ore_script = {
  desc: 'Abelsonite is used for jewelry. Requires level 135 mining. Contains a Tanzanite gem.',
  results: [
    {
      requires_one_from: mining_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 3950,
          level: 135,
          base_chance: 0.002,
          max_chance: 0.002,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3951,
          level: 135,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3952,
          level: 135,
          base_chance: 0.0005,
          max_chance: 0.0005,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3584,
          level: 135,
          base_chance: 0.05,
          next: !1,
          duration: 2000,
          xp: 600
        }
      ]
    }
  ]
},
abelsonite_vein_script = {
  desc: 'Abelsonite is used for jewelry. Requires level 135 mining. Contains a Tanzanite gem.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 3950,
          level: 135,
          base_chance: 0.0025,
          max_chance: 0.0025,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3951,
          level: 135,
          base_chance: 0.0015,
          max_chance: 0.0015,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3952,
          level: 135,
          base_chance: 0.001,
          max_chance: 0.001,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3953,
          level: 135,
          base_chance: 0.0005,
          max_chance: 0.0005,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 2022,
          level: 135,
          base_chance: 0.0001,
          max_chance: 0.0001,
          next: !0,
          duration: 2000,
          xp: 600
        },
        {
          id: 3584,
          level: 135,
          base_chance: 0.05,
          next: !1,
          duration: 2000,
          xp: 600
        }
      ]
    }
  ]
},
blood_crystal_script = {
  desc: 'Blood Crystal is used for crafting. Requires level 75 mining.',
  results: [
    {
      requires_one_from: mining_vein_requires_one_from,
      skill: 'mining',
      continuous: !0,
      returns: [
        {
          id: 4674,
          level: 75,
          base_chance: 0.01,
          next: !1,
          duration: 2000,
          xp: 300
        }
      ]
    }
  ]
}