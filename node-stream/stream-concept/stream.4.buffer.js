//create an uninitiated Buffer of 10 octets
let bufferOne = new Buffer(10);
//create a Buffer from a given array
let bufferTwo = new Buffer([10, 20, 30, 40, 50]);
//create a Buffer from a given string
let bufferThree = new Buffer('Simply Easy Learning');

let buffer = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
  buffer[i] = i + 97;
}
console.log(buffer.toString('utf8')); // a, b, c.....z
