# Test Coverage with Istanbul and Mocha

* Mocha is a test framework.
* Istanbul is a test coverage tool.
* nyc is the command-line client for Istanbul.

Setting up

```shell
npm install --save-dev mocha nyc
```

```json
// package.json
"scripts": {
	"test": "mocha ./src-test --reporter dot",
	"coverage": "nyc --reporter html --reporter text npm test"
}
```

Run test

```shell
npm test

npm run coverage
```
