import Pokemon from "./pokemon.js";
import {
  random,
  countClickFirst,
  generateLog,
  player1Kick,
  player2Kick,
} from "./utils.js";
import { pokemons } from "./pokemons.js";

const randomPlayer = random(pokemons.length - 1);
// const $elImg = document.getElementById("img-player1");
// $elImg.src = pokemons[0].img;

const player1 = new Pokemon({
  ...pokemons[randomPlayer],
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
    let count = random(item.minDamage, item.maxDamage);
    player2.changeHP(count);
    player1Kick(player1, player2, count);
    kickBtn();
  });
  $control.appendChild($btn);
});

player2.attacks.forEach((item) => {
  console.log(item);
  const $btn = document.createElement("button");
  $btn.classList.add("button");
  $btn.innerText = item.name;
  const kickBtn = countClickFirst(item.maxCount, $btn);
  $btn.addEventListener("click", () => {
    console.log("Click button ", $btn.innerText);
    let count = random(item.minDamage, item.maxDamage);
    player1.changeHP(count);
    player2Kick(player2, player1, count);
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

firstRound = () => {
  const playground = document.querySelector(".playground");
  playground.textContent = "";
  pokemons.forEach((item) => {
    const { name, img } = item;
    const card = document.createElement("div");
    card.style.cursor = "pointer";
    card.className = "pokemon";
    card.innerHTML = `
      <img src="${img}" class="sprite" />
      <div class="details">
        <h2 class="name">${name}</h2>
      </div>
    `;
    card.addEventListener("click", () => {
      this.start(name);
    });
    playground.appendChild(card);
  });
};
