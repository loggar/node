const buf = Buffer.from("this is a buffer");
console.log(buf.includes("this"));
// This will print true

console.log(buf.includes(Buffer.from("a buffer example")));
// This will print false
