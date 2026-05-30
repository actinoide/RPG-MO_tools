//@ts-nocheck
let pets:any[]=[];
pets[1] = createObject({
  b_i: 1,
  b_t: BASE_TYPE.PET,
  name: 'Baby Ruby Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 0,
    y: 0
  },
  params: {
    item_id: 669,
    xp_required: 100000,
    inventory_slots: 3,
    next_pet_item_id: 671,
    level: 1,
    eats: {
      285: 0.15,
      494: 0.075
    },
    eat_interval: 5,
    happiness: 10,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[2] = createObject({
  b_i: 2,
  b_t: BASE_TYPE.PET,
  name: 'Gray Dog [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 9,
    y: 0
  },
  params: {
    item_id: 670,
    xp_required: 100000,
    inventory_slots: 0,
    next_pet_item_id: 674,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[3] = createObject({
  b_i: 3,
  b_t: BASE_TYPE.PET,
  name: 'Ruby Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 5,
    y: 2
  },
  params: {
    item_id: 671,
    xp_required: 500000,
    inventory_slots: 6,
    next_pet_item_id: 672,
    level: 2,
    eats: {
      285: 0.12,
      494: 0.06
    },
    eat_interval: 5,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[4] = createObject({
  b_i: 4,
  b_t: BASE_TYPE.PET,
  name: 'King Ruby Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 0,
    y: 4
  },
  params: {
    item_id: 672,
    inventory_slots: 7,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 673,
    level: 3,
    eats: {
      285: 0.075,
      494: 0.025
    },
    eat_interval: 8,
    happiness: 20,
    insurance_cost: [
      97500,
      5
    ],
    breeding_level: 58,
    likes: [
      {
        pet_id: 5,
        xp: 868,
        returns: [
          {
            pet_id: 117,
            base_chance: 0.6,
            max_chance: 0.85
          },
          {
            pet_id: 231,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      },
      {
        pet_id: 38,
        xp: 1388,
        returns: [
          {
            pet_id: 116,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 245,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 114,
            base_chance: 0.6,
            max_chance: 0.83
          },
          {
            pet_id: 244,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      },
      {
        pet_id: 42,
        xp: 859,
        returns: [
          {
            pet_id: 105,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 225,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 106,
            base_chance: 0.6,
            max_chance: 0.83
          },
          {
            pet_id: 224,
            base_chance: 0.1,
            max_chance: 0.1
          }
        ]
      }
    ]
  }
}, 1);
pets[5] = createObject({
  b_i: 5,
  b_t: BASE_TYPE.PET,
  name: 'Chaotic Ruby Dragon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 1,
    y: 1
  },
  params: {
    item_id: 673,
    inventory_slots: 11,
    level: 4,
    eats: {
      283: 0.05,
      238: 0.25
    },
    eat_interval: 10,
    happiness: 30,
    insurance_cost: [
      397500,
      20
    ],
    breeding_level: 80
  }
}, 1);
pets[6] = createObject({
  b_i: 6,
  b_t: BASE_TYPE.PET,
  name: 'Gray Wolf [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 17,
    y: 0
  },
  params: {
    item_id: 674,
    inventory_slots: 3,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      19500,
      1
    ],
    breeding_level: 1,
    likes: [
      {
        pet_id: 6,
        xp: 136,
        returns: [
          {
            pet_id: 63,
            base_chance: 0.05,
            max_chance: 0.08
          },
          {
            pet_id: 62,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      }
    ]
  }
}, 1);
pets[7] = createObject({
  b_i: 7,
  b_t: BASE_TYPE.PET,
  name: 'Brown Dog [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 11,
    y: 0
  },
  params: {
    item_id: 675,
    xp_required: 100000,
    inventory_slots: 0,
    next_pet_item_id: 676,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[8] = createObject({
  b_i: 8,
  b_t: BASE_TYPE.PET,
  name: 'Brown Wolf [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 18,
    y: 0
  },
  params: {
    item_id: 676,
    inventory_slots: 3,
    level: 2,
    eats: {
      8: 0.25,
      272: 0.5
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      19500,
      1
    ],
    breeding_level: 1,
    likes: [
      {
        pet_id: 8,
        xp: 136,
        returns: [
          {
            pet_id: 63,
            base_chance: 0.06,
            max_chance: 0.08
          },
          {
            pet_id: 72,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      }
    ]
  }
}, 1);
pets[9] = createObject({
  b_i: 9,
  b_t: BASE_TYPE.PET,
  name: 'Baby Dinosaur [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 12,
    y: 0
  },
  params: {
    item_id: 677,
    xp_required: 100000,
    inventory_slots: 6,
    next_pet_item_id: 678,
    level: 1,
    eats: {
      760: 0.3,
      271: 0.45,
      274: 0.6
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[10] = createObject({
  b_i: 10,
  b_t: BASE_TYPE.PET,
  name: 'Dinosaur [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 3,
    y: 4
  },
  params: {
    item_id: 678,
    xp_required: 500000,
    inventory_slots: 8,
    next_pet_item_id: 679,
    level: 2,
    eats: {
      760: 0.2,
      271: 0.3,
      274: 0.4
    },
    eat_interval: 5,
    happiness: 10,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[11] = createObject({
  b_i: 11,
  b_t: BASE_TYPE.PET,
  name: 'Spiky Dinosaur [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 3,
    y: 1
  },
  params: {
    item_id: 679,
    inventory_slots: 9,
    level: 3,
    eats: {
      760: 0.1,
      271: 0.15,
      274: 0.2
    },
    eat_interval: 5,
    happiness: 20,
    insurance_cost: [
      97500,
      5
    ],
    breeding_level: 60,
    likes: [
      {
        pet_id: 11,
        xp: 342,
        returns: [
          {
            pet_id: 128,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 127,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      },
      {
        pet_id: 32,
        xp: 294,
        returns: [
          {
            pet_id: 100,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 99,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      }
    ]
  }
}, 1);
pets[12] = createObject({
  b_i: 12,
  b_t: BASE_TYPE.PET,
  name: 'White Horse [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 19,
    y: 0
  },
  params: {
    item_id: 680,
    xp_required: 500000,
    inventory_slots: 9,
    next_pet_item_id: 681,
    level: 1,
    eats: {
      757: 0.05,
      758: 0.15,
      785: 0.3
    },
    eat_interval: 8,
    happiness: 24,
    insurance_cost: [
      300000,
      15
    ],
    breeding_level: 75
  }
}, 1);
pets[13] = createObject({
  b_i: 13,
  b_t: BASE_TYPE.PET,
  name: 'Unicorn [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 0,
    y: 1
  },
  params: {
    item_id: 681,
    inventory_slots: 11,
    next_pet_item_id: 886,
    requires_stone: !0,
    stones: 2,
    level: 2,
    eats: {
      757: 0.025,
      758: 0.07,
      785: 0.15
    },
    eat_interval: 12,
    happiness: 36,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[14] = createObject({
  b_i: 14,
  b_t: BASE_TYPE.PET,
  name: 'Baby Observer [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 11,
    y: 1
  },
  params: {
    item_id: 682,
    xp_required: 100000,
    inventory_slots: 2,
    next_pet_item_id: 683,
    level: 1,
    eats: {
      268: 0.15,
      269: 0.24
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[15] = createObject({
  b_i: 15,
  b_t: BASE_TYPE.PET,
  name: 'Observer [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 5,
    y: 4
  },
  params: {
    item_id: 683,
    xp_required: 500000,
    inventory_slots: 5,
    next_pet_item_id: 684,
    level: 2,
    eats: {
      268: 0.1,
      269: 0.16
    },
    eat_interval: 6,
    happiness: 18,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[16] = createObject({
  b_i: 16,
  b_t: BASE_TYPE.PET,
  name: 'King Observer [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 6,
    y: 4
  },
  params: {
    item_id: 684,
    inventory_slots: 6,
    next_pet_item_id: 685,
    requires_stone: !0,
    stones: 2,
    level: 3,
    eats: {
      268: 0.05,
      269: 0.08
    },
    eat_interval: 6,
    happiness: 28,
    insurance_cost: [
      90675,
      5
    ],
    breeding_level: 45,
    likes: [
      {
        pet_id: 16,
        xp: 477,
        returns: [
          {
            pet_id: 119,
            base_chance: 0.7,
            max_chance: 0.85
          }
        ]
      },
      {
        pet_id: 52,
        xp: 1890,
        returns: [
          {
            pet_id: 75,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 237,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 97,
            base_chance: 0.65,
            max_chance: 0.83
          },
          {
            pet_id: 236,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      }
    ]
  }
}, 1);
pets[17] = createObject({
  b_i: 17,
  b_t: BASE_TYPE.PET,
  name: 'Demonic Observer [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 2,
    y: 1
  },
  params: {
    item_id: 685,
    inventory_slots: 10,
    level: 4,
    eats: {
      268: 0.15,
      269: 0.2
    },
    eat_interval: 8,
    happiness: 30,
    insurance_cost: [
      390675,
      20
    ],
    breeding_level: 77,
    likes: [
      {
        pet_id: 55,
        xp: 3212,
        returns: [
          {
            pet_id: 78,
            base_chance: 0.6,
            max_chance: 0.86
          },
          {
            pet_id: 266,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      }
    ]
  }
}, 1);
pets[18] = createObject({
  b_i: 18,
  b_t: BASE_TYPE.PET,
  name: 'Ghost [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 1,
    y: 5
  },
  params: {
    item_id: 686,
    xp_required: 100000,
    inventory_slots: 1,
    next_pet_item_id: 687,
    level: 1,
    eats: {
      269: 0.3,
      233: 0.4,
      1300: 0.6,
      1301: 0.8
    },
    eat_interval: 6,
    happiness: 16,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[19] = createObject({
  b_i: 19,
  b_t: BASE_TYPE.PET,
  name: 'Nightmare Ghost [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 4,
    y: 5
  },
  params: {
    item_id: 687,
    inventory_slots: 3,
    level: 2,
    eats: {
      269: 0.15,
      233: 0.2,
      1300: 0.3,
      1301: 0.4
    },
    eat_interval: 6,
    happiness: 16,
    insurance_cost: [
      23400,
      1
    ],
    breeding_level: 5,
    likes: [
      {
        pet_id: 19,
        xp: 164,
        returns: [
          {
            pet_id: 122,
            base_chance: 0.05,
            max_chance: 0.1
          },
          {
            pet_id: 137,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      },
      {
        pet_id: 42,
        xp: 1094,
        returns: [
          {
            pet_id: 129,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 227,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 65,
            base_chance: 0.58,
            max_chance: 0.75
          },
          {
            pet_id: 226,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      }
    ]
  }
}, 1);
pets[20] = createObject({
  b_i: 20,
  b_t: BASE_TYPE.PET,
  name: 'Angel [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 9,
    y: 1
  },
  params: {
    item_id: 688,
    xp_required: 100000,
    inventory_slots: 6,
    next_pet_item_id: 689,
    level: 1,
    eats: {
      225: 0.45,
      1150: 1
    },
    eat_interval: 10,
    happiness: 10,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[21] = createObject({
  b_i: 21,
  b_t: BASE_TYPE.PET,
  name: 'Archangel [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 4,
    y: 0
  },
  params: {
    item_id: 689,
    xp_required: 500000,
    inventory_slots: 9,
    next_pet_item_id: 690,
    level: 2,
    eats: {
      225: 0.3,
      1150: 0.7
    },
    eat_interval: 10,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[22] = createObject({
  b_i: 22,
  b_t: BASE_TYPE.PET,
  name: 'Sacred Archangel [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 3,
    y: 0
  },
  params: {
    item_id: 690,
    inventory_slots: 10,
    next_pet_item_id: 691,
    requires_stone: !0,
    stones: 4,
    level: 3,
    eats: {
      225: 0.15,
      1150: 0.5
    },
    eat_interval: 10,
    happiness: 30,
    insurance_cost: [
      585000,
      29
    ],
    breeding_level: 82,
    likes: [
      {
        pet_id: 53,
        xp: 2558,
        returns: [
          {
            pet_id: 132,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 260,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 131,
            base_chance: 0.38,
            max_chance: 0.58
          },
          {
            pet_id: 259,
            base_chance: 0.06,
            max_chance: 0.06
          }
        ]
      }
    ]
  }
}, 1);
pets[23] = createObject({
  b_i: 23,
  b_t: BASE_TYPE.PET,
  name: 'Saint Archangel [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 5,
    y: 0
  },
  params: {
    item_id: 691,
    inventory_slots: 13,
    level: 4,
    eats: {
      1150: 0.25,
      225: 0.05
    },
    eat_interval: 20,
    happiness: 50,
    insurance_cost: [
      1185000,
      59
    ],
    breeding_level: 95,
    likes: [
      {
        pet_id: 23,
        xp: 4157,
        returns: [
          {
            pet_id: 82,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 262,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 83,
            base_chance: 0.6,
            max_chance: 0.836
          },
          {
            pet_id: 261,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      },
      {
        pet_id: 26,
        xp: 2185,
        returns: [
          {
            pet_id: 84,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 125,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 264,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 265,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 85,
            base_chance: 0.55,
            max_chance: 0.72
          },
          {
            pet_id: 263,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      }
    ]
  }
}, 1);
pets[24] = createObject({
  b_i: 24,
  b_t: BASE_TYPE.PET,
  name: 'Skeleton [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 9,
    y: 4
  },
  params: {
    item_id: 692,
    xp_required: 200000,
    inventory_slots: 0,
    next_pet_item_id: 693,
    level: 1,
    eats: {
      233: 0.45,
      1300: 0.9,
      1301: 1,
      221: 1
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[25] = createObject({
  b_i: 25,
  b_t: BASE_TYPE.PET,
  name: 'Skeleton Warrior [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 0,
    y: 5
  },
  params: {
    item_id: 693,
    xp_required: 800000,
    inventory_slots: 2,
    next_pet_item_id: 694,
    level: 2,
    eats: {
      233: 0.3,
      1300: 0.6,
      1301: 0.8,
      221: 2
    },
    eat_interval: 6,
    happiness: 23,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[26] = createObject({
  b_i: 26,
  b_t: BASE_TYPE.PET,
  name: 'Skeleton King [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 8,
    y: 0
  },
  params: {
    item_id: 694,
    inventory_slots: 4,
    next_pet_item_id: 711,
    requires_stone: !0,
    stones: 4,
    level: 3,
    eats: {
      233: 0.15,
      1300: 0.3,
      1301: 0.4,
      221: 0.5
    },
    eat_interval: 6,
    happiness: 16,
    insurance_cost: [
      60450,
      3
    ],
    breeding_level: 12
  }
}, 1);
pets[27] = createObject({
  b_i: 27,
  b_t: BASE_TYPE.PET,
  name: 'Skeleton Overlord [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 10,
    y: 0
  },
  params: {
    item_id: 711,
    inventory_slots: 9,
    level: 4,
    eats: {
      270: 0.1,
      271: 0.15
    },
    eat_interval: 12,
    happiness: 35,
    insurance_cost: [
      660450,
      33
    ],
    breeding_level: 85
  }
}, 1);
pets[28] = createObject({
  b_i: 28,
  b_t: BASE_TYPE.PET,
  name: 'Baby Griffin [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 0,
    y: 2
  },
  params: {
    item_id: 695,
    xp_required: 150000,
    inventory_slots: 2,
    next_pet_item_id: 696,
    level: 1,
    eats: {
      762: 0.45,
      80: 0.15,
      1300: 0.9,
      1301: 1
    },
    eat_interval: 6,
    happiness: 10,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[29] = createObject({
  b_i: 29,
  b_t: BASE_TYPE.PET,
  name: 'Griffin [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER532,
    x: 4,
    y: 1
  },
  params: {
    item_id: 696,
    xp_required: 300000,
    inventory_slots: 5,
    next_pet_item_id: 697,
    level: 2,
    eats: {
      762: 0.3,
      80: 0.1,
      1300: 0.6,
      1301: 0.8
    },
    eat_interval: 6,
    happiness: 15,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[30] = createObject({
  b_i: 30,
  b_t: BASE_TYPE.PET,
  name: 'Royal Griffin [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER532,
    x: 5,
    y: 1
  },
  params: {
    item_id: 697,
    inventory_slots: 6,
    level: 3,
    eats: {
      762: 0.15,
      80: 0.05,
      1300: 0.3,
      1301: 0.4
    },
    eat_interval: 6,
    happiness: 20,
    insurance_cost: [
      94575,
      5
    ],
    breeding_level: 50
  }
}, 1);
pets[31] = createObject({
  b_i: 31,
  b_t: BASE_TYPE.PET,
  name: 'Emerald Geko [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER532,
    x: 3,
    y: 1
  },
  params: {
    item_id: 698,
    xp_required: 700000,
    inventory_slots: 4,
    next_pet_item_id: 699,
    level: 1,
    eats: {
      268: 0.1,
      267: 1
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[32] = createObject({
  b_i: 32,
  b_t: BASE_TYPE.PET,
  name: 'Moss Wyvern [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 7,
    y: 4
  },
  params: {
    item_id: 699,
    inventory_slots: 6,
    level: 2,
    eats: {
      268: 0.05,
      267: 0.5
    },
    eat_interval: 6,
    happiness: 16,
    insurance_cost: [
      70200,
      4
    ],
    breeding_level: 30,
    likes: [
      {
        pet_id: 16,
        xp: 340,
        returns: [
          {
            pet_id: 88,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 108,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 87,
            base_chance: 0.55,
            max_chance: 0.72
          }
        ]
      },
      {
        pet_id: 32,
        xp: 295,
        returns: [
          {
            pet_id: 102,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 144,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      }
    ]
  }
}, 1);
pets[33] = createObject({
  b_i: 33,
  b_t: BASE_TYPE.PET,
  name: 'Ruby Geko [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER532,
    x: 2,
    y: 1
  },
  params: {
    item_id: 700,
    xp_required: 700000,
    inventory_slots: 4,
    next_pet_item_id: 701,
    level: 1,
    eats: {
      94: 0.1,
      206: 0.3,
      1300: 0.6,
      1301: 0.8
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[34] = createObject({
  b_i: 34,
  b_t: BASE_TYPE.PET,
  name: 'Flame Wyvern [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 8,
    y: 4
  },
  params: {
    item_id: 701,
    inventory_slots: 6,
    level: 2,
    eats: {
      94: 0.05,
      206: 0.15,
      1300: 0.3,
      1301: 0.4
    },
    eat_interval: 6,
    happiness: 16,
    insurance_cost: [
      70200,
      4
    ],
    breeding_level: 25,
    likes: [
      {
        pet_id: 34,
        xp: 369,
        returns: [
          {
            pet_id: 93,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 145,
            base_chance: 0.6,
            max_chance: 0.75
          }
        ]
      },
      {
        pet_id: 32,
        xp: 369,
        returns: [
          {
            pet_id: 146,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 101,
            base_chance: 0.6,
            max_chance: 0.73
          }
        ]
      }
    ]
  }
}, 1);
pets[35] = createObject({
  b_i: 35,
  b_t: BASE_TYPE.PET,
  name: 'Baby Black Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 6,
    y: 0
  },
  params: {
    item_id: 702,
    xp_required: 200000,
    inventory_slots: 3,
    next_pet_item_id: 703,
    level: 1,
    eats: {
      285: 0.45,
      4212: 0.3,
      494: 0.15
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[36] = createObject({
  b_i: 36,
  b_t: BASE_TYPE.PET,
  name: 'Black Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 4,
    y: 2
  },
  params: {
    item_id: 703,
    xp_required: 600000,
    inventory_slots: 6,
    next_pet_item_id: 704,
    level: 2,
    eats: {
      285: 0.3,
      4212: 0.2,
      494: 0.1
    },
    eat_interval: 6,
    happiness: 18,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[37] = createObject({
  b_i: 37,
  b_t: BASE_TYPE.PET,
  name: 'King Black Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 3,
    y: 4
  },
  params: {
    item_id: 704,
    inventory_slots: 7,
    next_pet_item_id: 705,
    requires_stone: !0,
    stones: 3,
    level: 3,
    eats: {
      285: 0.15,
      4212: 0.1,
      494: 0.05
    },
    eat_interval: 6,
    happiness: 24,
    insurance_cost: [
      243750,
      12
    ],
    breeding_level: 73,
    likes: [
      {
        pet_id: 5,
        xp: 1125,
        returns: [
          {
            pet_id: 96,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 233,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 113,
            base_chance: 0.6,
            max_chance: 0.83
          },
          {
            pet_id: 232,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      },
      {
        pet_id: 38,
        xp: 1644,
        returns: [
          {
            pet_id: 86,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 247,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 107,
            base_chance: 0.56,
            max_chance: 0.832
          },
          {
            pet_id: 246,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      },
      {
        pet_id: 42,
        xp: 1116,
        returns: [
          {
            pet_id: 115,
            base_chance: 0.6,
            max_chance: 0.86
          },
          {
            pet_id: 228,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      }
    ]
  }
}, 1);
pets[38] = createObject({
  b_i: 38,
  b_t: BASE_TYPE.PET,
  name: 'Blood Black Dragon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 7,
    y: 5
  },
  params: {
    item_id: 705,
    inventory_slots: 11,
    level: 4,
    eats: {
      1150: 0.25,
      239: 0.05
    },
    eat_interval: 12,
    happiness: 35,
    insurance_cost: [
      693750,
      35
    ],
    breeding_level: 86
  }
}, 1);
pets[39] = createObject({
  b_i: 39,
  b_t: BASE_TYPE.PET,
  name: 'Baby Emerald Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 2,
    y: 0
  },
  params: {
    item_id: 706,
    xp_required: 100000,
    inventory_slots: 3,
    next_pet_item_id: 707,
    level: 1,
    eats: {
      285: 0.3,
      760: 0.24,
      494: 0.09
    },
    eat_interval: 8,
    happiness: 16,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[40] = createObject({
  b_i: 40,
  b_t: BASE_TYPE.PET,
  name: 'Emerald Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 3,
    y: 2
  },
  params: {
    item_id: 707,
    xp_required: 500000,
    inventory_slots: 6,
    next_pet_item_id: 708,
    level: 2,
    eats: {
      285: 0.2,
      760: 0.16,
      494: 0.06
    },
    eat_interval: 8,
    happiness: 16,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[41] = createObject({
  b_i: 41,
  b_t: BASE_TYPE.PET,
  name: 'King Emerald Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 4,
    y: 4
  },
  params: {
    item_id: 708,
    inventory_slots: 7,
    next_pet_item_id: 709,
    requires_stone: !0,
    stones: 2,
    level: 3,
    eats: {
      285: 0.1,
      760: 0.08,
      494: 0.03
    },
    eat_interval: 8,
    happiness: 25,
    insurance_cost: [
      92625,
      5
    ],
    breeding_level: 48,
    likes: [
      {
        pet_id: 5,
        xp: 1288,
        returns: [
          {
            pet_id: 94,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 235,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 118,
            base_chance: 0.6,
            max_chance: 0.835
          },
          {
            pet_id: 234,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      },
      {
        pet_id: 38,
        xp: 2068,
        returns: [
          {
            pet_id: 80,
            base_chance: 0.5,
            max_chance: 0.86
          },
          {
            pet_id: 248,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      },
      {
        pet_id: 42,
        xp: 1276,
        returns: [
          {
            pet_id: 95,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 230,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 81,
            base_chance: 0.6,
            max_chance: 0.835
          },
          {
            pet_id: 229,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      }
    ]
  }
}, 1);
pets[42] = createObject({
  b_i: 42,
  b_t: BASE_TYPE.PET,
  name: 'Cursed Dragon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 6,
    y: 5
  },
  params: {
    item_id: 709,
    inventory_slots: 11,
    level: 4,
    eats: {
      274: 0.05,
      275: 0.1
    },
    eat_interval: 8,
    happiness: 30,
    insurance_cost: [
      392625,
      20
    ],
    breeding_level: 79
  }
}, 1);
pets[43] = createObject({
  b_i: 43,
  b_t: BASE_TYPE.PET,
  name: 'Pegasus [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 18,
    y: 1
  },
  params: {
    item_id: 886,
    inventory_slots: 13,
    level: 3,
    eats: {
      100: 0.05,
      106: 0.08
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      840000,
      42
    ],
    breeding_level: 90,
    likes: [
      {
        pet_id: 45,
        xp: 1789,
        returns: [
          {
            pet_id: 142,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 112,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 255,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 256,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 143,
            base_chance: 0.5,
            max_chance: 0.721
          },
          {
            pet_id: 254,
            base_chance: 0.04,
            max_chance: 0.04
          }
        ]
      },
      {
        pet_id: 43,
        xp: 2947,
        returns: [
          {
            pet_id: 130,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 258,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 120,
            base_chance: 0.6,
            max_chance: 0.834
          },
          {
            pet_id: 257,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      }
    ]
  }
}, 1);
pets[44] = createObject({
  b_i: 44,
  b_t: BASE_TYPE.PET,
  name: 'Donkey [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 13,
    y: 1
  },
  params: {
    item_id: 887,
    inventory_slots: 4,
    level: 1,
    eats: {
      757: 0.25,
      758: 0.4,
      760: 0.5,
      785: 0.7
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      19500,
      1
    ],
    breeding_level: 3,
    likes: [
      {
        pet_id: 44,
        xp: 125,
        returns: [
          {
            pet_id: 139,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 138,
            base_chance: 0.5,
            max_chance: 0.58
          }
        ]
      },
      {
        pet_id: 12,
        xp: 620,
        returns: [
          {
            pet_id: 109,
            base_chance: 0.06,
            max_chance: 0.1
          },
          {
            pet_id: 135,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 222,
            base_chance: 0.05,
            max_chance: 0.05
          },
          {
            pet_id: 223,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 141,
            base_chance: 0.55,
            max_chance: 0.72
          },
          {
            pet_id: 221,
            base_chance: 0.1,
            max_chance: 0.1
          }
        ]
      },
      {
        pet_id: 45,
        xp: 410,
        returns: [
          {
            pet_id: 134,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 136,
            base_chance: 0.65,
            max_chance: 0.84
          }
        ]
      }
    ]
  }
}, 1);
pets[45] = createObject({
  b_i: 45,
  b_t: BASE_TYPE.PET,
  name: 'Horror Steed [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 19,
    y: 1
  },
  params: {
    item_id: 888,
    xp_required: 800000,
    inventory_slots: 9,
    next_pet_item_id: 889,
    level: 1,
    eats: {
      757: 0.05,
      758: 0.15,
      760: 0.2
    },
    eat_interval: 6,
    happiness: 24,
    insurance_cost: [
      180000,
      9
    ],
    breeding_level: 68
  }
}, 1);
pets[46] = createObject({
  b_i: 46,
  b_t: BASE_TYPE.PET,
  name: 'Nightmare Steed [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 0,
    y: 2
  },
  params: {
    item_id: 889,
    inventory_slots: 11,
    next_pet_item_id: 890,
    requires_stone: !0,
    stones: 4,
    level: 2,
    eats: {
      757: 0.1,
      758: 0.3,
      760: 0.4
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[47] = createObject({
  b_i: 47,
  b_t: BASE_TYPE.PET,
  name: 'Underworld Steed [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 1,
    y: 2
  },
  params: {
    item_id: 890,
    inventory_slots: 13,
    level: 3,
    eats: {
      757: 0.05,
      758: 0.25
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      834000,
      42
    ],
    breeding_level: 88,
    likes: [
      {
        pet_id: 47,
        xp: 2926,
        returns: [
          {
            pet_id: 74,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 250,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 89,
            base_chance: 0.5,
            max_chance: 0.75
          },
          {
            pet_id: 249,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      },
      {
        pet_id: 56,
        xp: 2639,
        returns: [
          {
            pet_id: 110,
            base_chance: 0.06,
            max_chance: 0.09
          },
          {
            pet_id: 111,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 252,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 253,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 73,
            base_chance: 0.6,
            max_chance: 0.68
          },
          {
            pet_id: 251,
            base_chance: 0.04,
            max_chance: 0.04
          }
        ]
      }
    ]
  }
}, 1);
pets[48] = createObject({
  b_i: 48,
  b_t: BASE_TYPE.PET,
  name: 'Baby Cupid [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 2,
    y: 2
  },
  params: {
    item_id: 891,
    xp_required: 700000,
    inventory_slots: 4,
    next_pet_item_id: 892,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[49] = createObject({
  b_i: 49,
  b_t: BASE_TYPE.PET,
  name: 'Cupid [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 3,
    y: 2
  },
  params: {
    item_id: 892,
    xp_required: 1000000,
    inventory_slots: 8,
    next_pet_item_id: 893,
    level: 2,
    eats: {
      494: 0.1,
      1368: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[50] = createObject({
  b_i: 50,
  b_t: BASE_TYPE.PET,
  name: 'Cupid Archer [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 4,
    y: 2
  },
  params: {
    item_id: 893,
    xp_required: 1300000,
    inventory_slots: 12,
    next_pet_item_id: 894,
    level: 3,
    eats: {
      494: 0.05,
      1368: 0.1
    },
    eat_interval: 6,
    happiness: 48,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[51] = createObject({
  b_i: 51,
  b_t: BASE_TYPE.PET,
  name: 'Lady-Killer [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 5,
    y: 2
  },
  params: {
    item_id: 894,
    inventory_slots: 16,
    level: 4,
    eats: {
      494: 0.025,
      1368: 0.05
    },
    eat_interval: 6,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[52] = createObject({
  b_i: 52,
  b_t: BASE_TYPE.PET,
  name: 'Efreet [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 0,
    y: 0
  },
  params: {
    item_id: 895,
    inventory_slots: 6,
    level: 1,
    eats: {
      245: 0.15,
      244: 0.2
    },
    eat_interval: 10,
    happiness: 35,
    insurance_cost: [
      627900,
      31
    ],
    breeding_level: 83,
    likes: [
      {
        pet_id: 52,
        xp: 2203,
        returns: [
          {
            pet_id: 147,
            base_chance: 0.05,
            max_chance: 0.1
          },
          {
            pet_id: 76,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 240,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 241,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 98,
            base_chance: 0.25,
            max_chance: 0.3
          },
          {
            pet_id: 92,
            base_chance: 0.25,
            max_chance: 0.3
          },
          {
            pet_id: 238,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 239,
            base_chance: 0.03,
            max_chance: 0.03
          }
        ]
      },
      {
        pet_id: 27,
        xp: 2260,
        returns: [
          {
            pet_id: 79,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 243,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 77,
            base_chance: 0.54,
            max_chance: 0.72
          },
          {
            pet_id: 242,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      }
    ]
  }
}, 1);
pets[53] = createObject({
  b_i: 53,
  b_t: BASE_TYPE.PET,
  name: 'Diablo [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 0
  },
  params: {
    item_id: 896,
    inventory_slots: 16,
    level: 5,
    eats: {
      122: 0.1,
      222: 0.2
    },
    eat_interval: 20,
    happiness: 50,
    insurance_cost: [
      873402,
      44
    ],
    breeding_level: 93
  }
}, 1);
pets[54] = createObject({
  b_i: 54,
  b_t: BASE_TYPE.PET,
  name: 'Nephilim Slave [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 9,
    y: 0
  },
  params: {
    item_id: 1062,
    inventory_slots: 16,
    level: 1,
    eats: {
      229: 0.2,
      244: 0.4
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[55] = createObject({
  b_i: 55,
  b_t: BASE_TYPE.PET,
  name: 'Nephilim Protector [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 0,
    y: 1
  },
  params: {
    item_id: 1063,
    inventory_slots: 14,
    level: 5,
    eats: {
      229: 0.1,
      244: 0.2
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1440600,
      72
    ],
    breeding_level: 98
  }
}, 1);
pets[56] = createObject({
  b_i: 56,
  b_t: BASE_TYPE.PET,
  name: 'Flame Phoenix [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 6,
    y: 0
  },
  params: {
    item_id: 1064,
    inventory_slots: 9,
    level: 5,
    eats: {
      245: 0.1,
      244: 0.2
    },
    eat_interval: 10,
    happiness: 38,
    insurance_cost: [
      670479,
      34
    ],
    breeding_level: 85
  }
}, 1);
pets[57] = createObject({
  b_i: 57,
  b_t: BASE_TYPE.PET,
  name: 'Angry Witch [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 6,
    y: 2
  },
  params: {
    item_id: 1139,
    inventory_slots: 16,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[58] = createObject({
  b_i: 58,
  b_t: BASE_TYPE.PET,
  name: 'Rudolph [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.ANIMALS,
      x: 8,
      y: 0
    },
    {
      sheet: IMAGE_SHEET.ANIMALS,
      x: 8,
      y: 6
    },
    {
      sheet: IMAGE_SHEET.ANIMALS,
      x: 9,
      y: 6
    }
  ],
  params: {
    item_id: 1147,
    inventory_slots: 16,
    level: 1,
    eats: {
      757: 0.15,
      758: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 250,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[59] = createObject({
  b_i: 59,
  b_t: BASE_TYPE.PET,
  name: 'Piglet [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 7,
    y: 2
  },
  params: {
    item_id: 1150,
    inventory_slots: 3,
    next_pet_item_id: 1151,
    requires_stone: !0,
    stones: 3,
    level: 1,
    eats: {
      760: 0.3,
      758: 0.15
    },
    eat_interval: 4,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[60] = createObject({
  b_i: 60,
  b_t: BASE_TYPE.PET,
  name: 'Pig [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 8,
    y: 2
  },
  params: {
    item_id: 1151,
    inventory_slots: 4,
    next_pet_item_id: 1155,
    requires_stone: !0,
    stones: 3,
    level: 2,
    eats: {
      760: 0.2,
      758: 0.1
    },
    eat_interval: 4,
    happiness: 16,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[61] = createObject({
  b_i: 61,
  b_t: BASE_TYPE.PET,
  name: 'Armored Pig [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 9,
    y: 2
  },
  params: {
    item_id: 1155,
    inventory_slots: 7,
    level: 3,
    eats: {
      760: 0.1,
      758: 0.05
    },
    eat_interval: 4,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[62] = createObject({
  b_i: 62,
  b_t: BASE_TYPE.PET,
  name: 'Gray Werewolf [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 7,
    y: 1
  },
  params: {
    item_id: 1166,
    inventory_slots: 3,
    level: 1,
    eats: {
      8: 0.25,
      272: 0.5
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[63] = createObject({
  b_i: 63,
  b_t: BASE_TYPE.PET,
  name: 'Warg [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 1,
    y: 1
  },
  params: {
    item_id: 1167,
    inventory_slots: 5,
    level: 1,
    eats: {
      8: 0.25,
      272: 0.5
    },
    eat_interval: 6,
    happiness: 18,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[64] = createObject({
  b_i: 64,
  b_t: BASE_TYPE.PET,
  name: 'Swamp Guru [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 2,
    y: 1
  },
  params: {
    item_id: 1168,
    inventory_slots: 1,
    level: 1,
    eats: {
      494: 0.05,
      283: 0.5
    },
    eat_interval: 6,
    happiness: 6,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[65] = createObject({
  b_i: 65,
  b_t: BASE_TYPE.PET,
  name: 'Ghost Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 4,
    y: 0
  },
  params: {
    item_id: 1169,
    inventory_slots: 7,
    level: 1,
    eats: {
      210: 0.15,
      217: 0.5
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[66] = createObject({
  b_i: 66,
  b_t: BASE_TYPE.PET,
  name: 'Kobalos [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 11,
    y: 2
  },
  params: {
    item_id: 1170,
    inventory_slots: 1,
    level: 1,
    eats: {
      220: 0.15,
      236: 0.35
    },
    eat_interval: 6,
    happiness: 8,
    insurance_cost: [
      16200,
      1
    ],
    breeding_level: 1,
    likes: [
      {
        pet_id: 6,
        xp: 124,
        returns: [
          {
            pet_id: 123,
            base_chance: 0.65,
            max_chance: 0.85
          },
          {
            pet_id: 64,
            base_chance: 0.15,
            max_chance: 0.15
          }
        ]
      },
      {
        pet_id: 8,
        xp: 124,
        returns: [
          {
            pet_id: 140,
            base_chance: 0.65,
            max_chance: 0.85
          },
          {
            pet_id: 64,
            base_chance: 0.15,
            max_chance: 0.15
          }
        ]
      }
    ]
  }
}, 1);
pets[67] = createObject({
  b_i: 67,
  b_t: BASE_TYPE.PET,
  name: 'Leprechaun [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 10,
    y: 2
  },
  params: {
    item_id: 1171,
    inventory_slots: 12,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[68] = createObject({
  b_i: 68,
  b_t: BASE_TYPE.PET,
  name: 'Lion [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 0
  },
  params: {
    item_id: 1175,
    inventory_slots: 1,
    level: 1,
    eats: {
      494: 0.05,
      78: 0.2
    },
    eat_interval: 6,
    happiness: 16,
    insurance_cost: [
      55620,
      3
    ],
    breeding_level: 8,
    likes: [
      {
        pet_id: 71,
        xp: 768,
        returns: [
          {
            pet_id: 91,
            base_chance: 0.5,
            max_chance: 0.86
          }
        ]
      }
    ]
  }
}, 1);
pets[69] = createObject({
  b_i: 69,
  b_t: BASE_TYPE.PET,
  name: 'Desert Scorpion [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 7,
    y: 2
  },
  params: {
    item_id: 1176,
    xp_required: 750000,
    inventory_slots: 1,
    next_pet_item_id: 1177,
    level: 1,
    eats: {
      8: 0.15,
      10: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[70] = createObject({
  b_i: 70,
  b_t: BASE_TYPE.PET,
  name: 'Deathstalker Scorpion [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 9,
    y: 2
  },
  params: {
    item_id: 1177,
    inventory_slots: 3,
    next_pet_item_id: 1178,
    requires_stone: !0,
    stones: 1,
    level: 2,
    eats: {
      8: 0.1,
      10: 0.2
    },
    eat_interval: 6,
    happiness: 18,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[71] = createObject({
  b_i: 71,
  b_t: BASE_TYPE.PET,
  name: 'Emperor Scorpion [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.UNIQUES,
    x: 0,
    y: 3
  },
  params: {
    item_id: 1178,
    inventory_slots: 7,
    level: 3,
    eats: {
      8: 0.05,
      10: 0.1
    },
    eat_interval: 6,
    happiness: 24,
    insurance_cost: [
      236482,
      12
    ],
    breeding_level: 70
  }
}, 1);
pets[72] = createObject({
  b_i: 72,
  b_t: BASE_TYPE.PET,
  name: 'Brown Werewolf [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 4,
    y: 1
  },
  params: {
    item_id: 1179,
    inventory_slots: 3,
    level: 1,
    eats: {
      8: 0.25,
      272: 0.5
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[73] = createObject({
  b_i: 73,
  b_t: BASE_TYPE.PET,
  name: 'Dark Pegasus [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 7,
    y: 1
  },
  params: {
    item_id: 1180,
    inventory_slots: 10,
    level: 1,
    eats: {
      757: 0.025,
      758: 0.05,
      785: 0.1
    },
    eat_interval: 10,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[74] = createObject({
  b_i: 74,
  b_t: BASE_TYPE.PET,
  name: 'Sleipnir [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 8,
    y: 1
  },
  params: {
    item_id: 1181,
    inventory_slots: 20,
    level: 1,
    eats: {
      757: 0.025,
      758: 0.05,
      785: 0.1
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[75] = createObject({
  b_i: 75,
  b_t: BASE_TYPE.PET,
  name: 'HellKyte [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 9,
    y: 1
  },
  params: {
    item_id: 1182,
    inventory_slots: 13,
    level: 1,
    eats: {
      225: 0.05,
      1150: 0.25
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[76] = createObject({
  b_i: 76,
  b_t: BASE_TYPE.PET,
  name: 'Ifrit [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 6,
    y: 1
  },
  params: {
    item_id: 1183,
    inventory_slots: 16,
    level: 1,
    eats: {
      245: 0.015,
      244: 0.025
    },
    eat_interval: 25,
    happiness: 80,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[77] = createObject({
  b_i: 77,
  b_t: BASE_TYPE.PET,
  name: 'Death Knight [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 11,
    y: 1
  },
  params: {
    item_id: 1184,
    inventory_slots: 9,
    level: 1,
    eats: {
      760: 0.01,
      271: 0.015,
      274: 0.02
    },
    eat_interval: 60,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[78] = createObject({
  b_i: 78,
  b_t: BASE_TYPE.PET,
  name: 'Shiva [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 9,
    y: 0
  },
  params: {
    item_id: 1185,
    inventory_slots: 12,
    level: 1,
    eats: {
      760: 0.01,
      271: 0.025,
      274: 0.025
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[79] = createObject({
  b_i: 79,
  b_t: BASE_TYPE.PET,
  name: 'Fire Overlord [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 6,
    y: 1
  },
  params: {
    item_id: 1186,
    inventory_slots: 14,
    level: 1,
    eats: {
      122: 0.01,
      222: 0.02
    },
    eat_interval: 40,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[80] = createObject({
  b_i: 80,
  b_t: BASE_TYPE.PET,
  name: 'Lionhead Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 9,
    y: 1
  },
  params: {
    item_id: 1187,
    inventory_slots: 6,
    level: 1,
    eats: {
      275: 0.15,
      276: 0.3
    },
    eat_interval: 40,
    happiness: 80,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[81] = createObject({
  b_i: 81,
  b_t: BASE_TYPE.PET,
  name: 'Horntail [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 6,
    y: 2
  },
  params: {
    item_id: 1188,
    inventory_slots: 4,
    level: 1,
    eats: {
      274: 0.025,
      275: 0.05
    },
    eat_interval: 12,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[82] = createObject({
  b_i: 82,
  b_t: BASE_TYPE.PET,
  name: 'Rael [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 3,
    y: 2
  },
  params: {
    item_id: 1189,
    requires_stone: !0,
    stones: 12,
    next_pet_item_id: 3518,
    inventory_slots: 19,
    level: 1,
    eats: {
      225: 0.025,
      1150: 0.01
    },
    eat_interval: 120,
    happiness: 380,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[83] = createObject({
  b_i: 83,
  b_t: BASE_TYPE.PET,
  name: 'Cursed Archangel [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 5,
    y: 1
  },
  params: {
    item_id: 1190,
    inventory_slots: 9,
    level: 1,
    eats: {
      225: 0.1,
      1150: 0.2
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[84] = createObject({
  b_i: 84,
  b_t: BASE_TYPE.PET,
  name: 'Jophiel the archangel [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 4,
    y: 1
  },
  params: {
    item_id: 1191,
    inventory_slots: 12,
    level: 1,
    eats: {
      225: 0.1,
      1150: 0.2
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[85] = createObject({
  b_i: 85,
  b_t: BASE_TYPE.PET,
  name: 'Michael the archangel [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 0,
    y: 2
  },
  params: {
    item_id: 1192,
    inventory_slots: 5,
    level: 1,
    eats: {
      225: 0.05,
      1150: 0.1
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[86] = createObject({
  b_i: 86,
  b_t: BASE_TYPE.PET,
  name: 'Obsidian Dragon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 6,
    y: 0
  },
  params: {
    item_id: 1193,
    inventory_slots: 16,
    level: 1,
    eats: {
      275: 0.05,
      276: 0.1
    },
    eat_interval: 20,
    happiness: 80,
    insurance_cost: [
      1756687,
      88
    ],
    breeding_level: 103,
    likes: [
      {
        pet_id: 217,
        xp: 4535,
        returns: [
          {
            pet_id: 197,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 191,
            base_chance: 0.02,
            max_chance: 0.02
          },
          {
            pet_id: 275,
            base_chance: 0.1,
            max_chance: 0.1
          },
          {
            pet_id: 274,
            base_chance: 0.08,
            max_chance: 0.08
          }
        ]
      }
    ]
  }
}, 1);
pets[87] = createObject({
  b_i: 87,
  b_t: BASE_TYPE.PET,
  name: 'Ancient Wyvern [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 3,
    y: 1
  },
  params: {
    item_id: 1194,
    inventory_slots: 5,
    level: 1,
    eats: {
      268: 0.025,
      267: 0.05
    },
    eat_interval: 10,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[88] = createObject({
  b_i: 88,
  b_t: BASE_TYPE.PET,
  name: 'Hydra [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 8,
    y: 0
  },
  params: {
    item_id: 1195,
    inventory_slots: 8,
    level: 1,
    eats: {
      268: 0.05,
      269: 0.08
    },
    eat_interval: 20,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[89] = createObject({
  b_i: 89,
  b_t: BASE_TYPE.PET,
  name: 'Wildfire Steed [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 0
  },
  params: {
    item_id: 1196,
    inventory_slots: 10,
    level: 1,
    eats: {
      757: 0.015,
      758: 0.075
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[90] = createObject({
  b_i: 90,
  b_t: BASE_TYPE.PET,
  name: 'Giant Troll [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 4,
    y: 2
  },
  params: {
    item_id: 1197,
    inventory_slots: 3,
    level: 1,
    eats: {
      275: 0.15,
      276: 0.2
    },
    eat_interval: 5,
    happiness: 20,
    insurance_cost: [
      98880,
      5
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[91] = createObject({
  b_i: 91,
  b_t: BASE_TYPE.PET,
  name: 'Manticore [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 5,
    y: 2
  },
  params: {
    item_id: 1198,
    inventory_slots: 5,
    level: 1,
    eats: {
      494: 0.015,
      78: 0.05
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[92] = createObject({
  b_i: 92,
  b_t: BASE_TYPE.PET,
  name: 'Fire Elemental [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 4,
    y: 0
  },
  params: {
    item_id: 1199,
    inventory_slots: 6,
    level: 1,
    eats: {
      245: 0.15,
      244: 0.2
    },
    eat_interval: 20,
    happiness: 70,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[93] = createObject({
  b_i: 93,
  b_t: BASE_TYPE.PET,
  name: 'Rathalos [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 5,
    y: 1
  },
  params: {
    item_id: 1200,
    inventory_slots: 8,
    level: 1,
    eats: {
      94: 0.025,
      206: 0.075,
      1300: 0.15,
      1301: 0.2
    },
    eat_interval: 50,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[94] = createObject({
  b_i: 94,
  b_t: BASE_TYPE.PET,
  name: 'Saint Dragon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 7,
    y: 0
  },
  params: {
    item_id: 1201,
    inventory_slots: 13,
    level: 1,
    eats: {
      283: 0.015,
      238: 0.025
    },
    eat_interval: 20,
    happiness: 80,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[95] = createObject({
  b_i: 95,
  b_t: BASE_TYPE.PET,
  name: 'Ancient Ironbelly [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 5,
    y: 0
  },
  params: {
    item_id: 1202,
    inventory_slots: 15,
    level: 1,
    eats: {
      274: 0.015,
      275: 0.025
    },
    eat_interval: 30,
    happiness: 80,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[96] = createObject({
  b_i: 96,
  b_t: BASE_TYPE.PET,
  name: 'Archsky Dragon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 10,
    y: 2
  },
  params: {
    item_id: 1203,
    inventory_slots: 15,
    level: 1,
    eats: {
      283: 0.015,
      238: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[97] = createObject({
  b_i: 97,
  b_t: BASE_TYPE.PET,
  name: 'Flame Observer [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 11,
    y: 2
  },
  params: {
    item_id: 1204,
    inventory_slots: 4,
    level: 1,
    eats: {
      245: 0.075,
      244: 0.1
    },
    eat_interval: 25,
    happiness: 70,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[98] = createObject({
  b_i: 98,
  b_t: BASE_TYPE.PET,
  name: 'Efreet Sultan [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 2,
    y: 1
  },
  params: {
    item_id: 1205,
    inventory_slots: 5,
    level: 1,
    eats: {
      245: 0.075,
      244: 0.1
    },
    eat_interval: 25,
    happiness: 70,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[99] = createObject({
  b_i: 99,
  b_t: BASE_TYPE.PET,
  name: 'Spiked Emerald Wyvern [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 2,
    y: 1
  },
  params: {
    item_id: 1206,
    inventory_slots: 5,
    level: 1,
    eats: {
      268: 0.025,
      267: 0.1
    },
    eat_interval: 10,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[100] = createObject({
  b_i: 100,
  b_t: BASE_TYPE.PET,
  name: 'Spiked Ruby Wyvern [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 6,
    y: 0
  },
  params: {
    item_id: 1207,
    inventory_slots: 6,
    level: 1,
    eats: {
      268: 0.025,
      267: 0.1
    },
    eat_interval: 10,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[101] = createObject({
  b_i: 101,
  b_t: BASE_TYPE.PET,
  name: 'Magma Wyvern [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 7,
    y: 0
  },
  params: {
    item_id: 1208,
    inventory_slots: 5,
    level: 1,
    eats: {
      268: 0.01,
      267: 0.025
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[102] = createObject({
  b_i: 102,
  b_t: BASE_TYPE.PET,
  name: 'Swamp Wyvern [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 6,
    y: 0
  },
  params: {
    item_id: 1209,
    inventory_slots: 8,
    level: 1,
    eats: {
      268: 0.01,
      267: 0.025
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[103] = createObject({
  b_i: 103,
  b_t: BASE_TYPE.PET,
  name: 'Naga [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 0,
    y: 1
  },
  params: {
    item_id: 1210,
    inventory_slots: 5,
    level: 2,
    eats: {
      230: 0.1,
      228: 0.05
    },
    eat_interval: 6,
    happiness: 28,
    insurance_cost: [
      82500,
      4
    ],
    breeding_level: 38,
    likes: [
      {
        pet_id: 103,
        xp: 578,
        returns: [
          {
            pet_id: 104,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 148,
            base_chance: 0.58,
            max_chance: 0.77
          }
        ]
      }
    ]
  }
}, 1);
pets[104] = createObject({
  b_i: 104,
  b_t: BASE_TYPE.PET,
  name: 'Gorgon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 9,
    y: 0
  },
  params: {
    item_id: 1211,
    inventory_slots: 7,
    level: 1,
    eats: {
      230: 0.05,
      228: 0.025
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[105] = createObject({
  b_i: 105,
  b_t: BASE_TYPE.PET,
  name: 'Rubysoul Dragon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 1,
    y: 2
  },
  params: {
    item_id: 1212,
    inventory_slots: 11,
    level: 1,
    eats: {
      274: 0.015,
      275: 0.025
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[106] = createObject({
  b_i: 106,
  b_t: BASE_TYPE.PET,
  name: 'Crystal Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 3,
    y: 0
  },
  params: {
    item_id: 1213,
    inventory_slots: 6,
    level: 1,
    eats: {
      274: 0.025,
      275: 0.05
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[107] = createObject({
  b_i: 107,
  b_t: BASE_TYPE.PET,
  name: 'Undead Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 1,
    y: 3
  },
  params: {
    item_id: 1214,
    inventory_slots: 10,
    level: 1,
    eats: {
      1150: 0.25,
      239: 0.05
    },
    eat_interval: 35,
    happiness: 70,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[108] = createObject({
  b_i: 108,
  b_t: BASE_TYPE.PET,
  name: 'Observer Worm [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 2,
    y: 3
  },
  params: {
    item_id: 1215,
    inventory_slots: 9,
    level: 1,
    eats: {
      268: 0.05,
      267: 0.25
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[109] = createObject({
  b_i: 109,
  b_t: BASE_TYPE.PET,
  name: 'Royal Horse [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 3,
    y: 3
  },
  params: {
    item_id: 1216,
    inventory_slots: 11,
    level: 1,
    eats: {
      757: 0.025,
      758: 0.07,
      785: 0.09
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[110] = createObject({
  b_i: 110,
  b_t: BASE_TYPE.PET,
  name: 'Lava Pegasus [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 4,
    y: 1
  },
  params: {
    item_id: 1217,
    inventory_slots: 14,
    level: 1,
    eats: {
      245: 0.05,
      244: 0.075
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[111] = createObject({
  b_i: 111,
  b_t: BASE_TYPE.PET,
  name: 'Nightmare Pegasus [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 5,
    y: 0
  },
  params: {
    item_id: 1218,
    inventory_slots: 18,
    level: 1,
    eats: {
      245: 0.025,
      244: 0.05
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[112] = createObject({
  b_i: 112,
  b_t: BASE_TYPE.PET,
  name: 'Sun Pegasus [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 6,
    y: 3
  },
  params: {
    item_id: 1219,
    inventory_slots: 16,
    level: 1,
    eats: {
      100: 0.025,
      106: 0.04
    },
    eat_interval: 30,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[113] = createObject({
  b_i: 113,
  b_t: BASE_TYPE.PET,
  name: 'Flaming Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 8,
    y: 1
  },
  params: {
    item_id: 1220,
    inventory_slots: 7,
    level: 1,
    eats: {
      220: 0.03,
      236: 0.1
    },
    eat_interval: 20,
    happiness: 80,
    insurance_cost: [
      890055,
      45
    ],
    breeding_level: 102,
    likes: [
      {
        pet_id: 86,
        xp: 4643,
        returns: [
          {
            pet_id: 153,
            base_chance: 0.3,
            max_chance: 0.35
          },
          {
            pet_id: 154,
            base_chance: 0.05,
            max_chance: 0.1
          },
          {
            pet_id: 269,
            base_chance: 0.05,
            max_chance: 0.05
          },
          {
            pet_id: 270,
            base_chance: 0.03,
            max_chance: 0.03
          }
        ]
      }
    ]
  }
}, 1);
pets[114] = createObject({
  b_i: 114,
  b_t: BASE_TYPE.PET,
  name: 'Lava Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 9,
    y: 0
  },
  params: {
    item_id: 1221,
    inventory_slots: 6,
    level: 1,
    eats: {
      8: 0.015,
      10: 0.025
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[115] = createObject({
  b_i: 115,
  b_t: BASE_TYPE.PET,
  name: 'White Belly Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 3,
    y: 1
  },
  params: {
    item_id: 1222,
    inventory_slots: 7,
    level: 1,
    eats: {
      230: 0.03,
      228: 0.03
    },
    eat_interval: 20,
    happiness: 74,
    insurance_cost: [
      883288,
      44
    ],
    breeding_level: 100,
    likes: [
      {
        pet_id: 116,
        xp: 4150,
        returns: [
          {
            pet_id: 151,
            base_chance: 0.3,
            max_chance: 0.35
          },
          {
            pet_id: 152,
            base_chance: 0.05,
            max_chance: 0.1
          },
          {
            pet_id: 267,
            base_chance: 0.05,
            max_chance: 0.05
          },
          {
            pet_id: 268,
            base_chance: 0.03,
            max_chance: 0.03
          }
        ]
      }
    ]
  }
}, 1);
pets[116] = createObject({
  b_i: 116,
  b_t: BASE_TYPE.PET,
  name: 'Underworld Dragon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 1
  },
  params: {
    item_id: 1223,
    inventory_slots: 13,
    level: 1,
    eats: {
      8: 0.01,
      10: 0.02
    },
    eat_interval: 20,
    happiness: 74,
    insurance_cost: [
      1482643,
      74
    ],
    breeding_level: 101
  }
}, 1);
pets[117] = createObject({
  b_i: 117,
  b_t: BASE_TYPE.PET,
  name: 'Fire Heart Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 1
  },
  params: {
    item_id: 1224,
    inventory_slots: 8,
    level: 1,
    eats: {
      283: 0.025,
      238: 0.15
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[118] = createObject({
  b_i: 118,
  b_t: BASE_TYPE.PET,
  name: 'Deragonite [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 0,
    y: 1
  },
  params: {
    item_id: 1225,
    inventory_slots: 4,
    level: 1,
    eats: {
      283: 0.025,
      238: 0.05
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[119] = createObject({
  b_i: 119,
  b_t: BASE_TYPE.PET,
  name: 'Ice Observer [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 6,
    y: 1
  },
  params: {
    item_id: 1226,
    inventory_slots: 5,
    level: 1,
    eats: {
      268: 0.05,
      269: 0.08
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[120] = createObject({
  b_i: 120,
  b_t: BASE_TYPE.PET,
  name: 'Cloudcaller [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 1,
    y: 1
  },
  params: {
    item_id: 1227,
    inventory_slots: 10,
    level: 1,
    eats: {
      100: 0.05,
      106: 0.08
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[121] = createObject({
  b_i: 121,
  b_t: BASE_TYPE.PET,
  name: 'Centaur [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 0,
    y: 1
  },
  params: {
    item_id: 1228,
    inventory_slots: 5,
    level: 1,
    eats: {
      264: 0.05,
      760: 0.1,
      239: 0.2
    },
    eat_interval: 6,
    happiness: 28,
    insurance_cost: [
      77076,
      4
    ],
    breeding_level: 33,
    likes: [
      {
        pet_id: 30,
        xp: 602,
        returns: [
          {
            pet_id: 126,
            base_chance: 0.6,
            max_chance: 0.86
          }
        ]
      }
    ]
  }
}, 1);
pets[122] = createObject({
  b_i: 122,
  b_t: BASE_TYPE.PET,
  name: 'Demon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 4,
    y: 1
  },
  params: {
    item_id: 1229,
    inventory_slots: 7,
    level: 1,
    eats: {
      269: 0.15,
      233: 0.2,
      1300: 0.3,
      1301: 0.4
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[123] = createObject({
  b_i: 123,
  b_t: BASE_TYPE.PET,
  name: 'Dark Guru [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 3,
    y: 1
  },
  params: {
    item_id: 1230,
    inventory_slots: 1,
    level: 1,
    eats: {
      494: 0.05,
      283: 0.5
    },
    eat_interval: 6,
    happiness: 6,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[124] = createObject({
  b_i: 124,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Werewolf [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 10,
    y: 1
  },
  params: {
    item_id: 1231,
    inventory_slots: 3,
    level: 1,
    eats: {
      8: 0.25,
      272: 0.5
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[125] = createObject({
  b_i: 125,
  b_t: BASE_TYPE.PET,
  name: 'Raguel the archangel [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 1,
    y: 0
  },
  params: {
    item_id: 1232,
    inventory_slots: 17,
    level: 1,
    eats: {
      225: 0.05,
      1150: 0.1
    },
    eat_interval: 60,
    happiness: 180,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[126] = createObject({
  b_i: 126,
  b_t: BASE_TYPE.PET,
  name: 'Winged Centaur [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 0,
    y: 3
  },
  params: {
    item_id: 1233,
    inventory_slots: 6,
    level: 1,
    eats: {
      762: 0.15,
      80: 0.05,
      1300: 0.3,
      1301: 0.4
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[127] = createObject({
  b_i: 127,
  b_t: BASE_TYPE.PET,
  name: 'Ankylosaurus [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 4,
    y: 3
  },
  params: {
    item_id: 1234,
    inventory_slots: 4,
    level: 1,
    eats: {
      760: 0.05,
      271: 0.075,
      274: 0.1
    },
    eat_interval: 10,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[128] = createObject({
  b_i: 128,
  b_t: BASE_TYPE.PET,
  name: 'Tyrannosaurus [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 9,
    y: 2
  },
  params: {
    item_id: 1235,
    inventory_slots: 7,
    level: 1,
    eats: {
      760: 0.05,
      271: 0.075,
      274: 0.1
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[129] = createObject({
  b_i: 129,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Dragon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 2,
    y: 0
  },
  params: {
    item_id: 1236,
    inventory_slots: 9,
    level: 1,
    eats: {
      274: 0.025,
      275: 0.05
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[130] = createObject({
  b_i: 130,
  b_t: BASE_TYPE.PET,
  name: 'Marble Unicorn [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 8,
    y: 2
  },
  params: {
    item_id: 1237,
    inventory_slots: 18,
    level: 1,
    eats: {
      100: 0.025,
      106: 0.04
    },
    eat_interval: 30,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[131] = createObject({
  b_i: 131,
  b_t: BASE_TYPE.PET,
  name: 'Underworld Lord [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 7,
    y: 2
  },
  params: {
    item_id: 1238,
    inventory_slots: 7,
    level: 1,
    eats: {
      122: 0.05,
      222: 0.1
    },
    eat_interval: 40,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[132] = createObject({
  b_i: 132,
  b_t: BASE_TYPE.PET,
  name: 'Lord Of Destruction [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 3,
    y: 0
  },
  params: {
    item_id: 1239,
    inventory_slots: 14,
    level: 1,
    eats: {
      122: 0.05,
      222: 0.1
    },
    eat_interval: 40,
    happiness: 160,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[133] = createObject({
  b_i: 133,
  b_t: BASE_TYPE.PET,
  name: 'Game Master [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 2,
    y: 0
  },
  params: {
    item_id: 1240,
    inventory_slots: 24,
    level: 1
  }
}, 1);
pets[134] = createObject({
  b_i: 134,
  b_t: BASE_TYPE.PET,
  name: 'Ruby Horse [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 8,
    y: 0
  },
  params: {
    item_id: 1241,
    inventory_slots: 13,
    level: 1,
    eats: {
      757: 0.005,
      758: 0.05,
      785: 0.05
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[135] = createObject({
  b_i: 135,
  b_t: BASE_TYPE.PET,
  name: 'Winged Sapphire Demon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 0,
    y: 1
  },
  params: {
    item_id: 1242,
    inventory_slots: 15,
    level: 1,
    eats: {
      757: 0.01,
      758: 0.015,
      785: 0.025
    },
    eat_interval: 8,
    happiness: 24,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[136] = createObject({
  b_i: 136,
  b_t: BASE_TYPE.PET,
  name: 'Bone Horse [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 5,
    y: 1
  },
  params: {
    item_id: 1244,
    inventory_slots: 6,
    level: 1,
    eats: {
      757: 0.01,
      758: 0.1,
      785: 0.15
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[137] = createObject({
  b_i: 137,
  b_t: BASE_TYPE.PET,
  name: 'Disembodied Spirit [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 7,
    y: 1
  },
  params: {
    item_id: 1245,
    inventory_slots: 2,
    level: 1,
    eats: {
      269: 0.15,
      233: 0.2,
      1300: 0.3,
      1301: 0.4
    },
    eat_interval: 12,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[138] = createObject({
  b_i: 138,
  b_t: BASE_TYPE.PET,
  name: 'Royal Donkey [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 12,
    y: 2
  },
  params: {
    item_id: 1246,
    inventory_slots: 5,
    level: 1,
    eats: {
      757: 0.15,
      758: 0.2,
      760: 0.25,
      785: 0.35
    },
    eat_interval: 6,
    happiness: 24,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[139] = createObject({
  b_i: 139,
  b_t: BASE_TYPE.PET,
  name: 'Undead Donkey [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 13,
    y: 2
  },
  params: {
    item_id: 1247,
    inventory_slots: 7,
    level: 1,
    eats: {
      757: 0.15,
      758: 0.2,
      760: 0.25,
      785: 0.35
    },
    eat_interval: 12,
    happiness: 48,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[140] = createObject({
  b_i: 140,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Guru [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 2,
    y: 2
  },
  params: {
    item_id: 1248,
    inventory_slots: 1,
    level: 1,
    eats: {
      494: 0.05,
      283: 0.5
    },
    eat_interval: 6,
    happiness: 6,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[141] = createObject({
  b_i: 141,
  b_t: BASE_TYPE.PET,
  name: 'Hinny [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 9,
    y: 0
  },
  params: {
    item_id: 1249,
    inventory_slots: 8,
    level: 1,
    eats: {
      757: 0.025,
      758: 0.07,
      785: 0.09
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[142] = createObject({
  b_i: 142,
  b_t: BASE_TYPE.PET,
  name: 'Crystallized Pegasus [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 2,
    y: 1
  },
  params: {
    item_id: 1250,
    inventory_slots: 13,
    level: 1,
    eats: {
      100: 0.05,
      106: 0.08
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[143] = createObject({
  b_i: 143,
  b_t: BASE_TYPE.PET,
  name: 'Demonic Unicorn [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 14,
    y: 2
  },
  params: {
    item_id: 1251,
    inventory_slots: 7,
    level: 1,
    eats: {
      100: 0.05,
      106: 0.08
    },
    eat_interval: 30,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[144] = createObject({
  b_i: 144,
  b_t: BASE_TYPE.PET,
  name: 'Lindworm [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 5,
    y: 0
  },
  params: {
    item_id: 1252,
    inventory_slots: 5,
    level: 1,
    eats: {
      268: 0.025,
      267: 0.25
    },
    eat_interval: 16,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[145] = createObject({
  b_i: 145,
  b_t: BASE_TYPE.PET,
  name: 'Soul Trapper [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 4,
    y: 0
  },
  params: {
    item_id: 1253,
    inventory_slots: 5,
    level: 1,
    eats: {
      94: 0.025,
      206: 0.075,
      1300: 0.15,
      1301: 0.2
    },
    eat_interval: 12,
    happiness: 48,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[146] = createObject({
  b_i: 146,
  b_t: BASE_TYPE.PET,
  name: 'Dream Collector [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 7,
    y: 0
  },
  params: {
    item_id: 1254,
    inventory_slots: 10,
    level: 1,
    eats: {
      268: 0.01,
      267: 0.025
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[147] = createObject({
  b_i: 147,
  b_t: BASE_TYPE.PET,
  name: 'Genie [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 15,
    y: 2
  },
  params: {
    item_id: 1255,
    inventory_slots: 9,
    level: 1,
    eats: {
      245: 0.05,
      244: 0.075
    },
    eat_interval: 25,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[148] = createObject({
  b_i: 148,
  b_t: BASE_TYPE.PET,
  name: 'Euryale [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 8,
    y: 0
  },
  params: {
    item_id: 1256,
    inventory_slots: 3,
    level: 1,
    eats: {
      230: 0.05,
      228: 0.025
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[149] = createObject({
  b_i: 149,
  b_t: BASE_TYPE.PET,
  name: 'Medusa [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 1,
    y: 1
  },
  params: {
    item_id: 1257,
    xp_required: 150000,
    inventory_slots: 2,
    next_pet_item_id: 1210,
    level: 1,
    eats: {
      230: 0.1,
      228: 0.05
    },
    eat_interval: 7,
    happiness: 14,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[150] = createObject({
  b_i: 150,
  b_t: BASE_TYPE.PET,
  name: 'Giant Bunny [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 16,
    y: 2
  },
  params: {
    item_id: 1258,
    inventory_slots: 16,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[151] = createObject({
  b_i: 151,
  b_t: BASE_TYPE.PET,
  name: 'Mylanth [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 4,
    y: 0
  },
  params: {
    item_id: 1344,
    inventory_slots: 14,
    level: 1,
    eats: {
      1150: 0.15,
      239: 0.025
    },
    eat_interval: 60,
    happiness: 140,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[152] = createObject({
  b_i: 152,
  b_t: BASE_TYPE.PET,
  name: 'Tesselth [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 5,
    y: 0
  },
  params: {
    item_id: 1345,
    requires_stone: !0,
    stones: 12,
    next_pet_item_id: 3519,
    inventory_slots: 14,
    level: 1,
    eats: {
      1150: 0.15,
      239: 0.025
    },
    eat_interval: 70,
    happiness: 210,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[153] = createObject({
  b_i: 153,
  b_t: BASE_TYPE.PET,
  name: 'Xirador [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 5,
    y: 1
  },
  params: {
    item_id: 1346,
    inventory_slots: 14,
    level: 1,
    eats: {
      275: 0.025,
      276: 0.05
    },
    eat_interval: 40,
    happiness: 160,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[154] = createObject({
  b_i: 154,
  b_t: BASE_TYPE.PET,
  name: 'Xalanth [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 0,
    y: 0
  },
  params: {
    item_id: 1347,
    requires_stone: !0,
    stones: 12,
    next_pet_item_id: 3520,
    inventory_slots: 14,
    level: 1,
    eats: {
      275: 0.025,
      276: 0.05
    },
    eat_interval: 40,
    happiness: 200,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[155] = createObject({
  b_i: 155,
  b_t: BASE_TYPE.PET,
  name: 'Jewelry Donkey 1st Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 0,
    y: 2
  },
  params: {
    item_id: 1810,
    xp_required: 200000,
    inventory_slots: 8,
    next_pet_item_id: 1811,
    level: 1
  }
}, 1);
pets[156] = createObject({
  b_i: 156,
  b_t: BASE_TYPE.PET,
  name: 'Jewelry Donkey 2nd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 0,
    y: 2
  },
  params: {
    item_id: 1811,
    xp_required: 600000,
    inventory_slots: 12,
    next_pet_item_id: 1812,
    level: 2
  }
}, 1);
pets[157] = createObject({
  b_i: 157,
  b_t: BASE_TYPE.PET,
  name: 'Jewelry Donkey 3rd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 0,
    y: 2
  },
  params: {
    item_id: 1812,
    inventory_slots: 16,
    level: 3
  }
}, 1);
pets[158] = createObject({
  b_i: 158,
  b_t: BASE_TYPE.PET,
  name: 'Mining Donkey 1st Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 2
  },
  params: {
    item_id: 1813,
    xp_required: 200000,
    inventory_slots: 8,
    next_pet_item_id: 1814,
    level: 1
  }
}, 1);
pets[159] = createObject({
  b_i: 159,
  b_t: BASE_TYPE.PET,
  name: 'Mining Donkey 2nd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 2
  },
  params: {
    item_id: 1814,
    xp_required: 600000,
    inventory_slots: 12,
    next_pet_item_id: 1815,
    level: 2
  }
}, 1);
pets[160] = createObject({
  b_i: 160,
  b_t: BASE_TYPE.PET,
  name: 'Mining Donkey 3rd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 2
  },
  params: {
    item_id: 1815,
    inventory_slots: 16,
    level: 3
  }
}, 1);
pets[161] = createObject({
  b_i: 161,
  b_t: BASE_TYPE.PET,
  name: 'Woodcutting Donkey 1st Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 2,
    y: 2
  },
  params: {
    item_id: 1816,
    xp_required: 200000,
    inventory_slots: 8,
    next_pet_item_id: 1817,
    level: 1
  }
}, 1);
pets[162] = createObject({
  b_i: 162,
  b_t: BASE_TYPE.PET,
  name: 'Woodcutting Donkey 2nd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 2,
    y: 2
  },
  params: {
    item_id: 1817,
    xp_required: 600000,
    inventory_slots: 12,
    next_pet_item_id: 1818,
    level: 2
  }
}, 1);
pets[163] = createObject({
  b_i: 163,
  b_t: BASE_TYPE.PET,
  name: 'Woodcutting Donkey 3rd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 2,
    y: 2
  },
  params: {
    item_id: 1818,
    inventory_slots: 16,
    level: 3
  }
}, 1);
pets[164] = createObject({
  b_i: 164,
  b_t: BASE_TYPE.PET,
  name: 'Fishing Donkey 1st Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 2
  },
  params: {
    item_id: 1819,
    xp_required: 200000,
    inventory_slots: 8,
    next_pet_item_id: 1820,
    level: 1
  }
}, 1);
pets[165] = createObject({
  b_i: 165,
  b_t: BASE_TYPE.PET,
  name: 'Fishing Donkey 2nd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 2
  },
  params: {
    item_id: 1820,
    xp_required: 600000,
    inventory_slots: 12,
    next_pet_item_id: 1821,
    level: 2
  }
}, 1);
pets[166] = createObject({
  b_i: 166,
  b_t: BASE_TYPE.PET,
  name: 'Fishing Donkey 3rd Grade [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 2
  },
  params: {
    item_id: 1821,
    inventory_slots: 16,
    level: 3
  }
}, 1);
pets[167] = createObject({
  b_i: 167,
  b_t: BASE_TYPE.PET,
  name: 'King Pumpkin [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 11,
      y: 2
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 5,
      y: 3
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 6,
      y: 3
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 7,
      y: 3
    }
  ],
  params: {
    item_id: 1869,
    inventory_slots: 16,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 175,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[168] = createObject({
  b_i: 168,
  b_t: BASE_TYPE.PET,
  name: 'Baby Sapphire Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 5,
    y: 0
  },
  params: {
    item_id: 2592,
    xp_required: 100000,
    inventory_slots: 3,
    next_pet_item_id: 2593,
    level: 1,
    eats: {
      285: 0.15,
      494: 0.075
    },
    eat_interval: 5,
    happiness: 10,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[169] = createObject({
  b_i: 169,
  b_t: BASE_TYPE.PET,
  name: 'Sapphire Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 0,
    y: 2
  },
  params: {
    item_id: 2593,
    xp_required: 500000,
    inventory_slots: 6,
    next_pet_item_id: 2594,
    level: 2,
    eats: {
      285: 0.12,
      494: 0.06
    },
    eat_interval: 5,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[170] = createObject({
  b_i: 170,
  b_t: BASE_TYPE.PET,
  name: 'King Sapphire Dragon [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 1,
    y: 4
  },
  params: {
    item_id: 2594,
    inventory_slots: 7,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 2595,
    level: 3,
    eats: {
      285: 0.075,
      494: 0.025
    },
    eat_interval: 8,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[171] = createObject({
  b_i: 171,
  b_t: BASE_TYPE.PET,
  name: 'Storm Sapphire Dragon [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.DRAGONS,
    x: 2,
    y: 5
  },
  params: {
    item_id: 2595,
    inventory_slots: 11,
    level: 4,
    eats: {
      283: 0.05,
      238: 0.25
    },
    eat_interval: 10,
    happiness: 30,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[172] = createObject({
  b_i: 172,
  b_t: BASE_TYPE.PET,
  name: 'Devil Baby Cupid [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 17,
    y: 2
  },
  params: {
    item_id: 2596,
    xp_required: 100000,
    inventory_slots: 6,
    next_pet_item_id: 2597,
    level: 1,
    eats: {
      225: 0.45,
      1150: 1
    },
    eat_interval: 10,
    happiness: 10,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[173] = createObject({
  b_i: 173,
  b_t: BASE_TYPE.PET,
  name: 'Devil Cupid [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 18,
    y: 2
  },
  params: {
    item_id: 2597,
    xp_required: 500000,
    inventory_slots: 8,
    next_pet_item_id: 2598,
    level: 2,
    eats: {
      225: 0.3,
      1150: 0.7
    },
    eat_interval: 10,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[174] = createObject({
  b_i: 174,
  b_t: BASE_TYPE.PET,
  name: 'Devil Cupid Archer [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 19,
    y: 2
  },
  params: {
    item_id: 2598,
    inventory_slots: 9,
    next_pet_item_id: 2599,
    requires_stone: !0,
    stones: 4,
    level: 3,
    eats: {
      225: 0.15,
      1150: 0.5
    },
    eat_interval: 10,
    happiness: 30,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[175] = createObject({
  b_i: 175,
  b_t: BASE_TYPE.PET,
  name: 'Cupid Of Chaos [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 0,
    y: 3
  },
  params: {
    item_id: 2599,
    inventory_slots: 12,
    level: 4,
    eats: {
      1150: 0.25,
      225: 0.05
    },
    eat_interval: 20,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[176] = createObject({
  b_i: 176,
  b_t: BASE_TYPE.PET,
  name: 'Dragonhorse [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 8,
    y: 1
  },
  params: {
    item_id: 2748,
    inventory_slots: 8,
    level: 1,
    eats: {
      274: 0.025,
      275: 0.05
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[177] = createObject({
  b_i: 177,
  b_t: BASE_TYPE.PET,
  name: 'Ercinee [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 9,
    y: 1
  },
  params: {
    item_id: 2749,
    inventory_slots: 9,
    level: 1,
    eats: {
      236: 0.15,
      241: 0.2
    },
    eat_interval: 20,
    happiness: 70,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[178] = createObject({
  b_i: 178,
  b_t: BASE_TYPE.PET,
  name: 'Baby Hippogriff [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 1,
    y: 3
  },
  params: {
    item_id: 2750,
    inventory_slots: 8,
    xp_required: 500000,
    next_pet_item_id: 2751,
    level: 1,
    eats: {
      762: 0.45,
      80: 0.15,
      1300: 0.9,
      1301: 1
    },
    eat_interval: 10,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[179] = createObject({
  b_i: 179,
  b_t: BASE_TYPE.PET,
  name: 'Hippogriff [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 2,
    y: 3
  },
  params: {
    item_id: 2751,
    inventory_slots: 10,
    requires_stone: !0,
    stones: 3,
    next_pet_item_id: 2752,
    level: 2,
    eats: {
      762: 0.35,
      80: 0.1,
      1300: 0.6,
      1301: 0.8
    },
    eat_interval: 15,
    happiness: 30,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[180] = createObject({
  b_i: 180,
  b_t: BASE_TYPE.PET,
  name: 'Adult Hippogriff [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 10,
    y: 0
  },
  params: {
    item_id: 2752,
    inventory_slots: 12,
    level: 3,
    eats: {
      762: 0.25,
      80: 0.08,
      1300: 0.5,
      1301: 0.6
    },
    eat_interval: 20,
    happiness: 40,
    insurance_cost: [
      840000,
      42
    ],
    breeding_level: 54,
    likes: [
      {
        pet_id: 30,
        xp: 1639,
        returns: [
          {
            pet_id: 185,
            base_chance: 0.4,
            max_chance: 0.53
          }
        ]
      }
    ]
  }
}, 1);
pets[181] = createObject({
  b_i: 181,
  b_t: BASE_TYPE.PET,
  name: 'Typhon [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 4,
    y: 2
  },
  params: {
    item_id: 2753,
    requires_stone: !0,
    stones: 14,
    next_pet_item_id: 3511,
    inventory_slots: 18,
    level: 1,
    eats: {
      275: 0.025,
      276: 0.05
    },
    eat_interval: 40,
    happiness: 200,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[182] = createObject({
  b_i: 182,
  b_t: BASE_TYPE.PET,
  name: 'Leshy [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 6,
    y: 1
  },
  params: {
    item_id: 2754,
    inventory_slots: 4,
    xp_required: 100000,
    next_pet_item_id: 2755,
    level: 1,
    eats: {
      230: 0.2,
      228: 0.08
    },
    eat_interval: 7,
    happiness: 14,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[183] = createObject({
  b_i: 183,
  b_t: BASE_TYPE.PET,
  name: 'Leshy Warrior [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 7,
    y: 1
  },
  params: {
    item_id: 2755,
    inventory_slots: 7,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 2756,
    level: 2,
    eats: {
      230: 0.15,
      228: 0.06
    },
    eat_interval: 10,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[184] = createObject({
  b_i: 184,
  b_t: BASE_TYPE.PET,
  name: 'Leshy General [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 8,
    y: 1
  },
  params: {
    item_id: 2756,
    inventory_slots: 11,
    level: 3,
    eats: {
      230: 0.1,
      228: 0.05
    },
    eat_interval: 15,
    happiness: 30,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[185] = createObject({
  b_i: 185,
  b_t: BASE_TYPE.PET,
  name: 'Yllerion [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 5,
    y: 2
  },
  params: {
    item_id: 2757,
    inventory_slots: 10,
    level: 1,
    eats: {
      1150: 0.15,
      239: 0.025,
      230: 0.015
    },
    eat_interval: 120,
    happiness: 240,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[186] = createObject({
  b_i: 186,
  b_t: BASE_TYPE.PET,
  name: 'Kilin [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 11,
    y: 0
  },
  params: {
    item_id: 2758,
    inventory_slots: 14,
    level: 1,
    eats: {
      283: 0.015,
      238: 0.05
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[187] = createObject({
  b_i: 187,
  b_t: BASE_TYPE.PET,
  name: 'Jormungandr [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 9,
    y: 1
  },
  params: {
    item_id: 2759,
    requires_stone: !0,
    stones: 15,
    next_pet_item_id: 3521,
    inventory_slots: 20,
    level: 1,
    eats: {
      122: 0.05,
      222: 0.1
    },
    eat_interval: 50,
    happiness: 150,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[188] = createObject({
  b_i: 188,
  b_t: BASE_TYPE.PET,
  name: 'Baby Hieracosphinx [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 3,
    y: 3
  },
  params: {
    item_id: 2760,
    inventory_slots: 8,
    xp_required: 500000,
    next_pet_item_id: 2761,
    level: 1,
    eats: {
      762: 0.55,
      80: 0.15,
      1300: 0.9,
      1301: 1
    },
    eat_interval: 8,
    happiness: 16,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[189] = createObject({
  b_i: 189,
  b_t: BASE_TYPE.PET,
  name: 'Hieracosphinx [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 4,
    y: 3
  },
  params: {
    item_id: 2761,
    inventory_slots: 11,
    xp_required: 900000,
    next_pet_item_id: 2762,
    level: 2,
    eats: {
      762: 0.45,
      80: 0.1,
      1300: 0.7,
      1301: 0.9
    },
    eat_interval: 10,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[190] = createObject({
  b_i: 190,
  b_t: BASE_TYPE.PET,
  name: 'Adult Hieracosphinx [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 6,
    y: 2
  },
  params: {
    item_id: 2762,
    inventory_slots: 12,
    level: 3,
    eats: {
      762: 0.35,
      80: 0.08,
      1300: 0.5,
      1301: 0.7
    },
    eat_interval: 13,
    happiness: 26,
    insurance_cost: [
      385125,
      19
    ],
    breeding_level: 88,
    likes: [
      {
        pet_id: 217,
        xp: 2129,
        returns: [
          {
            pet_id: 186,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 272,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 176,
            base_chance: 0.4,
            max_chance: 0.53
          },
          {
            pet_id: 271,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      }
    ]
  }
}, 1);
pets[191] = createObject({
  b_i: 191,
  b_t: BASE_TYPE.PET,
  name: 'Garm [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 7,
    y: 2
  },
  params: {
    item_id: 2763,
    requires_stone: !0,
    stones: 12,
    next_pet_item_id: 3517,
    inventory_slots: 17,
    level: 1,
    eats: {
      8: 0.025,
      271: 0.01
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[192] = createObject({
  b_i: 192,
  b_t: BASE_TYPE.PET,
  name: 'Baby Chemosit [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 5,
    y: 3
  },
  params: {
    item_id: 2764,
    inventory_slots: 9,
    xp_required: 600000,
    next_pet_item_id: 2765,
    level: 1,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 10,
    happiness: 20,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[193] = createObject({
  b_i: 193,
  b_t: BASE_TYPE.PET,
  name: 'Chemosit [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 8,
    y: 2
  },
  params: {
    item_id: 2765,
    inventory_slots: 11,
    requires_stone: !0,
    stones: 3,
    next_pet_item_id: 2766,
    level: 2,
    eats: {
      8: 0.2,
      271: 0.25
    },
    eat_interval: 13,
    happiness: 26,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[194] = createObject({
  b_i: 194,
  b_t: BASE_TYPE.PET,
  name: 'Adult Chemosit [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 9,
    y: 2
  },
  params: {
    item_id: 2766,
    inventory_slots: 13,
    level: 3,
    eats: {
      8: 0.1,
      271: 0.15
    },
    eat_interval: 16,
    happiness: 29,
    insurance_cost: [
      918000,
      46
    ],
    breeding_level: 109,
    likes: [
      {
        pet_id: 90,
        xp: 1639,
        returns: [
          {
            pet_id: 122,
            base_chance: 0.25,
            max_chance: 0.3
          },
          {
            pet_id: 176,
            base_chance: 0.11,
            max_chance: 0.14
          },
          {
            pet_id: 201,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 273,
            base_chance: 0.05,
            max_chance: 0.05
          }
        ]
      }
    ]
  }
}, 1);
pets[195] = createObject({
  b_i: 195,
  b_t: BASE_TYPE.PET,
  name: 'Bucentaur [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 10,
    y: 3
  },
  params: {
    item_id: 2767,
    requires_stone: !0,
    stones: 14,
    next_pet_item_id: 3510,
    inventory_slots: 17,
    level: 1,
    eats: {
      1150: 0.1
    },
    eat_interval: 120,
    happiness: 240,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[196] = createObject({
  b_i: 196,
  b_t: BASE_TYPE.PET,
  name: 'Amphisbaena [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 10,
    y: 0
  },
  params: {
    item_id: 2768,
    inventory_slots: 14,
    level: 1,
    eats: {
      268: 0.05,
      269: 0.08
    },
    eat_interval: 40,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[197] = createObject({
  b_i: 197,
  b_t: BASE_TYPE.PET,
  name: 'Catoblepas [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 10,
    y: 1
  },
  params: {
    item_id: 2769,
    inventory_slots: 18,
    level: 1,
    eats: {
      757: 0.0015,
      758: 0.002,
      785: 0.009
    },
    eat_interval: 60,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[198] = createObject({
  b_i: 198,
  b_t: BASE_TYPE.PET,
  name: 'Arachne [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 11,
    y: 1
  },
  params: {
    item_id: 2770,
    requires_stone: !0,
    stones: 14,
    next_pet_item_id: 3512,
    inventory_slots: 17,
    level: 1,
    eats: {
      274: 0.015,
      275: 0.005
    },
    eat_interval: 120,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[199] = createObject({
  b_i: 199,
  b_t: BASE_TYPE.PET,
  name: 'Gegenees [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 11,
    y: 3
  },
  params: {
    item_id: 2771,
    requires_stone: !0,
    stones: 13,
    next_pet_item_id: 3514,
    inventory_slots: 17,
    level: 1,
    eats: {
      1150: 0.1,
      239: 0.0025
    },
    eat_interval: 120,
    happiness: 280,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[200] = createObject({
  b_i: 200,
  b_t: BASE_TYPE.PET,
  name: 'Aspidochelone [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 10,
    y: 0
  },
  params: {
    item_id: 2772,
    requires_stone: !0,
    stones: 13,
    next_pet_item_id: 3513,
    inventory_slots: 19,
    level: 1,
    eats: {
      283: 0.01,
      238: 0.02
    },
    eat_interval: 40,
    happiness: 460,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[201] = createObject({
  b_i: 201,
  b_t: BASE_TYPE.PET,
  name: 'Bies [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 10,
    y: 1
  },
  params: {
    item_id: 2773,
    requires_stone: !0,
    stones: 12,
    next_pet_item_id: 3516,
    inventory_slots: 20,
    level: 1,
    eats: {
      268: 0.0025,
      267: 0.025
    },
    eat_interval: 50,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[202] = createObject({
  b_i: 202,
  b_t: BASE_TYPE.PET,
  name: 'Quetzalcoatl [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 11,
    y: 0
  },
  params: {
    item_id: 2774,
    requires_stone: !0,
    stones: 13,
    next_pet_item_id: 3515,
    inventory_slots: 19,
    level: 1,
    eats: {
      1150: 0.1,
      239: 0.05
    },
    eat_interval: 120,
    happiness: 360,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[203] = createObject({
  b_i: 203,
  b_t: BASE_TYPE.PET,
  name: 'Ember Eurynomos [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 10,
    y: 1
  },
  params: {
    item_id: 2775,
    inventory_slots: 7,
    xp_required: 1600000,
    next_pet_item_id: 2776,
    level: 1,
    eats: {
      245: 0.15,
      244: 0.2
    },
    eat_interval: 30,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[204] = createObject({
  b_i: 204,
  b_t: BASE_TYPE.PET,
  name: 'Fire Eurynomos [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 10,
    y: 2
  },
  params: {
    item_id: 2776,
    inventory_slots: 10,
    requires_stone: !0,
    stones: 3,
    next_pet_item_id: 2777,
    level: 2,
    eats: {
      245: 0.12,
      244: 0.18
    },
    eat_interval: 38,
    happiness: 140,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[205] = createObject({
  b_i: 205,
  b_t: BASE_TYPE.PET,
  name: 'Hellfire Eurynomos [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 11,
    y: 0
  },
  params: {
    item_id: 2777,
    inventory_slots: 13,
    level: 3,
    eats: {
      245: 0.1,
      244: 0.15
    },
    eat_interval: 45,
    happiness: 160,
    insurance_cost: [
      2166000,
      108
    ],
    breeding_level: 118,
    likes: [
      {
        pet_id: 42,
        xp: 4488,
        returns: [
          {
            pet_id: 202,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 280,
            base_chance: 0.09,
            max_chance: 0.09
          },
          {
            pet_id: 81,
            base_chance: 0.6,
            max_chance: 0.835
          },
          {
            pet_id: 229,
            base_chance: 0.13,
            max_chance: 0.13
          }
        ]
      },
      {
        pet_id: 53,
        xp: 5332,
        returns: [
          {
            pet_id: 195,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 281,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 131,
            base_chance: 0.38,
            max_chance: 0.58
          },
          {
            pet_id: 259,
            base_chance: 0.08,
            max_chance: 0.08
          }
        ]
      }
    ]
  }
}, 1);
pets[206] = createObject({
  b_i: 206,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Aerico [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 0,
    y: 0
  },
  params: {
    item_id: 2778,
    inventory_slots: 10,
    xp_required: 900000,
    next_pet_item_id: 2779,
    level: 1,
    eats: {
      274: 0.025,
      275: 0.05
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[207] = createObject({
  b_i: 207,
  b_t: BASE_TYPE.PET,
  name: 'Night Aerico [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 1,
    y: 0
  },
  params: {
    item_id: 2779,
    inventory_slots: 13,
    requires_stone: !0,
    stones: 3,
    next_pet_item_id: 2780,
    level: 2,
    eats: {
      274: 0.02,
      275: 0.04
    },
    eat_interval: 35,
    happiness: 100,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[208] = createObject({
  b_i: 208,
  b_t: BASE_TYPE.PET,
  name: 'Void Aerico [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 2,
    y: 0
  },
  params: {
    item_id: 2780,
    inventory_slots: 15,
    level: 3,
    eats: {
      274: 0.015,
      275: 0.035
    },
    eat_interval: 35,
    happiness: 120,
    insurance_cost: [
      2010000,
      101
    ],
    breeding_level: 106,
    likes: [
      {
        pet_id: 22,
        xp: 4552,
        returns: [
          {
            pet_id: 84,
            base_chance: 0.12,
            max_chance: 0.16
          },
          {
            pet_id: 181,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 264,
            base_chance: 0.1,
            max_chance: 0.1
          },
          {
            pet_id: 278,
            base_chance: 0.09,
            max_chance: 0.09
          },
          {
            pet_id: 85,
            base_chance: 0.3,
            max_chance: 0.45
          },
          {
            pet_id: 263,
            base_chance: 0.14,
            max_chance: 0.14
          }
        ]
      },
      {
        pet_id: 17,
        xp: 5165,
        returns: [
          {
            pet_id: 77,
            base_chance: 0.12,
            max_chance: 0.16
          },
          {
            pet_id: 198,
            base_chance: 0.02,
            max_chance: 0.04
          },
          {
            pet_id: 242,
            base_chance: 0.09,
            max_chance: 0.09
          },
          {
            pet_id: 279,
            base_chance: 0.07,
            max_chance: 0.07
          },
          {
            pet_id: 85,
            base_chance: 0.3,
            max_chance: 0.45
          },
          {
            pet_id: 263,
            base_chance: 0.13,
            max_chance: 0.13
          }
        ]
      }
    ]
  }
}, 1);
pets[209] = createObject({
  b_i: 209,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Keres [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 3,
    y: 0
  },
  params: {
    item_id: 2781,
    inventory_slots: 9,
    xp_required: 750000,
    next_pet_item_id: 2782,
    level: 1,
    eats: {
      274: 0.025,
      275: 0.05
    },
    eat_interval: 25,
    happiness: 75,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[210] = createObject({
  b_i: 210,
  b_t: BASE_TYPE.PET,
  name: 'Night Keres [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 4,
    y: 0
  },
  params: {
    item_id: 2782,
    inventory_slots: 12,
    requires_stone: !0,
    stones: 3,
    next_pet_item_id: 2783,
    level: 2,
    eats: {
      274: 0.02,
      275: 0.045
    },
    eat_interval: 30,
    happiness: 80,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[211] = createObject({
  b_i: 211,
  b_t: BASE_TYPE.PET,
  name: 'Void Keres [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 5,
    y: 0
  },
  params: {
    item_id: 2783,
    inventory_slots: 14,
    level: 3,
    eats: {
      274: 0.015,
      275: 0.035
    },
    eat_interval: 35,
    happiness: 90,
    insurance_cost: [
      1113000,
      56
    ],
    breeding_level: 100,
    likes: [
      {
        pet_id: 32,
        xp: 2075,
        returns: [
          {
            pet_id: 196,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 277,
            base_chance: 0.07,
            max_chance: 0.07
          },
          {
            pet_id: 114,
            base_chance: 0.4,
            max_chance: 0.65
          },
          {
            pet_id: 244,
            base_chance: 0.12,
            max_chance: 0.12
          }
        ]
      },
      {
        pet_id: 55,
        xp: 5165,
        returns: [
          {
            pet_id: 84,
            base_chance: 0.2,
            max_chance: 0.35
          },
          {
            pet_id: 199,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 264,
            base_chance: 0.1,
            max_chance: 0.1
          },
          {
            pet_id: 276,
            base_chance: 0.07,
            max_chance: 0.07
          }
        ]
      }
    ]
  }
}, 1);
pets[212] = createObject({
  b_i: 212,
  b_t: BASE_TYPE.PET,
  name: 'Baby Afrit [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 6,
    y: 3
  },
  params: {
    item_id: 2784,
    inventory_slots: 2,
    xp_required: 600000,
    next_pet_item_id: 2785,
    level: 1,
    eats: {
      245: 0.25,
      244: 0.35
    },
    eat_interval: 10,
    happiness: 30,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[213] = createObject({
  b_i: 213,
  b_t: BASE_TYPE.PET,
  name: 'Afrit [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 7,
    y: 3
  },
  params: {
    item_id: 2785,
    inventory_slots: 5,
    xp_required: 800000,
    next_pet_item_id: 2786,
    level: 2,
    eats: {
      245: 0.2,
      244: 0.3
    },
    eat_interval: 13,
    happiness: 39,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[214] = createObject({
  b_i: 214,
  b_t: BASE_TYPE.PET,
  name: 'Adult Afrit [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 11,
    y: 1
  },
  params: {
    item_id: 2786,
    inventory_slots: 9,
    level: 3,
    eats: {
      245: 0.2,
      244: 0.3
    },
    eat_interval: 13,
    happiness: 39,
    insurance_cost: [
      380250,
      19
    ],
    breeding_level: 83,
    likes: [
      {
        pet_id: 52,
        xp: 602,
        returns: [
          {
            pet_id: 52,
            base_chance: 0.4,
            max_chance: 0.53
          }
        ]
      }
    ]
  }
}, 1);
pets[215] = createObject({
  b_i: 215,
  b_t: BASE_TYPE.PET,
  name: 'Baby Cockatrice [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 8,
    y: 3
  },
  params: {
    item_id: 2787,
    inventory_slots: 8,
    xp_required: 1000000,
    next_pet_item_id: 2788,
    level: 1,
    eats: {
      762: 0.45,
      80: 0.15,
      1300: 0.9,
      1301: 1
    },
    eat_interval: 10,
    happiness: 40,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[216] = createObject({
  b_i: 216,
  b_t: BASE_TYPE.PET,
  name: 'Cockatrice [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 12,
    y: 0
  },
  params: {
    item_id: 2788,
    inventory_slots: 11,
    xp_required: 1500000,
    next_pet_item_id: 2789,
    level: 2,
    eats: {
      762: 0.4,
      80: 0.1,
      1300: 0.8,
      1301: 0.9
    },
    eat_interval: 12,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[217] = createObject({
  b_i: 217,
  b_t: BASE_TYPE.PET,
  name: 'Adult Cockatrice [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 13,
    y: 0
  },
  params: {
    item_id: 2789,
    inventory_slots: 13,
    level: 3,
    eats: {
      762: 0.3,
      80: 0.05,
      1300: 0.7,
      1301: 0.8
    },
    eat_interval: 15,
    happiness: 75,
    insurance_cost: [
      828750,
      41
    ],
    breeding_level: 88,
    likes: []
  }
}, 1);
pets[218] = createObject({
  b_i: 218,
  b_t: BASE_TYPE.PET,
  name: 'Baby Valravn [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 14,
    y: 0
  },
  params: {
    item_id: 2790,
    inventory_slots: 10,
    xp_required: 1100000,
    next_pet_item_id: 2791,
    level: 1,
    eats: {
      762: 0.4,
      80: 0.1,
      1300: 0.8,
      1301: 0.9
    },
    eat_interval: 20,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[219] = createObject({
  b_i: 219,
  b_t: BASE_TYPE.PET,
  name: 'Valravn [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 15,
    y: 0
  },
  params: {
    item_id: 2791,
    inventory_slots: 13,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 2792,
    level: 2,
    eats: {
      762: 0.35,
      80: 0.08,
      1300: 0.7,
      1301: 0.8
    },
    eat_interval: 25,
    happiness: 75,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[220] = createObject({
  b_i: 220,
  b_t: BASE_TYPE.PET,
  name: 'Adult Valravn [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 16,
    y: 0
  },
  params: {
    item_id: 2792,
    inventory_slots: 15,
    level: 3,
    eats: {
      762: 0.25,
      80: 0.06,
      1300: 0.5,
      1301: 0.8
    },
    eat_interval: 25,
    happiness: 100,
    insurance_cost: [
      3564000,
      178
    ],
    breeding_level: 119,
    likes: [
      {
        pet_id: 86,
        xp: 9334,
        returns: [
          {
            pet_id: 177,
            base_chance: 0.35,
            max_chance: 0.55
          },
          {
            pet_id: 187,
            base_chance: 0.04,
            max_chance: 0.04
          },
          {
            pet_id: 282,
            base_chance: 0.12,
            max_chance: 0.12
          },
          {
            pet_id: 283,
            base_chance: 0.08,
            max_chance: 0.08
          }
        ]
      },
      {
        pet_id: 205,
        xp: 10052,
        returns: [
          {
            pet_id: 200,
            base_chance: 0.04,
            max_chance: 0.08
          },
          {
            pet_id: 284,
            base_chance: 0.08,
            max_chance: 0.08
          },
          {
            pet_id: 77,
            base_chance: 0.44,
            max_chance: 0.6
          },
          {
            pet_id: 242,
            base_chance: 0.1,
            max_chance: 0.1
          }
        ]
      }
    ]
  }
}, 1);
pets[221] = createObject({
  b_i: 221,
  b_t: BASE_TYPE.PET,
  name: 'Hinny [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2810,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1249,
    level: 1
  }
}, 1);
pets[222] = createObject({
  b_i: 222,
  b_t: BASE_TYPE.PET,
  name: 'Royal Horse [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2811,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 1216,
    level: 1
  }
}, 1);
pets[223] = createObject({
  b_i: 223,
  b_t: BASE_TYPE.PET,
  name: 'Winged Sapphire Demon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2812,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1242,
    level: 1
  }
}, 1);
pets[224] = createObject({
  b_i: 224,
  b_t: BASE_TYPE.PET,
  name: 'Crystal Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2813,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1213,
    level: 1
  }
}, 1);
pets[225] = createObject({
  b_i: 225,
  b_t: BASE_TYPE.PET,
  name: 'Rubysoul Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2814,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1212,
    level: 1
  }
}, 1);
pets[226] = createObject({
  b_i: 226,
  b_t: BASE_TYPE.PET,
  name: 'Ghost Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2815,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1169,
    level: 1
  }
}, 1);
pets[227] = createObject({
  b_i: 227,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2816,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 1236,
    level: 1
  }
}, 1);
pets[228] = createObject({
  b_i: 228,
  b_t: BASE_TYPE.PET,
  name: 'White Belly Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2817,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1222,
    level: 1
  }
}, 1);
pets[229] = createObject({
  b_i: 229,
  b_t: BASE_TYPE.PET,
  name: 'Horntail [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2818,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1188,
    level: 1
  }
}, 1);
pets[230] = createObject({
  b_i: 230,
  b_t: BASE_TYPE.PET,
  name: 'Ancient Ironbelly [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2819,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1202,
    level: 1
  }
}, 1);
pets[231] = createObject({
  b_i: 231,
  b_t: BASE_TYPE.PET,
  name: 'Fire Heart Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2820,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1224,
    level: 1
  }
}, 1);
pets[232] = createObject({
  b_i: 232,
  b_t: BASE_TYPE.PET,
  name: 'Flaming Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2821,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1220,
    level: 1
  }
}, 1);
pets[233] = createObject({
  b_i: 233,
  b_t: BASE_TYPE.PET,
  name: 'Archsky Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2822,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1203,
    level: 1
  }
}, 1);
pets[234] = createObject({
  b_i: 234,
  b_t: BASE_TYPE.PET,
  name: 'Deragonite [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2823,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1225,
    level: 1
  }
}, 1);
pets[235] = createObject({
  b_i: 235,
  b_t: BASE_TYPE.PET,
  name: 'Saint Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2824,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1201,
    level: 1
  }
}, 1);
pets[236] = createObject({
  b_i: 236,
  b_t: BASE_TYPE.PET,
  name: 'Flame Observer [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2825,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1204,
    level: 1
  }
}, 1);
pets[237] = createObject({
  b_i: 237,
  b_t: BASE_TYPE.PET,
  name: 'HellKyte [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2826,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1182,
    level: 1
  }
}, 1);
pets[238] = createObject({
  b_i: 238,
  b_t: BASE_TYPE.PET,
  name: 'Efreet Sultan [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2827,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1205,
    level: 1
  }
}, 1);
pets[239] = createObject({
  b_i: 239,
  b_t: BASE_TYPE.PET,
  name: 'Fire Elemental [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2828,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1199,
    level: 1
  }
}, 1);
pets[240] = createObject({
  b_i: 240,
  b_t: BASE_TYPE.PET,
  name: 'Genie [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2829,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 1255,
    level: 1
  }
}, 1);
pets[241] = createObject({
  b_i: 241,
  b_t: BASE_TYPE.PET,
  name: 'Ifrit [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2830,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1183,
    level: 1
  }
}, 1);
pets[242] = createObject({
  b_i: 242,
  b_t: BASE_TYPE.PET,
  name: 'Death Knight [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2831,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1184,
    level: 1
  }
}, 1);
pets[243] = createObject({
  b_i: 243,
  b_t: BASE_TYPE.PET,
  name: 'Fire Overlord [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2832,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1186,
    level: 1
  }
}, 1);
pets[244] = createObject({
  b_i: 244,
  b_t: BASE_TYPE.PET,
  name: 'Lava Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2833,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1221,
    level: 1
  }
}, 1);
pets[245] = createObject({
  b_i: 245,
  b_t: BASE_TYPE.PET,
  name: 'Underworld Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2834,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1223,
    level: 1
  }
}, 1);
pets[246] = createObject({
  b_i: 246,
  b_t: BASE_TYPE.PET,
  name: 'Undead Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2835,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1214,
    level: 1
  }
}, 1);
pets[247] = createObject({
  b_i: 247,
  b_t: BASE_TYPE.PET,
  name: 'Obsidian Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2836,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1193,
    level: 1
  }
}, 1);
pets[248] = createObject({
  b_i: 248,
  b_t: BASE_TYPE.PET,
  name: 'Lionhead Dragon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2837,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1187,
    level: 1
  }
}, 1);
pets[249] = createObject({
  b_i: 249,
  b_t: BASE_TYPE.PET,
  name: 'Wildfire Steed [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2838,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1196,
    level: 1
  }
}, 1);
pets[250] = createObject({
  b_i: 250,
  b_t: BASE_TYPE.PET,
  name: 'Sleipnir [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2839,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1181,
    level: 1
  }
}, 1);
pets[251] = createObject({
  b_i: 251,
  b_t: BASE_TYPE.PET,
  name: 'Dark Pegasus [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2840,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1180,
    level: 1
  }
}, 1);
pets[252] = createObject({
  b_i: 252,
  b_t: BASE_TYPE.PET,
  name: 'Lava Pegasus [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2841,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 1217,
    level: 1
  }
}, 1);
pets[253] = createObject({
  b_i: 253,
  b_t: BASE_TYPE.PET,
  name: 'Nightmare Pegasus [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2842,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1218,
    level: 1
  }
}, 1);
pets[254] = createObject({
  b_i: 254,
  b_t: BASE_TYPE.PET,
  name: 'Demonic Unicorn [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2843,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1251,
    level: 1
  }
}, 1);
pets[255] = createObject({
  b_i: 255,
  b_t: BASE_TYPE.PET,
  name: 'Crystallized Pegasus [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2844,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 1250,
    level: 1
  }
}, 1);
pets[256] = createObject({
  b_i: 256,
  b_t: BASE_TYPE.PET,
  name: 'Sun Pegasus [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2845,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1219,
    level: 1
  }
}, 1);
pets[257] = createObject({
  b_i: 257,
  b_t: BASE_TYPE.PET,
  name: 'Cloudcaller [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2846,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1227,
    level: 1
  }
}, 1);
pets[258] = createObject({
  b_i: 258,
  b_t: BASE_TYPE.PET,
  name: 'Marble Unicorn [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2847,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1237,
    level: 1
  }
}, 1);
pets[259] = createObject({
  b_i: 259,
  b_t: BASE_TYPE.PET,
  name: 'Underworld Lord [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2848,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1238,
    level: 1
  }
}, 1);
pets[260] = createObject({
  b_i: 260,
  b_t: BASE_TYPE.PET,
  name: 'Lord Of Destruction [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2849,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1239,
    level: 1
  }
}, 1);
pets[261] = createObject({
  b_i: 261,
  b_t: BASE_TYPE.PET,
  name: 'Cursed Archangel [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2850,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1190,
    level: 1
  }
}, 1);
pets[262] = createObject({
  b_i: 262,
  b_t: BASE_TYPE.PET,
  name: 'Rael [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2851,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1189,
    level: 1
  }
}, 1);
pets[263] = createObject({
  b_i: 263,
  b_t: BASE_TYPE.PET,
  name: 'Michael the archangel [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2852,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1192,
    level: 1
  }
}, 1);
pets[264] = createObject({
  b_i: 264,
  b_t: BASE_TYPE.PET,
  name: 'Jophiel the archangel [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2853,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 1191,
    level: 1
  }
}, 1);
pets[265] = createObject({
  b_i: 265,
  b_t: BASE_TYPE.PET,
  name: 'Raguel the archangel [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2854,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1232,
    level: 1
  }
}, 1);
pets[266] = createObject({
  b_i: 266,
  b_t: BASE_TYPE.PET,
  name: 'Shiva [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 0,
    y: 8
  },
  params: {
    item_id: 2855,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 1185,
    level: 1
  }
}, 1);
pets[267] = createObject({
  b_i: 267,
  b_t: BASE_TYPE.PET,
  name: 'Mylanth [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2856,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1344,
    level: 1
  }
}, 1);
pets[268] = createObject({
  b_i: 268,
  b_t: BASE_TYPE.PET,
  name: 'Tesselth [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2857,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 1345,
    level: 1
  }
}, 1);
pets[269] = createObject({
  b_i: 269,
  b_t: BASE_TYPE.PET,
  name: 'Xirador [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2858,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 1346,
    level: 1
  }
}, 1);
pets[270] = createObject({
  b_i: 270,
  b_t: BASE_TYPE.PET,
  name: 'Xalanth [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2859,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 1347,
    level: 1
  }
}, 1);
pets[271] = createObject({
  b_i: 271,
  b_t: BASE_TYPE.PET,
  name: 'Dragonhorse [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2860,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 2748,
    level: 1
  }
}, 1);
pets[272] = createObject({
  b_i: 272,
  b_t: BASE_TYPE.PET,
  name: 'Kilin [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 2,
    y: 8
  },
  params: {
    item_id: 2861,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 2758,
    level: 1
  }
}, 1);
pets[273] = createObject({
  b_i: 273,
  b_t: BASE_TYPE.PET,
  name: 'Bies [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2862,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2773,
    level: 1
  }
}, 1);
pets[274] = createObject({
  b_i: 274,
  b_t: BASE_TYPE.PET,
  name: 'Garm [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2863,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2763,
    level: 1
  }
}, 1);
pets[275] = createObject({
  b_i: 275,
  b_t: BASE_TYPE.PET,
  name: 'Catoblepas [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2864,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2769,
    level: 1
  }
}, 1);
pets[276] = createObject({
  b_i: 276,
  b_t: BASE_TYPE.PET,
  name: 'Gegenees [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2865,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2771,
    level: 1
  }
}, 1);
pets[277] = createObject({
  b_i: 277,
  b_t: BASE_TYPE.PET,
  name: 'Amphisbaena [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2866,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2768,
    level: 1
  }
}, 1);
pets[278] = createObject({
  b_i: 278,
  b_t: BASE_TYPE.PET,
  name: 'Typhon [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2867,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2753,
    level: 1
  }
}, 1);
pets[279] = createObject({
  b_i: 279,
  b_t: BASE_TYPE.PET,
  name: 'Arachne [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2868,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2770,
    level: 1
  }
}, 1);
pets[280] = createObject({
  b_i: 280,
  b_t: BASE_TYPE.PET,
  name: 'Quetzalcoatl [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2869,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2774,
    level: 1
  }
}, 1);
pets[281] = createObject({
  b_i: 281,
  b_t: BASE_TYPE.PET,
  name: 'Bucentaur [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2870,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2767,
    level: 1
  }
}, 1);
pets[282] = createObject({
  b_i: 282,
  b_t: BASE_TYPE.PET,
  name: 'Ercinee [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 1,
    y: 8
  },
  params: {
    item_id: 2871,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 2749,
    level: 1
  }
}, 1);
pets[283] = createObject({
  b_i: 283,
  b_t: BASE_TYPE.PET,
  name: 'Jormungandr [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2872,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2759,
    level: 1
  }
}, 1);
pets[284] = createObject({
  b_i: 284,
  b_t: BASE_TYPE.PET,
  name: 'Aspidochelone [Egg]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ALCHEMY,
    x: 3,
    y: 8
  },
  params: {
    item_id: 2873,
    inventory_slots: 0,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 2772,
    level: 1
  }
}, 1);
pets[285] = createObject({
  b_i: 285,
  b_t: BASE_TYPE.PET,
  name: 'Santa\'s Sleigh [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 0,
    y: 3
  },
  params: {
    item_id: 2911,
    inventory_slots: 24,
    level: 1,
    eats: {
      29: 0.01
    },
    eat_interval: 10,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[286] = createObject({
  b_i: 286,
  b_t: BASE_TYPE.PET,
  name: 'Teddy Bear [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 1
  },
  params: {
    item_id: 3207,
    xp_required: 700000,
    inventory_slots: 10,
    next_pet_item_id: 3208,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[287] = createObject({
  b_i: 287,
  b_t: BASE_TYPE.PET,
  name: 'Fluffy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 8,
    y: 1
  },
  params: {
    item_id: 3208,
    xp_required: 1000000,
    inventory_slots: 12,
    next_pet_item_id: 3209,
    level: 2,
    eats: {
      494: 0.1,
      1368: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[288] = createObject({
  b_i: 288,
  b_t: BASE_TYPE.PET,
  name: 'Mr. Bear [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 0
  },
  params: {
    item_id: 3209,
    xp_required: 1300000,
    inventory_slots: 14,
    next_pet_item_id: 3210,
    level: 3,
    eats: {
      494: 0.05,
      1368: 0.1
    },
    eat_interval: 6,
    happiness: 48,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[289] = createObject({
  b_i: 289,
  b_t: BASE_TYPE.PET,
  name: 'Cuddle Bear [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 17,
    y: 0
  },
  params: {
    item_id: 3210,
    inventory_slots: 16,
    level: 4,
    eats: {
      494: 0.025,
      1368: 0.05
    },
    eat_interval: 6,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[290] = createObject({
  b_i: 290,
  b_t: BASE_TYPE.PET,
  name: 'Beaker [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 0,
    y: 2
  },
  params: {
    item_id: 3291,
    xp_required: 500000,
    inventory_slots: 7,
    next_pet_item_id: 3292,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[291] = createObject({
  b_i: 291,
  b_t: BASE_TYPE.PET,
  name: 'Sparkles [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 1,
    y: 2
  },
  params: {
    item_id: 3292,
    xp_required: 1200000,
    inventory_slots: 9,
    next_pet_item_id: 3293,
    level: 2,
    eats: {
      494: 0.1,
      1368: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[292] = createObject({
  b_i: 292,
  b_t: BASE_TYPE.PET,
  name: 'Buttercup [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 2,
    y: 2
  },
  params: {
    item_id: 3293,
    inventory_slots: 12,
    next_pet_item_id: 3294,
    requires_stone: !0,
    stones: 6,
    level: 3,
    eats: {
      494: 0.05,
      1368: 0.1
    },
    eat_interval: 6,
    happiness: 48,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[293] = createObject({
  b_i: 293,
  b_t: BASE_TYPE.PET,
  name: 'Easter Egger [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 18,
    y: 0
  },
  params: {
    item_id: 3294,
    inventory_slots: 18,
    level: 4,
    eats: {
      494: 0.025,
      1368: 0.05
    },
    eat_interval: 6,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[294] = createObject({
  b_i: 294,
  b_t: BASE_TYPE.PET,
  name: 'Kitten [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 2
  },
  params: {
    item_id: 3330,
    xp_required: 100000,
    inventory_slots: 0,
    next_pet_item_id: 3331,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[295] = createObject({
  b_i: 295,
  b_t: BASE_TYPE.PET,
  name: 'Cat [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 2
  },
  params: {
    item_id: 3331,
    inventory_slots: 3,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[296] = createObject({
  b_i: 296,
  b_t: BASE_TYPE.PET,
  name: 'Seraph [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 2,
    y: 0
  },
  params: {
    item_id: 3360,
    inventory_slots: 24,
    level: 1,
    eats: {
      1150: 0.15,
      225: 0.15
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[297] = createObject({
  b_i: 297,
  b_t: BASE_TYPE.PET,
  name: 'Christmas Gnome [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MISC2,
    x: 2,
    y: 5
  },
  params: {
    item_id: 3457,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3458,
    level: 1,
    eats: {
      30: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[298] = createObject({
  b_i: 298,
  b_t: BASE_TYPE.PET,
  name: 'Jolly Gnome [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MISC2,
    x: 3,
    y: 5
  },
  params: {
    item_id: 3458,
    inventory_slots: 21,
    level: 2,
    eats: {
      30: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[299] = createObject({
  b_i: 299,
  b_t: BASE_TYPE.PET,
  name: 'Radical Gnome [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MISC2,
    x: 4,
    y: 5
  },
  params: {
    item_id: 3459,
    inventory_slots: 18,
    level: 1,
    eats: {
      30: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[300] = createObject({
  b_i: 300,
  b_t: BASE_TYPE.PET,
  name: 'Jingle Gnome [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MISC2,
    x: 5,
    y: 5
  },
  params: {
    item_id: 3460,
    inventory_slots: 20,
    level: 1,
    eats: {
      30: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[301] = createObject({
  b_i: 301,
  b_t: BASE_TYPE.PET,
  name: 'Elder Jormungandr [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 0,
    y: 2,
    pos: {
      _x: 0,
      _y: - 24
    }
  },
  params: {
    item_id: 3521,
    inventory_slots: 20,
    level: 2,
    eats: {
      122: 0.05,
      222: 0.1
    },
    eat_interval: 50,
    happiness: 150,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[302] = createObject({
  b_i: 302,
  b_t: BASE_TYPE.PET,
  name: 'Elder Bucentaur [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 0,
    y: 4
  },
  params: {
    item_id: 3510,
    inventory_slots: 17,
    level: 2,
    eats: {
      1150: 0.1
    },
    eat_interval: 120,
    happiness: 240,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[303] = createObject({
  b_i: 303,
  b_t: BASE_TYPE.PET,
  name: 'Elder Typhon [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 3
  },
  params: {
    item_id: 3511,
    inventory_slots: 18,
    level: 2,
    eats: {
      275: 0.025,
      276: 0.05
    },
    eat_interval: 40,
    happiness: 200,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[304] = createObject({
  b_i: 304,
  b_t: BASE_TYPE.PET,
  name: 'Elder Arachne [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 12,
    y: 1
  },
  params: {
    item_id: 3512,
    inventory_slots: 17,
    level: 2,
    eats: {
      274: 0.015,
      275: 0.005
    },
    eat_interval: 120,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[305] = createObject({
  b_i: 305,
  b_t: BASE_TYPE.PET,
  name: 'Elder Aspidochelone [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 1,
    y: 2
  },
  params: {
    item_id: 3513,
    inventory_slots: 19,
    level: 2,
    eats: {
      283: 0.01,
      238: 0.02
    },
    eat_interval: 40,
    happiness: 460,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[306] = createObject({
  b_i: 306,
  b_t: BASE_TYPE.PET,
  name: 'Elder Gegenees [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 1,
    y: 4,
    pos: {
      _x: 0,
      _y: - 21
    }
  },
  params: {
    item_id: 3514,
    inventory_slots: 17,
    level: 2,
    eats: {
      1150: 0.1,
      239: 0.0025
    },
    eat_interval: 120,
    happiness: 280,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[307] = createObject({
  b_i: 307,
  b_t: BASE_TYPE.PET,
  name: 'Elder Quetzalcoatl [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 2,
    y: 2
  },
  params: {
    item_id: 3515,
    inventory_slots: 19,
    level: 2,
    eats: {
      1150: 0.1,
      239: 0.05
    },
    eat_interval: 120,
    happiness: 360,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[308] = createObject({
  b_i: 308,
  b_t: BASE_TYPE.PET,
  name: 'Elder Bies [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS4,
    x: 3,
    y: 2
  },
  params: {
    item_id: 3516,
    inventory_slots: 20,
    level: 2,
    eats: {
      268: 0.0025,
      267: 0.025
    },
    eat_interval: 50,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[309] = createObject({
  b_i: 309,
  b_t: BASE_TYPE.PET,
  name: 'Elder Garm [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 2,
    y: 3
  },
  params: {
    item_id: 3517,
    inventory_slots: 17,
    level: 2,
    eats: {
      8: 0.025,
      271: 0.01
    },
    eat_interval: 60,
    happiness: 120,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[310] = createObject({
  b_i: 310,
  b_t: BASE_TYPE.PET,
  name: 'Elder Rael [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 2,
    y: 4
  },
  params: {
    item_id: 3518,
    inventory_slots: 19,
    level: 2,
    eats: {
      225: 0.025,
      1150: 0.01
    },
    eat_interval: 120,
    happiness: 380,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[311] = createObject({
  b_i: 311,
  b_t: BASE_TYPE.PET,
  name: 'Elder Tesselth [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 3,
    y: 4
  },
  params: {
    item_id: 3519,
    inventory_slots: 14,
    level: 2,
    eats: {
      1150: 0.15,
      239: 0.025
    },
    eat_interval: 70,
    happiness: 210,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[312] = createObject({
  b_i: 312,
  b_t: BASE_TYPE.PET,
  name: 'Elder Xalanth [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 13,
    y: 1
  },
  params: {
    item_id: 3520,
    inventory_slots: 14,
    level: 2,
    eats: {
      275: 0.025,
      276: 0.05
    },
    eat_interval: 40,
    happiness: 200,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 2,
    likes: []
  }
}, 1);
pets[313] = createObject({
  b_i: 313,
  b_t: BASE_TYPE.PET,
  name: 'Lamb [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 2,
    y: 3
  },
  params: {
    item_id: 3740,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3741,
    level: 1,
    eats: {
      758: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[314] = createObject({
  b_i: 314,
  b_t: BASE_TYPE.PET,
  name: 'Sheep [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 3
  },
  params: {
    item_id: 3741,
    inventory_slots: 21,
    level: 2,
    eats: {
      758: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[315] = createObject({
  b_i: 315,
  b_t: BASE_TYPE.PET,
  name: 'Kid [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 3
  },
  params: {
    item_id: 3742,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3743,
    level: 1,
    eats: {
      758: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[316] = createObject({
  b_i: 316,
  b_t: BASE_TYPE.PET,
  name: 'Buck [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 5,
    y: 3
  },
  params: {
    item_id: 3743,
    inventory_slots: 21,
    level: 2,
    eats: {
      758: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[317] = createObject({
  b_i: 317,
  b_t: BASE_TYPE.PET,
  name: 'Cria [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 0,
    y: 3
  },
  params: {
    item_id: 3744,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3745,
    level: 1,
    eats: {
      758: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[318] = createObject({
  b_i: 318,
  b_t: BASE_TYPE.PET,
  name: 'Hembra [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 1,
    y: 3
  },
  params: {
    item_id: 3745,
    inventory_slots: 21,
    level: 2,
    eats: {
      758: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[319] = createObject({
  b_i: 319,
  b_t: BASE_TYPE.PET,
  name: 'Baby Sloth [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 9,
    y: 3
  },
  params: {
    item_id: 3787,
    xp_required: 700000,
    inventory_slots: 14,
    next_pet_item_id: 3788,
    level: 1,
    eats: {
      220: 0.15,
      228: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[320] = createObject({
  b_i: 320,
  b_t: BASE_TYPE.PET,
  name: 'Sloth [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 10,
    y: 3
  },
  params: {
    item_id: 3788,
    xp_required: 1500000,
    inventory_slots: 18,
    next_pet_item_id: 3789,
    level: 2,
    eats: {
      220: 0.1,
      228: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[321] = createObject({
  b_i: 321,
  b_t: BASE_TYPE.PET,
  name: 'Party Sloth [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 3
  },
  params: {
    item_id: 3789,
    inventory_slots: 22,
    level: 3,
    eats: {
      220: 0.05,
      228: 0.1
    },
    eat_interval: 6,
    happiness: 48,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[322] = createObject({
  b_i: 322,
  b_t: BASE_TYPE.PET,
  name: 'Baby Penguin [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 5,
    y: 2
  },
  params: {
    item_id: 3834,
    xp_required: 400000,
    inventory_slots: 16,
    next_pet_item_id: 3835,
    level: 1,
    eats: {
      8: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[323] = createObject({
  b_i: 323,
  b_t: BASE_TYPE.PET,
  name: 'Emperor Penguin [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 2
  },
  params: {
    item_id: 3835,
    inventory_slots: 22,
    level: 2,
    eats: {
      8: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[324] = createObject({
  b_i: 324,
  b_t: BASE_TYPE.PET,
  name: 'Black Labrador Retriever Puppy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 0,
    y: 4
  },
  params: {
    item_id: 3837,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3838,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[325] = createObject({
  b_i: 325,
  b_t: BASE_TYPE.PET,
  name: 'Black Labrador Retriever [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 1,
    y: 4
  },
  params: {
    item_id: 3838,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[326] = createObject({
  b_i: 326,
  b_t: BASE_TYPE.PET,
  name: 'Chocolate Labrador Retriever Puppy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 2,
    y: 4
  },
  params: {
    item_id: 3839,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3840,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[327] = createObject({
  b_i: 327,
  b_t: BASE_TYPE.PET,
  name: 'Chocolate Labrador Retriever [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 4
  },
  params: {
    item_id: 3840,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[328] = createObject({
  b_i: 328,
  b_t: BASE_TYPE.PET,
  name: 'Yellow Labrador Retriever Puppy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 3
  },
  params: {
    item_id: 3841,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3842,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[329] = createObject({
  b_i: 329,
  b_t: BASE_TYPE.PET,
  name: 'Yellow Labrador Retriever [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 3
  },
  params: {
    item_id: 3842,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[330] = createObject({
  b_i: 330,
  b_t: BASE_TYPE.PET,
  name: 'German Shepherd Puppy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 4
  },
  params: {
    item_id: 3843,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3844,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[331] = createObject({
  b_i: 331,
  b_t: BASE_TYPE.PET,
  name: 'German Shepherd [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 4,
    y: 4
  },
  params: {
    item_id: 3844,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[332] = createObject({
  b_i: 332,
  b_t: BASE_TYPE.PET,
  name: 'Bulldog Puppy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 8,
    y: 3
  },
  params: {
    item_id: 3845,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3846,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[333] = createObject({
  b_i: 333,
  b_t: BASE_TYPE.PET,
  name: 'Bulldog [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 9,
    y: 3
  },
  params: {
    item_id: 3846,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[334] = createObject({
  b_i: 334,
  b_t: BASE_TYPE.PET,
  name: 'Giant Ladybug Larvae [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 5,
    y: 4
  },
  params: {
    item_id: 3847,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3848,
    level: 1,
    eats: {
      220: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[335] = createObject({
  b_i: 335,
  b_t: BASE_TYPE.PET,
  name: 'Giant Ladybug [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 4
  },
  params: {
    item_id: 3848,
    inventory_slots: 21,
    level: 2,
    eats: {
      220: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[336] = createObject({
  b_i: 336,
  b_t: BASE_TYPE.PET,
  name: 'Duckling [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 2
  },
  params: {
    item_id: 3861,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3862,
    level: 1,
    eats: {
      760: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[337] = createObject({
  b_i: 337,
  b_t: BASE_TYPE.PET,
  name: 'Duck [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 8,
    y: 2
  },
  params: {
    item_id: 3862,
    inventory_slots: 21,
    level: 2,
    eats: {
      760: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[338] = createObject({
  b_i: 338,
  b_t: BASE_TYPE.PET,
  name: 'Gosling [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 9,
    y: 1
  },
  params: {
    item_id: 3863,
    xp_required: 400000,
    inventory_slots: 18,
    next_pet_item_id: 3864,
    level: 1,
    eats: {
      760: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[339] = createObject({
  b_i: 339,
  b_t: BASE_TYPE.PET,
  name: 'Goose [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 9,
    y: 2
  },
  params: {
    item_id: 3864,
    inventory_slots: 21,
    level: 2,
    eats: {
      760: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[340] = createObject({
  b_i: 340,
  b_t: BASE_TYPE.PET,
  name: 'Baby Sea Turtle [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 4
  },
  params: {
    item_id: 3998,
    xp_required: 400000,
    inventory_slots: 16,
    next_pet_item_id: 3999,
    level: 1,
    eats: {
      76: 0.05
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[341] = createObject({
  b_i: 341,
  b_t: BASE_TYPE.PET,
  name: 'Sea Turtle [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER2,
    x: 2,
    y: 1
  },
  params: {
    item_id: 3999,
    inventory_slots: 21,
    level: 2,
    eats: {
      76: 0.05
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[342] = createObject({
  b_i: 342,
  b_t: BASE_TYPE.PET,
  name: 'Baby Monkey [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 8,
    y: 4
  },
  params: {
    item_id: 4088,
    xp_required: 1500000,
    inventory_slots: 14,
    next_pet_item_id: 4089,
    level: 1,
    eats: {
      782: 0.08
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[343] = createObject({
  b_i: 343,
  b_t: BASE_TYPE.PET,
  name: 'Monkey [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 9,
    y: 4
  },
  params: {
    item_id: 4089,
    inventory_slots: 18,
    level: 2,
    eats: {
      782: 0.08
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[344] = createObject({
  b_i: 344,
  b_t: BASE_TYPE.PET,
  name: 'Baby Macaw [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 11,
    y: 3
  },
  params: {
    item_id: 4090,
    xp_required: 1500000,
    inventory_slots: 12,
    next_pet_item_id: 4091,
    level: 1,
    eats: {
      209: 0.05,
      782: 0.08
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[345] = createObject({
  b_i: 345,
  b_t: BASE_TYPE.PET,
  name: 'Macaw [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.HALLOWEEN,
    x: 1,
    y: 3
  },
  params: {
    item_id: 4091,
    inventory_slots: 22,
    level: 2,
    eats: {
      209: 0.05,
      782: 0.08
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[346] = createObject({
  b_i: 346,
  b_t: BASE_TYPE.PET,
  name: 'Baby Panda [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 12,
    y: 3
  },
  params: {
    item_id: 4122,
    xp_required: 1700000,
    inventory_slots: 12,
    next_pet_item_id: 4123,
    level: 1,
    eats: {
      1035: 0.1,
      266: 0.12
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[347] = createObject({
  b_i: 347,
  b_t: BASE_TYPE.PET,
  name: 'Panda [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.HALLOWEEN,
    x: 2,
    y: 3
  },
  params: {
    item_id: 4123,
    inventory_slots: 22,
    level: 2,
    eats: {
      1035: 0.1,
      266: 0.12
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[348] = createObject({
  b_i: 348,
  b_t: BASE_TYPE.PET,
  name: 'Flaminglet [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 13,
    y: 3
  },
  params: {
    item_id: 4124,
    xp_required: 1500000,
    inventory_slots: 12,
    next_pet_item_id: 4125,
    level: 1,
    eats: {
      8: 0.05,
      1368: 0.08
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[349] = createObject({
  b_i: 349,
  b_t: BASE_TYPE.PET,
  name: 'Flamingo [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.HALLOWEEN,
    x: 3,
    y: 3
  },
  params: {
    item_id: 4125,
    inventory_slots: 22,
    level: 2,
    eats: {
      8: 0.05,
      1368: 0.08
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[350] = createObject({
  b_i: 350,
  b_t: BASE_TYPE.PET,
  name: 'Pinky [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 0,
    y: 4
  },
  params: {
    item_id: 4158,
    xp_required: 900000,
    inventory_slots: 10,
    next_pet_item_id: 4159,
    level: 1,
    eats: {
      220: 0.15,
      228: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[351] = createObject({
  b_i: 351,
  b_t: BASE_TYPE.PET,
  name: 'Cocoon Pinky [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 1,
    y: 4
  },
  params: {
    item_id: 4159,
    inventory_slots: 16,
    next_pet_item_id: 4160,
    requires_stone: !0,
    stones: 2,
    level: 2,
    eats: {
      220: 0.1,
      228: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[352] = createObject({
  b_i: 352,
  b_t: BASE_TYPE.PET,
  name: 'Pinky the Butterfly [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 2,
    y: 4
  },
  params: {
    item_id: 4160,
    inventory_slots: 22,
    level: 3,
    eats: {
      220: 0.05,
      228: 0.1
    },
    eat_interval: 6,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[353] = createObject({
  b_i: 353,
  b_t: BASE_TYPE.PET,
  name: 'Joe [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 3,
    y: 4
  },
  params: {
    item_id: 4161,
    xp_required: 700000,
    inventory_slots: 10,
    next_pet_item_id: 4162,
    level: 1,
    eats: {
      220: 0.15,
      228: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[354] = createObject({
  b_i: 354,
  b_t: BASE_TYPE.PET,
  name: 'Cocoon Joe [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 1,
    y: 4
  },
  params: {
    item_id: 4162,
    inventory_slots: 16,
    next_pet_item_id: 4163,
    requires_stone: !0,
    stones: 2,
    level: 2,
    eats: {
      220: 0.1,
      228: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[355] = createObject({
  b_i: 355,
  b_t: BASE_TYPE.PET,
  name: 'Joe the Butterfly [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 4,
    y: 4
  },
  params: {
    item_id: 4163,
    inventory_slots: 22,
    level: 3,
    eats: {
      220: 0.05,
      228: 0.1
    },
    eat_interval: 6,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[356] = createObject({
  b_i: 356,
  b_t: BASE_TYPE.PET,
  name: 'Bob [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 5,
    y: 4
  },
  params: {
    item_id: 4164,
    xp_required: 900000,
    inventory_slots: 10,
    next_pet_item_id: 4165,
    level: 1,
    eats: {
      220: 0.15,
      228: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[357] = createObject({
  b_i: 357,
  b_t: BASE_TYPE.PET,
  name: 'Cocoon Bob [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 1,
    y: 4
  },
  params: {
    item_id: 4165,
    inventory_slots: 16,
    next_pet_item_id: 4166,
    requires_stone: !0,
    stones: 2,
    level: 2,
    eats: {
      220: 0.1,
      228: 0.2
    },
    eat_interval: 6,
    happiness: 46,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[358] = createObject({
  b_i: 358,
  b_t: BASE_TYPE.PET,
  name: 'Bob the Butterfly [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 6,
    y: 4
  },
  params: {
    item_id: 4166,
    inventory_slots: 22,
    level: 3,
    eats: {
      220: 0.05,
      228: 0.1
    },
    eat_interval: 6,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[359] = createObject({
  b_i: 359,
  b_t: BASE_TYPE.PET,
  name: 'Tadpole [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 0,
    y: 5
  },
  params: {
    item_id: 4199,
    xp_required: 4500000,
    inventory_slots: 10,
    next_pet_item_id: 4200,
    level: 1,
    eats: {
      213: 0.15,
      214: 0.3
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[360] = createObject({
  b_i: 360,
  b_t: BASE_TYPE.PET,
  name: 'Froglet [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 1,
    y: 5
  },
  params: {
    item_id: 4200,
    inventory_slots: 16,
    next_pet_item_id: 4201,
    requires_stone: !0,
    stones: 4,
    level: 2,
    eats: {
      213: 0.15,
      214: 0.3
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[361] = createObject({
  b_i: 361,
  b_t: BASE_TYPE.PET,
  name: 'Prince Charming [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER2,
    x: 5,
    y: 2
  },
  params: {
    item_id: 4201,
    inventory_slots: 22,
    level: 3,
    eats: {
      213: 0.15,
      214: 0.3
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[362] = createObject({
  b_i: 362,
  b_t: BASE_TYPE.PET,
  name: 'Gray Cerberus [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 15,
    y: 3
  },
  params: {
    item_id: 4267,
    inventory_slots: 16,
    level: 1,
    eats: {
      490: 0.1,
      492: 0.1
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      130000,
      7
    ],
    breeding_level: 45,
    likes: [
      {
        pet_id: 364,
        xp: 80,
        returns: [
          {
            pet_id: 363,
            base_chance: 0.03,
            max_chance: 0.03
          },
          {
            pet_id: 365,
            base_chance: 0.03,
            max_chance: 0.03
          }
        ]
      }
    ]
  }
}, 1);
pets[363] = createObject({
  b_i: 363,
  b_t: BASE_TYPE.PET,
  name: 'Shadow Cerberus [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 6,
    y: 0
  },
  params: {
    item_id: 4268,
    inventory_slots: 24,
    level: 1,
    eats: {
      70: 0.1,
      72: 0.12
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[364] = createObject({
  b_i: 364,
  b_t: BASE_TYPE.PET,
  name: 'Brown Cerberus [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 14,
    y: 3
  },
  params: {
    item_id: 4269,
    inventory_slots: 16,
    level: 1,
    eats: {
      490: 0.1,
      492: 0.05
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      130000,
      7
    ],
    breeding_level: 45,
    likes: []
  }
}, 1);
pets[365] = createObject({
  b_i: 365,
  b_t: BASE_TYPE.PET,
  name: 'Fire Cerberus [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 6,
    y: 1
  },
  params: {
    item_id: 4270,
    inventory_slots: 24,
    level: 1,
    eats: {
      245: 0.1,
      252: 0.5
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[366] = createObject({
  b_i: 366,
  b_t: BASE_TYPE.PET,
  name: 'Snow Bear [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 5,
    y: 5
  },
  params: {
    item_id: 4299,
    xp_required: 900000,
    inventory_slots: 12,
    next_pet_item_id: 4300,
    level: 1,
    eats: {
      1301: 0.5
    },
    eat_interval: 15,
    happiness: 30,
    insurance_cost: [
      380000,
      19
    ],
    breeding_level: 45,
    likes: [
      {
        pet_id: 366,
        xp: 200,
        returns: [
          {
            pet_id: 368,
            base_chance: 0.03,
            max_chance: 0.1
          }
        ]
      }
    ]
  }
}, 1);
pets[367] = createObject({
  b_i: 367,
  b_t: BASE_TYPE.PET,
  name: 'Giant Snow Bear [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 7,
    y: 0
  },
  params: {
    item_id: 4300,
    inventory_slots: 16,
    level: 2,
    eats: {
      285: 0.1,
      284: 0.05
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[368] = createObject({
  b_i: 368,
  b_t: BASE_TYPE.PET,
  name: 'Crystal Bear [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 5
  },
  params: {
    item_id: 4301,
    xp_required: 1200000,
    inventory_slots: 16,
    next_pet_item_id: 4302,
    level: 1,
    eats: {
      285: 0.1,
      284: 0.05
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 45,
    likes: []
  }
}, 1);
pets[369] = createObject({
  b_i: 369,
  b_t: BASE_TYPE.PET,
  name: 'Giant Crystal Bear [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 5,
    y: 4
  },
  params: {
    item_id: 4302,
    inventory_slots: 20,
    level: 2,
    eats: {
      285: 0.1,
      284: 0.05
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[370] = createObject({
  b_i: 370,
  b_t: BASE_TYPE.PET,
  name: 'Forest Deer [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 5
  },
  params: {
    item_id: 4303,
    xp_required: 1000000,
    inventory_slots: 14,
    next_pet_item_id: 4304,
    level: 1,
    eats: {
      228: 0.1,
      284: 0.05
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 45,
    likes: []
  }
}, 1);
pets[371] = createObject({
  b_i: 371,
  b_t: BASE_TYPE.PET,
  name: 'Crystal Deer [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 5
  },
  params: {
    item_id: 4304,
    inventory_slots: 18,
    level: 2,
    eats: {
      228: 0.1,
      284: 0.05
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[372] = createObject({
  b_i: 372,
  b_t: BASE_TYPE.PET,
  name: 'Devil Bat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 5
  },
  params: {
    item_id: 4305,
    xp_required: 1000000,
    inventory_slots: 14,
    next_pet_item_id: 4306,
    level: 1,
    eats: {
      80: 0.1,
      76: 0.05
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 45,
    likes: []
  }
}, 1);
pets[373] = createObject({
  b_i: 373,
  b_t: BASE_TYPE.PET,
  name: 'Giant Devil Bat [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 7,
    y: 1
  },
  params: {
    item_id: 4306,
    inventory_slots: 20,
    level: 2,
    eats: {
      82: 0.1,
      92: 0.5
    },
    eat_interval: 12,
    happiness: 50,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[374] = createObject({
  b_i: 374,
  b_t: BASE_TYPE.PET,
  name: 'Bee Larva [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 16,
    y: 3
  },
  params: {
    item_id: 4375,
    xp_required: 4500000,
    inventory_slots: 10,
    next_pet_item_id: 4376,
    level: 1,
    eats: {
      213: 0.15,
      214: 0.3
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[375] = createObject({
  b_i: 375,
  b_t: BASE_TYPE.PET,
  name: 'Pupa [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 17,
    y: 3
  },
  params: {
    item_id: 4376,
    inventory_slots: 15,
    next_pet_item_id: 4377,
    requires_stone: !0,
    stones: 1,
    level: 2,
    eats: {
      213: 0.15,
      214: 0.3
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[376] = createObject({
  b_i: 376,
  b_t: BASE_TYPE.PET,
  name: 'Adult Bee [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 18,
    y: 3
  },
  params: {
    item_id: 4377,
    inventory_slots: 20,
    level: 3,
    eats: {
      213: 0.15,
      214: 0.3
    },
    eat_interval: 15,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[377] = createObject({
  b_i: 377,
  b_t: BASE_TYPE.PET,
  name: 'Calico Kitten [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 7,
    y: 4
  },
  params: {
    item_id: 4380,
    xp_required: 1200000,
    inventory_slots: 8,
    next_pet_item_id: 4381,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[378] = createObject({
  b_i: 378,
  b_t: BASE_TYPE.PET,
  name: 'Calico Cat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 8,
    y: 4
  },
  params: {
    item_id: 4381,
    inventory_slots: 14,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[379] = createObject({
  b_i: 379,
  b_t: BASE_TYPE.PET,
  name: 'Tuxedo Kitten [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 9,
    y: 4
  },
  params: {
    item_id: 4382,
    xp_required: 1200000,
    inventory_slots: 8,
    next_pet_item_id: 4383,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[380] = createObject({
  b_i: 380,
  b_t: BASE_TYPE.PET,
  name: 'Tuxedo Cat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 10,
    y: 4
  },
  params: {
    item_id: 4383,
    inventory_slots: 14,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[381] = createObject({
  b_i: 381,
  b_t: BASE_TYPE.PET,
  name: 'Orange Tabby Kitten [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 11,
    y: 4
  },
  params: {
    item_id: 4384,
    xp_required: 1200000,
    inventory_slots: 8,
    next_pet_item_id: 4385,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[382] = createObject({
  b_i: 382,
  b_t: BASE_TYPE.PET,
  name: 'Orange Tabby Cat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 12,
    y: 4
  },
  params: {
    item_id: 4385,
    inventory_slots: 14,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[383] = createObject({
  b_i: 383,
  b_t: BASE_TYPE.PET,
  name: 'Siamese Kitten [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 13,
    y: 4
  },
  params: {
    item_id: 4386,
    xp_required: 1200000,
    inventory_slots: 8,
    next_pet_item_id: 4387,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[384] = createObject({
  b_i: 384,
  b_t: BASE_TYPE.PET,
  name: 'Siamese Cat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 14,
    y: 4
  },
  params: {
    item_id: 4387,
    inventory_slots: 14,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[385] = createObject({
  b_i: 385,
  b_t: BASE_TYPE.PET,
  name: 'Owlet [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 15,
    y: 4
  },
  params: {
    item_id: 4394,
    xp_required: 1000000,
    inventory_slots: 12,
    next_pet_item_id: 4395,
    level: 1,
    eats: {
      80: 0.2
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[386] = createObject({
  b_i: 386,
  b_t: BASE_TYPE.PET,
  name: 'Owl [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 16,
    y: 4
  },
  params: {
    item_id: 4395,
    inventory_slots: 16,
    level: 2,
    eats: {
      80: 0.2
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[387] = createObject({
  b_i: 387,
  b_t: BASE_TYPE.PET,
  name: 'Snail [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 17,
    y: 4
  },
  params: {
    item_id: 4396,
    xp_required: 700000,
    inventory_slots: 6,
    next_pet_item_id: 4397,
    level: 1,
    eats: {
      220: 0.05
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[388] = createObject({
  b_i: 388,
  b_t: BASE_TYPE.PET,
  name: 'Giant Snail [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 18,
    y: 4
  },
  params: {
    item_id: 4397,
    inventory_slots: 14,
    level: 2,
    eats: {
      220: 0.05,
      228: 0.2
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[389] = createObject({
  b_i: 389,
  b_t: BASE_TYPE.PET,
  name: 'Kitten Skeleton [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 2,
    y: 6
  },
  params: {
    item_id: 4408,
    xp_required: 200000,
    inventory_slots: 12,
    next_pet_item_id: 4409,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[390] = createObject({
  b_i: 390,
  b_t: BASE_TYPE.PET,
  name: 'Cat Skeleton [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 6
  },
  params: {
    item_id: 4409,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 4410,
    inventory_slots: 18,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[391] = createObject({
  b_i: 391,
  b_t: BASE_TYPE.PET,
  name: 'Hell Cat [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 6
  },
  params: {
    item_id: 4410,
    inventory_slots: 22,
    level: 3,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[392] = createObject({
  b_i: 392,
  b_t: BASE_TYPE.PET,
  name: 'Puppy Skeleton [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 5,
    y: 6
  },
  params: {
    item_id: 4411,
    xp_required: 200000,
    inventory_slots: 8,
    next_pet_item_id: 4412,
    level: 1,
    eats: {
      494: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[393] = createObject({
  b_i: 393,
  b_t: BASE_TYPE.PET,
  name: 'Dog Skeleton [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 6
  },
  params: {
    item_id: 4412,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 4413,
    inventory_slots: 12,
    level: 2,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[394] = createObject({
  b_i: 394,
  b_t: BASE_TYPE.PET,
  name: 'Hell Dog [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 6
  },
  params: {
    item_id: 4413,
    inventory_slots: 22,
    level: 3,
    eats: {
      8: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[395] = createObject({
  b_i: 395,
  b_t: BASE_TYPE.PET,
  name: 'Tree Stump [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 19,
    y: 4
  },
  params: {
    item_id: 4529,
    xp_required: 200000,
    inventory_slots: 16,
    next_pet_item_id: 4530,
    level: 1,
    eats: {
      1421: 0.2
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[396] = createObject({
  b_i: 396,
  b_t: BASE_TYPE.PET,
  name: 'Tree [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 0,
    y: 5
  },
  params: {
    item_id: 4530,
    xp_required: 500000,
    next_pet_item_id: 4531,
    inventory_slots: 18,
    level: 2,
    eats: {
      1421: 0.1
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[397] = createObject({
  b_i: 397,
  b_t: BASE_TYPE.PET,
  name: 'Christmas Tree [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 1,
    y: 5
  },
  params: {
    item_id: 4531,
    inventory_slots: 22,
    level: 3,
    eats: {
      1421: 0.05
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[398] = createObject({
  b_i: 398,
  b_t: BASE_TYPE.PET,
  name: 'Evil Tree Stump [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 2,
    y: 5
  },
  params: {
    item_id: 4532,
    xp_required: 200000,
    inventory_slots: 16,
    next_pet_item_id: 4533,
    level: 1,
    eats: {
      1422: 0.2
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[399] = createObject({
  b_i: 399,
  b_t: BASE_TYPE.PET,
  name: 'Evil Tree [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 3,
    y: 5
  },
  params: {
    item_id: 4533,
    xp_required: 500000,
    next_pet_item_id: 4534,
    inventory_slots: 18,
    level: 2,
    eats: {
      1422: 0.1
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[400] = createObject({
  b_i: 400,
  b_t: BASE_TYPE.PET,
  name: 'Evil Christmas Tree [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 4,
    y: 5
  },
  params: {
    item_id: 4534,
    inventory_slots: 22,
    level: 3,
    eats: {
      1422: 0.05
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[401] = createObject({
  b_i: 401,
  b_t: BASE_TYPE.PET,
  name: 'Ice Golem [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 19,
    y: 3
  },
  params: {
    item_id: 4535,
    xp_required: 3000000,
    inventory_slots: 10,
    next_pet_item_id: 4536,
    level: 1,
    eats: {
      2262: 0.5
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[402] = createObject({
  b_i: 402,
  b_t: BASE_TYPE.PET,
  name: 'Giant Ice Golem [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 9,
    y: 3
  },
  params: {
    item_id: 4536,
    inventory_slots: 16,
    level: 2,
    eats: {
      2262: 0.25
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[403] = createObject({
  b_i: 403,
  b_t: BASE_TYPE.PET,
  name: 'Royal Poodle Puppy [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 5,
    y: 5
  },
  params: {
    item_id: 4609,
    xp_required: 3000000,
    inventory_slots: 18,
    next_pet_item_id: 4610,
    level: 1,
    eats: {
      2262: 0.5
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[404] = createObject({
  b_i: 404,
  b_t: BASE_TYPE.PET,
  name: 'Royal Poodle [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 6,
    y: 5
  },
  params: {
    item_id: 4610,
    inventory_slots: 22,
    level: 2,
    eats: {
      2262: 0.25
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[405] = createObject({
  b_i: 405,
  b_t: BASE_TYPE.PET,
  name: 'Kit [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 9,
    y: 5
  },
  params: {
    item_id: 4613,
    xp_required: 1000000,
    inventory_slots: 12,
    next_pet_item_id: 4614,
    level: 1,
    eats: {
      80: 0.2
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[406] = createObject({
  b_i: 406,
  b_t: BASE_TYPE.PET,
  name: 'Raccoon [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 10,
    y: 5
  },
  params: {
    item_id: 4614,
    inventory_slots: 16,
    level: 2,
    eats: {
      80: 0.2
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[407] = createObject({
  b_i: 407,
  b_t: BASE_TYPE.PET,
  name: 'Hoglet [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 7,
    y: 5
  },
  params: {
    item_id: 4615,
    xp_required: 1000000,
    inventory_slots: 12,
    next_pet_item_id: 4616,
    level: 1,
    eats: {
      80: 0.2
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[408] = createObject({
  b_i: 408,
  b_t: BASE_TYPE.PET,
  name: 'Hedgehog [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 8,
    y: 5
  },
  params: {
    item_id: 4616,
    inventory_slots: 16,
    level: 2,
    eats: {
      80: 0.2
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[409] = createObject({
  b_i: 409,
  b_t: BASE_TYPE.PET,
  name: 'Baby Poodle [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 11,
    y: 5
  },
  params: {
    item_id: 4617,
    xp_required: 1000000,
    inventory_slots: 12,
    next_pet_item_id: 4618,
    level: 1,
    eats: {
      80: 0.2
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[410] = createObject({
  b_i: 410,
  b_t: BASE_TYPE.PET,
  name: 'Poodle [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 12,
    y: 5
  },
  params: {
    item_id: 4618,
    inventory_slots: 16,
    level: 2,
    eats: {
      80: 0.2
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[411] = createObject({
  b_i: 411,
  b_t: BASE_TYPE.PET,
  name: 'Silver Wolf Cub [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 1,
    y: 7
  },
  params: {
    item_id: 4643,
    xp_required: 800000,
    inventory_slots: 18,
    next_pet_item_id: 4644,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[412] = createObject({
  b_i: 412,
  b_t: BASE_TYPE.PET,
  name: 'Silver Wolf [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 0,
    y: 7
  },
  params: {
    item_id: 4644,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[413] = createObject({
  b_i: 413,
  b_t: BASE_TYPE.PET,
  name: 'Golden Wolf Cub [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 7
  },
  params: {
    item_id: 4645,
    xp_required: 800000,
    inventory_slots: 18,
    next_pet_item_id: 4646,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[414] = createObject({
  b_i: 414,
  b_t: BASE_TYPE.PET,
  name: 'Golden Wolf [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 2,
    y: 7
  },
  params: {
    item_id: 4646,
    inventory_slots: 21,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[415] = createObject({
  b_i: 415,
  b_t: BASE_TYPE.PET,
  name: 'Baby Pelican [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 0,
    y: 8
  },
  params: {
    item_id: 4735,
    xp_required: 800000,
    inventory_slots: 16,
    next_pet_item_id: 4736,
    level: 1,
    eats: {
      1368: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[416] = createObject({
  b_i: 416,
  b_t: BASE_TYPE.PET,
  name: 'Pelican [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 8,
    y: 3
  },
  params: {
    item_id: 4736,
    inventory_slots: 18,
    level: 2,
    eats: {
      1368: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[417] = createObject({
  b_i: 417,
  b_t: BASE_TYPE.PET,
  name: 'Fledgling [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 1,
    y: 8
  },
  params: {
    item_id: 4737,
    xp_required: 800000,
    inventory_slots: 16,
    next_pet_item_id: 4738,
    level: 1,
    eats: {
      490: 0.02
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[418] = createObject({
  b_i: 418,
  b_t: BASE_TYPE.PET,
  name: 'Toucan [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 8,
    y: 7
  },
  params: {
    item_id: 4738,
    inventory_slots: 18,
    level: 2,
    eats: {
      490: 0.02
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[419] = createObject({
  b_i: 419,
  b_t: BASE_TYPE.PET,
  name: 'Black Fire Ant [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 3,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4801,
    xp_required: 400000,
    inventory_slots: 8,
    next_pet_item_id: 4802,
    level: 1,
    eats: {
      204: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[420] = createObject({
  b_i: 420,
  b_t: BASE_TYPE.PET,
  name: 'Safari Ant [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 4,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4802,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 4803,
    inventory_slots: 12,
    level: 2,
    eats: {
      204: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[421] = createObject({
  b_i: 421,
  b_t: BASE_TYPE.PET,
  name: 'Red Harvester Ant [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 5,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4803,
    inventory_slots: 22,
    level: 3,
    eats: {
      204: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[422] = createObject({
  b_i: 422,
  b_t: BASE_TYPE.PET,
  name: 'False Widow [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 6,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4804,
    xp_required: 200000,
    inventory_slots: 8,
    next_pet_item_id: 4805,
    level: 1,
    eats: {
      273: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[423] = createObject({
  b_i: 423,
  b_t: BASE_TYPE.PET,
  name: 'Wolf Spider [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 7,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4805,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 4806,
    inventory_slots: 12,
    level: 2,
    eats: {
      273: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[424] = createObject({
  b_i: 424,
  b_t: BASE_TYPE.PET,
  name: 'Funnel Spider [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 8,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4806,
    inventory_slots: 22,
    level: 3,
    eats: {
      273: 0.25,
      271: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[425] = createObject({
  b_i: 425,
  b_t: BASE_TYPE.PET,
  name: 'Rotten King Pumpkin [Artifact]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 10,
    y: 3
  },
  params: {
    item_id: 4857,
    inventory_slots: 16,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 175,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[426] = createObject({
  b_i: 426,
  b_t: BASE_TYPE.PET,
  name: 'Old King Pumpkin [Artifact]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 11,
    y: 3
  },
  params: {
    item_id: 4858,
    inventory_slots: 16,
    level: 1,
    eats: {
      494: 0.15,
      1368: 0.3
    },
    eat_interval: 6,
    happiness: 32,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 175,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[427] = createObject({
  b_i: 427,
  b_t: BASE_TYPE.PET,
  name: 'Seraph [Artifact]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 5,
    y: 4,
    pos: {
      _x: 0,
      _y: - 9
    }
  },
  params: {
    item_id: 4869,
    inventory_slots: 24,
    level: 1,
    eats: {
      1150: 0.15,
      225: 0.15
    },
    eat_interval: 30,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[428] = createObject({
  b_i: 428,
  b_t: BASE_TYPE.PET,
  name: 'Christmas Sleigh [Common]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 0,
    y: 4
  },
  params: {
    item_id: 4888,
    xp_required: 500000,
    next_pet_item_id: 4889,
    inventory_slots: 14,
    level: 1,
    eats: {
      29: 0.01
    },
    eat_interval: 10,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[429] = createObject({
  b_i: 429,
  b_t: BASE_TYPE.PET,
  name: 'Christmas Sleigh [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 4
  },
  params: {
    item_id: 4889,
    xp_required: 2000000,
    next_pet_item_id: 4890,
    inventory_slots: 17,
    level: 2,
    eats: {
      29: 0.01
    },
    eat_interval: 10,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[430] = createObject({
  b_i: 430,
  b_t: BASE_TYPE.PET,
  name: 'Christmas Sleigh [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 2,
    y: 4
  },
  params: {
    item_id: 4890,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 4891,
    inventory_slots: 20,
    level: 3,
    eats: {
      29: 0.01
    },
    eat_interval: 10,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[431] = createObject({
  b_i: 431,
  b_t: BASE_TYPE.PET,
  name: 'Christmas Sleigh [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 3,
      y: 4
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 4,
      y: 4
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 5,
      y: 4
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 6,
      y: 4
    }
  ],
  params: {
    item_id: 4891,
    inventory_slots: 24,
    level: 4,
    eats: {
      29: 0.01
    },
    eat_interval: 10,
    happiness: 90,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 200,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[432] = createObject({
  b_i: 432,
  b_t: BASE_TYPE.PET,
  name: 'Ruby Kitten [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.PETS,
    x: 13,
    y: 5,
    pos: {
      _x: 0,
      _y: - 3
    }
  },
  params: {
    item_id: 4946,
    xp_required: 400000,
    inventory_slots: 8,
    next_pet_item_id: 4947,
    level: 1,
    eats: {
      197: 0.5
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[433] = createObject({
  b_i: 433,
  b_t: BASE_TYPE.PET,
  name: 'Ruby Cat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.MONSTER2,
    x: 7,
    y: 2,
    pos: {
      _x: 0,
      _y: - 3
    }
  },
  params: {
    item_id: 4947,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 4948,
    inventory_slots: 12,
    level: 2,
    eats: {
      197: 0.25
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[434] = createObject({
  b_i: 434,
  b_t: BASE_TYPE.PET,
  name: 'Shiny Ruby Cat [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.MONSTER2,
      x: 0,
      y: 3,
      pos: {
        _x: 0,
        _y: - 3
      }
    },
    {
      sheet: IMAGE_SHEET.MONSTER2,
      x: 1,
      y: 3,
      pos: {
        _x: 0,
        _y: - 3
      }
    },
    {
      sheet: IMAGE_SHEET.MONSTER2,
      x: 2,
      y: 3,
      pos: {
        _x: 0,
        _y: - 3
      }
    },
    {
      sheet: IMAGE_SHEET.MONSTER2,
      x: 3,
      y: 3,
      pos: {
        _x: 0,
        _y: - 3
      }
    }
  ],
  params: {
    item_id: 4948,
    inventory_slots: 22,
    level: 3,
    eats: {
      197: 0.1
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 300,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[435] = createObject({
  b_i: 435,
  b_t: BASE_TYPE.PET,
  name: 'Baby Ruby Wyvern [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 7,
    y: 4,
    pos: {
      _x: - 4,
      _y: 3
    }
  },
  params: {
    item_id: 4949,
    xp_required: 400000,
    inventory_slots: 8,
    next_pet_item_id: 4950,
    level: 1,
    eats: {
      197: 0.25
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[436] = createObject({
  b_i: 436,
  b_t: BASE_TYPE.PET,
  name: 'Ruby Wyvern [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 8,
    y: 4,
    pos: {
      _x: - 4,
      _y: - 1
    }
  },
  params: {
    item_id: 4950,
    requires_stone: !0,
    stones: 3,
    next_pet_item_id: 4951,
    inventory_slots: 12,
    level: 2,
    eats: {
      197: 0.15
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[437] = createObject({
  b_i: 437,
  b_t: BASE_TYPE.PET,
  name: 'Shiny Ruby Wyvern [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 9,
      y: 4,
      pos: {
        _x: - 4,
        _y: - 1
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 10,
      y: 4,
      pos: {
        _x: - 4,
        _y: - 1
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 11,
      y: 4,
      pos: {
        _x: - 4,
        _y: - 1
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 11,
      y: 5,
      pos: {
        _x: - 4,
        _y: - 1
      }
    }
  ],
  params: {
    item_id: 4951,
    inventory_slots: 23,
    level: 3,
    eats: {
      197: 0.05
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    animation_speed: 230,
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[438] = createObject({
  b_i: 438,
  b_t: BASE_TYPE.PET,
  name: 'White Rat [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 9,
    y: 7,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4957,
    inventory_slots: 5,
    level: 1,
    eats: {
      760: 0.1
    },
    eat_interval: 6,
    happiness: 28,
    insurance_cost: [
      27000,
      1
    ],
    breeding_level: 20,
    likes: [
      {
        pet_id: 439,
        xp: 200,
        returns: [
          {
            pet_id: 440,
            base_chance: 0.05,
            max_chance: 0.12
          }
        ]
      }
    ]
  }
}, 1);
pets[439] = createObject({
  b_i: 439,
  b_t: BASE_TYPE.PET,
  name: 'Black Rat [Rare]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 2,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4958,
    inventory_slots: 8,
    level: 1,
    eats: {
      760: 0.1
    },
    eat_interval: 6,
    happiness: 28,
    insurance_cost: [
      57000,
      3
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[440] = createObject({
  b_i: 440,
  b_t: BASE_TYPE.PET,
  name: 'Rabid Rat [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.ANIMALS,
    x: 9,
    y: 8,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 4959,
    inventory_slots: 12,
    level: 1,
    eats: {
      760: 0.1
    },
    eat_interval: 6,
    happiness: 28,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[441] = createObject({
  b_i: 441,
  b_t: BASE_TYPE.PET,
  name: 'Boulder [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 3,
    y: 5,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5029,
    xp_required: 1200000,
    inventory_slots: 0,
    next_pet_item_id: 5030,
    level: 1,
    eats: {
      31: 0.05
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[442] = createObject({
  b_i: 442,
  b_t: BASE_TYPE.PET,
  name: 'Pebbles [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS2,
    x: 1,
    y: 5,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5030,
    requires_stone: !0,
    stones: 6,
    next_pet_item_id: 5031,
    inventory_slots: 16,
    level: 2,
    eats: {
      31: 0.05,
      30: 0.03
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[443] = createObject({
  b_i: 443,
  b_t: BASE_TYPE.PET,
  name: 'Hrungnir [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 2,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 8,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 9,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 10,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    }
  ],
  params: {
    item_id: 5031,
    inventory_slots: 22,
    level: 3,
    eats: {
      31: 0.05,
      30: 0.03
    },
    eat_interval: 6,
    happiness: 12,
    animation_speed: 200,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[444] = createObject({
  b_i: 444,
  b_t: BASE_TYPE.PET,
  name: 'Undead Cobra [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 4,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 5,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 6,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 7,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    }
  ],
  params: {
    item_id: 5167,
    inventory_slots: 24,
    level: 1,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[445] = createObject({
  b_i: 445,
  b_t: BASE_TYPE.PET,
  name: 'Golden Scarab [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 0,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 1,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 2,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 3,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    }
  ],
  params: {
    item_id: 5168,
    inventory_slots: 24,
    level: 1,
    eats: {
      202: 0.01,
      485: 0.02
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[446] = createObject({
  b_i: 446,
  b_t: BASE_TYPE.PET,
  name: 'Soul Collector [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 0,
      y: 5,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 4,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 5,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 6,
      y: 6,
      pos: {
        _x: 0,
        _y: 4
      }
    }
  ],
  params: {
    item_id: 5192,
    inventory_slots: 20,
    level: 1,
    eats: {
      1138: 0.2
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[447] = createObject({
  b_i: 447,
  b_t: BASE_TYPE.PET,
  name: 'Abyss Strigoi [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 4,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 5,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 6,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 7,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    }
  ],
  params: {
    item_id: 5193,
    inventory_slots: 20,
    level: 1,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[448] = createObject({
  b_i: 448,
  b_t: BASE_TYPE.PET,
  name: 'Abyss Fenris [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 0,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 1,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 2,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS2,
      x: 3,
      y: 7,
      pos: {
        _x: 0,
        _y: 4
      }
    }
  ],
  params: {
    item_id: 5194,
    inventory_slots: 20,
    level: 1,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[449] = createObject({
  b_i: 449,
  b_t: BASE_TYPE.PET,
  name: 'Lunar Shadow Cat [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 19,
    y: 0,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5216,
    inventory_slots: 16,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 5224,
    level: 1,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[450] = createObject({
  b_i: 450,
  b_t: BASE_TYPE.PET,
  name: 'Adult Lunar Dragon [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 14,
    y: 1,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5217,
    inventory_slots: 22,
    level: 3,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[451] = createObject({
  b_i: 451,
  b_t: BASE_TYPE.PET,
  name: 'Young Lunar Dragon [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 15,
    y: 1,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5221,
    xp_required: 500000,
    inventory_slots: 14,
    next_pet_item_id: 5222,
    level: 1,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[452] = createObject({
  b_i: 452,
  b_t: BASE_TYPE.PET,
  name: 'Lunar Dragon [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 16,
    y: 1,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5222,
    xp_required: 1200000,
    inventory_slots: 18,
    next_pet_item_id: 5217,
    level: 2,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[453] = createObject({
  b_i: 453,
  b_t: BASE_TYPE.PET,
  name: 'Lunar Shadow Bear [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 17,
    y: 1,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5223,
    inventory_slots: 22,
    level: 3,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[454] = createObject({
  b_i: 454,
  b_t: BASE_TYPE.PET,
  name: 'Lunar Shadow Lion [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS3,
    x: 18,
    y: 1,
    pos: {
      _x: 0,
      _y: 4
    }
  },
  params: {
    item_id: 5224,
    inventory_slots: 20,
    requires_stone: !0,
    stones: 1,
    next_pet_item_id: 5223,
    level: 2,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[455] = createObject({
  b_i: 455,
  b_t: BASE_TYPE.PET,
  name: 'Reindeer [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.HALLOWEEN,
    x: 7,
    y: 3
  },
  params: {
    item_id: 5214,
    inventory_slots: 20,
    level: 1,
    eats: {
      757: 0.15,
      758: 0.3
    },
    eat_interval: 12,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[456] = createObject({
  b_i: 456,
  b_t: BASE_TYPE.PET,
  name: 'Green Slime [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.HALLOWEEN,
    x: 8,
    y: 3
  },
  params: {
    item_id: 5215,
    inventory_slots: 20,
    level: 1,
    eats: {
      757: 0.15,
      758: 0.3
    },
    eat_interval: 12,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[457] = createObject({
  b_i: 457,
  b_t: BASE_TYPE.PET,
  name: 'Withering Rose [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 6,
      y: 6,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 7,
      y: 6,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 8,
      y: 6,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 8,
      y: 7,
      pos: {
        _x: 0,
        _y: - 10
      }
    }
  ],
  params: {
    item_id: 5281,
    inventory_slots: 20,
    level: 1,
    eats: {
      221: 0.015,
      1424: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[458] = createObject({
  b_i: 458,
  b_t: BASE_TYPE.PET,
  name: 'Pup [Legendary]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 5,
    y: 5
  },
  params: {
    item_id: 5282,
    xp_required: 1400000,
    inventory_slots: 10,
    next_pet_item_id: 5283,
    level: 1,
    eats: {
      784: 0.1
    },
    eat_interval: 5,
    happiness: 5,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[459] = createObject({
  b_i: 459,
  b_t: BASE_TYPE.PET,
  name: 'Capybara [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS5,
    x: 5,
    y: 6
  },
  params: {
    item_id: 5283,
    inventory_slots: 16,
    level: 2,
    eats: {
      785: 0.25,
      784: 0.3
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[460] = createObject({
  b_i: 460,
  b_t: BASE_TYPE.PET,
  name: 'Nightmare Rabbit [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 7,
      y: 2,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 5,
      y: 7,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 6,
      y: 7,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 7,
      y: 7,
      pos: {
        _x: 0,
        _y: - 10
      }
    }
  ],
  params: {
    item_id: 5336,
    inventory_slots: 22,
    level: 1,
    eats: {
      232: 0.015,
      784: 0.05
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 230,
    likes: []
  }
}, 1);
pets[461] = createObject({
  b_i: 461,
  b_t: BASE_TYPE.PET,
  name: 'Easter Hunter [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 0,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 1,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 2,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 3,
      pos: {
        _x: 0,
        _y: - 10
      }
    }
  ],
  params: {
    item_id: 5337,
    inventory_slots: 20,
    level: 1,
    eats: {
      232: 0.015,
      784: 0.025
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 170,
    likes: []
  }
}, 1);
pets[462] = createObject({
  b_i: 462,
  b_t: BASE_TYPE.PET,
  name: 'Easter Pixie [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: [
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 4,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 5,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 6,
      pos: {
        _x: 0,
        _y: - 10
      }
    },
    {
      sheet: IMAGE_SHEET.BOSS5,
      x: 9,
      y: 7,
      pos: {
        _x: 0,
        _y: - 10
      }
    }
  ],
  params: {
    item_id: 5338,
    inventory_slots: 20,
    level: 1,
    eats: {
      233: 0.015
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    animation_speed: 150,
    likes: []
  }
}, 1);
pets[463] = createObject({
  b_i: 463,
  b_t: BASE_TYPE.PET,
  name: 'Hecate [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 5,
    y: 5,
    pos: {
      _x: - 2,
      _y: - 5
    }
  },
  params: {
    item_id: 5357,
    requires_stone: !0,
    stones: 2,
    next_pet_item_id: 5358,
    inventory_slots: 20,
    level: 1,
    eats: {
      217: 0.15
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[464] = createObject({
  b_i: 464,
  b_t: BASE_TYPE.PET,
  name: 'Elder Hecate [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 4,
    y: 5,
    pos: {
      _x: - 2,
      _y: - 5
    }
  },
  params: {
    item_id: 5358,
    inventory_slots: 24,
    level: 2,
    eats: {
      217: 0.05
    },
    eat_interval: 6,
    happiness: 12,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[465] = createObject({
  b_i: 465,
  b_t: BASE_TYPE.PET,
  name: 'Graves Overseer [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 1,
    y: 5,
    pos: {
      _x: 5,
      _y: - 3
    }
  },
  params: {
    item_id: 5409,
    requires_stone: !0,
    stones: 4,
    next_pet_item_id: 5410,
    inventory_slots: 20,
    level: 1,
    eats: {
      1421: 0.015,
      1424: 0.015
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1);
pets[466] = createObject({
  b_i: 466,
  b_t: BASE_TYPE.PET,
  name: 'Grim Reaper [Ancient]',
  type: OBJECT_TYPE.DUMMY,
  img: {
    sheet: IMAGE_SHEET.BOSS,
    x: 0,
    y: 5,
    pos: {
      _x: 5,
      _y: - 5
    }
  },
  params: {
    item_id: 5410,
    inventory_slots: 24,
    level: 2,
    eats: {
      1421: 0.01,
      1424: 0.01
    },
    eat_interval: 30,
    happiness: 60,
    insurance_cost: [
      1,
      1
    ],
    breeding_level: 1,
    likes: []
  }
}, 1)