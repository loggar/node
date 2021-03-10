const assert = require("assert").strict;

assert.doesNotMatch("I will fail", /fail/);
/** AssertionError [ERR_ASSERTION]: The input was expected to not match because fail is contained in the actual and expected string ...**/

assert.doesNotMatch(123, /pass/);
/**AssertionError [ERR_ASSERTION]: The "string" argument must be of type string.**/

assert.doesNotMatch("I will pass", /different/);
/** This passes the test with no error since actual and expeted string have no word alike **/
