const path = require('path');

const config = {
	entry: "./src/entry.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ resource: /\.css$/, use: 'style-loader!css-loader' }
		]
	}
};

module.exports = config;