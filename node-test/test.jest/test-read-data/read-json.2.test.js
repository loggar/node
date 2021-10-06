// npm i -D jest
// npx jest ./test-dir

const path = require("path");
const read = require("./read-json.async");

test("read an array from a json file and it's length is 11", async () => {
  expect.assertions(1);
  const data = await read(path.join(__dirname, "./test.data.1.json"));
  expect(JSON.parse(data).length).toBe(11);
});
