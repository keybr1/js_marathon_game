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

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, count) {
  function params() {
    const { defaultHP, damageHP } = enemy;

    return `${damageHP}/${defaultHP}`;
  }

  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${
      secondPerson.name
    }, не помня себя от испуга, ударил в предплечье врага. -${count}, [${params()}]`,
    `${firstPerson.name} поперхнулся, и за это ${
      secondPerson.name
    } с испугу приложил прямой удар коленом в лоб врага. -${count}, [${params()}]`,
    `${firstPerson.name} забылся, но в это время наглый ${
      secondPerson.name
    }, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${params()}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${
      secondPerson.name
    } случайно нанес мощнейший удар. -${count}, [${params()}]`,
    `${firstPerson.name} поперхнулся, но в это время ${
      secondPerson.name
    } нехотя раздробил кулаком <вырезанно цензурой> противника. -${count}, [${params()}]`,
    `${firstPerson.name} удивился, а ${
      secondPerson.name
    }  пошатнувшись влепил подлый удар. -${count}, [${params()}]`,
    `${firstPerson.name} высморкался, но неожиданно ${
      secondPerson.name
    } провел дробящий удар. -${count}, [${params()}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${
      secondPerson.name
    } беспричинно ударил в ногу противника -${count}, [${params()}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${
      secondPerson.name
    } случайно влепил стопой в живот соперника. -${count}, [${params()}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${
      secondPerson.name
    } со скуки, разбил бровь сопернику. -${count}, [${params()}]`,
  ];

  return logs[random(logs.length) - 1];
}

init();
