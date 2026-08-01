let test = document.getElementById("test") as HTMLDivElement;
let static_content_container = document.getElementById("static_content_container") as HTMLDivElement;
let table_content_container = document.getElementById("table_content_container") as HTMLDivElement;
let menu_button_array = Array.from(document.getElementsByClassName("menu-button") as HTMLCollectionOf<HTMLButtonElement>);
let menu_div_array = Array.from(document.getElementsByClassName("menu-div") as HTMLCollectionOf<HTMLDivElement>);


let image_sheet_address = "https://data.mo.ee/";
let highscore_data_address = "https://rpg-de2.mo.ee/playerskills";

let player_highscore_data: { player: string, board: string, score: number, position: number, last_score: number, last_position: number; }[] | null = null;

menu_button_array.forEach((menu_button) => {
  menu_button.addEventListener("click", () => {
    let menu_div = menu_div_array[menu_button_array.indexOf(menu_button)];
    menu_button.classList.toggle("menu-button-active");
    menu_button_array.forEach((button) => {
      if (button.id != menu_button.id && button.classList.contains("menu-button-active")) {
        button.classList.toggle("menu-button-active");
        menu_div_array[menu_button_array.indexOf(button)].style.maxHeight = "0px";
      }
    });
    if (menu_div.style.maxHeight == "0px") {
      menu_div.style.maxHeight = menu_div.scrollHeight.toString() + "px";
    } else {
      menu_div.style.maxHeight = "0px";
    }
  });
});

let total_exp_for_level = (level: number) => {
  return Math.round(50 * (Math.pow(1.11, level - 1) - 1) / (1.11 - 1));
};

let level_from_exp = (xp: number) => {
  return Math.floor(Math.log(xp * (1.11 - 1) / 50 + 1) / (Math.log(1.11)) + 1);
};

let calculate_success = (base_chance: number, max_chance: any, level_required: number, level: number): number => {
  return Math.round(10000 *
    ((level_required <= level) ? //if level isnt sufficient return 0
      (Math.min(base_chance + 0.01 * (level - level_required), //calculate actual success rate
        (typeof max_chance === "number" ? max_chance : 1))) : 0)) / 10000;
};

let get_image_div = (id: number) => {
  let image_string = "<div style = \" width:32px; height:32px;";
  //@ts-ignore
  let item_sheet = IMAGE_SHEET[item_base[id].img.sheet];
  image_string += "background-image: url(" + image_sheet_address + item_sheet.url + "); background-position-x:-" + item_base[id].img.x * item_sheet.tile_width + "px; background-position-y:-" + item_base[id].img.y * item_sheet.tile_height + "px;float:left;\"";
  image_string += "title=\"" + item_base[id].name + "\"";
  image_string += "></div>";
  return image_string;
};

let get_stored_level = async (skill: string): Promise<number> => {
  if (player_highscore_data == null) {
    let cookie = await cookieStore.get("player-name");
    if (cookie && cookie.value) {
      let reply = await fetch(highscore_data_address + "?n=" + cookie.value);
      if (reply.ok) {
        player_highscore_data = await reply.json();
        if (player_highscore_data == null) return -1;
        let board = player_highscore_data.find((score) => {
          if (score.board == skill) return true;
        });
        if (!board) return -1;
        return board.score;
      }
    }
  } else {
    let board = player_highscore_data.find((score) => {
      if (score.board == skill) return true;
    });
    if (!board) return -1;
    return board.score;
  }
  return -1;
};

window.addEventListener("DOMContentLoaded", (ev) => {
  if (window.location.hash == "") return;
  update_content();
});
window.addEventListener("hashchange", (ev) => {
  update_content();
});

let update_content = () => {
  static_content_container.innerHTML = "";
  table_content_container.innerHTML = "";
  switch (window.location.hash) {
    case "#mining":
      mining_initialize();
      break;
    case "#fishing":
      fishing_initialize();
      break;
    case "#cooking":
      cooking_initialize();
      break;
    case "#alchemy":
      alchemy_initialize();
      break;
    case "#woodcutting":
      woodcutting_initialize();
      break;
    case "#farming":
      farming_initialize();
      break;
    case "#fungiculture":
      fungiculture_initialize();
      break;
    case "#forging":
      forging_initialize();
      break;
    case "#wizardry":
      wizardry_initialize();
      break;
    case "#fletching":
      fletching_initialize();
      break;
    case "#jewelry":
      jewelry_initialize();
      break;
    case "#breeding":
      breeding_initialize();
      break;
    case "#party":
      party_initialize();
      break;
    case "#retaliation":
      retal_initialize();
      break;
    case "#rare_key":
      rare_key_initialize();
      break;
    case "#load_player":
      load_player_initialize();
      break;
    case "#about":
      about_initialize();
      break;
  }
};