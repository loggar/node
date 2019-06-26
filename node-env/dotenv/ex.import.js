const path = require("path");

require("dotenv").config({
  debug: true,
  path: path.resolve(__dirname, "./.env")
});

const dbConnection = function(config) {
  console.log(config);
};

const db = dbConnection({
  host: process.env.db1_host,
  port: process.env.db1_port,
  user: process.env.db1_user,
  pwd: process.env.db1_pwd
});
