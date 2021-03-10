const assert = require("assert").strict;

/** AssertionError [ERR_ASSERTION]: Failed. This just prints failed as error message. This is not a good practice**/
assert.fail();

// AssertionError [ERR_ASSERTION]: This is why I failed
assert.fail("This is why I failed");

// TypeError: This is why I failed
assert.fail(new TypeError("This is why I failed"));
