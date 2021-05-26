const initSqlJs = require("./sql-wasm.js");

initSqlJs().then(function (SQL) {
  let stmt = db.prepare("SELECT * FROM users WHERE id BETWEEN $start AND $end");
  stmt.bind({ $start: 1, $end: 2 });
  while (stmt.step()) {
    var row = stmt.getAsObject();
    console.log("Here is a user row: " + JSON.stringify(row));
  }
});
