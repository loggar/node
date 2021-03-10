const assert = require("assert");

assert.strictEqual(1, 1);
assert.strictEqual(1, "1");
assert.strictEqual(NaN, NaN);
assert.strictEqual(1, 2);
assert.strictEqual({ a: { x: 1 } }, { a: { x: 1 } });
