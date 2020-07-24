function logger(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
}

function hello(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world');
}

var connect = require('connect');
var app = connect();
app.use(logger);
app.use(hello);
app.listen(18081, () => {
	console.log("server listening : " + "18081");
});
