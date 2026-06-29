"use strict";
let fishing_initialize = () => {
    static_content_container.innerHTML = `<div>
   <input type="number" placeholder="exp" value="" id="fishing_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="fishing_level_input" class="input-number"step = "1">
  <input type="number" placeholder="target level" value="" id="fishing_target_level_input" class="input-number"step = "1">
  <input type="number" placeholder="inventory slots" value="" id="fishing_inventory_input" class="input-number"step = "1">
  <label class="input-checkbox-label">
  <input type="checkbox" id="fishing_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>  
  <button id="fishing_input_button" class="input-button">calculate</button></div>`;
    let fishing_exp_input = document.getElementById("fishing_exp_input");
    let fishing_level_input = document.getElementById("fishing_level_input");
    let fishing_target_level_input = document.getElementById("fishing_target_level_input");
    let fishing_inventory_input = document.getElementById("fishing_inventory_input");
    let fishing_input_button = document.getElementById("fishing_input_button");
    let fishing_2x_input = document.getElementById("fishing_2x_input");
    fishing_exp_input.addEventListener("focus", () => {
        fishing_exp_input.value = fishing_exp_input.value.replace(/[,]/g, "");
        fishing_exp_input.type = "number";
    });
    fishing_exp_input.addEventListener("blur", () => {
        let value = fishing_exp_input.valueAsNumber;
        fishing_exp_input.type = "text";
        fishing_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    fishing_exp_input.addEventListener("change", () => {
        fishing_level_input.value = level_from_exp(fishing_exp_input.valueAsNumber).toString();
    });
    fishing_input_button.addEventListener("click", () => {
        let level = fishing_level_input.valueAsNumber;
        let inventory_slots = fishing_inventory_input.valueAsNumber;
        let fishable = [];
        object_base.forEach((value) => {
            if (value.activities.includes("Catch"))
                fishable.push(value.b_i);
        });
        let xp_required = total_exp_for_level(fishing_target_level_input.valueAsNumber) - (fishing_exp_input.value === "" ? total_exp_for_level(fishing_level_input.valueAsNumber) : fishing_exp_input.value.replace(/[,]/g, ""));
        let fishable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="fishing_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>tool</th><th>level range</th><th>xp per tick</th><th>seconds per inventory</th><th>number required</th></tr></thead><tbody>`;
        fishable.forEach((value) => {
            let item_string = "<tr>";
            let item = object_base[value];
            let returns = item.params.results[0].returns;
            let required_item_id = item.params.results[0].requires_one_from[0];
            item_string += "<td>" + get_image_div(required_item_id);
            item_string += "<details><table style=\"width:100%; data-toggle:collapse\"><thead><tr><th>fish</th><th>level</th><th>min rate</th><th>current rate</th><th>max rate</th></thead>";
            returns.forEach((value) => {
                item_string += "<tr><td>";
                item_string += get_image_div(value.id);
                item_string += "<td>" + value.level + "</td>";
                item_string += "<td>" + value.base_chance + "</td>";
                item_string += "<td>" + Math.round(10000 * ((value.level <= level) ? (Math.min(value.base_chance + 0.01 * (level - value.level), (typeof value.max_chance === "number" ? value.max_chance : 1))) : 0)) / 10000 + "</td>";
                item_string += "<td>" + value.max_chance + "</td></tr>";
            });
            item_string += "<summary>fish</summary></details></table></td>";
            item_string += "<td>" + returns[returns.length - 1].level + "-" + returns[0].level + "</td>";
            let xp_per_tick = 0;
            let chance_of_path = 1;
            returns.forEach((value) => {
                let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
                xp_per_tick += chance_of_path * current_chance * value.xp;
                chance_of_path -= chance_of_path * current_chance;
            });
            item_string += "<td>" + Math.round(1000 * xp_per_tick * (1 + (fishing_2x_input.checked === true ? 1 : 0))) / 1000 + "</td>";
            item_string += "<td>" + Math.round(1 / (1 - chance_of_path) * 2 * inventory_slots) + "</td>";
            item_string += "<td>" + Math.ceil(xp_required / ((xp_per_tick * (1 + (fishing_2x_input.checked === true ? 1 : 0))) / (1 - chance_of_path))).toLocaleString("en-GB") + "</td>";
            fishable_list += item_string;
        });
        table_content_container.innerHTML = fishable_list + `</tbody></table>`;
        sorttable.makeSortable(document.getElementById("fishing_output_table"));
    });
};
