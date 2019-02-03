var babel = require('babel-core');
// import { transform } from 'babel-core';
// import * as babel from 'babel-core';

var path = require('path')

babel.transformFile(path.resolve(__dirname, './sample.1.js'), function (err, result) {
	console.log(result); // => { code, map, ast }
});
