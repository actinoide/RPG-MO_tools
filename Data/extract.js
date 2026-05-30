const { readFileSync, writeFileSync } = require("original-fs");

let source = readFileSync("./Data/rpg_mo_release.txt");

let extract_file_segment = (start, end, filename, preamble, trimEnd) => {
  let startIndex = source.indexOf(start);
  let endIndex = source.lastIndexOf(end);
  var result = Buffer.alloc(endIndex - startIndex);
  source.copy(result, 0, startIndex, endIndex);
  let content = result.toString();
  content = content.substring(0, content.length - trimEnd);
  writeFileSync(filename, preamble + content);
  return;
};


extract_file_segment(`item_base[0] = `, `var body_images = {};`, "./Data/item_bases.ts", `//@ts-nocheck
let item_base : item_base_struct[] = []
let ITEM_CATEGORY = {}
let BASE_TYPE = {}
let OBJECT_TYPE = {}
let HIT_ANIMATION = {}
let ACTIVITIES = {
  INSPECT: 'Inspect',
  CHOP: 'Chop',
  MINE: 'Mine',
  DIG: 'Dig',
  ATTACK: 'Attack',
  TRADE_WITH: 'Trade with',
  DUEL_WITH: 'Duel with',
  CATCH: 'Catch',
  COOK: 'Cook on',
  ACCESS: 'Access',
  USE: 'Use',
  MAKEOVER: 'Makeover',
  TALK: 'Talk',
  PET_MENU: 'Pet menu',
  RAKE: 'Rake',
  SEED: 'Seed',
  SPORE: 'Spore',
  HARVEST: 'Harvest',
  LOOT: 'Check loot',
  OPEN: 'Open',
  SLEEP: 'Sleep in',
  PERMISSIONS: 'Permissions',
  DESTROY: 'Destroy',
  ROTATE: 'Rotate',
  SET_TELEPORT: 'Set teleport',
  WRITE_ON: 'Write on',
  WATER: 'Water',
  TAG: 'Tag',
  PLAY_CARDS: 'Play cards'
}
function createObject(a, b) {
  var d = function (a, b) {
    return 'undefined' == typeof a ? b : a
  },
  e = {
    id: d(a.id, - 1),
    b_i: d(a.b_i, 0),
    b_t: d(a.b_t, BASE_TYPE.OBJECT),
    base: function (a) {
      return a ? BASE_TYPE[this.b_t][a] : BASE_TYPE[this.b_t][this.b_i]
    },
    i: d(a.i, - 1),
    j: d(a.j, - 1),
    map: d(a.map, void 0),
    params: d(a.params, {
    })
  };
  if (a && a.params && a.params.img_rotates) for (var g = 0; g <= a.params.img_rotates; g++) a['img_' + g] &&
  (e['img_' + g] = JSON.clone(a['img_' + g]));
  if (b && 1 == b) e = JSON.merge(
    e,
    {
      name: d(a.name, 'Name'),
      img: d(a.img, {
      }),
      type: d(a.type, 0),
      activities: d(a.activities, []),
      top: d(a.top, void 0),
      temp: d(a.temp, {
      }),
      fn: d(a.fn, {
      }),
      blocking: d(a.blocking, !0)
    }
  );
   else {
    g = e.base();
    e.name = d(a.name, g.name);
    e.img = d(a.img, g.img);
    e.img.x &&
    'object' == typeof e.img.x &&
    (
      e.img.x = 767 == e.b_i ? e.img.x[Math.floor(Math.min(dayInMonthPercent(), 0.99) * e.img.x.length)] : e.img.x[Math.floor(Math.random() * e.img.x.length)]
    );
    e.blocking = d(a.blocking, g.blocking);
    e.type = g.type;
    e.activities = d(a.activities, g.activities);
    if ( - 1 == e.id && e.b_t != BASE_TYPE.GROUND && 0 < e.activities.length) {
      if (editor_enabled) {
        for (var h = 1; 'undefined' != typeof objects_data[h]; ) h++;
        obj_id = h - 1
      }
      obj_id++;
      e.id = obj_id
    }
    e.b_t == BASE_TYPE.NPC &&
    (e.init = {}, e.init.i = e.i, e.init.j = e.j);
    e.top = d(a.top, g.top);
    e.temp = d(a.temp, g.temp);
    e.fn = function (a, b, d, e, g, h) {
      return 'undefined' == typeof this.base().fn[a.toLowerCase()] ? DEFAULT_FUNCTIONS[a.toLowerCase()](b, d, e, g, h) : this.base().fn[a.toLowerCase()](b, d, e, g, h)
    }
  }
  return e
}
JSON.merge = function (a, b) {
  var d = deepObjCopy(a),
  e;
  for (e in b) b.hasOwnProperty(e) &&
  (d[e] = b[e]);
  return d
};
function deepObjCopy(a) {
  if (null === a) return null;
  var b = {};
  if ('object' == typeof a && null != a) {
    'undefined' != typeof a.length &&
    (b = []);
    for (var d in a) 'object' == typeof a[d] ? b[d] = deepObjCopy(a[d]) : 'string' == typeof a[d] ? b[d] = a[d] : 'number' == typeof a[d] ? b[d] = a[d] : 'boolean' == typeof a[d] &&
    (1 == a[d] ? b[d] = !0 : b[d] = !1)
  }
  return b
}
function thousandSeperate(a) {
  return a.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
}
`, 0);

