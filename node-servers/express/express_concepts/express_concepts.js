var http = require("http");
var express = require("express"),
	logger = require("morgan");

var app = express();

var servicePort = 18080;

app.set("views", __dirname + "/view");
app.set("view engine", "jade");

app.use(logger("dev"));

app.all("*", function(request, response, next) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	next();
});

app.get("/", function(request, response) {
	console.log(__dirname);
	response.end("root page");
});

app.get("/about", function(request, response) {
	response.end("about page");
});

app.get("/hi/:user", function(request, response) {
	response.end("Hi " + request.params.user);
});

app.get("*", function(request, response) {
	response.end("404 error page");
});

http.createServer(app).listen(servicePort, function() {
	console.log("Server listening on port " + servicePort);
});