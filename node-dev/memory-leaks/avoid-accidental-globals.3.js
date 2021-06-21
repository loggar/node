"use strict";

// will become a global variable as arrow functions do not have a contextual `this` and instead use a lexical `this`
const hello = () => {
  this.foo = "a";
};

hello();
console.log("foo", foo); // ReferenceError: foo is not defined
