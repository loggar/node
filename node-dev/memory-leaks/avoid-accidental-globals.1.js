"use strict";

// will not be hoisted as global variable
function hello() {
  foo = "a"; // ReferenceError: foo is not defined
}

hello();
console.log("foo", foo);
