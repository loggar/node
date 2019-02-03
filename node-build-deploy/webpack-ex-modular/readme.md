# writing modular JavaScript applications with webpack2

## build a bundle with webpack

project structure

```
|-- project_root/
     |-- app/
          |-- css/
          |-- js/
     |-- dist/
     |-- index.html
     |-- package.json
```

/index.html

```
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>My Modular APP</title>
</head>

<body>
	<button class="myClass" type="button">Click Me!</button>
</body>
```

install a module

```
npm install jquery --save-dev
```

install webpack

```
npm install webpack uglifyjs-webpack-plugin babel-core babel-loader babel-preset-env underscore --save-dev
```

/app/js/main.js

```
import $ from 'jquery';
$(document).ready(function () {
	$(".myButton").click(function () {
		console.log("Hello!");
	});
});
```

/webpack.config.js

```
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry: './app/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		alias: {
			$: "jquery/src/jquery",
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: [path.resolve(__dirname, "./src/app")],
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	},
	plugins: [
	]
};
```

create bundle with webpack

```
node ./node_modules/webpack/bin/webpack.js
```

check the bundle

```
/dist/bundle.js
```

/index.html

```
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>My Modular APP</title>
	<script src="dist/bundle.js" type="text/javascript"></script>
</head>

<body>
	<button class="myButton" type="button">Click Me!</button>
</body>
```

## build script

/package.json

```
"scripts": {
	"build": "webpack"
}
```

create bundle by running build script 

```
npm run build
```

## custom modules

sample custom module

/app/js/math/operations.js

```
function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function multiply(x, y) {
	return x * y;
}
function divide(x, y) {
	return x / y;
}
export default {
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide
}
```

import the custom module

/app/js/main.js

```
import $ from 'jquery';
import mathAPI from './math/operations.js';
$(document).ready(function () {
	$(".myButton").click(function () {
		var message = "5 + 3 = " + mathAPI.add(5, 3) + " 5 * 3 = " + mathAPI.multiply(5, 3)
		console.log(message);
	});
});
```

create bundle by running build script 

```
npm run build
```

