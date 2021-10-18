import { isMonotonic } from "./main";

test("array is monotonic", () => {
  expect(isMonotonic([])).toBe(true);
  expect(isMonotonic([1])).toBe(true);
  expect(isMonotonic([1, 2])).toBe(true);
  expect(isMonotonic([1, 1, 1, 1, 1, 1])).toBe(true);
  expect(isMonotonic([1, 1, 2, 2, 3, 4, 4, 5])).toBe(true);
  expect(isMonotonic([5, 4, 4, 3, 2, 2, 1, 0, 0, -1])).toBe(true);
  expect(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -2000])).toBe(true);
  expect(isMonotonic([1, 5, 10, 1100, 1101, 1102, 2000])).toBe(true);

  expect(isMonotonic([5, 5, 4, 3, 3, 1, 2, 0])).toBe(false);
  expect(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -2000])).toBe(
    false
  );
  expect(isMonotonic([1, 2, 0])).toBe(false);
  expect(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11])).toBe(
    false
  );
});
