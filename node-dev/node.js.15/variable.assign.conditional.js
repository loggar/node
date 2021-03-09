// node.js 15

// new logical AND operator
let a = 1;
let b = 0;
a &&= 2;
b &&= 2;
console.log(a); // prints 2
console.log(b); // prints 0

// new logical OR operator
a = 1;
b = null;
a ||= 3;
b ||= 3;
console.log(a); // prints 1
console.log(b); // prints 3

// new logical nullish operator
a = 1;
b = null;
a ??= 4;
b ??= 4;
console.log(a); // prints 1
console.log(b); // prints 4
