# Interoperability between CJS and ESM

refs)
* https://nodejs.org/dist/latest-v10.x/docs/api/esm.html
* https://github.com/giltayar/node-esm-tea
* https://medium.com/@giltayar/native-es-modules-in-nodejs-status-and-future-directions-part-i-ee5ea3001f71

## node mjs

```
$ node --experimental-modules main.mjs
```

## The Rules of ES Modules:

1. A file is ESM if and only if the extension is “mjs”
2. A file is CJS if and only if the extension is “js”
3. Only ESM is allowed to use export/import statements
4. Only CJS is allowed to use import CJS using require

## Interoperability between CJS and ESM

1. CJS can import ESM, but only using await import()
2. ESM can import CJS using the import statement, but only a default import

## Migrating Applications from CJS to ESM

1. Rename its extension to mjs.
2. Change the exports from CJS ( module.exports) to ESM (export statement).
3. Change all require-s in it to import statements with default import.
4. If the require is dynamic, change it to await import(). This is the only non-technical transformation, as the function it is in must now be asynchronous, i.e. using async, promises, or callbacks.
5. If the module uses __dirname (or __filename) , use the following “polyfill”

```
const __dirname = path.dirname(
new url.URL(import.meta.url).pathname)
```

6. Change all require-s in other files that reference it to import.

## Dual-Mode Packages

``` json
// package.json
{
  "name": "dual-cjs-mjs-package",
  "version": "1.0.0",
  "description": "A package that can be both imported as esm and as cjs",
  "main": "entry",
  "scripts": {
    "build": "babel *.mjs **/*.mjs --out-dir ."
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-eslint": "^8.0.1",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-dynamic-import-node": "^1.1.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

``` json
// .babelrc
{
  "plugins": [
    "transform-es2015-modules-commonjs", "dynamic-import-node"
  ]
}
```

