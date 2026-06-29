"use strict";
let breeding_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="breeding_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="breeding_level_input" class="input-number" step = "1">
  <input type="number" placeholder="target level" value="" id="breeding_target_level_input" class="input-number" step = "1">
  <label class="input-checkbox-label">
  <input type="checkbox" id="breeding_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>
  <button id="breeding_input_button" class="input-button">calculate</button></div>`;
    let breeding_exp_input = document.getElementById("breeding_exp_input");
    let breeding_level_input = document.getElementById("breeding_level_input");
    let breeding_target_level_input = document.getElementById("breeding_target_level_input");
    let breeding_input_button = document.getElementById("breeding_input_button");
    let breeding_2x_input = document.getElementById("breeding_2x_input");
    breeding_exp_input.addEventListener("focus", () => {
        breeding_exp_input.value = breeding_exp_input.value.replace(/[,]/g, "");
        breeding_exp_input.type = "number";
    });
    breeding_exp_input.addEventListener("blur", () => {
        let value = breeding_exp_input.valueAsNumber;
        breeding_exp_input.type = "text";
        breeding_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    breeding_exp_input.addEventListener("change", () => {
        breeding_level_input.value = level_from_exp(breeding_exp_input.valueAsNumber).toString();
    });
    breeding_input_button.addEventListener("click", () => {
        let level = breeding_level_input.valueAsNumber;
        let xp_required = total_exp_for_level(breeding_target_level_input.valueAsNumber) - (breeding_exp_input.value === "" ? total_exp_for_level(breeding_level_input.valueAsNumber) : breeding_exp_input.value.replace(/[,]/g, ""));
        let breedable_string = `<table style="color: #dddce0; width: 100%;" class="sortable" id="breeding_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>xp per attempt</th><th>lost pets</th><th>insurance cost</th></tr></thead><tbody>`;
        pets.forEach((value) => {
            if (!(typeof value.params.likes === "undefined")) {
                value.params.likes.forEach((sub_value) => {
                    breedable_string += "<tr><td>" + get_image_div(value.params.item_id) + get_image_div(pets[sub_value.pet_id].params.item_id) + "</td>";
                    breedable_string += "<td>" + value.params.breeding_level + "</td>";
                    let xp_per_tick = 0;
                    let chance_of_path = 1;
                    sub_value.returns.forEach((partner) => {
                        let current_chance = calculate_success(partner.base_chance, partner.max_chance, value.params.breeding_level, level);
                        xp_per_tick += chance_of_path * current_chance * sub_value.xp;
                        chance_of_path -= chance_of_path * current_chance;
                    });
                    breedable_string += "<td>" + Math.round(xp_per_tick) * (1 + (breeding_2x_input.checked ? 1 : 0)) + "</td>";
                    breedable_string += "<td>" + "<div style=\"height:32px;float:left;\">" + Math.round(0.25 * xp_required / (xp_per_tick * (1 + (breeding_2x_input.checked ? 1 : 0)))) + get_image_div(value.params.item_id) + "</div><div style=\"height:32px;float:left;\">" + Math.round(0.25 * xp_required / (xp_per_tick * (1 + (breeding_2x_input.checked ? 1 : 0)))) + get_image_div(pets[sub_value.pet_id].params.item_id) + "</div></td>";
                    breedable_string += "<td>" + Math.round(xp_required / (xp_per_tick * (1 + (breeding_2x_input.checked ? 1 : 0))) * (value.params.insurance_cost[0] + pets[sub_value.pet_id].params.insurance_cost[0])).toLocaleString("en-GB") + " coins or " + Math.round(xp_required / (xp_per_tick * (1 + (breeding_2x_input.checked ? 1 : 0))) * (value.params.insurance_cost[1] + pets[sub_value.pet_id].params.insurance_cost[1])).toLocaleString("en-GB") + " mos" + "</td>";
                    breedable_string += "</tr>";
                });
            }
        });
        table_content_container.innerHTML = breedable_string + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("breeding_output_table"));
    });
};
