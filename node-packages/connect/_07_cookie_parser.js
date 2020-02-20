var connect = require('connect');
var cookieParser = require('cookie-parser');

console.log(connect());
console.log(cookieParser);

function test(req, res) {
	console.log(req.cookies);
	console.log(req.signedCookies);
	res.end("res.end");
}

var app = connect()
.use(cookieParser)
.use(test)
.listen(3000);
