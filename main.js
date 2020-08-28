function $getElById(id) {
  return document.getElementById(id);
}

const $btn = $getElById("btn-kick");
const $lowBtn = $getElById("btn-low-kick");

const character = {
  name: "Pikachu",
  hp: {
    current: 100,
    total: 100,
  },
  elHP: $getElById("health-character"),
  elProgressbar: $getElById("progressbar-character"),
  renderHP: renderHP,
  changeHP: changeHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP,
};

const enemy = {
  name: "Charmander",
  hp: {
    current: 100,
    total: 100,
  },
  elHP: $getElById("health-enemy"),
  elProgressbar: $getElById("progressbar-enemy"),
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
  this.elHP.innerText = this.hp.current + " / " + this.hp.total;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.hp.current + "%";
}

function changeHP(count) {
  this.hp.current -= count;

  const log =
    this === enemy
      ? generateLog(this, character, count)
      : generateLog(this, enemy, count);
  console.log(log);

  if (this.hp.current <= 0) {
    this.hp.current = 0;
    alert("Stupid " + this.name + " game over");
    $btn.disabled = true;
    $lowBtn.disabled = true;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function params() {
  const {
    hp: { current, total },
  } = character;

  return `${current}/${total}`;
}

function generateLog(current, total, count) {
  const { name } = character;
  const { name: eName } = enemy;

  const $p = document.createElement("p");
  $p.innerText = [
    `${name} вспомнил что-то важное, но неожиданно ${eName}, не помня себя от испуга, ударил в предплечье врага. -${count}, ${params()}`,
    `${name} поперхнулся, и за это ${eName} с испугу приложил прямой удар коленом в лоб врага. -${count}, ${params()}`,
    `${name} забылся, но в это время наглый ${eName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, ${params()}`,
    `${name} пришел в себя, но неожиданно ${eName} случайно нанес мощнейший удар.`,
    `${name} поперхнулся, но в это время ${eName} нехотя раздробил кулаком <вырезанно цензурой> противника. -${count}, ${params()}`,
    `${name} удивился, а ${eName} пошатнувшись влепил подлый удар. -${count}, ${params()}`,
    `${name} высморкался, но неожиданно ${eName} провел дробящий удар. -${count}, ${params()}`,
    `${name} пошатнулся, и внезапно наглый ${eName} беспричинно ударил в ногу противника -${count}, ${params()}`,
    `${name} расстроился, как вдруг, неожиданно ${eName} случайно влепил стопой в живот соперника. -${count}, ${params()}`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${eName} со скуки, разбил бровь сопернику. -${count}, ${params()}`,
  ];

  const $logs = document.querySelector("#logs");
  $logs.insertBefore($p, $logs.children[0]);

  return logs[random(logs.length) - 1];
}

init();
