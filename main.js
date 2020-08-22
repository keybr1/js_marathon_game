const $btn = document.getElementById("btn-kick");
const $lowBtn = document.getElementById("btn-low-kick");

const character = {
  name: "Pikahu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
};

$btn.addEventListener("click", function () {
  console.log("Kick");
  changeHP(random(20), character);
  changeHP(random(20), enemy);
});

$lowBtn.addEventListener("click", function () {
  console.log("LowKick");
  changeHP(random(10), character);
  changeHP(random(10), enemy);
});

function init() {
  console.log("Start Game!");
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + " / " + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + "%";
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert("Stupid " + person.name + " game over");
    $btn.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
