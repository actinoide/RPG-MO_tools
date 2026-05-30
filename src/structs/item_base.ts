interface item_base_struct {
  b_i: number,//seems to be the items id
  b_t: string,//item category
  name: string,
  img: {
    sheet: string,
    x: number,
    y: number;
  },
  params: {
    results: result[],
    wearable: boolean,
    visible: {
      left_hand: number,
      weapon: number,
      right_hand: number,
      shield: number,
      body: number,
      helmet: number,
      hands: number,
      boots: number,
      cape: number,

    },
    slot: number,
    armor: number,
    magic: number,
    aim: number,
    archery: number,
    power: number,
    speed: number,

    min_accuracy: number,
    min_strength: number,
    min_defense: number,
    min_magic: number,
    min_health: number,
    min_archery: number,
    min_woodcutting: number,
    min_forging: number,
    min_mining: number,
    min_wizardry: number,
    min_fishing: number,
    min_fletching: number,
    min_cooking: number,
    min_jewelry: number,
    min_farming: number,
    min_breeding: number,
    min_alchemy: number,
    min_carpentry: number,
    min_fungiculture: number,

    disable_slot: number,
    price: number,
    heal: number,
    enchant_id: number,
    no_present: boolean,
    att_anim: string,
    farming_id: number,
    fungiculture_id: number,
    duration: number;
  };
}