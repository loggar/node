// const fs = require("fs");
import fs from "fs";

module.exports = function readJson(filePath) {
  const c = fs.readFileSync(filePath);
  return JSON.parse(c);
};
