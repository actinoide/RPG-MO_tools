let breeding_initialize = () => {

  static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="breeding_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="breeding_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="breeding_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="breeding_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>
  <button id="breeding_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;

  let breeding_exp_input = document.getElementById("breeding_exp_input") as HTMLInputElement;
  let breeding_level_input = document.getElementById("breeding_level_input") as HTMLInputElement;
  let breeding_target_level_input = document.getElementById("breeding_target_level_input") as HTMLInputElement;
  let breeding_input_button = document.getElementById("breeding_input_button") as HTMLButtonElement;
  let breeding_2x_input = document.getElementById("breeding_2x_input") as HTMLInputElement;

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
    let xp_required = total_exp_for_level(breeding_target_level_input.valueAsNumber) - (breeding_exp_input.value === "" ? total_exp_for_level(breeding_level_input.valueAsNumber) : breeding_exp_input.value.replace(/[,]/g, "") as unknown as number);

    let breedable_string = `<table style="color: #dddce0; width: 100%;" class="sortable" id="breeding_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>xp per attempt</th><th>lost pets</th><th>insurance cost</th></tr></thead><tbody>`;

    pets.forEach((value) => {
      if (!(typeof value.params.likes === "undefined")) {
        value.params.likes.forEach((sub_value: any) => {
          breedable_string += "<tr><td>" + get_image_div(value.params.item_id) + get_image_div(pets[sub_value.pet_id].params.item_id) + "</td>";
          breedable_string += "<td>" + value.params.breeding_level + "</td>";
          let xp_per_tick = 0;
          let chance_of_path = 1;
          sub_value.returns.forEach((partner: any) => {
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

    //@ts-ignore
    sorttable.makeSortable(document.getElementById("breeding_output_table"));

  });
};