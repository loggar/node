var path = require('path');
var debug = require('debug'), logger = {log:debug(path.basename(__filename, '.js')+':log'), err:debug(path.basename(__filename, '.js')+':err')};
var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router_index = require('./routes/index');
var router_sample = require('./routes/sample');
var router_photo = require('./routes/photo');

var app = express();

app.set('port', process.env.PORT || 18080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: 'uwotm8'
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// logger - http request
app.all('*', function(req, res, next) {
	if(req.body) logger.log('req.body=%O', req.body);
	if(req.file) logger.log('req.file=%O', req.file);
	next();
});

// routers
app.use('/', router_index);
app.use('/sample', router_sample);
app.use('/', router_photo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});

// local variables
app.locals.i18n = require('./lib/test/i18n_dummy');

module.exports = app;
