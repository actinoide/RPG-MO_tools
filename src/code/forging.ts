let forging_initialize = () => {

  static_content_container.innerHTML = `<div>
  <input type="number" placeholder="exp" value="" id="forging_exp_input" class="input-number" >
  <input type="number" placeholder="level" value="" id="forging_level_input" class="input-number"step = "1">
  <input type="number" placeholder="target level" value="" id="forging_target_level_input" class="input-number"step = "1">
    <label class="input-checkbox-label">
  <input type="checkbox" id="forging_2x_input" class="input-checkbox"><span class="input-checkbox-span">2x</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="forging_smelting_input" class="input-checkbox"><span class="input-checkbox-span">Smelting</span></label>
    <label class="input-checkbox-label">
  <input type="checkbox" id="forging_recycling_input" class="input-checkbox"><span class="input-checkbox-span">recycling</span></label>
  <button id="forging_input_button" class="input-button">calculate</button></div>`;



  let forging_exp_input = document.getElementById("forging_exp_input") as HTMLInputElement;
  let forging_level_input = document.getElementById("forging_level_input") as HTMLInputElement;
  let forging_target_level_input = document.getElementById("forging_target_level_input") as HTMLInputElement;
  let forging_input_button = document.getElementById("forging_input_button") as HTMLButtonElement;
  let forging_2x_input = document.getElementById("forging_2x_input") as HTMLInputElement;
  let forging_smelting_input = document.getElementById("forging_smelting_input") as HTMLInputElement;
  let forging_recycling_input = document.getElementById("forging_recycling_input") as HTMLInputElement;

  forging_exp_input.addEventListener("focus", () => {
    forging_exp_input.value = forging_exp_input.value.replace(/[,]/g, "");
    forging_exp_input.type = "number";
  });

  forging_exp_input.addEventListener("blur", () => {
    let value = forging_exp_input.valueAsNumber;
    forging_exp_input.type = "text";
    forging_exp_input.value = (value.toLocaleString("en-GB") === "NaN" ? "" : value.toLocaleString("en-GB"));
  });

  forging_exp_input.addEventListener("change", () => {
    forging_level_input.value = level_from_exp(forging_exp_input.valueAsNumber).toString();
  });

  forging_input_button.addEventListener("click", () => {

    let level = forging_level_input.valueAsNumber;

    let furnace_id = 0;
    object_base.forEach((value) => {
      switch (value.name) {
        case "Furnace":
          furnace_id = value.b_i;
          break;
      }
    });

    let furnace_results: result[] = [];
    object_base[furnace_id].params.results.forEach((value) => {
      if (value.skill === "forging")
        furnace_results.push(value);
    });

    let forgable_list = `<table style="color: #dddce0; width: 100%;" class="sortable" id="forging_output_table"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>name</th><th>level</th><th>base success</th><th>current success</th><th>xp per success</th><th>xp per craft</th><th>number required</th><th>number produced</th></tr></thead><tbody>`;

    furnace_results.forEach((value) => {
      let returns = value.returns;
      let image_string = "";
      returns.forEach((value) => {
        image_string += get_image_div(value.id);
      });
      forgable_list += "<td>" + image_string + "</td>";
      forgable_list += "<td>" + returns[0].level + "</td>";
      forgable_list += "<td>" + returns[0].base_chance + "</td>";
      forgable_list += "<td>" + calculate_success(returns[0].base_chance, returns[0].max_chance, returns[0].level, level) + "</td>";
      forgable_list += "<td>" + returns[0].xp * (1 + (forging_2x_input.checked ? 1 : 0)) + "</td>";
      let xp_per_tick = 0;
      let chance_of_path = 1;
      returns.forEach((value) => {
        let current_chance = calculate_success(value.base_chance, value.max_chance, value.level, level);
        xp_per_tick += chance_of_path * current_chance * value.xp;
        chance_of_path -= chance_of_path * current_chance;
      });
      forgable_list += "<td>" + Math.round(xp_per_tick * (1 + (forging_2x_input.checked ? 1 : 0)) * 1000) / 1000 + "</td>";
      let required = calculate_xp_recursive((forging_exp_input.value === "" ? total_exp_for_level(forging_level_input.valueAsNumber) : forging_exp_input.value.replace(/[,]/g, "") as unknown as number), forging_target_level_input.valueAsNumber, returns);
      let required_string = "";
      returns[0].consumes.forEach((value) => {
        required_string += "<div style=\"height:32px;float:left;\">" + ((value.count * required.number_required) / (1 + (forging_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") + get_image_div(value.id) + "</div>";
      });
      forgable_list += "<td>" + required_string + "</td>";
      forgable_list += "<td>" + (required.number_produced / (1 + (forging_2x_input.checked ? 1 : 0))).toLocaleString("en-GB") + "</td></tr>";
    });

    let forging_formulas: { product_id: number, level: number, chance: number, requierments: { item_id: number, count: number; }[], recycling_chance: number; }[] = [];

    for (let index = 0; ; index++) {
      //@ts-ignore
      let value = FORGE_FORMULAS[index];
      if (typeof value === "undefined")
        break;
      if (typeof value.wizardry_level === "undefined" && typeof value.fletching_level === "undefined") {
        let formula: { product_id: number, level: number, chance: number, requierments: { item_id: number, count: number; }[]; recycling_chance: number; } = { product_id: 0, level: 0, chance: 0, requierments: [], recycling_chance: 0.5 };
        formula.product_id = value.item_id;
        formula.chance = value.chance;
        formula.level = value.level;
        if (!(typeof value.recycle_chance === "undefined"))
          formula.recycling_chance = value.recycle_chance;
        for (let sub_index = 0; ; sub_index++) {
          let sub_value = value.pattern[sub_index];
          if (typeof sub_value === "undefined")
            break;
          for (let sub_sub_index = 0; ; sub_sub_index++) {
            let sub_sub_value = value.pattern[sub_index][sub_sub_index];
            if (typeof sub_sub_value === "undefined")
              break;
            if (formula.requierments.findIndex((element) => { if (element.item_id === sub_sub_value) return true; }) === -1) {
              if (!(sub_sub_value === -1))
                formula.requierments.push({ item_id: sub_sub_value, count: 1 });
            }
            else
              formula.requierments[formula.requierments.findIndex((element) => { if (element.item_id === sub_sub_value) return true; })].count += 1;
          }
        }
        forging_formulas.push(formula);
      }
    }

    let xp_required = total_exp_for_level(forging_target_level_input.valueAsNumber) - (forging_exp_input.value === "" ? total_exp_for_level(forging_level_input.valueAsNumber) : forging_exp_input.value.replace(/[,]/g, "") as unknown as number);

    let forging_results: { icon_ids: number[], level: number, success: number, xp_per_success: number, xp_per_craft: number; number_required: { item_id: number, count: number; }[], number_produced: { item_id: number, count: number; }; }[] = [];

    if (!forging_recycling_input.checked) {
      //items without recycling
      if (!forging_smelting_input.checked) {
        //items from bars
        forging_formulas.forEach((value) => {
          let forging_result: { icon_ids: number[], level: number, success: number, xp_per_success: number, xp_per_craft: number; number_required: { item_id: number, count: number; }[], number_produced: { item_id: number, count: number; }; } = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
          forging_result.icon_ids = [value.product_id];
          forging_result.level = value.level;
          forging_result.success = value.chance;
          let xp_per_success = 0;
          value.requierments.forEach((value) => {
            //@ts-ignore
            xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
          });
          forging_result.xp_per_success = xp_per_success;
          forging_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5);
          forging_result.number_produced.item_id = value.product_id;
          forging_result.number_produced.count = value.chance * (xp_required / forging_result.xp_per_craft);
          value.requierments.forEach((value) => {
            forging_result.number_required.push({
              item_id: value.item_id,
              count: value.count * (xp_required / forging_result.xp_per_craft)
            });
          });
          forging_results.push(forging_result);
        });
      }
      else {
        // items from ores
        forging_formulas.forEach((value) => {
          let forging_result: { icon_ids: number[], level: number, success: number, xp_per_success: number, xp_per_craft: number; number_required: { item_id: number, count: number; }[], number_produced: { item_id: number, count: number; }; } = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
          forging_result.icon_ids.push(value.product_id);
          forging_result.level = value.level;
          forging_result.success = value.chance;
          let xp_per_success = 0;
          let xp_from_smelting = 0;
          value.requierments.forEach((value) => {
            //@ts-ignore
            xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
          });
          value.requierments.forEach((value) => {
            let furnace_recipie = furnace_results.find((sub_value) => {
              if (sub_value.returns[0].id === value.item_id)
                return true;
            });
            if (!(typeof furnace_recipie === "undefined")) {
              //if the ingredient can be smelted
              forging_result.icon_ids.push(value.item_id);
              xp_from_smelting += value.count * furnace_recipie.returns[0].xp;
            }
          });
          forging_result.xp_per_success = xp_per_success + xp_from_smelting;
          forging_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5) + xp_from_smelting;
          forging_result.number_produced.item_id = value.product_id;
          forging_result.number_produced.count = value.chance * (xp_required / forging_result.xp_per_craft);
          value.requierments.forEach((value) => {
            let furnace_recipie = furnace_results.find((sub_value) => {
              if (sub_value.returns[0].id === value.item_id)
                return true;
            });
            if (!(typeof furnace_recipie === "undefined")) {
              //if the ingredient can be smelted
              let required = calculate_xp_recursive((forging_exp_input.value === "" ? total_exp_for_level(forging_level_input.valueAsNumber) : forging_exp_input.value.replace(/[,]/g, "") as unknown as number), forging_target_level_input.valueAsNumber, furnace_recipie.returns);
              let smelting_ratio = required.number_required / required.number_produced;
              //smelting ratio, calculated by taking the ratio of requiered vs. produced for making bars the entire way
              furnace_recipie.returns[0].consumes.forEach((sub_value) => {
                forging_result.number_required.push({
                  item_id: sub_value.id,
                  count: sub_value.count * value.count * (xp_required / forging_result.xp_per_craft) * smelting_ratio
                });
              });
            }
            else {
              //if the ingredient can not be smelted
              forging_result.number_required.push({
                item_id: value.item_id,
                count: value.count * (xp_required / forging_result.xp_per_craft)
              });
            }
          });
          forging_results.push(forging_result);
        });
      }
    }
    else {
      //items with recycling. recycling gives 25% of material xp for each item returned 
      if (!forging_smelting_input.checked) {
        //tems from bars + recycling bars and exp
        forging_formulas.forEach((value) => {
          let forging_result: { icon_ids: number[], level: number, success: number, xp_per_success: number, xp_per_craft: number; number_required: { item_id: number, count: number; }[], number_produced: { item_id: number, count: number; }; } = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
          forging_result.icon_ids = [value.product_id];
          forging_result.level = value.level;
          forging_result.success = value.chance;
          let xp_per_success = 0;
          value.requierments.forEach((value) => {
            //@ts-ignore
            xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
          });
          forging_result.xp_per_success = xp_per_success;
          forging_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5);
          forging_result.number_produced.item_id = value.product_id;
          forging_result.number_produced.count = value.chance * (xp_required / (forging_result.xp_per_craft * (1 + 0.25 * value.recycling_chance * value.chance)));
          value.requierments.forEach((sub_value) => {
            forging_result.number_required.push({
              item_id: sub_value.item_id,
              count: sub_value.count * ((xp_required / (forging_result.xp_per_craft * (1 + 0.25 * value.recycling_chance * value.chance))) - forging_result.number_produced.count * value.recycling_chance)
            });
          });
          forging_results.push(forging_result);
        });
      }
      else {
        //items from ores + recycling bars and exp
        forging_formulas.forEach((value) => {
          let forging_result: { icon_ids: number[], level: number, success: number, xp_per_success: number, xp_per_craft: number; number_required: { item_id: number, count: number; }[], number_produced: { item_id: number, count: number; }; } = { icon_ids: [], level: 0, success: 0, xp_per_success: 0, xp_per_craft: 0, number_required: [], number_produced: { item_id: 0, count: 0 } };
          forging_result.icon_ids.push(value.product_id);
          forging_result.level = value.level;
          forging_result.success = value.chance;
          let xp_per_success = 0;
          let xp_from_smelting = 0;
          value.requierments.forEach((value) => {
            //@ts-ignore
            xp_per_success += value.count * (typeof FORGE_MATERIAL_XP[value.item_id] === "number" ? FORGE_MATERIAL_XP[value.item_id] : 0);
          });
          value.requierments.forEach((value) => {
            let furnace_recipie = furnace_results.find((sub_value) => {
              if (sub_value.returns[0].id === value.item_id)
                return true;
            });
            if (!(typeof furnace_recipie === "undefined")) {
              //if the ingredient can be smelted
              forging_result.icon_ids.push(value.item_id);
              xp_from_smelting += value.count * furnace_recipie.returns[0].xp;
            }
          });
          forging_result.xp_per_success = xp_per_success + xp_from_smelting;
          forging_result.xp_per_craft = xp_per_success * (value.chance / 2 + 0.5) + xp_from_smelting;
          forging_result.number_produced.item_id = value.product_id;
          forging_result.number_produced.count = value.chance * (xp_required / (xp_per_success * (value.chance / 2 + 0.5) * (1 + 0.25 * value.recycling_chance * value.chance) + xp_from_smelting));
          value.requierments.forEach((sub_value) => {
            let furnace_recipie = furnace_results.find((sub_sub_value) => {
              if (sub_sub_value.returns[0].id === sub_value.item_id)
                return true;
            });
            if (!(typeof furnace_recipie === "undefined")) {
              //if the ingredient can be smelted
              let required = calculate_xp_recursive((forging_exp_input.value === "" ? total_exp_for_level(forging_level_input.valueAsNumber) : forging_exp_input.value.replace(/[,]/g, "") as unknown as number), forging_target_level_input.valueAsNumber, furnace_recipie.returns);
              let smelting_ratio = required.number_required / required.number_produced;
              //smelting ratio, calculated by taking the ratio of requiered vs. produced for making bars the entire way
              furnace_recipie.returns[0].consumes.forEach((sub_sub_value) => {
                forging_result.number_required.push({
                  item_id: sub_sub_value.id,
                  count: sub_sub_value.count * sub_value.count * ((xp_required / (xp_per_success * (value.chance / 2 + 0.5) * (1 + 0.25 * value.recycling_chance * value.chance) + xp_from_smelting)) - forging_result.number_produced.count * value.recycling_chance) * smelting_ratio
                });
              });
            }
            else {
              //if the ingredient can not be smelted
              forging_result.number_required.push({
                item_id: sub_value.item_id,
                count: sub_value.count * ((xp_required / (xp_per_success * (value.chance / 2 + 0.5) * (1 + 0.25 * value.recycling_chance * value.chance) + xp_from_smelting)) - forging_result.number_produced.count * sub_value.count * value.recycling_chance)
              });
            }
          });
          forging_results.push(forging_result);
        });
      }
    }

    forging_results.forEach((value) => {
      if (!(value.xp_per_success === 0)) {
        forgable_list += "<tr>";
        let image_string = "";
        value.icon_ids.forEach((value) => {
          image_string += get_image_div(value);
        });
        forgable_list += "<td>" + image_string + "</td>";
        forgable_list += "<td>" + value.level + "</td>";
        forgable_list += "<td>" + value.success + "</td>";
        forgable_list += "<td>" + ((value.level <= level) ? value.success : 0) + "</td>";
        forgable_list += "<td>" + Math.round(value.xp_per_success * (1 + (forging_2x_input.checked === true ? 1 : 0))) + "</td>";
        forgable_list += "<td>" + ((value.level <= level) ? Math.round(value.xp_per_craft * (1 + (forging_2x_input.checked === true ? 1 : 0))) : 0) + "</td>";
        let requiered_string = "";
        value.number_required.forEach((sub_value) => {
          requiered_string += "<div style=\"height:32px;float:left;\">" + ((value.level <= level) ? Math.round(sub_value.count / (1 + (forging_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + get_image_div(sub_value.item_id) + "</div>";
        });
        forgable_list += "<td>" + requiered_string + "</td>";
        forgable_list += "<td>" + ((value.level <= level) ? Math.round(value.number_produced.count / (1 + (forging_2x_input.checked === true ? 1 : 0))).toLocaleString("en-GB") : 0) + "</td>";
        forgable_list += "</tr>";
      }
    });


    table_content_container.innerHTML = forgable_list + "</tbody></table>";
    //@ts-ignore
    sorttable.makeSortable(document.getElementById("forging_output_table"));
  });
};