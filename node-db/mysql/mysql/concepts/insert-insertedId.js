var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbname",
  debug: false
});

connection.connect();

console.log("Connected to Mysql");

var user1 = {
  first_name: "aaa",
  last_name: "bbb"
};

var user2 = {
  first_name: "ccc",
  last_name: "ddd"
};

var query = connection.query("INSERT INTO users SET ?", user1, function(
  err,
  result
) {
  console.log("User Id:- " + result.insertId);
});

query = connection.query("INSERT INTO trn_employee SET ?", user2, function(
  err,
  result
) {
  console.log("User Id:- " + result.insertId);
});

connection.end();
