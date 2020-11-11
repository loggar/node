const mysql = require("mysql");

const con = mysql.createConnection({
  host: "192.168.99.100",
  port: 19010,
  user: "root",
  password: "complexpassword",
  database: "Customers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.end();
  console.log("End!");
});
