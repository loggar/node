var buffer1 = Buffer.from("x");
var buffer2 = Buffer.from("y");
var buffer3 = Buffer.from("z");
var arr = [buffer1, buffer2, buffer3];

/*This will print buffer, !concat [ <Buffer 78>, <Buffer 79>, <Buffer 7a> ]*/
console.log(arr);

//concatenate buffer with Buffer.concat method
var buf = Buffer.concat(arr);

//This will print <Buffer 78 79 7a> concat successful
console.log(buf);
