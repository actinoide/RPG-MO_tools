"use strict";
let alchemy_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="alchemy_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="alchemy_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="alchemy_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="alchemy_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="alchemy_furnace_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Furnace</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="alchemy_water_well_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Well</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="alchemy_kettle_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Kettle</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="alchemy_alchemy_table_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Alchemy Table</span></label>
  <button id="alchemy_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;
    let alchemy_exp_input = document.getElementById("alchemy_exp_input");
    let alchemy_level_input = document.getElementById("alchemy_level_input");
    let alchemy_target_level_input = document.getElementById("alchemy_target_level_input");
    let alchemy_input_button = document.getElementById("alchemy_input_button");
    let alchemy_2x_input = document.getElementById("alchemy_2x_input");
    let alchemy_furnace_input = document.getElementById("alchemy_furnace_input");
    let alchemy_water_well_input = document.getElementById("alchemy_water_well_input");
    let alchemy_kettle_input = document.getElementById("alchemy_kettle_input");
    let alchemy_alchemy_table_input = document.getElementById("alchemy_alchemy_table_input");
    alchemy_exp_input.addEventListener("focus", () => {
        alchemy_exp_input.value = alchemy_exp_input.value.replace(/[,]/g, "");
        alchemy_exp_input.type = "number";
    });
    alchemy_exp_input.addEventListener("blur", () => {
        let value = alchemy_exp_input.valueAsNumber;
        alchemy_exp_input.type = "text";
        alchemy_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    alchemy_exp_input.addEventListener("change", () => {
        alchemy_level_input.value = level_from_exp(alchemy_exp_input.valueAsNumber).toString();
    });
    alchemy_input_button.addEventListener("click", () => {
        let level = alchemy_level_input.valueAsNumber;
        let Furnace_id = 0;
        let Water_Well_id = 0;
        let Kettle_id = 0;
        let Alchemy_Table_id = 0;
        object_base.forEach((value) => {
            switch (value.name) {
                case "Furnace":
                    Furnace_id = value.b_i;
                    break;
                case "Water Well":
                    Water_Well_id = value.b_i;
                    break;
                case "Alchemy Table":
                    Alchemy_Table_id = value.b_i;
                    break;
                case "Kettle":
                    Kettle_id = value.b_i;
                    break;
            }
        });
        let Furnace_results = [];
        object_base[Furnace_id].params.results.forEach((value) => {
            if (value.skill === "alchemy")
                Furnace_results.push(value);
        });
        let Water_Well_results = [];
        object_base[Water_Well_id].params.results.forEach((value) => {
            if (value.skill === "alchemy")
                Water_Well_results.push(value);
        });
        let Alchemy_Table_results = [];
        object_base[Alchemy_Table_id].params.results.forEach((value) => {
            if (value.skill === "alchemy")
                Alchemy_Table_results.push(value);
        });
        let kettle_results = [];
        object_base[Kettle_id].params.results.forEach((value) => {
            if (value.skill === "alchemy")
                kettle_results.push(value);
        });
        let craftable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="alchemy_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per craft</th><th>number required</th><th>number produced</th></tr></thead><tbody>`;
        let recipes = [];
        if (alchemy_furnace_input.checked) {
            Furnace_results.forEach((value) => {
                recipes.push(value);
            });
        }
        if (alchemy_water_well_input.checked) {
            Water_Well_results.forEach((value) => {
                recipes.push(value);
            });
        }
        if (alchemy_kettle_input.checked) {
            kettle_results.forEach((value) => {
                recipes.push(value);
            });
        }
        if (alchemy_alchemy_table_input.checked) {
            Alchemy_Table_results.forEach((value) => {
                recipes.push(value);
            });
        }
        recipes.forEach((value) => {
            let returns = value.returns;
            let image_string = "";
            returns.forEach((value) => {
                image_string += get_image_div(value.id);
            });
            craftable_list += "<td>" + image_string + "</td>";
            craftable_list += "<td>" + (item_base[returns[0].id].name.includes("Vial") ? returns[0].level : returns[returns.length - 1].level) + "</td>";
            craftable_list += "<td>" + (item_base[returns[0].id].name.includes("Vial") ? returns[0].base_chance : returns[returns.length - 1].base_chance) + "</td>";
            craftable_list += "<td>" + (item_base[returns[0].id].name.includes("Vial") ? calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) : calculate_success(returns[returns.length - 1].base_chance, returns[returns.length - 1].max_chance, returns[returns.length - 1].level, level)) + "</td>";
            craftable_list += "<td>" + (item_base[returns[0].id].name.includes("Vial") ? returns[0].xp : returns[returns.length - 1].xp) * (1 + (alchemy_2x_input.checked === true ? 1 : 0)) + "</td>";
            let xp_per_tick = 0;
            let chance_of_path = 1;
            let feathers_per_craft = 0;
            returns.forEach((value) => {
                let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
                xp_per_tick += chance_of_path * current_chance * value.xp;
                let item_name = item_base[value.id].name;
                if (item_name.includes("Feather")) {
                    if (item_name.includes("[L]"))
                        feathers_per_craft += 15 * current_chance * chance_of_path;
                    else if (item_name.includes("[M]"))
                        feathers_per_craft += 10 * current_chance * chance_of_path;
                    else if (item_name.includes("[S]"))
                        feathers_per_craft += 5 * current_chance * chance_of_path;
                    else
                        feathers_per_craft += current_chance * chance_of_path;
                }
                else {
                    feathers_per_craft = 1;
                }
                chance_of_path -= chance_of_path * current_chance;
            });
            craftable_list += "<td>" + Math.round(xp_per_tick * (1 + (alchemy_2x_input.checked === true ? 1 : 0)) * 1000) / 1000 + "</td>";
            let required = calculate_xp_recursive((alchemy_exp_input.value === "" ? total_exp_for_level(alchemy_level_input.valueAsNumber) : alchemy_exp_input.value.replace(/[,]/g, "")), alchemy_target_level_input.valueAsNumber, returns);
            let required_string = "";
            returns[0].consumes.forEach((value) => {
                required_string += "<div style=\"height:32px;float:left;\">" + ((value.count * required.number_required) / (1 + (alchemy_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + get_image_div(value.id) + "</div>";
            });
            craftable_list += "<td>" + required_string + "</td>";
            if (feathers_per_craft === 1)
                craftable_list += "<td>" + (required.number_produced / (1 + (alchemy_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + "</td></tr>";
            else
                craftable_list += "<td>" + (feathers_per_craft * required.number_required / (1 + (alchemy_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + "</td></tr>";
        });
        table_content_container.innerHTML = craftable_list + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("alchemy_output_table"));
    });
};
