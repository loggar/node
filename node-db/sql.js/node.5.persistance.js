const fs = require("fs");
const initSqlJs = require("./sql-wasm.js");

initSqlJs().then(function (SQL) {
  // Create a new database with our existing sample.sqlite file
  const db = new SQL.Database(filebuffer);

  // Export database
  const data = db.export();
  // var buffer = new Buffer(data);
  let buffer = Buffer.from(data, "utf8");
  fs.writeFileSync("new-db.sqlite", buffer);
});
