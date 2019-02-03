# rollup.js - javascript API

## rollup.rollup

The rollup.rollup function returns a Promise that resolves to a bundle object with various properties and methods shown here:

```js
const rollup = require('rollup');

// see below for details on the options
const inputOptions = { /* ... */ };
const outputOptions = { /* ... */ };

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
```

inputOptions

```js
const inputOptions = {
  // core options
  input, // the only required option
  external,
  plugins,

  // advanced options
  onwarn,
  cache,
  perf,

  // danger zone
  acorn,
  acornInjectPlugins,
  treeshake,
  context,
  moduleContext,
          
  // experimental
  experimentalCodeSplitting,
  manualChunks,
  optimizeChunks,
  chunkGroupingSize
};
```

outputOptions

```js
const outputOptions = {
  // core options
  format, // required
  file,
  dir,
  name,
  globals,

  // advanced options
  paths,
  banner,
  footer,
  intro,
  outro,
  sourcemap,
  sourcemapFile,
  interop,
  extend,

  // danger zone
  exports,
  amd,
  indent,
  strict,
  freeze,
  namespaceToStringTag,
  
  // experimental
  entryFileNames,
  chunkFileNames,
  assetFileNames
};
```

## rollup.watch

Rollup also provides a `rollup.watch` function that rebuilds your bundle when it detects that the individual modules have changed on disk. It is used internally when you run Rollup from the command line with the `--watch` flag.

```js
const rollup = require('rollup');

const watchOptions = {...};
const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling
  //   FATAL        — encountered an unrecoverable error
});

// stop watching
watcher.close();
```

watchOptions

```js
const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
  watch: {
    chokidar,
	include,
    exclude,
    clearScreen
  }
};
```

## TypeScript Declarations

If you'd like to use the API in a TypeScript environment you can do so, as now we ship TypeScript declarations.

You need to install some dependencies in case you have `skipLibCheck` turned off.

```
npm install @types/acorn @types/chokidar source-map magic-string --only=dev
```
