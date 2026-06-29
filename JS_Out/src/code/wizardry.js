"use strict";
let wizardry_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="wizardry_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="wizardry_level_input" class="input-number"step = "1">
  <input type="number" placeholder="target level" value="" id="wizardry_target_level_input" class="input-number"step = "1">
    <label class="input-checkbox-label">
  <input type="checkbox" id="wizardry_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="wizardry_spell_input" class="input-checkbox"><span class="input-checkbox-span">Spells</span></label>
    <label class="input-checkbox-label">  
  <input type="checkbox" id="wizardry_anvil_input" class="input-checkbox"><span class="input-checkbox-span">Anvil</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="wizardry_recycling_input" class="input-checkbox"><span class="input-checkbox-span">recycling</span></label>
  <button id="wizardry_input_button" class="input-button">calculate</button></div>`;
    let wizardry_exp_input = document.getElementById("wizardry_exp_input");
    let wizardry_level_input = document.getElementById("wizardry_level_input");
    let wizardry_target_level_input = document.getElementById("wizardry_target_level_input");
    let wizardry_input_button = document.getElementById("wizardry_input_button");
    let wizardry_2x_input = document.getElementById("wizardry_2x_input");
    let wizardry_recycling_input = document.getElementById("wizardry_recycling_input");
    let wizardry_spell_input = document.getElementById("wizardry_spell_input");
    let wizardry_anvil_input = document.getElementById("wizardry_anvil_input");
    wizardry_exp_input.addEventListener("focus", () => {
        wizardry_exp_input.value = wizardry_exp_input.value.replace(/[,]/g, "");
        wizardry_exp_input.type = "number";
    });
    wizardry_exp_input.addEventListener("blur", () => {
        let value = wizardry_exp_input.valueAsNumber;
        wizardry_exp_input.type = "text";
        wizardry_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    wizardry_exp_input.addEventListener("change", () => {
        wizardry_level_input.value = level_from_exp(wizardry_exp_input.valueAsNumber).toString();
    });
    wizardry_input_button.addEventListener("click", () => {
        let level = wizardry_level_input.valueAsNumber;
        let altar_ids = [];
        object_base.forEach((value) => {
            if (value.name.includes("Altar"))
                altar_ids.push(value.b_i);
        });
        let spell_results = [];
        altar_ids.forEach((altar_id) => {
            object_base[altar_id].params.results.forEach((result) => {
                spell_results.push(result);
            });
        });
        let craftable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="wizardry_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per craft</th><th>number required</th><th>number produced</th></tr></thead><tbody>`;
        if (wizardry_spell_input.checked) {
            spell_results.forEach((spell_result) => {
                let returns = spell_result.returns;
                let image_string = "";
                returns.forEach((value) => {
                    image_string += get_image_div(value.id);
                });
                craftable_list += "<td>" + image_string + "</td>";
                craftable_list += "<td>" + returns[0].level + "</td>";
                craftable_list += "<td>" + returns[0].base_chance + "</td>";
                craftable_list += "<td>" + calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) + "</td>";
                craftable_list += "<td>" + returns[0].xp + "</td>";
                let xp_per_tick = 0;
                let chance_of_path = 1;
                returns.forEach((value) => {
                    let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
                    xp_per_tick += chance_of_path * current_chance * value.xp;
                    chance_of_path -= chance_of_path * current_chance;
                });
                craftable_list += "<td>" + Math.round(xp_per_tick * (1 + (wizardry_2x_input.checked ? 1 : 0)) * 1000) / 1000 + "</td>";
                let required = calculate_xp_recursive((wizardry_exp_input.value === "" ? total_exp_for_level(wizardry_level_input.valueAsNumber) : wizardry_exp_input.value.replace(/[,]/g, "")), wizardry_target_level_input.valueAsNumber, returns);
                let required_string = "";
                returns[0].consumes.forEach((value) => {
                    required_string += "<div style=\"height:32px;float:left;\">" + ((value.count * required.number_required) / (1 + (wizardry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + get_image_div(value.id) + "</div>";
                });
                craftable_list += "<td>" + required_string + "</td>";
                craftable_list += "<td>" + (required.number_produced / (1 + (wizardry_2x_input.checked ? 1 : 0))).toLocaleString("en-GB") + "</td>";
                craftable_list += "</tr>";
            });
        }
        if (wizardry_anvil_input.checked) {
            let crafting_formulas = [];
            for (let index = 0;; index++) {
                let value = FORGE_FORMULAS[index];
                if (typeof value === "undefined")
                    break;
                if (!(typeof value.wizardry_level === "undefined")) {
                    let formula = { product_id: 0, level: 0, chance: 0, requierments: [], recycling_chance: 0.5 };
                    formula.product_id = value.item_id;
                    formula.chance = value.chance;
                    formula.level = value.wizardry_level;
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
                    crafting_formulas.push(formula);
                }
            }
            let xp_required = total_exp_for_level(wizardry_target_level_input.valueAsNumber) - (wizardry_exp_input.value === "" ? total_exp_for_level(wizardry_level_input.valueAsNumber) : wizardry_exp_input.value.replace(/[,]/g, ""));
            let crafting_results = [];
            if (!wizardry_recycling_input.checked) {
                crafting_formulas.forEach((value) => {
                    let crafting_result = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
                    crafting_result.icon_ids = [value.product_id];
                    crafting_result.level = value.level;
                    crafting_result.success = value.chance;
                    let xp_per_success = 0;
                    value.requierments.forEach((value) => {
                        xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
                    });
                    crafting_result.xp_per_success = xp_per_success;
                    crafting_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5);
                    crafting_result.number_produced.item_id = value.product_id;
                    crafting_result.number_produced.count = value.chance * (xp_required / crafting_result.xp_per_craft);
                    value.requierments.forEach((value) => {
                        crafting_result.number_required.push({
                            item_id: value.item_id,
                            count: value.count * (xp_required / crafting_result.xp_per_craft)
                        });
                    });
                    crafting_results.push(crafting_result);
                });
            }
            else {
                crafting_formulas.forEach((value) => {
                    let crafting_result = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
                    crafting_result.icon_ids = [value.product_id];
                    crafting_result.level = value.level;
                    crafting_result.success = value.chance;
                    let xp_per_success = 0;
                    value.requierments.forEach((value) => {
                        xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
                    });
                    crafting_result.xp_per_success = xp_per_success;
                    crafting_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5);
                    crafting_result.number_produced.item_id = value.product_id;
                    crafting_result.number_produced.count = value.chance * (xp_required / (crafting_result.xp_per_craft * (1 + 0.25 * value.recycling_chance * value.chance)));
                    value.requierments.forEach((sub_value) => {
                        crafting_result.number_required.push({
                            item_id: sub_value.item_id,
                            count: sub_value.count * ((xp_required / (crafting_result.xp_per_craft * (1 + 0.25 * value.recycling_chance * value.chance))) - crafting_result.number_produced.count * value.recycling_chance)
                        });
                    });
                    crafting_results.push(crafting_result);
                });
            }
            crafting_results.forEach((value) => {
                if (!(value.xp_per_success === 0)) {
                    craftable_list += "<tr>";
                    let image_string = "";
                    value.icon_ids.forEach((value) => {
                        image_string += get_image_div(value);
                    });
                    craftable_list += "<td>" + image_string + "</td>";
                    craftable_list += "<td>" + value.level + "</td>";
                    craftable_list += "<td>" + value.success + "</td>";
                    craftable_list += "<td>" + ((value.level <= level) ? value.success : 0) + "</td>";
                    craftable_list += "<td>" + Math.round(value.xp_per_success * (1 + (wizardry_2x_input.checked === true ? 1 : 0))) + "</td>";
                    craftable_list += "<td>" + ((value.level <= level) ? Math.round(value.xp_per_craft * (1 + (wizardry_2x_input.checked === true ? 1 : 0))) : 0) + "</td>";
                    let requiered_string = "";
                    value.number_required.forEach((sub_value) => {
                        requiered_string += "<div style=\"height:32px;float:left;\">" + ((value.level <= level) ? Math.round(sub_value.count / (1 + (wizardry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(sub_value.item_id) + "</div>";
                    });
                    craftable_list += "<td>" + requiered_string + "</td>";
                    craftable_list += "<td>" + ((value.level <= level) ? Math.round(value.number_produced.count / (1 + (wizardry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + "</td>";
                    craftable_list += "</tr>";
                }
            });
        }
        table_content_container.innerHTML = craftable_list + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("wizardry_output_table"));
    });
};
