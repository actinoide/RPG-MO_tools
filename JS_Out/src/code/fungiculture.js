"use strict";
let fungiculture_initialize = () => {
    static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="fungiculture_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="fungiculture_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="fungiculture_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="Sawdust tiles" value="" id="fungiculture_sawdust_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0; min-width:40px;"step = "1">
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="fungiculture_spore_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Spores</span></label>
   <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="fungiculture_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>       
  <button id="fungiculture_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;
    let fungiculture_exp_input = document.getElementById("fungiculture_exp_input");
    let fungiculture_level_input = document.getElementById("fungiculture_level_input");
    let fungiculture_target_level_input = document.getElementById("fungiculture_target_level_input");
    let fungiculture_sawdust_input = document.getElementById("fungiculture_sawdust_input");
    let fungiculture_input_button = document.getElementById("fungiculture_input_button");
    let fungiculture_2x_input = document.getElementById("fungiculture_2x_input");
    let fungiculture_spore_input = document.getElementById("fungiculture_spore_input");
    fungiculture_exp_input.addEventListener("focus", () => {
        fungiculture_exp_input.value = fungiculture_exp_input.value.replace(/[,]/g, "");
        fungiculture_exp_input.type = "number";
    });
    fungiculture_exp_input.addEventListener("blur", () => {
        let value = fungiculture_exp_input.valueAsNumber;
        fungiculture_exp_input.type = "text";
        fungiculture_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
    });
    fungiculture_exp_input.addEventListener("change", () => {
        fungiculture_level_input.value = level_from_exp(fungiculture_exp_input.valueAsNumber).toString();
    });
    fungiculture_input_button.addEventListener("click", () => {
        let level = fungiculture_level_input.valueAsNumber;
        let spore_recipies = [];
        object_base.forEach((value) => {
            if (value.name === "Inventory") {
                value.params.results.forEach((value) => {
                    if (value.skill === "fungiculture") {
                        spore_recipies.push(value);
                    }
                });
            }
        });
        let farmable = [];
        item_base.forEach((value) => {
            if (typeof value.params.fungiculture_id === "number")
                farmable.push(value.b_i);
        });
        let xp_required = total_exp_for_level(fungiculture_target_level_input.valueAsNumber) - (fungiculture_exp_input.value === "" ? total_exp_for_level(fungiculture_level_input.valueAsNumber) : fungiculture_exp_input.value.replace(/[,]/g, ""));
        let farmable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="fungiculture_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>growth time</th><th>xp per harvest</th><th>number required</th><th>number of runs</th><th>time required in min</th></tr></thead><tbody>`;
        farmable.forEach((value) => {
            let item_string = "<tr>";
            let sawdust_count = fungiculture_sawdust_input.valueAsNumber;
            let spore = item_base[value];
            let mushroom = object_base[spore.params.fungiculture_id];
            let returns = mushroom.params.results[0].returns;
            let product = item_base[mushroom.params.results[0].returns[0].id];
            let spore_recipie = spore_recipies.find((value) => {
                if (value.requires.includes(product.b_i))
                    return true;
            });
            let xp_per_spore = 0;
            if (typeof spore_recipie !== "undefined" && fungiculture_spore_input.checked)
                xp_per_spore = (spore_recipie === null || spore_recipie === void 0 ? void 0 : spore_recipie.returns[0].xp) / 2;
            item_string += "<td>" + get_image_div(product.b_i) + (fungiculture_spore_input.checked ? get_image_div(spore.b_i) : "") + "</td>";
            item_string += "<td>" + spore.params.min_fungiculture + "</td>";
            item_string += "<td>" + mushroom.params.duration + "</td>";
            if (spore.params.min_fungiculture <= level) {
                item_string += "<td>" + Math.ceil((xp_per_spore + returns[0].xp) * (1 + (fungiculture_2x_input.checked ? 1 : 0))) + "</td>";
                item_string += "<td>" + get_image_div(spore.b_i) + (Math.ceil(xp_required / ((xp_per_spore + returns[0].xp) * (1 + (fungiculture_2x_input.checked ? 1 : 0))))).toLocaleString("en-GB") + "</td>";
                item_string += "<td>" + (Math.ceil(xp_required / (sawdust_count * (xp_per_spore + returns[0].xp) * (1 + (fungiculture_2x_input.checked ? 1 : 0))))).toLocaleString("en-GB") + "</td>";
                item_string += "<td>" + (mushroom.params.duration * Math.ceil(xp_required / (sawdust_count * (xp_per_spore + returns[0].xp) * (1 + (fungiculture_2x_input.checked ? 1 : 0))))).toLocaleString("en-GB") + "</td>";
            }
            else {
                item_string += "<td>" + 0 + "</td>";
                item_string += "<td>" + get_image_div(spore.b_i) + Infinity + "</td>";
                item_string += "<td>" + Infinity + "</td>";
                item_string += "<td>" + Infinity + "</td>";
            }
            farmable_list += item_string;
        });
        table_content_container.innerHTML = farmable_list + "</tbody></table>";
        sorttable.makeSortable(document.getElementById("fungiculture_output_table"));
    });
};
