let fishing_initialize = () => {
  static_content_container.innerHTML = `<div>
   <input type="number" placeholder="exp" value="" id="fishing_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="fishing_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="fishing_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="inventory slots" value="" id="fishing_inventory_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0; min-width:40px;"step = "1">
  <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="fishing_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>  
  <button id="fishing_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;

  let fishing_exp_input = document.getElementById("fishing_exp_input") as HTMLInputElement;
  let fishing_level_input = document.getElementById("fishing_level_input") as HTMLInputElement;
  let fishing_target_level_input = document.getElementById("fishing_target_level_input") as HTMLInputElement;
  let fishing_inventory_input = document.getElementById("fishing_inventory_input") as HTMLInputElement;
  let fishing_input_button = document.getElementById("fishing_input_button") as HTMLButtonElement;
  let fishing_2x_input = document.getElementById("fishing_2x_input") as HTMLInputElement;

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

    let fishable: number[] = [];
    object_base.forEach((value) => {
      if (value.activities.includes("Catch"))
        fishable.push(value.b_i);
    });

    let xp_required = total_exp_for_level(fishing_target_level_input.valueAsNumber) - (fishing_exp_input.value === "" ? total_exp_for_level(fishing_level_input.valueAsNumber) : fishing_exp_input.value.replace(/[,]/g, "") as unknown as number);

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

    //@ts-ignore
    sorttable.makeSortable(document.getElementById("fishing_output_table"));
  });
};