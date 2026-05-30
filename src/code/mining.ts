let mining_initialize = () => {
  static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="mining_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="mining_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="mining_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="inventory slots" value="" id="mining_inventory_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0; min-width:40px;"step = "1">
  <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="mining_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>
  <button id="mining_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;

  let mining_exp_input = document.getElementById("mining_exp_input") as HTMLInputElement;
  let mining_level_input = document.getElementById("mining_level_input") as HTMLInputElement;
  let mining_target_level_input = document.getElementById("mining_target_level_input") as HTMLInputElement;
  let mining_inventory_input = document.getElementById("mining_inventory_input") as HTMLInputElement;
  let mining_input_button = document.getElementById("mining_input_button") as HTMLButtonElement;
  let mining_2x_input = document.getElementById("mining_2x_input") as HTMLInputElement;

  mining_exp_input.addEventListener("focus", () => {
    mining_exp_input.value = mining_exp_input.value.replace(/[,]/g, "");
    mining_exp_input.type = "number";
  });

  mining_exp_input.addEventListener("blur", () => {
    let value = mining_exp_input.valueAsNumber;
    mining_exp_input.type = "text";
    mining_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
  });

  mining_exp_input.addEventListener("change", () => {
    mining_level_input.value = level_from_exp(mining_exp_input.valueAsNumber).toString();
  });

  mining_input_button.addEventListener("click", () => {

    let level = mining_level_input.valueAsNumber;
    let inventory_slots = mining_inventory_input.valueAsNumber;

    let minable: number[] = [];
    object_base.forEach((value) => {
      if (value.activities.includes("Mine") || value.activities.includes("Dig"))
        minable.push(value.b_i);
    });

    let xp_required = total_exp_for_level(mining_target_level_input.valueAsNumber) - (mining_exp_input.value === "" ? total_exp_for_level(mining_level_input.valueAsNumber) : mining_exp_input.value.replace(/[,]/g, "") as unknown as number);

    let minable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="mining_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per tick</th><th>seconds per inventory</th><th>number required</th></tr></thead><tbody>`;

    minable.forEach((value) => {
      let item_string = "<tr>";
      let item = object_base[value];
      let returns = item.params.results[0].returns;
      let image_string = "";
      returns.forEach((value) => {
        image_string += get_image_div(value.id)
      });
      item_string += "<td>" + image_string + "</td>";
      item_string += "<td>" + returns[returns.length - 1].level + "</td>";
      item_string += "<td>" + returns[returns.length - 1].base_chance + "</td>";
      item_string += "<td>" + calculate_success(returns[returns.length - 1].base_chance, returns[returns.length - 1].max_chance, returns[returns.length - 1].level, level) + "</td>";
      item_string += "<td>" + returns[returns.length - 1].xp * (1 + (mining_2x_input.checked === true ? 1 : 0)) + "</td>";
      let xp_per_tick = 0;
      let chance_of_path = 1;
      returns.forEach((value) => {
        let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level)
        xp_per_tick += chance_of_path * current_chance * value.xp;
        chance_of_path -= chance_of_path * current_chance;
      });
      item_string += "<td>" + Math.round(1000 * xp_per_tick * (1 + (mining_2x_input.checked === true ? 1 : 0))) / 1000 + "</td>";
      item_string += "<td>" + Math.round(1 / (1 - chance_of_path) * 2 * inventory_slots) + "</td>";
      item_string += "<td>" + Math.ceil(xp_required / ((xp_per_tick * (1 + (mining_2x_input.checked === true ? 1 : 0))) / (1 - chance_of_path))).toLocaleString("en-GB") + "</td>";
      item_string += "</tr>";
      minable_list += item_string;
    });

    table_content_container.innerHTML = minable_list + `</tbody></table>`;

    //@ts-ignore
    sorttable.makeSortable(document.getElementById("mining_output_table"));
  });
};
