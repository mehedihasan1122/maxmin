const { array } = require("prop-types");

var data = [10, 1000, 1, 59.1, 120, 4 - 1, 30];
let max = -Infinity;
let min = Infinity;
for (let number of data) {
  if (number > max) max = number;

  if (number < min) min = number;
}

console.log(max);
console.log(min);
