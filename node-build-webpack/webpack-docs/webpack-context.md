# `__dirname` and `__filename` when using webpack

## webpack configuration for node global-vars

### node.__filename 

boolean | "mock", Default: "mock"

* true: The filename of the input file relative to the context option.
* false: The regular Node.js __filename behavior. The filename of the output file when run in a Node.js environment.
* "mock": The fixed value "index.js".

### node.__dirname 

boolean | "mock", Default: "mock"

* true: The dirname of the input file relative to the context option.
* false: The regular Node.js __dirname behavior. The dirname of the output file when run in a Node.js environment.
* "mock": The fixed value "/".

## practice

when webpack configuration is like

```javascript
module.exports = {
	node : {
		__filename: false,
		__dirname: false
	},
	target: 'node',
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
```

next code snippet:

```javascript
console.log(__dirname);
console.log(__filename);
```

results the bundled locations.

```
C:\projects_container\application_root\.build
C:\projects_container\application_root\.build\main.server-bundle.js
```

this

```javascript
module.exports = {
	context : __dirname,
	node : {
		__filename: true,
		__dirname: true
	},
	target: 'node',
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
```

shows the locations where before bundling, based on the project-root location.

```
bin
bin\www.js
```

without node property (default value : `'mock'`)

```javascript
module.exports = {
	target: 'node',
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
```

always shows fixed value

```
/
/index.js
```


