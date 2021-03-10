const assert = require("assert");

const val1 = {
  x: {
    y: 1,
  },
};
const val2 = {
  x: {
    y: 2,
  },
};
const val3 = {
  x: {
    y: 1,
  },
};

assert.notDeepStrictEqual(val1, val3);
assert.notDeepStrictEqual(val1, val2);
