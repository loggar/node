var express = require("express");
var app = express();

const port = 3001;

// set header for allow cros
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// GET method route
app.get("/", function(req, res) {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", function(req, res) {
  res.send("POST request to the homepage");
});

app.all("/secret", function(req, res, next) {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});

app.listen(port, function() {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
