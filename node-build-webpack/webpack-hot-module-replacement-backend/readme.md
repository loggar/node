# webpack-hot-reloading-backend

Install

``` shell
npm install --save-dev webpack babel-loader babel-core babel-preset-env webpack-command webpack-node-externals start-server-webpack-plugin clean-webpack-plugin
```

``` shell
npm install --save express
```

Backend sample module

``` javascript
//src-server/lib-sample.js
const sample = {
	fn1: function () {
		return "module_data_013";
	}
}
```

Backend app

``` javascript
// src-server/app.js
import express from 'express'
import sample from './lib-sample'

const app = express()
app.get('/api', (req, res) => {
	res.send({
		message: 'server hot reloaded version: 003',
		sample_module_data: sample.fn1()
	})
})
export default app
```

Backend entry

``` javascript
// bin/www.js
import http from 'http'
import app from '../src-server/app'

const server = http.createServer(app)
let current = app
server.listen(3000)
if (module.hot) {
	module.hot.accept(['../src-server/app'], () => {
		server.removeListener('request', current)
		server.on('request', app)
		current = app
	})
}
```

Configure Webpack

``` javascript
// webpack.config.server.js
module.exports = {
	entry: [
		'webpack/hot/poll?1000',
		'./bin/www'
	],
	watch: true,
	target: 'node',
	externals: [nodeExternals({
		whitelist: ['webpack/hot/poll?1000']
	})],
	module: {
		rules: [{
			test: /\.js?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new StartServerPlugin('main.server-bundle.js'),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"BUILD_TARGET": JSON.stringify('server')
			}
		}),
		new CleanWebpackPlugin(['.build']),
	],
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
```

npm script

``` json
{
	"start": "node bin/www.js",
	"start:server:dev": "webpack --mode development --config webpack.config.server.js",
	"build:server:prod": "webpack --mode production --config webpack.config.prod.js"
}
```

Run webpack

```
npm run start:server:dev
```

in the `.build` directory while running webpack..

![build directory - dummy files](./build-dist.while-hot-loading.png)

Build production bundle

```
npm run build:server:prod
```
