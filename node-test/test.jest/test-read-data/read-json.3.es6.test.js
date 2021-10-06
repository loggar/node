// npm i -D jest
// npx jest ./test-dir

import path from "path";
import read from "./read-json";

test("read an array from a json file and it's length is 11", () => {
  expect(read(path.join(__dirname, "./test.data.1.json")).length).toBe(11);
});
