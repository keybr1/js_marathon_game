const $btn = document.getElementById("btn-kick");
const $lowBtn = document.getElementById("btn-low-kick");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

$btn.addEventListener("click", function () {
  damage(20);
});

$lowBtn.addEventListener("click", function () {
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
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert("Stupid " + this.name + " game over");
    $btn.disabled = true;
    $lowBtn.disabled = true;
  } else {
    this.damageHP -= count;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();
