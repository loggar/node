# ESLint

### Install

```
npm install -D eslint
```

### Setting

```
npm init

./node_modules/.bin/eslint --init
```

> ./.eslintrc.json

```
{
	"extends": "./node_modules/eslint-config-google/index.js",
	"env": {
		"browser": 1
	},
	"globals": {
		
	},
	"rules": {
		"strict": 0
	}
}
```

### Run

```json
"scripts": {
    "lint": "eslint ./src/**/*.js"
  }
```

```
npm run lint
```