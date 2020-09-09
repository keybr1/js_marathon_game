import countClickFirst from "./count.js";
import generateLog from "./generate.js";

function random(max, min = 0) {
  const num = max - min;
  return Math.ceil(Math.random() * num) + min;
}

function player1Kick(player1, player2, count) {
  let log = generateLog(player1, player2, count);
  $log(log);
}

function player2Kick(player1, player2, count) {
  let log = generateLog(player2, player1, count);
  $log(log);
}

export { generateLog, countClickFirst, random, player1Kick, player2Kick };
