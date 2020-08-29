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
  this.damageHP -= count;

  const log = this === enemy ? generateLog(count) : generateLog(count);
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

function random(num) {
  return Math.ceil(Math.random() * num);
}

function params() {
  const { defaultHP, damageHP } = character;

  return `${damageHP}/${defaultHP}`;
}

function generateLog(count) {
  const { name } = character;
  const { name: eName } = enemy;

  const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${eName}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${params()}]`,
    `${name} поперхнулся, и за это ${eName} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${params()}]`,
    `${name} забылся, но в это время наглый ${eName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${params()}]`,
    `${name} пришел в себя, но неожиданно ${eName} случайно нанес мощнейший удар. -${count}, [${params()}]`,
    `${name} поперхнулся, но в это время ${eName} нехотя раздробил кулаком <вырезанно цензурой> противника. -${count}, [${params()}]`,
    `${name} удивился, а ${eName} пошатнувшись влепил подлый удар. -${count}, [${params()}]`,
    `${name} высморкался, но неожиданно ${eName} провел дробящий удар. -${count}, [${params()}]`,
    `${name} пошатнулся, и внезапно наглый ${eName} беспричинно ударил в ногу противника -${count}, [${params()}]`,
    `${name} расстроился, как вдруг, неожиданно ${eName} случайно влепил стопой в живот соперника. -${count}, [${params()}]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${eName} со скуки, разбил бровь сопернику. -${count}, [${params()}]`,
  ];

  return logs[random(logs.length) - 1];
}

init();
