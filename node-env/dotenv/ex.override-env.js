const fs = require("fs");
const dotenv = require("dotenv");
const envConfig = dotenv.parse(fs.readFileSync(".env.override"));
for (let k in envConfig) {
  process.env[k] = envConfig[k];
}
