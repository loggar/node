const assert = require("assert").strict;

//Define error callback arguement
let err;
(function error1() {
  err = new Error("test error");
})();

//create an ifError function
(function ifError1() {
  //return this error if program resolves into an error
  assert.ifError(err);
})();
/**AssertionError [ERR_ASSERTION]: ifError got unwanted exception: test error
at ifError1
at error1 **/
