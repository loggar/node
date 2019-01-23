const moduleFromString = require(".").moduleFromString;

const num1 = moduleFromString("module.exports = 1");
console.log(num1 == 1);

const fn1 = moduleFromString(`
  module.exports = function(a) {
    return a + 1;
  }
`);
console.log(fn1(1) == 2);

const fn2 = moduleFromString(
  `
  module.exports = function(a) {
    return a + 1;
  }
`,
  "./module_from_str/module_fn1.js"
);
console.log(fn2(10) == 11);
