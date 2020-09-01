import { pokemon, pokemon2 } from "./pokemon.js";
import random from "./utils.js";
import countClickFirst from "./count.js";
import generateLog from "./generate.js";

console.log(pokemon);
console.log(pokemon2);

function $getElById(id) {
  return document.getElementById(id);
}

const $btn = $getElById("btn-kick");
const $lowBtn = $getElById("btn-low-kick");

const character = {
  name: "Pikachu",
  damageHP: 100,
  defaultHP: 100,
  elHP: $getElById("health-character"),
  elProgressbar: $getElById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

const enemy = {
  name: "Charmander",
  damageHP: 100,
  defaultHP: 100,
  elHP: $getElById("health-enemy"),
  elProgressbar: $getElById("progressbar-enemy"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

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
  character.changeHP(random(num));
  enemy.changeHP(random(num));
}

function init() {
  console.log("Start Game!");
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + " / " + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + "%";
}

function changeHP(count) {
  this.damageHP -= count;

  const log =
    this === enemy
      ? generateLog(this, character, count)
      : generateLog(this, enemy, count);
  console.log(log);

  const $p = document.createElement("p");
  const $logs = document.querySelector("#logs");
  $p.innerText = `${log}`;
  $logs.insertBefore($p, $logs.children[0]);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert("Stupid " + this.name + " game over");
    $btn.disabled = true;
    $lowBtn.disabled = true;
  }

  this.renderHP();
}

init();
