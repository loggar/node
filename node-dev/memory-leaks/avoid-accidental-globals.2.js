"use strict";

// will not become global variable as global functions have their own `this` in strict mode
function hello() {
  this.foo = "a"; // TypeError: Cannot set property 'foo' of undefined
}

hello();
console.log("foo", foo);
