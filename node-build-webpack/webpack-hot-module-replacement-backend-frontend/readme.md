# webpack-hot-reloading-backend-frontend

## webpack configuration

```
npm install react react-dom babel-preset-react --save-dev
```

```
// .babelrc

{
	"presets": [
		[
			"env",
			{
				"modules": false
			}
		]
	]
}
```

sample react component

```
// src-client/common/App.js

import React from 'react'
const App = () => <div>Hello from React!</div>
export default App
```

component rendering

```
// src-server/app.js

import express from 'express'
import sample from './lib-sample'

import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src-client/main/App'

const app = express()
app.get('/api', (req, res) => {
	res.send({
		message: 'version hot reloaded : 003',
		sample: sample.fn1()
	})
})

app.get('*', (req, res) => {
	let application = renderToString(<App />)
	let html = `<!doctype html>
	<html class="no-js" lang="">
		<head>
			<meta charset="utf-8">
			<meta http-equiv="x-ua-compatible" content="ie=edge">
			<title>HMR all the things!</title>
			<meta name="description" content="">
			<meta name="viewport" 
			content="width=device-width,  initial-scale=1">
		</head>
		<body>
			<div id="root">${application}</div>
		</body>
	</html>`
	res.send(html)
})

export default app
```

check the component out

```
npm run start:server:dev

http://localhost:3000/
``` 

## hot loading

```
npm i webpack-dev-server webpack-cli react-hot-loader@next npm-run-all --save-dev
```

```
// webpack.config.client.js

const webpack = require('webpack')
const path = require('path')
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		'./src-client/index'
	],
	target: 'web',
	module: {
		rules: [{
			test: /\.js?$/,
			use: 'babel-loader',
			include: [
				path.join(__dirname, 'src-client')
			]
		}]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"BUILD_TARGET": JSON.stringify("client")
			}
		})
	],
	devServer: {
		host: 'localhost',
		port: 3001,
		historyApiFallback: true,
		hot: true
	},
	output: {
		path: path.join(__dirname, '.build'),
		publicPath: 'http://localhost:3001/',
		filename: 'main.client-bundle.js'
	}
}
```

npm script

```
// package.json

"start:server:dev": "rm -rf ./build && webpack --mode development --config webpack.config.server.js"
```

react main entry file

```
// src-client/index.js

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './main/App'
render(<AppContainer>
	<App />
</AppContainer>, document.getElementById('root'))
if (module.hot) {
	module.hot.accept('./main/App', () => {
		render(<AppContainer>
			<App />
		</AppContainer>, document.getElementById('root'))
	})
}
```

component rendering

```
// src-server/app.js

<body>
	<div id="root">${application}</div>
	<script src="http://localhost:3001/client.js"></script>
</body>
```

npm run script

```
// package.json

"start:server:dev": "webpack --mode development --config webpack.config.server.js",
"start:client:dev": "webpack-dev-server --mode development --config webpack.config.client.js",
"start:all:dev": "npm-run-all --parallel start:server:dev start:client:dev"
```

run webpack

```
npm run start:all:dev

http://localhost:3000/api
http://localhost:3000/
```