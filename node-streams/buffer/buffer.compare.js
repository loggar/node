var buf1 = Buffer.from("xyz");
var buf2 = Buffer.from("xyz");
var a = Buffer.compare(buf1, buf2);

//This will return 0
console.log(a);

var buf1 = Buffer.from("x");
var buf2 = Buffer.from("y");
var a = Buffer.compare(buf1, buf2);

//This will return -1
console.log(a);

var buf1 = Buffer.from("y");
var buf2 = Buffer.from("x");
var a = Buffer.compare(buf1, buf2);
