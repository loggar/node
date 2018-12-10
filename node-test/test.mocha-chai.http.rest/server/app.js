var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');

var routes = require('./routes/index.js');

var app = express();

var config = require('./_config');

mongoose.connect(config.mongoURI[app.settings.env], function (err, res) {
	if (err) {
		console.log('Error connecting to the database. ' + err);
	} else {
		console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
	}
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/', routes);

var server = http.createServer(app);
server.listen(1337, function () {
	console.log("Node server running on http://localhost:1337");
});

module.exports = app;
