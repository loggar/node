const { GPU } = require("gpu.js");
// OR
// import { GPU } from ('gpu.js')

const getArrayValues = () => {
  //Create 2D arrary here
  const values = [[], []];

  // Insert Values into first array
  for (let y = 0; y < 600; y++) {
    values[0].push([]);
    values[1].push([]);

    // Insert values into second array
    for (let x = 0; x < 600; x++) {
      values[0][y].push(Math.random());
      values[1][y].push(Math.random());
    }
  }

  //Return filled array
  return values;
};

const gpu = new GPU();

// Using `createKernel()` method to multiply the array
const multiplyLargeValues = gpu
  .createKernel(function (a, b) {
    let sum = 0;
    for (let i = 0; i < 600; i++) {
      sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
  })
  .setOutput([600, 600]);

const largeArray = getArrayValues();
const out = multiplyLargeValues(largeArray[0], largeArray[1]);

console.log(out[y][x]); // Logs the element at the xth row and the yth column of the array
console.log(out[10][12]); // Logs the element at the 10th row and the 12th column of the output array
