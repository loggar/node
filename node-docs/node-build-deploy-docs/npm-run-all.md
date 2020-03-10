# npm-run-all: platform-independent package script expression.

## running tasks in series

```json
"scripts": {
  "A": "npm-run-all B C",
  "B": "rimraf",
  "C": "eslint"
}
```

result:

```
npm run B && npm run C
```

The tasks above are run in series. When B is finished (with a non-zero exit code), only then will C execute. This is useful for tasks that are dependent on each other. For example, you may want to publish your NPM module only when your code passes all tests and builds without error:

```json
"scripts": {
  "release": "npm-run-all build test pub",
  "build": "webpack --prod",
  "test": "mocha",
  "pub": "npm publish"
}
```

If any error occurs in a task, subsequent tasks will not run.

### Running tasks in series with a shortcut

```json
"scripts": {
  "test": "npm-run-all test:*",
  "test:unit": "mocha",
  "test:integration": "jasmine",
  "test:system": "codecept"
}
```

Running `npm run test` would execute `test:unit`, `test:integration`, and `test:system`, in that order.

## Running tasks in parallel

```json
"scripts": {
  "all": "npm-run-all -p lint test",
  "lint": "eslint",
  "test": "mocha"
}
```

## running a combination of tasks in parallel and in sequence:

```json
"scripts": {
  "all": "npm-run-all build -p lint test -s pub",
  "build": "webpack",
  "lint": "eslint",
  "test": "mocha",
  "pub": "npm publish"
}
```

## parallel-race

if you want to run test task on the serve task, and want to terminate the serve after test ends.

```json
"scripts": {
  "test:system": "npm-run-all build -p -r serve test",
  "build": "webpack",
  "serve": "serve -p 8000",
  "test": "codecept",
}
```

The `-r` flag tells `npm-run-all` to run the specified tasks in parallel (you can only use `-r` with `-p`), but when one task exits, all the other parallel tasks exit too. In other words, the tasks are in a race (competition); when one task finishes, the competition itself finishes.

## wait

use the npm-package `wait-on`:

```json
"scripts": {
  "test:system": "npm-run-all build -p -r serve test",
  "build": "webpack",
  "serve": "serve -p 8000",
  "test": "wait-on http://localhost:8001 && npm run test:codecept",
  "test:codecept": "codecept",
}
```
