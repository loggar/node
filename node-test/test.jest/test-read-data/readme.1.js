// const fs = require("fs");
import fs from "fs";

module.exports = function readJson(filePath) {
  const c = fs.readFileSync(filePath);
  return JSON.parse(c);
};

// async
import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

module.exports = async function readJson(filePath) {
  return readFile(filePath);
};

// test\
// npm i -D jest
// npx jest ./test-dir

import path from "path";
import read from "./read-json";

test("read an array from a json file and it's length is 11", () => {
  expect(read(path.join(__dirname, "./test.data.1.json")).length).toBe(11);
});

// async test
import path from "path";
import read from "./read-json.async";

test("read an array from a json file and it's length is 11", async () => {
  expect.assertions(1); //Expected one assertion to be called
  const data = await read(path.join(__dirname, "./test.data.1.json"));
  expect(JSON.parse(data).length).toBe(11);
});
