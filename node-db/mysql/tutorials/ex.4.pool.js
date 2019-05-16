var express = require('express');
var mysql = require('mysql');
var app = express();

var pool = mysql.createPool({
  connectionLimit: 100, //important
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'address_book',
  debug: false
});

function handle_database(req, res) {
  // connection will be acquired automatically
  pool.query('select * from user', function(err, rows) {
    if (err) {
      return res.json({ error: true, message: 'Error occurred' + err });
    }
    //connection will be released as well.
    res.json(rows);
  });
}

app.get('/', function(req, res) {
  -handle_database(req, res);
});

app.listen(3000);
