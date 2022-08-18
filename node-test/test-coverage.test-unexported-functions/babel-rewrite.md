# unit-test a private (non-exported) function in JavaScript

```
npm install babel-plugin-rewire --save-dev

or

yarn add --dev babel-plugin-rewire
```

```
// babel.config.js
module.exports = {
  plugins: ['babel-plugin-rewire'],
  ...
};
```

```
// foo.test.js
import foo from './foo.js'

describe('testing foo', () => {
  const secret = foo.__get__('secret'); // rewire magic happens here
  expect(secret()).toBe('');
});
```
