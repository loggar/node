var buf = Buffer.from("xyz");

for (a of buf.entries()) {
  /* This will print arrays of indexes and byte of buffer content \[ 0, 120 \][ 1, 121 ][ 2, 122 ]*/
  console.log("entry", a);
}

// Create a buffer from a string
var mybuff = Buffer.from("Nigeria");
//Print Buffer Created
console.log("mybuff", mybuff);

// Create a buffer from a buffer
// Create buffer from string
var buff2 = Buffer.from("Nigeria");
// Create buffer from the first buffer created
var buff3 = Buffer.from(buff2);
// Print out final buffer created.
console.log("buff3", buff3);

// create a buffer from an array
const buff4 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

console.log("buff4", buff4);

// Create a buffer from an arraybuffer
