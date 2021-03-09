var logger = require('./lib/modules/logger.winston')(__filename);
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var config_dir = require('./lib/config/app_path');
var messages = require('./lib/modules/session.messages');
var session_user = require('./lib/modules/session.user');

//models
var Entry = require('./lib/models/Entry');

//middlewares of routers
var validate = require('./lib/modules/validate');
var page = require('./lib/modules/page');

//routers
var routes = require('./routes/main');
var router_test = require('./routes/test');
var register = require('./routes/register');
var login = require('./routes/login');
var entries = require('./routes/entries');
var api = require('./routes/api');

var app = express();
logger.info('application [%s] is starting in [%s] mode.', __filename, app.get('env'));

app.set('port', process.env.PORT || 18080);
app.set('views', path.join(config_dir.DIR_ROOT, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(config_dir.DIR_PUBLIC));
app.use(favicon(path.join(config_dir.DIR_PUBLIC, 'favicon.ico')));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(session({resave: true, saveUninitialized: true, secret: 'uwotm8'}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(messages);
app.use('/api', api.auth);
app.use(session_user);

if ('development' == app.get('env')) {
	app.use(errorHandler());
	
	app.all('*', function(req, res, next) {
		logger.info('req.session=', req.session);
		logger.info('req.params=', req.params);
		logger.info('req.query=', req.query);
		logger.info('req.body=', req.body, '');
		if(req.file) logger.info('req.file=', req.file, '');
		next();
	});
}

// url mapping
app.get('/', routes.index);

app.get('/register', register.form);
app.post('/register', register.submit);
app.get('/login', login.form);
app.post('/login', login.submit);
app.get('/logout', login.logout);

app.get('/entries/:page?',
		page(Entry.count, Entry.defaultNumberPerPage),
		entries.list);
app.get('/post', entries.form);
app.post('/post',
		validate.required('entry[title]'),
		validate.lengthAbove('entry[title]', 4),
		entries.submit);

app.get('/api/user/:id', api.user);
app.post('/api/entry', entries.submit);
app.get('/api/entries/:page?', page(Entry.count, Entry.defaultNumberPerPage), entries.list);

// router mapping
app.use('/test', router_test);
app.use(routes.notfound);
app.use(routes.error);

module.exports = app;
