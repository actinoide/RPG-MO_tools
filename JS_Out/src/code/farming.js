"use strict";
let farming_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="farming_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="farming_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="farming_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="farming plots" value="" id="farming_farm_size_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0; min-width:40px;"step = "1">
  <input type="number" placeholder="inventory slots" value="" id="farming_inventory_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0; min-width:40px;"step = "1">
   <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="farming_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>       
   <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="farming_field_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Fields</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="farming_bush_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Bushes</span></label>

  <button id="farming_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;
    let farming_exp_input = document.getElementById("farming_exp_input");
    let farming_level_input = document.getElementById("farming_level_input");
    let farming_target_level_input = document.getElementById("farming_target_level_input");
    let farming_farm_size_input = document.getElementById("farming_farm_size_input");
    let farming_input_button = document.getElementById("farming_input_button");
    let farming_2x_input = document.getElementById("farming_2x_input");
    let farming_field_input = document.getElementById("farming_field_input");
    let farming_bush_input = document.getElementById("farming_bush_input");
    let farming_inventory_input = document.getElementById("farming_inventory_input");
    farming_exp_input.addEventListener("focus", () => {
        farming_exp_input.value = farming_exp_input.value.replace(/[,]/g, "");
        farming_exp_input.type = "number";
    });
    farming_exp_input.addEventListener("blur", () => {
        let value = farming_exp_input.valueAsNumber;
        farming_exp_input.type = "text";
        farming_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    farming_exp_input.addEventListener("change", () => {
        farming_level_input.value = level_from_exp(farming_exp_input.valueAsNumber).toString();
    });
    farming_input_button.addEventListener("click", () => {
        let level = farming_level_input.valueAsNumber;
        let inventory_slots = farming_inventory_input.valueAsNumber;
        let farmable = [];
        if (farming_field_input.checked) {
            item_base.forEach((value) => {
                if (typeof value.params.farming_id === "number")
                    farmable.push(value.b_i);
            });
        }
        let harvestable = [];
        if (farming_bush_input.checked) {
            object_base.forEach((value) => {
                if (value.activities.includes("Harvest") && typeof value.params.duration !== "number")
                    harvestable.push(value.b_i);
            });
        }
        let xp_required = total_exp_for_level(farming_target_level_input.valueAsNumber) - (farming_exp_input.value === "" ? total_exp_for_level(farming_level_input.valueAsNumber) : farming_exp_input.value.replace(/[,]/g, ""));
        let farmable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="farming_field_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>growth time</th><th>xp per harvest</th><th>number required</th><th>number of runs</th><th>time required in min</th></tr></thead><tbody>`;
        farmable.forEach((value) => {
            let item_string = "<tr>";
            let farm_size = farming_farm_size_input.valueAsNumber;
            let seed = item_base[value];
            let plant = object_base[seed.params.farming_id];
            let returns = plant.params.results[0].returns;
            let product = item_base[plant.params.results[0].returns[0].id];
            item_string += "<td>" + get_image_div(product.b_i) + "</td>";
            item_string += "<td>" + seed.params.min_farming + "</td>";
            item_string += "<td>" + plant.params.duration + "</td>";
            if (seed.params.min_farming <= level) {
                item_string += "<td>" + Math.ceil(returns[0].xp * (1 + (farming_2x_input.checked ? 1 : 0))) + "</td>";
                item_string += "<td>" + get_image_div(seed.b_i) + (Math.ceil(xp_required / (returns[0].xp * (1 + (farming_2x_input.checked ? 1 : 0))))).toLocaleString("en-GB") + "</td>";
                item_string += "<td>" + (Math.ceil(xp_required / (farm_size * returns[0].xp * (1 + (farming_2x_input.checked ? 1 : 0))))).toLocaleString("en-GB") + "</td>";
                item_string += "<td>" + (plant.params.duration * Math.ceil(xp_required / (farm_size * returns[0].xp * (1 + (farming_2x_input.checked ? 1 : 0))))).toLocaleString("en-GB") + "</td>";
            }
            else {
                item_string += "<td>" + 0 + "</td>";
                item_string += "<td>" + get_image_div(seed.b_i) + Infinity + "</td>";
                item_string += "<td>" + Infinity + "</td>";
                item_string += "<td>" + Infinity + "</td>";
            }
            farmable_list += item_string;
        });
        let harvestable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="farming_bush_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per tick</th><th>seconds per inventory</th><th>number required</th></tr></thead><tbody>`;
        harvestable.forEach((value) => {
            let item_string = "<tr>";
            let item = object_base[value];
            let returns = item.params.results[0].returns;
            let image_string = "";
            returns.forEach((value) => {
                image_string += get_image_div(value.id);
            });
            item_string += "<td>" + image_string + "</td>";
            item_string += "<td>" + returns[returns.length - 1].level + "</td>";
            item_string += "<td>" + returns[returns.length - 1].base_chance + "</td>";
            item_string += "<td>" + calculate_success(returns[returns.length - 1].base_chance, returns[returns.length - 1].max_chance, returns[returns.length - 1].level, level) + "</td>";
            item_string += "<td>" + returns[returns.length - 1].xp + "</td>";
            let xp_per_tick = 0;
            let chance_of_path = 1;
            returns.forEach((value) => {
                let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
                xp_per_tick += chance_of_path * current_chance * value.xp;
                chance_of_path -= chance_of_path * current_chance;
            });
            item_string += "<td>" + (Math.round(1000 * xp_per_tick * (1 + (farming_2x_input.checked === true ? 1 : 0))) / 1000).toLocaleString("en-GB") + "</td>";
            item_string += "<td>" + (Math.round(1 / (1 - chance_of_path) * 2 * inventory_slots)).toLocaleString("en-GB") + "</td>";
            item_string += "<td>" + Math.ceil(xp_required / ((xp_per_tick * (1 + (farming_2x_input.checked === true ? 1 : 0))) / (1 - chance_of_path))).toLocaleString("en-GB") + "</td>";
            harvestable_list += item_string;
        });
        table_content_container.innerHTML = "";
        if (farming_field_input.checked)
            table_content_container.innerHTML += farmable_list + "</tbody></table>";
        if (farming_bush_input.checked)
            table_content_container.innerHTML += harvestable_list + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("farming_bush_output_table"));
        sorttable.makeSortable(document.getElementById("farming_field_output_table"));
    });
};
