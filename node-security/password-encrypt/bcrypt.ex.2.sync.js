const bcrypt = require("bcrypt");

let hash = bcrypt.hashSync("myPassword", 10);
// Store hash in database

if (bcrypt.compareSync("somePassword", hash)) {
  // Passwords match
} else {
  // Passwords don't match
}