extract_file_segment("var IMAGE_SHEET = {", `function loadImage(a, b) {`, "./Data/image_sheets.ts", "", 0);

extract_file_segment(`object_base[0] = createObject({`, `  var KEY_ACTION = {`, "./Data/object_bases.ts", `//@ts-nocheck
let object_base:object_base_struct[] = []
let IMAGES = {}
let ground_base:any[] = []
let teleport_script = {
  use: function (a, b) {
    if (a.params && 'undefined' != typeof a.params.requires_one_from) {
      for (var d = !1, e = 0; e < a.params.requires_one_from.length; e++) Inventory.has_equipped(b, a.params.requires_one_from[e]) &&
      (d = !0, e = 9999);
      if (!d) return addChatText(
        _te('I need to be wearing something before I can enter'),
        null,
        COLOR.PINK,
        'cannot'
      ),
      !1
    }
    if (!Skills.requirements_met(skills[0], a)) return !1;
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (a.params && a.params.quest) {
        if (!PlayerQuests[a.params.quest].client(a)) return !1
      } else {
        if ('Ship' == a.name && 300 == current_map) return touch_hold_j = touch_hold_i = 0,
        touch_hold = !1,
        Popup.input_prompt(
          _ti('Who would you like to visit?') + ' ' + _ti('Leave empty for a random location.'),
          Carpentry.travel_to,
          'player_datalist'
        ),
        !0;
        if (a.params && a.params.ask_confirmation) return Popup.prompt(
          _ti('Are you sure?'),
          function () {
            Player.pre_teleport(players[0], a)
          },
          null_function
        ),
        !0
      }
      Player.pre_teleport(players[0], a)
    }
    return !0
  }
}
let DEFAULT_FUNCTIONS = {
  inspect: function (a, b, d) {
    if (!Timers.running('inspect')) {
      Timers.set('inspect', null_function, 500);
      b = 1338 == config.http_port ? ' i: ' + a.i + ' j:' + a.j : '';
      if (a.b_t == BASE_TYPE.NPC) if (a.type ==
      OBJECT_TYPE.SHOP) addChatText(
        'undefined' === typeof d ? _tn(a.base().name) + '(' + _tm('NPC') + ')' + b : d + b,
        null,
        COLOR.WHITE
      );
       else {
        var e = [
          _tn(a.base().name) + ' (' + FIGHT.calculate_monster_level(a.base()) + ') (' + a.base().temp.total_accuracy + _ti('Accuracy') [0] + ', ' + a.base().temp.total_strength + _ti('Strength') [0] + ', ' + a.base().temp.total_defense + _ti('Defense') [0] + ', ' + (
            a.base().temp.magic ? a.base().temp.magic + _ti('Magic') [0] + ', ' : ''
          ) + a.base().temp.health + _tm('HP') + ')'
        ];
        e.push(Monster.get_block_text(a.b_i));
        a.base().params.aggressive ?
        e.push(_tm('Aggressive')) : '';
        addChatText(
          'undefined' === typeof d ? e.join(' ').replace(/  +/g, ' ') + b : d + b,
          null,
          COLOR.WHITE
        )
      } else a.base().params &&
      a.base().params.desc ? addChatText(_ti(a.base().params.desc) + b, null, COLOR.WHITE) : a.base().fn &&
      a.base().fn.desc ? addChatText(a.base().fn.desc(a) + b, null, COLOR.WHITE) : a.params &&
      a.params.tombstone_name ? (
        d = a.params.tombstone_name,
        a.params.tombstone_year_from &&
        (
          d += ' (' + a.params.tombstone_year_from + ' - ' + a.params.tombstone_year_to + ')'
        ),
        addChatText(d, null, COLOR.WHITE)
      ) :
      addChatText(
        'undefined' === typeof d ? _tn(a.base().name) + b : d + b,
        null,
        COLOR.WHITE,
        'spam'
      );
      return !0
    }
  },
  'trade with': function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      shop_npc = a;
      Shop.activate_update();
      if (Timers.running('shop' + a.id)) return;
      Socket.send('shop_open', {
        target: a.id
      });
      Timers.set('shop' + a.id, null_function, 250)
    }
    return !0
  },
  'catch': function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('fish'),
        addChatText(
          _ti('You attempt to catch a fish...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        })
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  },
  'cook on': function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('cook'),
        addChatText(_ti('You attempt to cook...'), null, COLOR.YELLOW, 'attempt'),
        Socket.send('use_skill', {
          target_id: a.id
        }),
        Inventory.ignore()
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  },
  access: function (a, b) {
    selected = obj_g(a);
    if (
      needsProximity(b, a, 1, !0) &&
      hasClass(document.getElementById('chest'), 'hidden') &&
      (
        !Player.is_player_map(players[0].map) ||
        my_map(players[0].map)
      )
    ) if (
      chest_item_id = !1,
      chest_npc = a,
      object_base[a.b_i] &&
      object_base[a.b_i].params &&
      'undefined' !== typeof object_base[a.b_i].params.market_category_id
    ) Market.open_category_stall(object_base[a.b_i].params.market_category_id),
    last_chest_access = timestamp();
     else if (
      'undefined' == typeof last_chest_access ||
      100 < timestamp() - last_chest_access
    ) Socket.send('access_chest', {
      target_id: a.id
    }),
    last_chest_access = timestamp()
  },
  chop: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('woodcut'),
        addChatText(
          _ti('You attempt to cut down a tree...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        })
      ) : (
        'I think that I\\'m missing something.' == d.reason &&
        d.has_levels &&
        Inventory.has_equipped(b, 22) &&
        (d.reason = 'I think that I need a better tool.'),
        addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
      )
    }
    return !0
  },
  mine: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('mine'),
        addChatText(
          _ti('You attempt to mine the rock...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        })
      ) : (
        'I think that I\\'m missing something.' == d.reason &&
        d.has_levels &&
        Inventory.has_equipped(b, 23) &&
        (d.reason = 'I think that I need a better tool.'),
        addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
      )
    }
    return !0
  },
  dig: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('dig'),
        addChatText(
          _ti(
            40 == a.b_i ||
            523 == a.b_i ? 'You attempt to dig the sand...' : 'You attempt to dig the ground...'
          ),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        })
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  },
  attack: function (a, b) {
    selected = obj_g(a);
    if (Player.has_bow(b)) return Archery.force_use_archery(b, a);
    if (players[0].temp.target_id != a.id) {
      if (Timers.running('set_target')) return !0;
      Socket.send('set_target', {
        target: a.id
      });
      Timers.set('set_target', null_function, 100)
    }
    needsProximity(b, a, 1, !0, !0);
    return !0
  },
  'walk here': function (a) {
    selected = a;
    players[0].path = findPathFromTo(players[0], a, players[0]);
    return !0
  },
  makeover: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (Timers.running('makeover')) return;
      Makeover.last_npc_id = a.id;
      Makeover.open();
      Timers.set('makeover', null_function, 250)
    }
    return !0
  },
  rake: function (a, b) {
    selected = obj_g(a);
    !players[0].temp.busy &&
    needsProximity(b, a, 1, !0) &&
    (
      Inventory.has_equipped(b, 767) ||
      Inventory.has_equipped(b, 2807) ? (
        Music.sound_effect('rake'),
        addChatText(
          _ti('You attempt to rake the soil...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        players[0].temp.busy = !0,
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 1000),
        Socket.send('farming', {
          sub: 'rake',
          position: {
            i: a.i - 10,
            j: a.j - 10
          }
        })
      ) : addChatText(_te('I need a rake to do that.'), null, COLOR.PINK, 'cannot')
    );
    return !0
  },
  water: function (a, b, d) {
    selected = obj_g(a);
    if (!players[0].temp.busy && needsProximity(b, a, 1, !0)) {
      var e = Fungiculture.next_action(a);
      if ('Water' ==
      e.action) {
        if (!Inventory.get_watering_can_id(players[0])) return addChatText(_te('You need a watering can!'), null, COLOR.PINK, 'cannot');
        if (0 == players[0].temp.water) return addChatText(_te('You are out of water.'), null, COLOR.PINK, 'cannot');
        addChatText(_ti('You attempt to water...'), null, COLOR.YELLOW, 'attempt');
        players[0].temp.busy = !0;
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 2000);
        return Socket.send(
          'fungiculture',
          {
            sub: 'use_watering_can',
            position: {
              i: a.i - 10,
              j: a.j - 10
            }
          }
        )
      }
      if ('Fertilize' == e.action) return players[0].temp.busy = !0,
      setTimeout(function () {
        players[0].temp.busy = !1
      }, 2000),
      Socket.send(
        'fungiculture',
        {
          sub: 'fertilize',
          position: {
            i: a.i - 10,
            j: a.j - 10
          }
        }
      );
      if (40 == players[0].temp.inventory.length) return addChatText(_te('Your inventory is full!'), null, COLOR.PINK, 'cannot'),
      !0;
      if (e.error && 'need_watering_can' == e.error) return addChatText(
        _te(
          'You can\\'t harvest this mushroom. Revive it with a watering can.'
        ),
        null,
        COLOR.PINK,
        'cannot'
      ),
      !0;
      var e = a.base().params.duration - minutesPastDelta(a.params.secondstamp),
      g = a.params.fertilized;
      if (g && !d) {
        selected = !1;
        Popup.prompt(
          _ti(
            'This mushroom has been fertilized! Do you wish to continue harvesting?'
          ),
          function () {
            DEFAULT_FUNCTIONS.water(a, b, !0)
          },
          null_function
        );
        return
      }
      0 >= e &&
      !g ||
      g &&
      d ? (
        addChatText(_ti('You attempt to harvest...'), null, COLOR.YELLOW, 'attempt'),
        players[0].temp.busy = !0,
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 2000),
        Socket.send('fungiculture', {
          sub: 'harvest',
          position: {
            i: a.i - 10,
            j: a.j - 10
          }
        })
      ) : addChatText(
        _te(
          'I need to wait {time}.',
          {
            time: {
              format: '{count} minute',
              count: e
            }
          }
        ),
        null,
        COLOR.PINK,
        'cannot'
      )
    }
    return !0
  },
  spore: function (a, b) {
    selected = obj_g(a);
    if (!players[0].temp.busy && needsProximity(b, a, 1, !0)) {
      var d = Inventory.get_equipped_spore(b);
      d ? (
        addChatText(
          _ti('You attempt to plant a spore...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        players[0].temp.busy = !0,
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 1000),
        Socket.send(
          'fungiculture',
          {
            sub: 'spore',
            position: {
              i: a.i - 10,
              j: a.j - 10
            },
            item_id: d.b_i
          }
        )
      ) : addChatText(_te('I need a spore to do that.'), null, COLOR.PINK, 'cannot')
    }
    return !0
  },
  seed: function (a, b) {
    selected = obj_g(a);
    if (!players[0].temp.busy && needsProximity(b, a, 1, !0)) {
      var d = Inventory.get_equipped_seed(b);
      d ? (
        addChatText(
          _ti('You attempt to plant a seed...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        players[0].temp.busy = !0,
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 1000),
        Socket.send(
          'farming',
          {
            sub: 'seed',
            position: {
              i: a.i - 10,
              j: a.j - 10
            },
            item_id: d.b_i
          }
        )
      ) : addChatText(_te('I need a seed to do that.'), null, COLOR.PINK, 'cannot')
    }
    return !0
  },
  harvest: function (a, b, d) {
    selected = obj_g(a);
    if (!players[0].temp.busy && needsProximity(b, a, 1, !0)) {
      var e = Farming.next_action(a);
      if ('Water' == e.action) {
        if (0 == players[0].temp.water) return addChatText(_te('You are out of water.'), null, COLOR.PINK, 'cannot');
        addChatText(
          _ti('You attempt to water a plant...'),
          null,
          COLOR.YELLOW,
          'attempt'
        );
        players[0].temp.busy = !0;
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 2000);
        return Socket.send(
          'farming',
          {
            sub: 'use_watering_can',
            position: {
              i: a.i - 10,
              j: a.j - 10
            }
          }
        )
      }
      if ('Fertilize' == e.action) return players[0].temp.busy = !0,
      setTimeout(function () {
        players[0].temp.busy = !1
      }, 2000),
      Socket.send('farming', {
        sub: 'fertilize',
        position: {
          i: a.i - 10,
          j: a.j - 10
        }
      });
      if (40 == players[0].temp.inventory.length) return addChatText(_te('Your inventory is full!'), null, COLOR.PINK, 'cannot'),
      !0;
      if (e.error && 'need_watering_can' == e.error) return addChatText(
        _te(
          'You can\\'t harvest this plant. Revive it with a watering can.'
        ),
        null,
        COLOR.PINK,
        'cannot'
      ),
      !0;
      var e = a.base().params.duration - minutesPastDelta(a.params.secondstamp),
      g = a.params.fertilized;
      if (g && !d) {
        selected = !1;
        Popup.prompt(
          _ti(
            'This plant has been fertilized! Do you wish to continue harvesting?'
          ),
          function () {
            DEFAULT_FUNCTIONS.harvest(a, b, !0)
          },
          null_function
        );
        'undefined' != typeof Mods &&
        Mods.Farming.pauseQueue(!1, !1, !0);
        return
      }
      0 >= e &&
      !g ||
      g &&
      d ? (
        addChatText(
          _ti('You attempt to harvest a plant...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        players[0].temp.busy = !0,
        setTimeout(function () {
          players[0].temp.busy = !1
        }, 2000),
        Socket.send('farming', {
          sub: 'harvest',
          position: {
            i: a.i - 10,
            j: a.j - 10
          }
        })
      ) : addChatText(
        _te(
          'I need to wait {time}.',
          {
            time: {
              format: '{count} minute',
              count: e
            }
          }
        ),
        null,
        COLOR.PINK,
        'cannot'
      )
    }
    return !0
  },
  'check loot': function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (Timers.running('check_loot')) return;
      Socket.send('pvp_get_loots', {
        target_id: a.id
      });
      loot_master_id = a.id;
      Timers.set('check_loot', null_function, 250)
    }
    return !0
  },
  'access cabinet': function (a, b) {
    selected = obj_g(a);
    needsProximity(b, a, 1, !0) &&
    !Timers.running('check_cabinet') &&
    (
      last_cabinet = a,
      last_cabinet.map = current_map,
      Chest.cabinet_open(),
      Timers.set('check_cabinet', null_function, 250)
    )
  },
  'sleep in': function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0) && !b.temp.busy) {
      if (
        Player.is_player_map(players[0].map) &&
        !my_map(players[0].map)
      ) return;
      skills[0].health.current < skills[0].health.level ? (
        b.temp.busy = !0,
        Timers.set('player_using_skill' + b.id, function () {
          b.temp.busy = !1
        }, 2000),
        addChatText(_ti('You sleep in a bed...'), null, COLOR.YELLOW, 'attempt'),
        Socket.send('carpentry', {
          sub: 'sleep',
          i: a.i,
          j: a.j
        })
      ) : addChatText(_te('You are already fully healed'), null, COLOR.PINK, 'cannot')
    }
    return !0
  },
  permissions: function (a, b) {
    selected = obj_g(a);
    last_permissions = a;
    Player.is_player_map(players[0].map) &&
    !my_map(players[0].map) ||
    Carpentry.permissions_open()
  },
  'set teleport': function (a, b) {
    selected = obj_g(a);
    last_teleport = a;
    Player.is_player_map(players[0].map) &&
    !my_map(players[0].map) ||
    Carpentry.teleporter_open()
  },
  'play cards': function (a, b) {
    selected = obj_g(a);
    needsProximity(b, a, 1, !0) &&
    !Timers.running('play_cards') &&
    (
      Deck.last_table = {
        i: a.i,
        j: a.j,
        map: a.map
      },
      Deck.request_join(),
      Timers.set('play_cards', null_function, 1000)
    )
  },
  tag: function (a, b) {
    selected = obj_g(a);
    last_tombstone = a;
    Player.is_player_map(players[0].map) &&
    !my_map(players[0].map) ||
    Carpentry.tag_dialog()
  },
  'write on': function (a, b) {
    selected = obj_g(a);
    last_tombstone = a;
    Player.is_player_map(players[0].map) &&
    !my_map(players[0].map) ||
    Carpentry.tombstone_dialogs()
  },
  'access mailbox': function (a, b) {
    selected = obj_g(a);
    needsProximity(b, a, 1, !0) &&
    (
      last_mailbox = a,
      Mailbox.request(),
      delete unread_mailboxes[Mailbox.get_position_prefix(current_map) + a.i + '-' + a.j],
      updateObjectImage(a)
    )
  },
  rotate: function (a, b) {
    selected = obj_g(a);
    Timers.running('rotate_obj') ||
    (
      Timers.set('rotate_obj', null_function, 500),
      Socket.send(
        'carpentry',
        {
          sub: 'rotate',
          position: {
            i: a.i - (Player.is_player_map(current_map) ? 10 : 0),
            j: a.j - (Player.is_player_map(current_map) ? 10 : 0)
          }
        }
      )
    )
  }
}
let storage_description = function (a) {
  return (my_island() || my_dungeon() || my_premium_map()) &&
  a.params &&
  a.params.tombstone_name ? a.params.tombstone_name : ''
};
let JSON = {
 clone : function (a) {
  return deepObjCopy(a)
},
 merge : function (a, b) {
  var d = deepObjCopy(a),
  e;
  for (e in b) b.hasOwnProperty(e) &&
  (d[e] = b[e]);
  return d
}};
let resource_harvest = {
  harvest: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (Timers.running('harvest')) return;
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('rake'),
        addChatText(_ti('You attempt to harvest...'), null, COLOR.YELLOW, 'attempt'),
        Socket.send('use_skill', {
          target_id: a.id
        }),
        Timers.set('harvest', null_function, 1000)
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  }
}
let bush_harvest = {
  harvest: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (Timers.running('bush_harvest')) return;
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('rake'),
        addChatText(
          _ti('You attempt to harvest a plant...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        }),
        Timers.set('bush_harvest', null_function, 1000)
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  }
}
let beehive_harvest = {
  harvest: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (Timers.running('beehive_harvest')) return;
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('rake'),
        addChatText(
          _ti('You attempt to harvest a beehive...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        }),
        Timers.set('beehive_harvest', null_function, 1000)
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  }
}
let debris_remove = {
  harvest: function (a, b) {
    selected = obj_g(a);
    if (needsProximity(b, a, 1, !0)) {
      if (Timers.running('debris_remove')) return;
      var d = Skills.can_perform(b, a.id);
      d.status ? (
        Music.sound_effect('rake'),
        addChatText(
          _ti('You attempt to remove debris...'),
          null,
          COLOR.YELLOW,
          'attempt'
        ),
        Socket.send('use_skill', {
          target_id: a.id
        }),
        Timers.set('debris_remove', null_function, 1000)
      ) : addChatText(_te(d.reason), null, COLOR.PINK, 'cannot')
    }
    return !0
  }
}
let destroy_br_script = function (a, b) {
  on_map[a.map][a.i][a.j] = !1;
  node_graphs[a.map].nodes[a.i][a.j].type = 1;
  return settings.update_base = !0
}
`, 7);

extract_file_segment(`npc_base[0] = createObject({`, `for (i = 0; i < npc_base.length; i++);`, "./Data/npc_bases.ts", `//@ts-nocheck
let npc_base:any[] = []
let cow_image = {
  sheet: IMAGE_SHEET.ANIMALS,
  x: 3,
  y: 0
};
 `, 0);

extract_file_segment("var mining_requires_one_from = [", "teleport_script = {", "./Data/mining_scripts.ts", "", 3);

extract_file_segment("FORGE_FORMULAS = {", "Market = {", "./Data/forge_formulas.ts", "let ", 3);

extract_file_segment("FLETCHING_FORMULAS = {", "FLETCHING_FORMULA_IDS = {", "./Data/fletching_formulas.ts", "let ", 3);

extract_file_segment("pets[1] = createObject({", "function copyPetLikes() {", "./Data/pet_bases.ts", `//@ts-nocheck
let pets:any[]=[];
`, 3);