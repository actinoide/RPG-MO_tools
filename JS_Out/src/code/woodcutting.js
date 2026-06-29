"use strict";
let woodcutting_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="woodcutting_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="woodcutting_level_input" class="input-number"step = "1">
  <input type="number" placeholder="target level" value="" id="woodcutting_target_level_input" class="input-number"step = "1">
  <input type="number" placeholder="inventory slots" value="" id="woodcutting_inventory_input" class="input-number"step = "1">
  <label class="input-checkbox-label">
  <input type="checkbox" id="woodcutting_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>
  <button id="woodcutting_input_button" class="input-button">calculate</button></div>`;
    let woodcutting_exp_input = document.getElementById("woodcutting_exp_input");
    let woodcutting_level_input = document.getElementById("woodcutting_level_input");
    let woodcutting_target_level_input = document.getElementById("woodcutting_target_level_input");
    let woodcutting_inventory_input = document.getElementById("woodcutting_inventory_input");
    let woodcutting_input_button = document.getElementById("woodcutting_input_button");
    let woodcutting_2x_input = document.getElementById("woodcutting_2x_input");
    woodcutting_exp_input.addEventListener("focus", () => {
        woodcutting_exp_input.value = woodcutting_exp_input.value.replace(/[,]/g, "");
        woodcutting_exp_input.type = "number";
    });
    woodcutting_exp_input.addEventListener("blur", () => {
        let value = woodcutting_exp_input.valueAsNumber;
        woodcutting_exp_input.type = "text";
        woodcutting_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    woodcutting_exp_input.addEventListener("change", () => {
        woodcutting_level_input.value = level_from_exp(woodcutting_exp_input.valueAsNumber).toString();
    });
    woodcutting_input_button.addEventListener("click", () => {
        let level = woodcutting_level_input.valueAsNumber;
        let inventory_slots = woodcutting_inventory_input.valueAsNumber;
        let chopable = [];
        object_base.forEach((value) => {
            if (value.activities.includes("Chop") && value.name != "Inventory")
                chopable.push(value.b_i);
        });
        let xp_required = total_exp_for_level(woodcutting_target_level_input.valueAsNumber) - (woodcutting_exp_input.value === "" ? total_exp_for_level(woodcutting_level_input.valueAsNumber) : woodcutting_exp_input.value.replace(/[,]/g, ""));
        let chopable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="woodcutting_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per tick</th><th>seconds per inventory</th><th>number required</th></tr></thead><tbody>`;
        chopable.forEach((value) => {
            let item_string = "<tr>";
            let item = object_base[value];
            let returns = item.params.results[0].returns;
            let image_string = "";
            returns.forEach((value) => {
                image_string += get_image_div(value.id);
            });
            item_string += "<td>" + image_string + "</td>";
            item_string += "<td>" + returns[returns.length - 1].level + "</td>";
            item_string += "<td>" + (item_base[returns[0].id].name.includes("Log") ? returns[0].base_chance : returns[returns.length - 1].base_chance) + "</td>";
            item_string += "<td>" + (item_base[returns[0].id].name.includes("Log") ? calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) : calculate_success(returns[returns.length - 1].base_chance, returns[returns.length - 1].max_chance, returns[returns.length - 1].level, level)) + "</td>";
            item_string += "<td>" + returns[returns.length - 1].xp * (1 + (woodcutting_2x_input.checked === true ? 1 : 0)) + "</td>";
            let xp_per_tick = 0;
            let chance_of_path = 1;
            returns.forEach((value) => {
                let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
                xp_per_tick += chance_of_path * current_chance * value.xp;
                chance_of_path -= chance_of_path * current_chance;
            });
            item_string += "<td>" + (Math.round(1000 * xp_per_tick * (1 + (woodcutting_2x_input.checked === true ? 1 : 0))) / 1000).toLocaleString("en-GB") + "</td>";
            item_string += "<td>" + (Math.round(1 / (1 - chance_of_path) * 2 * inventory_slots)).toLocaleString("en-GB") + "</td>";
            item_string += "<td>" + Math.ceil(xp_required / ((xp_per_tick * (1 + (woodcutting_2x_input.checked === true ? 1 : 0))) / (1 - chance_of_path))).toLocaleString("en-GB") + "</td>";
            item_string += "</tr>";
            chopable_list += item_string;
        });
        table_content_container.innerHTML = chopable_list + `</tbody></table>`;
        sorttable.makeSortable(document.getElementById("woodcutting_output_table"));
    });
};
