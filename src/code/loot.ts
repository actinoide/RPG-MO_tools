let party_initialize = () => {
  static_content_container.innerHTML = '<input type="number" placeholder="health level" value="" id="party_health_input" class="input-number" ><button id="easy_input_button" class="input-button">easy</button> <button id="normal_input_button" class="input-button">normal</button> <button id="hard_input_button" class="input-button">hard</button> <button id="hell_input_button" class="input-button">hell</button>';
  let party_health_input = document.getElementById("party_health_input") as HTMLInputElement;
  let easy_input_button = document.getElementById("easy_input_button") as HTMLButtonElement;
  let normal_input_button = document.getElementById("normal_input_button") as HTMLButtonElement;
  let hard_input_button = document.getElementById("hard_input_button") as HTMLButtonElement;
  let hell_input_button = document.getElementById("hell_input_button") as HTMLButtonElement;

  easy_input_button.addEventListener("click", () => {
    let health_level = party_health_input.valueAsNumber;
    generate_table(object_base[443], health_level);
  });
  normal_input_button.addEventListener("click", () => {
    let health_level = party_health_input.valueAsNumber;
    generate_table(object_base[444], health_level);
  });
  hard_input_button.addEventListener("click", () => {
    let health_level = party_health_input.valueAsNumber;
    generate_table(object_base[445], health_level);
  });
  hell_input_button.addEventListener("click", () => {
    let health_level = party_health_input.valueAsNumber;
    generate_table(object_base[657], health_level);
  });
};

let retal_initialize = () => {
  static_content_container.innerHTML = '<input type="number" placeholder="health level" value="" id="retal_health_input" class="input-number" ><button id="common_input_button" class="input-button">common</button><button id="rare_input_button" class="input-button">rare</button><button id="legendary_input_button" class="input-button">legendary</button>';
  let retal_health_input = document.getElementById("retal_health_input") as HTMLInputElement;
  let common_input_button = document.getElementById("common_input_button") as HTMLButtonElement;
  let rare_input_button = document.getElementById("rare_input_button") as HTMLButtonElement;
  let legendary_input_button = document.getElementById("legendary_input_button") as HTMLButtonElement;

  common_input_button.addEventListener("click", () => {
    let health_level = retal_health_input.valueAsNumber;
    generate_table(object_base[708], health_level);
  });
  rare_input_button.addEventListener("click", () => {
    let health_level = retal_health_input.valueAsNumber;
    generate_table(object_base[709], health_level);
  });
  legendary_input_button.addEventListener("click", () => {
    let health_level = retal_health_input.valueAsNumber;
    generate_table(object_base[710], health_level);
  });
};

let rare_key_initialize = () => {
  static_content_container.innerHTML = '<input type="number" placeholder="health level" value="" id="rare_key_health_input" class="input-number" >';
  let rare_key_chest = object_base[726];
  let rare_keys = rare_key_chest.params.results[0].requires_one_from;
  rare_keys.forEach((rare_key) => {
    let key_name = item_base[rare_key].name.replace(/Rare Key \[/, "").replace(/\]/, "");
    static_content_container.innerHTML += "<button id=\"" + key_name + "_input_button\" class=\"input-button\">" + key_name + "</button>";
  }); //altering the html removed handlers so this separation is necesary
  let rare_key_health_input = document.getElementById("rare_key_health_input") as HTMLInputElement;
  rare_keys.forEach((rare_key) => {
    let key_name = item_base[rare_key].name.replace(/Rare Key \[/, "").replace(/\]/, "");
    let key_input_button = document.getElementById(key_name + "_input_button") as HTMLButtonElement;
    key_input_button.addEventListener("click", () => {
      let health_level = rare_key_health_input.valueAsNumber;
      generate_table(object_base[726], health_level, rare_key);
    });
  });
};

/*
rare keys: "Rare Hunting Reward Chest" with id 726, long list of rewards with the consumes deciding where to sort it in
*/

let generate_table = (object: object_base_struct, health_level: number, filter: number = 0) => {
  let outstring = '<table style="color: #dddce0; width: 100%;" class="sortable"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>item</th><th>level</th><th>base rate</th><th>current rate</th></tr></thead><tbody>';
  let chance_of_path = 1;
  object.params.results[0].returns.forEach((item) => {
    if (filter == 0 || item.consumes[0].id == filter) {
      outstring += "<tr>";
      outstring += "<td>" + get_image_div(item.id) + item_base[item.id].name + "</td>";
      outstring += "<td>" + item.level + "</td>";
      outstring += "<td>" + item.max_chance + "</td>";
      if (health_level >= item.level) {
        outstring += "<td>" + Math.round(10000 * item.max_chance * chance_of_path) / 10000 + "</td>";
        chance_of_path -= item.max_chance * chance_of_path;
      }
      else {
        outstring += "<td>" + 0 + "</td>";
      };
      outstring += "</tr>";
    }
  });
  outstring += "</tbody></table>";
  table_content_container.innerHTML = outstring;
};