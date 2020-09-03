import Pokemon from "./pokemon.js";
import { random, countClickFirst, generateLog } from "./utils.js";
import { pokemons } from "./pokemons.js";

const pikachu = pokemons.find((item) => item.name === "Pikachu");

const player1 = new Pokemon({
  ...pikachu,
  selectors: "player1",
});

const player2 = new Pokemon({
  name: "Charmander",
  damageHP: 300,
  defaultHP: 300,
  selectors: "player2",
});

const $control = document.querySelector(".control");

player1.attacks.forEach((item) => {
  console.log(item);
  const $btn = document.createElement("button");
  $btn.classList.add("button");
  $btn.innerText = item.name;
  const kickBtn = countClickFirst(item.maxCount, $btn);
  $btn.addEventListener("click", () => {
    console.log("Click button ", $btn.innerText);
    kickBtn();
  });
  $control.appendChild($btn);
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
