const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const count = input[0];
const numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  const num1 = Number(numbers[i][0]);
  const num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
