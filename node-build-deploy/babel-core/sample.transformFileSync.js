var babel = require('babel-core');
// import { transform } from 'babel-core';
// import * as babel from 'babel-core';

var path = require('path')

var result = babel.transformFileSync(path.resolve(__dirname, './sample.1.js'));

console.log(result); // => { code, map, ast }
