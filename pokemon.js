class Selectors {
  constructor(name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
    this.pokiName = document.getElementById(`name-${name}`);
    this.pokiImg = document.getElementById(`img-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({ id, name, damageHP, defaultHP, selectors, img, attacks = [] }) {
    super(selectors);

    renderHP();
    changeHP();
    changeName();
    changeImg();
  }

  changeName = () => {
    this.pokiName.innerText = this.name;
  };

  changeImg = () => {
    this.pokiImg.img = this.img;
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

function getPokemon(selector, pokemons) {
  const pokemon = pokemons.splice(random(0, pokemons.length, 1)[0]);

  return new Pokemon({
    ...pokemon,
    selectors: selector,
  });
}

export { getPokemon };
