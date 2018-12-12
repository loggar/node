# webpack without webpack configuration file.

```
npm install --save-dev webpack webpack-cli
```

## webpack 4: overriding the defaults entry/output

`package.json`
```json
"scripts": {
	"dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
	"build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
```

## webpack 4: transpiling Javascript ES6 with Babel

```
npm i -D babel-core babel-loader babel-preset-env
```

`.babelrc`
```json
{
    "presets": [
        "env"
    ]
}
```

The `--module-bind` flag lets you specify loaders from the command line.

`package.json`
```json
"scripts": {
	"dev": "webpack --mode development --module-bind js=babel-loader",
	"build": "webpack --mode production --module-bind js=babel-loader"
}
```
