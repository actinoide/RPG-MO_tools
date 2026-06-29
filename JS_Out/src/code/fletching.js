"use strict";
let fletching_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="fletching_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="fletching_level_input" class="input-number"step = "1">
  <input type="number" placeholder="target level" value="" id="fletching_target_level_input" class="input-number"step = "1">
    <label class="input-checkbox-label">
  <input type="checkbox" id="fletching_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="fletching_arrow_input" class="input-checkbox"><span class="input-checkbox-span">Arrows</span></label>
    <label class="input-checkbox-label">  
  <input type="checkbox" id="fletching_anvil_input" class="input-checkbox"><span class="input-checkbox-span">Anvil</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="fletching_recycling_input" class="input-checkbox"><span class="input-checkbox-span">recycling</span></label>
  <button id="fletching_input_button" class="input-button">calculate</button></div>`;
    let fletching_exp_input = document.getElementById("fletching_exp_input");
    let fletching_level_input = document.getElementById("fletching_level_input");
    let fletching_target_level_input = document.getElementById("fletching_target_level_input");
    let fletching_input_button = document.getElementById("fletching_input_button");
    let fletching_2x_input = document.getElementById("fletching_2x_input");
    let fletching_recycling_input = document.getElementById("fletching_recycling_input");
    let fletching_arrow_input = document.getElementById("fletching_arrow_input");
    let fletching_anvil_input = document.getElementById("fletching_anvil_input");
    fletching_exp_input.addEventListener("focus", () => {
        fletching_exp_input.value = fletching_exp_input.value.replace(/[,]/g, "");
        fletching_exp_input.type = "number";
    });
    fletching_exp_input.addEventListener("blur", () => {
        let value = fletching_exp_input.valueAsNumber;
        fletching_exp_input.type = "text";
        fletching_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    fletching_exp_input.addEventListener("change", () => {
        fletching_level_input.value = level_from_exp(fletching_exp_input.valueAsNumber).toString();
    });
    fletching_input_button.addEventListener("click", () => {
        let level = fletching_level_input.valueAsNumber;
        let xp_required = total_exp_for_level(fletching_target_level_input.valueAsNumber) - (fletching_exp_input.value === "" ? total_exp_for_level(fletching_level_input.valueAsNumber) : fletching_exp_input.value.replace(/[,]/g, ""));
        let fletchable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="fletching_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per craft</th><th>number required</th><th>number produced</th></tr></thead><tbody>`;
        if (fletching_arrow_input.checked) {
            let arrow_formulas = [];
            for (let index = 0;; index++) {
                let value = FLETCHING_FORMULAS[index];
                if (typeof value === "undefined")
                    break;
                let formula = { product_id: 0, level: 0, requierments: [], xp_per_craft: 0, product_count: 0 };
                formula.product_id = value.item_id;
                formula.level = value.level;
                value.pattern.forEach((value) => {
                    if (formula.requierments.findIndex((element) => { if (element.item_id === value)
                        return true; }) === -1) {
                        if (!(value === -1))
                            formula.requierments.push({ item_id: value, count: 1 });
                    }
                    else {
                        formula.requierments[formula.requierments.findIndex((element) => { if (element.item_id === value)
                            return true; })].count += 1;
                    }
                });
                formula.requierments.forEach((value) => {
                    formula.xp_per_craft += FLETCHING_MATERIAL_XP[value.item_id] * value.count;
                });
                formula.product_count = xp_required / formula.xp_per_craft;
                formula.requierments.forEach((value) => {
                    value.count *= formula.product_count;
                });
                arrow_formulas.push(formula);
            }
            arrow_formulas.forEach((value) => {
                if (!(value.product_id === 3070 || value.product_id === 3824)) {
                    fletchable_list += "<tr>";
                    let image_string = "<div style = \" width:32px; height:32px;\" title=\"" + item_base[value.product_id].name + "\">";
                    value.requierments.forEach((value) => {
                        let img = ARROW_MATERIAL_IMG[value.item_id];
                        let item_sheet = IMAGE_SHEET[img.sheet];
                        image_string += "<div style =\"width:32px; height:32px; position:absolute; background-image: url(" + image_sheet_address + item_sheet.url + "); background-position-x:-" + img.x * item_sheet.tile_width + "px; background-position-y:-" + img.y * item_sheet.tile_height + "px;float:left;\"></div>";
                    });
                    image_string += "</div>";
                    fletchable_list += "<td>" + image_string + "</td>";
                    fletchable_list += "<td>" + value.level + "</td>";
                    fletchable_list += "<td>" + 1 + "</td>";
                    fletchable_list += "<td>" + ((value.level <= level) ? 1 : 0) + "</td>";
                    fletchable_list += "<td>" + Math.round(value.xp_per_craft * (1 + (fletching_2x_input.checked === true ? 1 : 0))) + "</td>";
                    fletchable_list += "<td>" + ((value.level <= level) ? Math.round(value.xp_per_craft * (1 + (fletching_2x_input.checked === true ? 1 : 0))) : 0) + "</td>";
                    let requiered_string = "";
                    value.requierments.forEach((sub_value) => {
                        requiered_string += "<div style=\"height:32px;float:left;\">" + ((value.level <= level) ? Math.round(sub_value.count / (1 + (fletching_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(sub_value.item_id) + "</div>";
                    });
                    fletchable_list += "<td>" + requiered_string + "</td>";
                    fletchable_list += "<td>" + ((value.level <= level) ? Math.round(value.product_count / (1 + (fletching_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + "</td>";
                    fletchable_list += "</tr>";
                }
            });
        }
        if (fletching_anvil_input.checked) {
            let anvil_formulas = [];
            for (let index = 0;; index++) {
                let value = FORGE_FORMULAS[index];
                if (typeof value === "undefined")
                    break;
                if (!(typeof value.fletching_level === "undefined")) {
                    let formula = { product_id: 0, level: 0, chance: 0, requierments: [], recycling_chance: 0.5 };
                    formula.product_id = value.item_id;
                    formula.chance = value.chance;
                    formula.level = value.fletching_level;
                    if (!(typeof value.recycle_chance === "undefined"))
                        formula.recycling_chance = value.recycle_chance;
                    for (let sub_index = 0;; sub_index++) {
                        let sub_value = value.pattern[sub_index];
                        if (typeof sub_value === "undefined")
                            break;
                        for (let sub_sub_index = 0;; sub_sub_index++) {
                            let sub_sub_value = value.pattern[sub_index][sub_sub_index];
                            if (typeof sub_sub_value === "undefined")
                                break;
                            if (formula.requierments.findIndex((element) => { if (element.item_id === sub_sub_value)
                                return true; }) === -1) {
                                if (!(sub_sub_value === -1))
                                    formula.requierments.push({ item_id: sub_sub_value, count: 1 });
                            }
                            else
                                formula.requierments[formula.requierments.findIndex((element) => { if (element.item_id === sub_sub_value)
                                    return true; })].count += 1;
                        }
                    }
                    anvil_formulas.push(formula);
                }
            }
            let fletching_results = [];
            if (!fletching_recycling_input.checked) {
                anvil_formulas.forEach((value) => {
                    let fletching_result = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
                    fletching_result.icon_ids = [value.product_id];
                    fletching_result.level = value.level;
                    fletching_result.success = value.chance;
                    let xp_per_success = 0;
                    value.requierments.forEach((value) => {
                        xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
                    });
                    fletching_result.xp_per_success = xp_per_success;
                    fletching_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5);
                    fletching_result.number_produced.item_id = value.product_id;
                    fletching_result.number_produced.count = value.chance * (xp_required / fletching_result.xp_per_craft);
                    value.requierments.forEach((value) => {
                        fletching_result.number_required.push({
                            item_id: value.item_id,
                            count: value.count * (xp_required / fletching_result.xp_per_craft)
                        });
                    });
                    fletching_results.push(fletching_result);
                });
            }
            else {
                anvil_formulas.forEach((value) => {
                    let fletching_result = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
                    fletching_result.icon_ids = [value.product_id];
                    fletching_result.level = value.level;
                    fletching_result.success = value.chance;
                    let xp_per_success = 0;
                    value.requierments.forEach((value) => {
                        xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
                    });
                    fletching_result.xp_per_success = xp_per_success;
                    fletching_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5);
                    fletching_result.number_produced.item_id = value.product_id;
                    fletching_result.number_produced.count = value.chance * (xp_required / (fletching_result.xp_per_craft * (1 + 0.25 * value.recycling_chance * value.chance)));
                    value.requierments.forEach((sub_value) => {
                        fletching_result.number_required.push({
                            item_id: sub_value.item_id,
                            count: sub_value.count * ((xp_required / (fletching_result.xp_per_craft * (1 + 0.25 * value.recycling_chance * value.chance))) - fletching_result.number_produced.count * value.recycling_chance)
                        });
                    });
                    fletching_results.push(fletching_result);
                });
            }
            fletching_results.forEach((value) => {
                if (!(value.xp_per_success === 0)) {
                    fletchable_list += "<tr>";
                    let image_string = "";
                    value.icon_ids.forEach((value) => {
                        image_string += get_image_div(value);
                    });
                    fletchable_list += "<td>" + image_string + "</td>";
                    fletchable_list += "<td>" + value.level + "</td>";
                    fletchable_list += "<td>" + value.success + "</td>";
                    fletchable_list += "<td>" + ((value.level <= level) ? value.success : 0) + "</td>";
                    fletchable_list += "<td>" + Math.round(value.xp_per_success * (1 + (fletching_2x_input.checked === true ? 1 : 0))) + "</td>";
                    fletchable_list += "<td>" + ((value.level <= level) ? Math.round(value.xp_per_craft * (1 + (fletching_2x_input.checked === true ? 1 : 0))) : 0) + "</td>";
                    let requiered_string = "";
                    value.number_required.forEach((sub_value) => {
                        requiered_string += "<div style=\"height:32px;float:left;\">" + ((value.level <= level) ? Math.round(sub_value.count / (1 + (fletching_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(sub_value.item_id) + "</div>";
                    });
                    fletchable_list += "<td>" + requiered_string + "</td>";
                    fletchable_list += "<td>" + ((value.level <= level) ? Math.round(value.number_produced.count / (1 + (fletching_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + "</td>";
                    fletchable_list += "</tr>";
                }
            });
        }
        ;
        table_content_container.innerHTML = fletchable_list + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("fletching_output_table"));
    });
};
