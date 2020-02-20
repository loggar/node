function logger(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
}

function restrict(req, res, next) {
	var authorization = req.headers.authorization;
	if(!authorization) return next(new Error('Unauthorized'));
	
	console.log('authorization: %s', authorization);
	
	var parts = authorization.split(' ');
	var scheme = parts[0];
	var auth = new Buffer(parts[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
	
	authenticateWithDatabase(user, pass, function(err){
		if(err) return next(err);
		next();
	});
}

function hello(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world');
}

function admin(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	
	switch (req.url) {
	case '/' :
		res.end('admin root');
		break;
	case '/users' :
		res.end('user list');
		break;
	default :
		res.end("404 error");
	}
}

var connect = require('connect');
var app = connect();
app.use(logger);
app.use('/admin', restrict);
app.use('/admin', admin);
app.use('/', hello);
app.listen(18081);

/*
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringfy(['user1', 'user2', 'user3']));
*/