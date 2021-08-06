# Javascript Dev Quality Control with Jest and ESLint

## jest

```
npm install jest --save-dev
```


```json
// package.json
"scripts": {
  "lint": "eslint .",
  "test": "jest",
  "test:cover": "jest --coverage",
  "test:watch": "jest --watch"
}
```

We want our command to fail in case we forget to test any code, to do so we will define every threshold to be 100% for: statements, branches, functions, lines.

```json
// package.json
"jest": {
  "collectCoverageFrom": [
    "*.js"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ],
  "coverageThreshold": {
    "global": {
      "statements": 100,
      "branches": 100,
      "functions": 100,
      "lines": 100
    }
  }
}
```

```
npm test
```

```
npm run test:cover
```

coverage report : `open coverage/lcov-report/index.html`

## eslint

```
npm install eslint --save-dev
```

if use `eslint:recommended` (https://eslint.org/docs/rules/)

```json
// .eslintrc
{
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "linebreak-style": 0
  }
}
```

or if use others, for example: (https://github.com/google/eslint-config-google)

```
npm install --save-dev eslint-config-google
```

```json
// .eslintrc
{
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "extends": ["google"],
  "rules": {
    "linebreak-style": 0
  }
}
```

Run Eslint:

```
npm run lint
```