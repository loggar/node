# rollup.js - peer dependencies

Let's say that you're building a library that has a peer dependency, such as React or Lodash. If you set up externals as described above, your rollup will bundle all imports:

```js
import answer from 'the-answer';
import _ from 'lodash';
```

You can finely tune which imports are bundled and which are treated as external. For this example, we'll treat `lodash` as external, but not `the-answer`.

```js
// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [resolve({
    // pass custom options to the resolve plugin
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  })],
  // indicate which modules should be treated as external
  external: ['lodash']
};
```

Voila, `lodash` will now be treated as external, and not be bundled with your library.

The `external` key accepts either an array of module names or a function which takes the module name and returns true if it should be treated as external. For example:

```js
export default {
  // ...
  external: id => /lodash/.test(id)
}
```

You might use this form if you're using `babel-plugin-lodash` to cherry-pick lodash modules. In this case, Babel will convert your import statements to look like this:

```js
import _merge from 'lodash/merge';
```

The array form of external does not handle wildcards, so this import will only be treated as external in the functional form.
