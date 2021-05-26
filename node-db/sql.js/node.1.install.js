// npm install sql.js

const initSqlJs = require("./sql-wasm.js");

initSqlJs().then(function (SQL) {
  console.log("sql.js initialized");
});
