import connect4 from "./connect4.class.js";

let game = new connect4();
game.table();

let jouer = document.getElementsByClassName("jouer")[0];
let restart = document.getElementsByClassName("restart")[0];
restart.addEventListener("click", function () {
  location.reload();
  game.game();
});
jouer.addEventListener("click", function () {
  game.game();
});
