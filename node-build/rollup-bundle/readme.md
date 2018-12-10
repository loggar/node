# rollup.js

## Quick start

Rollup can be used either through a command line interface with an optional configuration file, or else through its JavaScript API. Run rollup --help to see the available options and parameters.

These commands assume the entry point to your application is named main.js, and that you'd like all imports compiled into a single file named bundle.js.

For browsers:
```
# compile to a <script> containing a self-executing function ('iife')
$ rollup main.js --file bundle.js --format iife
```

For Node.js:
```
# compile to a CommonJS module ('cjs')
$ rollup main.js --file bundle.js --format cjs
```

For both browsers and Node.js:
```
# UMD format requires a bundle name
$ rollup main.js --file bundle.js --format umd --name "myBundle"
```

## Tree-shaking

Tree-shaking, also known as "live code inclusion," is the process of eliminating code that is not actually used in a given project. It is similar to dead code elimination but can be much more efficient.

In addition to enabling the use of ES6 modules, Rollup also statically analyzes the code you are importing, and will exclude anything that isn't actually used. This allows you to build on top of existing tools and modules without adding extra dependencies or bloating the size of your project.

For example, with CommonJS, the entire tool or library must be imported.

```js
// import the entire utils object with CommonJS
var utils = require( './utils' );
var query = 'Rollup';
// use the ajax method of the utils object
utils.ajax( 'https://api.example.com?search=' + query ).then( handleResponse );
```

But with ES6 modules, instead of importing the whole utils object, we can just import the one ajax function we need:

```js
// import the ajax function with an ES6 import statement
import { ajax } from './utils';
var query = 'Rollup';
// call the ajax function
ajax( 'https://api.example.com?search=' + query ).then( handleResponse );
```

Because Rollup includes the bare minimum, it results in lighter, faster, and less complicated libraries and applications. Since this approach is based on explicit import and export statements, it is more effective than simply running an automated minifier to detect unused variables in the compiled output code.

## first bundle

```
npm install --save-dev rollup
```

* `-f` : `--format`, specifies what kind of bundle we're creating — in this case, CommonJS (which will run in Node.js). Because we didn't specify an output file, it will be printed straight to stdout:

```
λ npx rollup src/main.js -f cjs

npx: installed 1 in 2.959s
Path must be a string. Received undefined

src/main.js → stdout...
'use strict';

var foo = 'hello world!';

function main () {
        console.log(foo);
}

module.exports = main;
created stdout in 31ms
```

You can save the bundle as a file like so:

```
npx rollup src/main.js -o .build/bundle.js -f cjs
```

## config files

```js
// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

To use the config file, we use the --config or -c flag:

```
npx rollup -c
```

You can, if you like, specify a different config file from the default rollup.config.js:

```
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
```

## plugins

```
npm install --save-dev rollup-plugin-json
```

```js
// src/main.js
import { version } from '../package.json';

export default function () {
  console.log('version ' + version);
}
```

Edit your rollup.config.js file to include the JSON plugin:
```js
// rollup.config.js
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [ json() ]
};
```

npm script

```json
// package.json
{
  "scripts": {
    "build": "rollup -c"
  }
}
```

```
npm run build
```

## Experimental Code Splitting

To use the new experimental code splitting feature, we add a second entry point called src/main2.js that itself dynamically loads main.js:

```js
// src/main2.js
export default function () {
  return import('./main.js').then(({ default: main }) => {
    main();
  });
}
```

We can then pass both entry points to the rollup build, and instead of an output file we set a folder to output to with the `--dir` option (also passing the experimental flags):

```
rollup src/main.js src/main2.js -f cjs --dir dist --experimentalCodeSplitting
```

Either built entry point can then be run in NodeJS without duplicating any code between the modules:

```
node -e "require('./dist/main2.js')()"
```

You can build the same code for the browser, for native ES modules, an AMD loader or SystemJS.

For example, with `-f esm` for native modules:

```
rollup src/main.js src/main2.js -f esm --dir dist --experimentalCodeSplitting
```

```html
<!doctype html>
<script type="module">
  import main2 from './dist/main2.js';
  main2();
</script>
```

Or alternatively, for SystemJS with `-f system`:

```
rollup src/main.js src/main2.js -f system --dir dist --experimentalCodeSplitting
```

install SystemJS via

```
npm install --save-dev systemjs
```

and then load either or both entry points in an HTML page as needed:

```html
<!doctype html>
<script src="node_modules/systemjs/dist/system-production.js"></script>
<script>
  System.import('./dist/main2.js')
  .then(({ default: main }) => main());
</script>
```
