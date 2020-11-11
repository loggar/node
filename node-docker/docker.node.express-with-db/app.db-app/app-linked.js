const mysql = require("mysql");

const con = mysql.createConnection({
  host: "mysql",
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
