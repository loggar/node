var express = require("express");
var cors = require("cors");
var app = express();

var port = 3002;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/", cors(corsOptions), function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(port, function() {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
