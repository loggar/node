# A minimal setup for Babel-based npm packages

ref ) http://2ality.com/2017/07/npm-packages-via-babel.html

## The core structure

There are two two sets of files:

* Directory esm/ has the (untranspiled) actual source code of the library.
  - Property module in package.json points to esm/index.js
  - Directory test/ contains AVA-based tests for the files in esm/.
* Directory cjs/ has transpiled versions of the ESM files, so that they have the CommonJS format and support the features that the currently running Node.js can handle.
  - Property main in package.json points to cjs/index.js

This structure enables two use cases:

* Node.js apps use the files in cjs/.
* Web apps (via webpack etc.) use the files in esm/. They transpile those files via babel-preset-env to the feature set supported by their target platforms. Details of how to do that are described in a separate blog post.

One issue we have only partially tackled is how to polyfill parts of the standard library that may be missing. That will be the topic of an upcoming blog post.

## .gitignore

```
cjs
node_modules
```

cjs/ is not committed to git. We only generate it on demand before publishing the package on npm.

## .npmignore

```
node_modules
```

When publishing to npm, we do need to include cjs/. That’s why we need .npmignore in addition to .gitignore.

## package.json

### The main parts of package.json

```
"scripts": {
  "build": "babel esm --out-dir cjs",
  "prepublishOnly": "npm run build",
  "test": "ava"
},
```

* build generates the files in cjs/.
* prepublishOnly ensures that cjs/ is always built before we publish to npm.
* test runs tests via AVA.

```
"devDependencies": {
  "babel-cli": "^6.24.1",
  "ava": "^0.21.0",
  "babel-preset-env": "^1.5.1",
  "babel-register": "^6.24.1"
},
```

* ava is needed for the unit tests.
* babel-cli provides the command babel.
* babel-register lets AVA execute the tests via Babel.
* babel-preset-env is the Babel preset we use for transpilation.

```
"main": "./cjs/index.js",
"module": "./esm/index.js",
```

* main is the package entry point for the CommonJS format (which includes normal modules running on Node.js).
* module is the package entry point for the ESM format (which includes webpack; depending on how you set it up).
* More information on these two properties: “Setting up multi-platform npm packages”.

### Configuring Babel

For AVA, we require babel-register, which transpiles all tests and their imports via Babel. "babel": "inherit" means that AVA uses the configuration shown in the previous section.

```
"babel": {
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
},
```

### Configuring AVA

```
"ava": {
  "require": [
    "babel-register"
  ],
  "babel": "inherit"
}
```
