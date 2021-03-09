const validator = require("validator");
validator.isEmail("foo@bar.com"); //=> true
validator.isEmail("bar.com"); //=> false
