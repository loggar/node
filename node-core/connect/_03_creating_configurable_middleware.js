function logger_setup(logging_tool, format) {
	var regexp = /:(\w+)/g;
	
	return function logger (req, res, next) {
		var str = format.replace(regexp, function(match, property) {
			return req[property];
		});
		
		logging_tool(str);
		next();
	}
}
//module.exports = logger_setup;

function hello(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello world');
}

var connect = require('connect');

var app = connect()
		.use(logger_setup(console.log, ':method :url'))
		.use(hello)
		.listen(18080);

