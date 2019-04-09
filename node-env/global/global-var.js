if (typeof global === 'undefined') {
  global = {
    window
  };
} else {
  // node.js
  global.window = {};
}

global.ga = 'global variable 1';

console.log(global.ga);

// browser
// before: var ga= "1"; window.ga === "1";
// after : global.window.ga

console.log(this === global); // false

var ga = 'global variable 2';

// browser: window.ga === "global variable 1"
// browser: ga === "global variable 1"
console.log(ga);
