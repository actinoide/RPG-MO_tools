"use strict";
let jewelry_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="jewelry_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="jewelry_level_input" class="input-number"step = "1">
  <input type="number" placeholder="target level" value="" id="jewelry_target_level_input" class="input-number"step = "1">
    <label class="input-checkbox-label">
  <input type="checkbox" id="jewelry_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="jewelry_furnace_input" class="input-checkbox"><span class="input-checkbox-span">Furnace</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="jewelry_recursion_input" class="input-checkbox"><span class="input-checkbox-span">Including ingredients</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="jewelry_gemcutting_input" class="input-checkbox"><span class="input-checkbox-span">Gemcutting</span></label>
  <button id="jewelry_input_button" class="input-button">calculate</button></div>`;
    let jewelry_exp_input = document.getElementById("jewelry_exp_input");
    let jewelry_level_input = document.getElementById("jewelry_level_input");
    let jewelry_target_level_input = document.getElementById("jewelry_target_level_input");
    let jewelry_input_button = document.getElementById("jewelry_input_button");
    let jewelry_2x_input = document.getElementById("jewelry_2x_input");
    let jewelry_furnace_input = document.getElementById("jewelry_furnace_input");
    let jewelry_gemcutting_input = document.getElementById("jewelry_gemcutting_input");
    let jewelry_recursion_input = document.getElementById("jewelry_recursion_input");
    jewelry_exp_input.addEventListener("focus", () => {
        jewelry_exp_input.value = jewelry_exp_input.value.replace(/[,]/g, "");
        jewelry_exp_input.type = "number";
    });
    jewelry_exp_input.addEventListener("blur", () => {
        let value = jewelry_exp_input.valueAsNumber;
        jewelry_exp_input.type = "text";
        jewelry_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    jewelry_exp_input.addEventListener("change", () => {
        jewelry_level_input.value = level_from_exp(jewelry_exp_input.valueAsNumber).toString();
    });
    jewelry_input_button.addEventListener("click", () => {
        let level = jewelry_level_input.valueAsNumber;
        let furnace_id = 0;
        let inventory_id = 0;
        object_base.forEach((value) => {
            switch (value.name) {
                case "Furnace":
                    furnace_id = value.b_i;
                    break;
                case "Inventory":
                    inventory_id = value.b_i;
                    break;
            }
        });
        let furnace_results = [];
        object_base[furnace_id].params.results.forEach((value) => {
            if (value.skill === "jewelry")
                furnace_results.push(value);
        });
        let gemcutting_results = [];
        object_base[inventory_id].params.results.forEach((value) => {
            if (value.skill === "jewelry")
                gemcutting_results.push(value);
        });
        let craftable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="jewelry_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per craft</th><th>number required</th><th>number produced</th></tr></thead><tbody>`;
        let xp_required = total_exp_for_level(jewelry_target_level_input.valueAsNumber) - (jewelry_exp_input.value === "" ? total_exp_for_level(jewelry_level_input.valueAsNumber) : jewelry_exp_input.value.replace(/[,]/g, ""));
        if (jewelry_furnace_input.checked) {
            furnace_results.forEach((value) => {
                let returns = value.returns;
                let image_string = "";
                let xp_from_ingredients = 0;
                returns.forEach((value) => {
                    image_string += get_image_div(value.id);
                });
                if (jewelry_recursion_input.checked) {
                    returns[0].consumes.forEach((value) => {
                        let furnace_result = furnace_results.find((sub_value) => {
                            if (sub_value.returns[0].id === value.id)
                                return true;
                        });
                        if (!(typeof furnace_result === "undefined")) {
                            image_string += get_image_div(furnace_result.returns[0].id);
                            xp_from_ingredients += value.count * furnace_result.returns[0].xp;
                        }
                    });
                }
                craftable_list += "<td>" + image_string + "</td>";
                craftable_list += "<td>" + returns[0].level + "</td>";
                craftable_list += "<td>" + returns[0].base_chance + "</td>";
                craftable_list += "<td>" + calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) + "</td>";
                craftable_list += "<td>" + (xp_from_ingredients + returns[0].xp) * (1 + (jewelry_2x_input.checked ? 1 : 0)) + "</td>";
                let required = calculate_xp_recursive((jewelry_exp_input.value === "" ? total_exp_for_level(jewelry_level_input.valueAsNumber) : jewelry_exp_input.value.replace(/[,]/g, "")), jewelry_target_level_input.valueAsNumber, returns);
                let cost_ratio = required.number_required / required.number_produced;
                craftable_list += "<td>" + Math.round((returns[0].xp * calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) + xp_from_ingredients) * (1 + (jewelry_2x_input.checked ? 1 : 0)) * 1000) / 1000 + "</td>";
                let number_required = xp_required / (returns[0].xp / cost_ratio + xp_from_ingredients);
                let requiered_string = "";
                returns[0].consumes.forEach((value) => {
                    if (jewelry_recursion_input.checked) {
                        let furnace_result = furnace_results.find((sub_value) => {
                            if (sub_value.returns[0].id === value.id)
                                return true;
                        });
                        if (!(typeof furnace_result === "undefined")) {
                            let requiered = calculate_xp_recursive((jewelry_exp_input.value === "" ? total_exp_for_level(jewelry_level_input.valueAsNumber) : jewelry_exp_input.value.replace(/[,]/g, "")), jewelry_target_level_input.valueAsNumber, furnace_result.returns);
                            let smelting_ratio = requiered.number_required / requiered.number_produced;
                            furnace_result.returns[0].consumes.forEach((sub_value) => {
                                requiered_string += "<div style=\"height:32px;float:left;\">" + ((returns[0].level <= level) ? Math.round((number_required * smelting_ratio * value.count * sub_value.count) / (1 + (jewelry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(sub_value.id) + "</div>";
                            });
                        }
                        else {
                            requiered_string += "<div style=\"height:32px;float:left;\">" + ((returns[0].level <= level) ? Math.round((number_required * value.count) / (1 + (jewelry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(value.id) + "</div>";
                        }
                    }
                    else {
                        requiered_string += "<div style=\"height:32px;float:left;\">" + ((returns[0].level <= level) ? Math.round((number_required * value.count) / (1 + (jewelry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(value.id) + "</div>";
                    }
                });
                craftable_list += "<td>" + requiered_string + "</td>";
                craftable_list += "<td>" + ((value.returns[0].level <= level) ? Math.round((number_required / cost_ratio) / (1 + (jewelry_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + "</td>";
                craftable_list += "</tr>";
            });
        }
        if (jewelry_gemcutting_input.checked) {
            gemcutting_results.forEach((value) => {
                let returns = value.returns;
                craftable_list += "<td>" + get_image_div(returns[0].id) + "</td>";
                craftable_list += "<td>" + returns[0].level + "</td>";
                craftable_list += "<td>" + returns[0].base_chance + "</td>";
                craftable_list += "<td>" + returns[0].base_chance + "</td>";
                craftable_list += "<td>" + returns[0].xp + "</td>";
                craftable_list += "<td>" + returns[0].xp * returns[0].base_chance + "</td>";
                craftable_list += "<td>" + get_image_div(returns[0].consumes[0].id) + Math.round(xp_required / (returns[0].xp * returns[0].base_chance)) + "</td>";
                craftable_list += "<td>" + Math.round(xp_required / returns[0].xp) + "</td>";
                craftable_list += "</tr>";
            });
        }
        table_content_container.innerHTML = craftable_list + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("jewelry_output_table"));
    });
};
