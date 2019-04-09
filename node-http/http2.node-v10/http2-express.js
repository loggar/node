const express = require('express');
const spdy = require('spdy');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

spdy.createServer(options, app).listen(3000, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on port: 3000.');
});
