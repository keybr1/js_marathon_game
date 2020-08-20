//1 задача

const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function getRow(firstRow, secondRow) {
  let counterFirst = 0;
  let counterSecond = 0;
  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow.charAt(i) == "а") {
      counterFirst++;
    }
  }
  for (let i = 0; i < secondRow.length; i++) {
    if (secondRow.charAt(i) == "а") {
      counterSecond++;
    }
  }
  if (counterFirst > counterSecond) {
    console.log(firstRow);
  } else {
    console.log(secondRow);
  }
}
getRow(firstRow, secondRow);

//2 задача // +7 (123) 456-78-90

// function formattedPhone(phone) {
//   let phoneNew = "";
//   for (let i = 0; i < phone.length; i++) {
//     phoneNew += phone.charAt(i);
//     if (i == 1) {
//       phoneNew += phone.charAt(i) + " (";
//     } else if (i == 4) {
//       phoneNew += phone.charAt(i) + ") ";
//     } else if (i == 7) {
//       phoneNew += phone.charAt(i) + "-";
//     } else if ((i = 9)) {
//       phoneNew += phone.charAt(i) + "-";
//     }
//   }
//   return phoneNew;
// }
// console.log(formattedPhone("+71234567890"));
