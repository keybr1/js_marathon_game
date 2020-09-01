class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ name, damageHP, selectors }) {
    super(selectors);

    this.name = name;
    this.damageHP = damageHP;

    this.renderHP();
  }

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
    this.elProgressbar.style.width = this.damageHP + "%";
  };
}

export default Pokemon;
