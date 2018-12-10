var express = require('express');

var env = process.env.NODE_ENV || 'dev';

console.log(process.env);
console.log(process.env.NODE_ENV);
console.log(env);

var app = express();

app.set('env', env);
app.set('port', process.env.PORT || 3000);
app.set('dir_views', __dirname + '/views');
app.set('view engine', 'ejs');

if(app.get('env') === 'dev') {
	app.set('port', process.env.PORT || 18080);
}

console.log(app);