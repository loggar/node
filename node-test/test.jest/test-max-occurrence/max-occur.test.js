import path from "path";
import fs from "fs";

import max from "./max-occur";

const readTestData = function readJson(filePath) {
  const c = fs.readFileSync(filePath);
  return JSON.parse(c);
};

Array.prototype.equals = function (other) {
  if (this === other) return true;
  if (!other || !Array.isArray(other)) return false;
  if (this.length != other.length) return false;
  for (let i = 0; i < other.length; i++) {
    if (other[i] !== this[i]) return false;
  }
  return true;
};

test("get max occurrence and result is {max: 7, result: [1, 2]}", () => {
  const arr = readTestData(path.join(__dirname, "./test.data.1.json"));
  const r = max(arr);
  expect(r.max).toBe(8);
  expect(Array.isArray(r.result)).toBe(true);
  expect(r.result.equals(["1", "2"])).toBe(true);
});
