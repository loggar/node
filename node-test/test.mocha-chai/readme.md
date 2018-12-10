# test mocha chai ex2

install

```
npm install --save-dev mocha

npm install --save-dev chai
```

test script

``` json
{
	"test": "mocha test ./src-test"
}
```

run test

```
npm test
```

useful features

```
To run a single test or group just add .only to the end of describe or it. Example: describe.only("index.js tests", function () { or it.only("addTwoNumbers returns a number", function () {

Investigate the following functions that can be used inside a describe block. before(), beforeEach(), after(), afterEach(). These allow things to happen before and after each of your individual tests. (Good for set up and clean up)

Mocha can be used in the browser! It loads up a cool web page with a todo list style format with all your tests. (This makes testing web pages far easier).
```