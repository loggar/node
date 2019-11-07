var express = require("express");
var cors = require("cors");

var app = express();

var whitelist = ["http://localhost:3000", "http://staff.localhost:8080", "https://staff.koi.edu.au/"];
var corsOptionsDelegate = function(req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));
