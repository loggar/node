const env = process.env.NODE_ENV || "development";
const config = require("./datasource.config.json")[env];

console.log(config);
