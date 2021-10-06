// const fs = require("fs");
// const util = require("util");
import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

module.exports = async function readJson(filePath) {
  return readFile(filePath);
};
