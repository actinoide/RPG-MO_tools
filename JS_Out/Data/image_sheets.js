"use strict";
var IMAGE_SHEET = {
    FIRST: '1',
    1: {
        url: 'sheet/dgiso32_anvil.png',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    NEWLAND: '2',
    2: {
        url: 'sheet/ground.png',
        tile_width: 54,
        tile_height: 34,
        filters: !1
    },
    ACTIONS: '3',
    3: {
        url: 'sheet/townactions.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    GUI: '4',
    4: {
        url: 'sheet/gui.png',
        tile_width: 854,
        tile_height: 28,
        filters: !1
    },
    WEAPONS: '5',
    5: {
        url: 'sheet/dgweapon32.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ARMOR: '6',
    6: {
        url: 'sheet/dg_armor32.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    FOOD: '7',
    7: {
        url: 'sheet/dg_food32.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    TOOLS: '8',
    8: {
        url: 'sheet/tools.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    FISH: '9',
    9: {
        url: 'sheet/fish_new32.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MISC: '10',
    10: {
        url: 'sheet/dgmisc32.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    JEWELRY: '11',
    11: {
        url: 'sheet/dg_jewls32.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    BIG_STUFF: '12',
    12: {
        url: 'sheet/big_stuff.png',
        tile_width: 54,
        tile_height: 156,
        filters: !1
    },
    DRAGONS: '13',
    13: {
        url: 'sheet/dg_dragon32.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MONSTER732: '14',
    14: {
        url: 'sheet/dg_monster732.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    UNIQUES: '15',
    15: {
        url: 'sheet/dg_uniques32.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ALCHEMY: '16',
    16: {
        url: 'sheet/alchemyitems2.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MONSTER532: '17',
    17: {
        url: 'sheet/dg_monster532.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MONSTER332: '18',
    18: {
        url: 'sheet/dg_monster332.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    HEADS: '19',
    19: {
        url: 'sheet/wearable/heads.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    FACIAL_HAIR: '20',
    20: {
        url: 'sheet/wearable/facial_hair.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    BODIES: '21',
    21: {
        url: 'sheet/wearable/bodys.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    PANTS: '22',
    22: {
        url: 'sheet/wearable/pants.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    CAPES: '23',
    23: {
        url: 'sheet/wearable/capes.png',
        tile_width: 64,
        tile_height: 64,
        filters: !1
    },
    LEFT_HANDS: '24',
    24: {
        url: 'sheet/wearable/left_hands.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    RIGHT_HANDS: '25',
    25: {
        url: 'sheet/wearable/right_hands.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    SHIELDS: '26',
    26: {
        url: 'sheet/wearable/shields.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    WEPS: '27',
    27: {
        url: 'sheet/wearable/weapons.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    HELMETS: '28',
    28: {
        url: 'sheet/wearable/helmets.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    BOOTS: '29',
    29: {
        url: 'sheet/wearable/boots.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MAGIC: '30',
    30: {
        url: 'sheet/magic.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MSPELL: '31',
    31: {
        url: 'sheet/mspell.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    SICOS: '32',
    32: {
        url: 'sheet/sicos.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MWEAPONS: '33',
    33: {
        url: 'sheet/mweapons.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ANIMALS: '34',
    34: {
        url: 'sheet/animals.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    NEWWORLD: '35',
    35: {
        url: 'sheet/newworld2.png',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    NEWLAND_TOPS: '36',
    36: {
        url: 'sheet/ground_tops.png',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    BOSS: '37',
    37: {
        url: 'sheet/boss.png',
        tile_width: 64,
        tile_height: 96,
        filters: !1
    },
    PETS: '38',
    38: {
        url: 'sheet/pets.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    POTS_CRATES: '39',
    39: {
        url: 'sheet/pots_crates.png',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    BIG_PYRAMID: '40',
    40: {
        url: 'sheet/big_pyramid.gif',
        tile_width: 576,
        tile_height: 335,
        filters: !1
    },
    HOUSE: '41',
    41: {
        url: 'sheet/house.png',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    HOUSE_INV: '42',
    42: {
        url: 'sheet/house_inv.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    FARMING_PRO: '43',
    43: {
        url: 'sheet/farming_products.png',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    WEPS2: '44',
    44: {
        url: 'sheet/wearable/weapons2h.png',
        tile_width: 46,
        tile_height: 46,
        filters: !1
    },
    HALLOWEEN: '45',
    45: {
        url: 'sheet/halloween.png',
        tile_width: 64,
        tile_height: 96,
        filters: !1
    },
    NEWLAND2: '46',
    46: {
        url: 'sheet/ground2.gif',
        tile_width: 54,
        tile_height: 34,
        filters: !1
    },
    CATHEDRAL: '47',
    47: {
        url: 'sheet/cathedral.png',
        tile_width: 596,
        tile_height: 544,
        filters: !1
    },
    NEWWORLD3: '48',
    48: {
        url: 'sheet/newworld3.gif',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    BOSS2: '49',
    49: {
        url: 'sheet/boss2.png',
        tile_width: 64,
        tile_height: 96,
        filters: !1
    },
    BOSS3: '50',
    50: {
        url: 'sheet/boss3.png',
        tile_width: 64,
        tile_height: 96,
        filters: !1
    },
    BOSS4: '51',
    51: {
        url: 'sheet/boss4.png',
        tile_width: 64,
        tile_height: 96,
        filters: !1
    },
    MISC2: '52',
    52: {
        url: 'sheet/dgmisc2.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MISC3: '53',
    53: {
        url: 'sheet/dgmisc3.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MISC4: '54',
    54: {
        url: 'sheet/dgmisc4.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    MISC5: '55',
    55: {
        url: 'sheet/dgmisc5.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ARMOR2: '56',
    56: {
        url: 'sheet/dg_armor2.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    WEAPONS2: '57',
    57: {
        url: 'sheet/dgweapon2.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    LEFT_HANDS_FEMALE: '58',
    58: {
        url: 'sheet/wearable/left_hands_female.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    RIGHT_HANDS_FEMALE: '59',
    59: {
        url: 'sheet/wearable/right_hands_female.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ARROWS: '60',
    60: {
        url: 'sheet/arrows.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ARROWS_: '61',
    61: {
        url: 'sheet/wearable/arrows.gif',
        tile_width: 20,
        tile_height: 20,
        filters: !1
    },
    ARCHERY: '62',
    62: {
        url: 'sheet/archery.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    ARCH: '63',
    63: {
        url: 'sheet/wearable/archery.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    HOUSE_INV2: '64',
    64: {
        url: 'sheet/house_inv2.gif',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    BOSS5: '65',
    65: {
        url: 'sheet/boss5.png',
        tile_width: 64,
        tile_height: 96,
        filters: !1
    },
    BOX_SETS: '66',
    66: {
        url: 'sheet/box_sets.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    BODIES_F: '67',
    67: {
        url: 'sheet/wearable/bodys_f.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    PANTS_F: '68',
    68: {
        url: 'sheet/wearable/pants_f.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    HELMETS_F: '69',
    69: {
        url: 'sheet/wearable/helmets_f.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1
    },
    FARMING_PRO2: '70',
    70: {
        url: 'sheet/farming_products2.gif',
        tile_width: 54,
        tile_height: 49,
        filters: !1
    },
    MONSTER2: '71',
    71: {
        url: 'sheet/dg_monster2.png',
        tile_width: 46,
        tile_height: 46,
        filters: !1
    },
    CNMAP: '72',
    72: {
        url: 'sheet/cn_map.gif',
        tile_width: 196,
        tile_height: 324,
        filters: !1
    },
    BUBBLES: '73',
    73: {
        url: 'sheet/water_bubbles.png',
        tile_width: 32,
        tile_height: 32,
        filters: !1,
        load_on_demand: !0
    },
    PURGATORY_ANIM1: '74',
    74: {
        url: 'sheet/purgatory_anim1.png',
        tile_width: 20,
        tile_height: 48,
        filters: !1,
        load_on_demand: !0
    },
    PURGATORY_ANIM2: '75',
    75: {
        url: 'sheet/purgatory_anim2.png',
        tile_width: 40,
        tile_height: 29,
        filters: !1,
        load_on_demand: !0
    },
    SAND_ANIM: '76',
    76: {
        url: 'sheet/sand_anim.png',
        tile_width: 39,
        tile_height: 9,
        filters: !1,
        load_on_demand: !0
    },
    LEAF_ANIM: '77',
    77: {
        url: 'sheet/leaf_anim.png',
        tile_width: 40,
        tile_height: 43,
        filters: !1,
        load_on_demand: !0
    },
    SNOW_ANIM: '78',
    78: {
        url: 'sheet/snow_anim.png',
        tile_width: 43,
        tile_height: 37,
        filters: !1,
        load_on_demand: !0
    },
    RAT_ANIM: '79',
    79: {
        url: 'sheet/rat_anim.png',
        tile_width: 32,
        tile_height: 22,
        filters: !1,
        load_on_demand: !0
    },
    LAVA_ANIM: '80',
    80: {
        url: 'sheet/lava_anim.png',
        tile_width: 40,
        tile_height: 28,
        filters: !1,
        load_on_demand: !0
    },
    PIXIE_ANIM: '81',
    81: {
        url: 'sheet/pixie_anim.png',
        tile_width: 54,
        tile_height: 40,
        filters: !1,
        load_on_demand: !0
    },
    MUSHROOM_ANIM: '82',
    82: {
        url: 'sheet/mushroom_anim.png',
        tile_width: 35,
        tile_height: 27,
        filters: !1,
        load_on_demand: !0
    }
};
