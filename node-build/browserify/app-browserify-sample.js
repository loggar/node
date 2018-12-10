var browserify = require('browserify');
var b = browserify();
b.add('./src/main.js');
b.bundle().pipe(process.stdout);