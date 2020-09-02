import countClickFirst from "./count.js";
import generateLog from "./generate.js";

function random(max, min = 0) {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
}

export { generateLog, countClickFirst, random };
