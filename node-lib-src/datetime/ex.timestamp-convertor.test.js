// npx jest ./node-lib-src/datetime/ex.timestamp-convertor.test.js

const timestampConvertor = require("./ex.timestamp-convertor");

test("nanosecondsToMilliseconds converts correctly", () => {
  const nanoseconds = BigInt(1698027616289927860n);
  const expectedMilliseconds = Number(nanoseconds / BigInt(1000000));
  expect(timestampConvertor.nanosecondsToMilliseconds(nanoseconds)).toBe(
    expectedMilliseconds
  );
});

test("nanosecondsToMilliseconds converts correctly", () => {
  const nanoseconds = BigInt(1698027616289927861n);
  const expectedMilliseconds = Number(nanoseconds / BigInt(1000000));
  expect(timestampConvertor.nanosecondsToMilliseconds(nanoseconds)).toBe(
    expectedMilliseconds
  );
});

test("nanosecondsToMilliseconds converts correctly", () => {
  const nanoseconds = BigInt(1698027616289927862n);
  const expectedMilliseconds = Number(nanoseconds / BigInt(1000000));
  expect(timestampConvertor.nanosecondsToMilliseconds(nanoseconds)).toBe(
    expectedMilliseconds
  );
});

test("nanosecondsToMilliseconds converts correctly", () => {
  const nanoseconds = BigInt(1698027616289927863n);
  const expectedMilliseconds = Number(nanoseconds / BigInt(1000000));
  expect(timestampConvertor.nanosecondsToMilliseconds(nanoseconds)).toBe(
    expectedMilliseconds
  );
});
