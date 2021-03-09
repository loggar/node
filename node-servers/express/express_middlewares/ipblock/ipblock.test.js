var http = require("http");
var express = require("express");
var ipcheck = require("./ipblock");

var app = express();
app.use(ipcheck.ippermit);

app.use(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("the last middleware.")
});

http.createServer(app).listen(3000);