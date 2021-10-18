import { readFileSync } from "fs";
import { abc } from "/src/main";

test("abc([]) returns []", () => {
  const arr1 = JSON.parse(readFileSync("/src/main.test.1.json"));
  const arr2 = JSON.parse(readFileSync("/src/main.test.2.json"));
  const arr3 = JSON.parse(readFileSync("/src/main.test.3.json"));

  expect(abc([])).toEqual([]);
  expect(abc(arr1)).toEqual(["1", "2"]);
  expect(abc(arr2)).toEqual(["1"]);
  expect(abc(arr3)).toEqual(["1", "2"]);
});
