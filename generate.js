import random from "./utils.js";

function generateLog(firstPerson, secondPerson, count) {
  function params() {
    const { damageHP } = firstPerson;

    return `${damageHP}`;
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

export default generateLog;
