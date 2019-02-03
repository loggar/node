# ESLint

### Install

```
npm install -g eslint
```

### Setting

```
npm init

eslint --init
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

```
eslint src/sample.js
```
