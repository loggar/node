var a = Buffer.from("uvwxyz");
var b = a.slice(2, 5);

console.log(b.toString());
//This will print wxy
