import Pokemon from "./pokemon.js";
import random from "./utils.js";
import countClickFirst from "./count.js";
import generateLog from "./generate.js";

const player1 = new Pokemon({
  name: "Pikachu",
  damageHP: 400,
  selectors: "character",
});

const player2 = new Pokemon({
  name: "Charmander",
  damageHP: 300,
  selectors: "enemy",
});

function $getElById(id) {
  return document.getElementById(id);
}

const $btn = $getElById("btn-kick");
const $lowBtn = $getElById("btn-low-kick");

const firstKick = countClickFirst(5, $btn);
const secondKick = countClickFirst(7, $lowBtn);

$btn.addEventListener("click", () => {
  firstKick();
  damage(20, 10);
});

$lowBtn.addEventListener("click", function () {
  secondKick();
  damage(10);
});

function damage(num) {
  player1.changeHP(random(num), function (count) {
    console.log("some HP", count);
    console.log(generateLog(player1, player2, count));
  }),
    player2.changeHP(random(num), function (count) {
      console.log("some HP", count);
    });
}

function changeHP(count) {
  this.damageHP -= count;

  const log =
    this === enemy
      ? generateLog(this, character, count)
      : generateLog(this, enemy, count);
  console.log(log);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    console.log("Stupid " + this.name + " lose!");
    $btn.disabled = true;
    $lowBtn.disabled = true;
  }

  this.renderHP();
}
