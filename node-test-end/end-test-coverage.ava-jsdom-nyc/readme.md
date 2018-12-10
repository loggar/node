# Unit testing front-end JavaScript with AVA and jsdom

## ava

```shell
npm i -D ava babel-register babel-preset-env
```

Configure Ava with babel-precompiling

```json
// package.json
"ava": {
	"files": [
		"./src-test/**/*.test.js"
	],
	"source": [
		"./src/**/*.{js}"
	],
	"concurrency": 5,
	"failFast": true,
	"require": [
		"babel-register"
	]
},
"babel": {
	"babelrc": false,
	"presets": [
		"env"
	]
}
```

## Integrating jsdom

```shell
npm i -D browser-env
```

Set ava-helper

this file is written in ES5. This is because AVA will transpile ES2015 code in the tests, yet it won’t transpile any modules imported or, in this case, required from outside the tests.

```js
// src-end-test/helpers/setup-browser-env.js
require('browser-env')();
```

Configure Ava-helper

```json
// package.json
"ava": {
	"files": [
		"./src-test/**/*.test.js",
		"./src-end-test/**/*.test.js"
	],
	"source": [
		"./src/**/*.{js}"
	],
	"concurrency": 5,
	"failFast": true,
	"require": [
		"babel-register",
		"./src-end-test/helpers/setup-browser-env.js"
	]
}
```

## Test coverage with nyc

```shell
npm i -D nyc
```

```json
// package.json
"scripts": {
	"test": "ava --verbose",
	"coverage": "nyc ava --verbose"
}
```

You’ll also need to update the Babel config to tell it to include source maps when developing so that the reporter can output the correct lines for the transpiled code:

```json
// package.json
"babel": {
	"babelrc": false,
	"presets": [
		"env"
	],
	"env": {
		"development": {
			"sourceMaps": "inline"
		}
	}
}
```
