// npm i -D jest
// npx jest ./test-dir

const path = require("path");
const read = require("./read-json");

test("read an array from a json file and it's length is 11", () => {
  expect(read(path.join(__dirname, "./test.data.1.json")).length).toBe(11);
});
