const initSqlJs = require("./sql-wasm.js");

initSqlJs().then(function (SQL) {
  const db = new SQL.Database();
  // RUNNING SQL QUERIES 👇
  db.run("CREATE TABLE users (id, name, phone, address);");
  db.run(
    `INSERT INTO users (id, name, phone, address)
        VALUES (1, 'John Doe', '+234-907788', '12 Igodan Street, Okitipupa')`
  );
});
