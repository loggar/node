var express = require("express");
var cors = require("cors");
var app = express();

app.options("/products/:id", cors()); // enable pre-flight request for DELETE request
app.del("/products/:id", cors(), function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

// You can also enable pre-flight across-the-board like so:
// app.options('*', cors()) // include before other routes

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
