const fs = require("fs");
const initSqlJs = require("./sql-wasm.js");
const filebuffer = fs.readFileSync("/path/to/sample.sqlite");

initSqlJs().then(function (SQL) {
  // Create a new database with our existing sample.sqlite file
  const db = new SQL.Database(filebuffer);
  console.log(db);
});
