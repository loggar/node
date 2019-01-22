# module-from

## Usage

```js
const moduleFromString = require(".").moduleFromString;

const num1 = moduleFromString("module.exports = 1");
console.log(num1);

const fn1 = moduleFromString(`
  module.exports = function(a) {
    return a + 1;
  }
`);
console.log(fn1(1));

const fn2 = moduleFromString(
  `
  module.exports = function(a) {
    return a + 1;
  }
`,
  "./module_from_str/module_fn1.js"
);
console.log(fn2(10));
```

```js
const moduleFromUrl = require(".").moduleFromUrl;

(async function() {
  const _ = await moduleFromUrl(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"
  );
  console.log(typeof _);
  console.log(typeof _.assign);
})();

let _2;
moduleFromUrl(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"
).then(m => {
  _2 = m;
  console.log(typeof _2);
  console.log(typeof _2.assign);
});
```
