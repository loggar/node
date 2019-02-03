# rollup.js - Babel

Many developers use Babel in their projects, so that they can use futuristic JavaScript features that aren't yet supported by browsers and Node.js.

The easiest way to use both Babel and Rollup is with rollup-plugin-babel. Install it:

```
npm i -D rollup-plugin-babel
```

```js
// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
```

`src/.babelrc`:
```json
{
  "presets": [
    ["env", {
      "modules": false
    }]
  ],
  "plugins": ["external-helpers"]
}
```

There are a few unusual things about this setup. First, we're setting "modules": false, otherwise Babel will convert our modules to CommonJS before Rollup gets a chance to do its thing, causing it to fail.

Secondly, we're using the external-helpers plugin, which allows Rollup to include any 'helpers' just once at the top of the bundle, rather than including them in every module that uses them (which is the default behaviour).

Thirdly, we're putting our .babelrc file in src, rather than the project root. This allows us to have a different .babelrc for things like tests, if we need that later – it's generally a good idea to have separate configuration for separate tasks.

Now, before we run rollup, we need to install the env preset and the external-helpers plugin:

```
npm i -D babel-preset-env babel-plugin-external-helpers
```

Running Rollup now will create a bundle... except we're not actually using any ES2015 features. Let's change that. 

```js
// src/main.js
import answer from 'the-answer';

export default () => {
  console.log(`the answer is ${answer}`);
}
```

Run Rollup with npm run build, and check the bundle:

```js
'use strict';

var index = 42;

var main = (function () {
  console.log('the answer is ' + index);
});

module.exports = main;
```
