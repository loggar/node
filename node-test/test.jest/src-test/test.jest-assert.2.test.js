const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', (assert = require('assert')) => {
  assert.ok(sum(1, 2) == 3, 'sum(1, 2) == 3');
});
