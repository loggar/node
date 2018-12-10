# Test with Jest

## Installation and basic Usage

```shell
npm install --save-dev jest
```

```json
// package.json

"scripts": {
	"test": "jest ./src-test"
}
```

```shell
λ npm test

> test.jest@1.0.0 test C:\Users\webnl\Documents\_workspace_js\loggar-node-test\test.jest
> jest ./src-test

 FAIL  src-test/ex.1.test.js
  ● Test suite failed to run

    SecurityError: localStorage is not available for opaque origins

      at Window.get localStorage [as localStorage] (node_modules/jsdom/lib/jsdom/browser/Window.js:257:15)
          at Array.forEach (<anonymous>)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.136s
Ran all test suites matching /.\\src-test/i.
npm ERR! Test failed.  See above for more details.
```

add jest-test-env to `package.json` or jest-config-file.

```json
// package.json

"jest": {
	"testEnvironment": "node"
}
```

```shell
λ npm test

> test.jest@1.0.0 test C:\Users\webnl\Documents\_workspace_js\loggar-node-test\test.jest
> jest ./src-test

 PASS  src-test/ex.1.test.js
  √ adds 1 + 2 to equal 3

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.705s
Ran all test suites matching /.\\src-test/i.
```

## Generate a basic configuration file

```shell
jest --init .
# or
npx jest --init .
```

## Using Babel

```shell
npm install --save-dev babel-jest babel-core regenerator-runtime babel-preset-env
```

> Note: Explicitly installing regenerator-runtime is not needed if you use npm 3 or 4 or Yarn

> If you are using a babel version 7 then you need to install `babel-jest` with the following command:

```shell
yarn add --dev babel-jest 'babel-core@^7.0.0-0' @babel/core regenerator-runtime
```

```json
// .babelrc
{
  "presets": ["env" /*, "react" */]
}
```

> Note: If you are using a more complicated Babel configuration, using Babel's env option, keep in mind that Jest will automatically define NODE_ENV as test. It will not use development section like Babel does by default when no NODE_ENV is set.

> Note: If you've turned off transpilation of ES6 modules with the option { "modules": false }, you have to make sure to turn this on in your test environment.

```json
// .babelrc
{
	"presets": [["env", {"modules": false}], "react"],
	"env": {
		"test": {
			"presets": [["env"], "react"]
		}
	}
}
```

> Note: babel-jest is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the transform configuration option:

```json
// package.json
{
	"jest": {
		"transform": {}
	}
}
```

## refs

* https://jestjs.io/docs/en/getting-started