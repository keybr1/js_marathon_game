class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
    this.pokiName = document.getElementById(`name-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, damageHP, defaultHP, selectors, attacks = [] }) {
    super(selectors);

    this.name = name;
    this.damageHP = damageHP;
    this.defaultHP = defaultHP;
    this.attacks = attacks;

    this.renderHP();
    this.changeName();
  }

  changeName = () => {
    this.pokiName.innerText = this.name;
  };

  changeHP = (count, cb) => {
    this.damageHP -= count;

    if (this.damageHP <= 0) {
      this.damageHP = 0;
    }

    this.renderHP();
    cb && cb(count);
  };

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  };
  renderHPLife = () => {
    this.elHP.innerText = this.damageHP;
  };
  renderProgressbarHP = () => {
    this.elProgressbar.style.width =
      (this.damageHP * 100) / this.defaultHP + "%";
  };
}

export default Pokemon;
