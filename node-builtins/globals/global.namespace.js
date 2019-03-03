if (typeof global === "undefined") {
  global = {
    window
  };
} else {
  // node.js
  console.log(typeof global);
  console.log(typeof window);
  console.log(typeof global.process);
  console.log(typeof global.window);

  global.window = {};
}

console.log(typeof global.window);
console.log(typeof window);
console.log(global.window === window);