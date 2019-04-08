var express = require('express');
var app = express();
var woodlotCustomLogger = require('woodlot').customLogger;

var woodlot = new woodlotCustomLogger({
  streams: ['./logs/custom.log'],
  stdout: false,
  format: {
    type: 'json',
    options: {
      spacing: 4,
      separator: '\n'
    }
  }
});

app.get('/', function(req, res) {
  var id = 4533;
  woodlot.info('User id ' + id + ' accessed');
  return res.status(200).send({ userId: id });
});
