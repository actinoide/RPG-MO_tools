"use strict";
let test = document.getElementById("test");
let static_content_container = document.getElementById("static_content_container");
let table_content_container = document.getElementById("table_content_container");
let menu_button_crafting = document.getElementById("menu_button_crafting");
let menu_div_crafting = document.getElementById("menu_div_crafting");
let image_sheet_address = "https://data.mo.ee/";
menu_button_crafting.addEventListener("click", () => {
    menu_button_crafting.classList.toggle("menu-button-active");
    if (menu_div_crafting.style.maxHeight == "0px") {
        menu_div_crafting.style.maxHeight = menu_div_crafting.scrollHeight.toString() + "px";
    }
    else {
        menu_div_crafting.style.maxHeight = "0px";
    }
});
let total_exp_for_level = (level) => {
    return Math.round(50 * (Math.pow(1.11, level - 1) - 1) / (1.11 - 1));
};
let level_from_exp = (xp) => {
    return Math.floor(Math.log(xp * (1.11 - 1) / 50 + 1) / (Math.log(1.11)) + 1);
};
window.addEventListener("DOMContentLoaded", (ev) => {
    if (window.location.hash == "")
        return;
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
        case "#about":
            about_initialize();
            break;
    }
};
let calculate_success = (base_chance, max_chance, level_required, level) => {
    return Math.round(10000 *
        ((level_required <= level) ?
            (Math.min(base_chance + 0.01 * (level - level_required), (typeof max_chance === "number" ? max_chance : 1))) : 0)) / 10000;
};
let get_image_div = (id) => {
    let image_string = "<div style = \" width:32px; height:32px;";
    let item_sheet = IMAGE_SHEET[item_base[id].img.sheet];
    image_string += "background-image: url(" + image_sheet_address + item_sheet.url + "); background-position-x:-" + item_base[id].img.x * item_sheet.tile_width + "px; background-position-y:-" + item_base[id].img.y * item_sheet.tile_height + "px;float:left;\"";
    image_string += "title=\"" + item_base[id].name + "\"";
    image_string += "></div>";
    return image_string;
};
