# Javascript Testing with AVA and Babel

Dependencies and ava, babel configuration example

`package.json`
```json
{
	"name": "test.ava",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "ava --verbose",
		"test:watch": "ava --verbose --watch",
		"ava": "ava --verbose"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"ava": "^0.25.0",
		"babel-core": "^6.26.3",
		"babel-preset-env": "^1.7.0"
	},
	"ava": {
		"files": [
			"./src-test/**/*.spec.js"
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
}
```