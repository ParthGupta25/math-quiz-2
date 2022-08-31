function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}

function addName() {
    var name1 = document.getElementById("player1_name_input").value;
    document.getElementById("player_1").innerHTML = name1;

    var name2 = document.getElementById("player2_name_input").value;
    document.getElementById("player_2").innerHTML = name2;
}