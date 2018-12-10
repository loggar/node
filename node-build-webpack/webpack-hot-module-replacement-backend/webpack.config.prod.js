const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: [
		'./bin/www'
	],
	watch: false,
	target: 'node',
	externals: [
		nodeExternals({ modulesDir: "./node_modules" })
	],
	module: {
		rules: [{
			test: /\.js?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"BUILD_TARGET": JSON.stringify('server')
			}
		}),
		new CleanWebpackPlugin(['.build'])
	],
	output: {
		path: path.join(__dirname, '.build'),
		filename: 'main.server-bundle.js'
	}
}
