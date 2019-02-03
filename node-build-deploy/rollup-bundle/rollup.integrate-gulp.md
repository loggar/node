# rollup.js - gulp

Rollup returns promises which are understood by gulp so integration is easy.

The syntax is very similar to the configuration file, but the properties are split across two different operations, corresponding to the JavaScript API:

```js
const gulp = require('gulp');
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');

gulp.task('build', () => {
  return rollup.rollup({
    input: './src/main.ts',
    plugins: [
      rollupTypescript()
    ]
  }).then(bundle => {
    return bundle.write({
      file: './dist/library.js',
      format: 'umd',
      name: 'library',
      sourcemap: true
    });
  });
});
```

Also you may use new async/await syntax

```js
const gulp = require('gulp');
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');

gulp.task('build', async function () {
  const bundle = await rollup.rollup({
    input: './src/main.ts',
    plugins: [
      rollupTypescript()
    ]
  });

  await bundle.write({
    file: './dist/library.js',
    format: 'umd',
    name: 'library',
    sourcemap: true
  });
});
```
