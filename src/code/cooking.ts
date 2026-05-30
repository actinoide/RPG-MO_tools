let cooking_initialize = () => {
  static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="cooking_exp_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;" >
  <input type="number" placeholder="level" value="" id="cooking_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
  <input type="number" placeholder="target level" value="" id="cooking_target_level_input" style="margin: 10px;padding: 5px;width: 15%;box-sizing: border-box;border-radius: 6px;border: none;height: 24px;background-color: #373044ff;color: #dddce0;min-width:40px;"step = "1">
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="cooking_2x_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">2x</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="cooking_campfire_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Campfire</span></label>
    <label style="margin:10px;padding:5px;box-sizing:border-box;border:none;color:#dddce0">
  <input type="checkbox" id="cooking_kettle_input" style="height:17px;width:17px;margin:0;vertical-align:middle;"><span style="vertical-align:middle;padding-left:5px;">Kettle</span></label>
  <button id="cooking_input_button" style ="border-radius: 6px;height: 24px;margin-top: 10px;margin-bottom: 10px;border: none;vertical-align: top;background-color: #8777a3;color: #dddce0;padding: 5px;">calculate</button></div>`;



  let cooking_exp_input = document.getElementById("cooking_exp_input") as HTMLInputElement;
  let cooking_level_input = document.getElementById("cooking_level_input") as HTMLInputElement;
  let cooking_target_level_input = document.getElementById("cooking_target_level_input") as HTMLInputElement;
  let cooking_input_button = document.getElementById("cooking_input_button") as HTMLButtonElement;
  let cooking_2x_input = document.getElementById("cooking_2x_input") as HTMLInputElement;
  let cooking_campfire_input = document.getElementById("cooking_campfire_input") as HTMLInputElement;
  let cooking_kettle_input = document.getElementById("cooking_kettle_input") as HTMLInputElement;

  cooking_exp_input.addEventListener("focus", () => {
    cooking_exp_input.value = cooking_exp_input.value.replace(/[,]/g, "");
    cooking_exp_input.type = "number";
  });

  cooking_exp_input.addEventListener("blur", () => {
    let value = cooking_exp_input.valueAsNumber;
    cooking_exp_input.type = "text";
    cooking_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
  });

  cooking_exp_input.addEventListener("change", () => {
    cooking_level_input.value = level_from_exp(cooking_exp_input.valueAsNumber).toString();
  });

  cooking_input_button.addEventListener("click", () => {

    let level = cooking_level_input.valueAsNumber;

    let campfire_id: number = 0;
    let kettle_id: number = 0;
    object_base.forEach((value) => {
      switch (value.name) {
        case "Campfire":
          campfire_id = value.b_i;
          break;
        case "Kettle":
          kettle_id = value.b_i;
          break;
      }
    });

    let campfire_results: result[] = [];
    object_base[campfire_id].params.results.forEach((value) => {
      if (value.skill === "cooking")
        campfire_results.push(value);
    });

    let kettle_results: result[] = [];
    object_base[kettle_id].params.results.forEach((value) => {
      if (value.skill === "cooking")
        kettle_results.push(value);
    });

    let cookable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="cooking_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per craft</th><th>number required</th><th>number produced</th></tr></thead><tbody>`;

    let recipes: result[] = [];

    if (cooking_campfire_input.checked) {
      campfire_results.forEach((value) => {
        recipes.push(value);
      });
    }
    if (cooking_kettle_input.checked) {
      kettle_results.forEach((value) => {
        recipes.push(value);
      });
    }

    recipes.forEach((value) => {
      let returns = value.returns;
      let image_string = "";
      returns.forEach((value) => {
        image_string += get_image_div(value.id);
      });
      cookable_list += "<td>" + image_string + "</td>";
      cookable_list += "<td>" + returns[0].level + "</td>";
      cookable_list += "<td>" + returns[0].base_chance + "</td>";
      cookable_list += "<td>" + calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) + "</td>";
      cookable_list += "<td>" + returns[0].xp * (1 + (cooking_2x_input.checked === true ? 1 : 0)) + "</td>";
      let xp_per_tick = 0;
      let chance_of_path = 1;
      returns.forEach((value) => {
        let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
        xp_per_tick += chance_of_path * current_chance * value.xp;
        chance_of_path -= chance_of_path * current_chance;
      });
      cookable_list += "<td>" + Math.round(xp_per_tick * (1 + (cooking_2x_input.checked === true ? 1 : 0)) * 1000) / 1000 + "</td>";
      let required = calculate_xp_recursive((cooking_exp_input.value === "" ? total_exp_for_level(cooking_level_input.valueAsNumber) : cooking_exp_input.value.replace(/[,]/g, "") as unknown as number), cooking_target_level_input.valueAsNumber, returns);
      let required_string = "";
      returns[0].consumes.forEach((value) => {
        required_string += "<div style=\"height:32px;float:left;\">" + ((value.count * required.number_required)/(1 + (cooking_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + get_image_div(value.id) + "</div>";
      });
      cookable_list += "<td>" + required_string + "</td>";
      cookable_list += "<td>" + (required.number_produced/(1 + (cooking_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + "</td></tr>";
    });

    table_content_container.innerHTML = cookable_list + "</tbody></table>";
    //@ts-ignore
    sorttable.makeSortable(document.getElementById("cooking_output_table"));
  });
};

let calculate_xp_recursive = (starting_experience: number, target_level: number, returns: returns[]): { number_required: number, number_produced: number; } => {
  if (Number.isNaN(starting_experience) || Number.isNaN(target_level)) return { number_required: NaN, number_produced: NaN };
  let current_level = level_from_exp(starting_experience);
  let xp_required = total_exp_for_level(current_level + 1) - starting_experience;
  if (xp_required <= 0) {
    current_level++;
    xp_required = total_exp_for_level(current_level + 1) - starting_experience;
  }
  let xp_per_tick = 0;
  let chance_of_path = 1;
  returns.forEach((value) => {
    let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, current_level);
    xp_per_tick += chance_of_path * current_chance * value.xp;
    chance_of_path -= chance_of_path * current_chance;
  });
  let number_required = Math.ceil(xp_required / (xp_per_tick));
  let number_produced = Math.ceil(xp_required / (xp_per_tick / (1 - chance_of_path)));
  if (current_level + 1 == target_level)
    return { number_required, number_produced };
  else {
    let remainder = calculate_xp_recursive(Number(starting_experience) + number_required * xp_per_tick, target_level, returns);
    return {
      number_required: (number_required + remainder.number_required),
      number_produced: (number_produced + remainder.number_produced)
    };
  }
};