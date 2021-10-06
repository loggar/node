// temp cases
test("read an array from a json file and it's length is 11", () => {
  expect(readTestData(path.join(__dirname, "./test.data.1.json")).length).toBe(
    11
  );
});

test("test array equals method", () => {
  expect([].equals([])).toBe(true);
  expect([1, 2].equals([1, 2])).toBe(true);
  expect([].equals(null)).toBe(false);
  expect([1, 2].equals([1, 2, 3])).toBe(false);
  expect([1, "2"].equals([1, 2])).toBe(false);
});

// falsy cases
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
