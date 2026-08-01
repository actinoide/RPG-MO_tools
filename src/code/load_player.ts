let load_player_initialize = () => {
  static_content_container.innerHTML = `<div style="width: 33%; margin-left: 33%; margin-right: 33%; text-align: center; color: #dddce0;">
  <p> Here you can input the name of a player in order to automatically retrieve their stats from the leaderboard server. If available these will be used as default inputs in the appropriate places. </p>
  <input type="text" class="input-string" placeholder="name" value="" id="player_name_input">
  <button class="input-button" id="player_input_button">look up</button>
  </div>`;
  let player_name_input = document.getElementById("player_name_input") as HTMLInputElement;
  let player_input_button = document.getElementById("player_input_button") as HTMLButtonElement;

  cookieStore.get("player-name").then((cookie) => {
    if (cookie && cookie.value) {
      player_name_input.value = cookie.value;
    }
  });

  let load_high_score_data = () => {
    let table_string = `<table style="color: #dddce0; width: 33%; margin-left: 33%; margin-right: 33%"><thead style="position:sticky; top:-1px;background:#1f1b26"><tr><th>stat</th><th>value</th><th>stat</th><th>value</th></tr></thead><tbody>`;
    if (player_highscore_data) {
      player_highscore_data.forEach((score) => {
        if (!player_highscore_data) return;
        if (player_highscore_data.indexOf(score) % 2 == 0) table_string += "<tr>";
        if (score.board == "total_xp") {
          table_string += "<td>" + score.board.replace("_", " ") + "</td><td>" + score.score / 10 + "</td>";
        } else {
          table_string += "<td>" + score.board.replace("_", " ") + "</td><td>" + score.score + "</td>";
        }
        if (player_highscore_data.indexOf(score) % 2 == 1) table_string += "</tr>";
        table_content_container.innerHTML = table_string + "</tbody></table>";
      });
    };
  };

  player_input_button.addEventListener("click", () => {
    if (player_name_input.value == "") return;
    let player_name = player_name_input.value;
    cookieStore.set("player-name", player_name);

    player_input_button.disabled = true;
    setTimeout(() => { player_input_button.disabled = false; }, 60000);

    fetch(highscore_data_address + "?n=" + player_name).then((reply) => {
      if (reply.ok) {
        reply.json().then((reply_json) => {
          player_highscore_data = reply_json;
          load_high_score_data();
        });
      }
    });
  });

  if (player_highscore_data) {
    load_high_score_data();
  }
};
