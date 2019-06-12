const bcrypt = require("bcrypt");

bcrypt.hash("1234", 1, function(err, hash) {
  console.log(hash);
  // Store hash in database
});

bcrypt.compare("1234", "$2b$10$4ET5YYGPd/4PSH/.YYgeQ.lvrupk4F8nhJZa/hJp8.nHkFvzf20um", function(err, res) {
  if (res) {
    console.log("Passwords match");
  } else {
    console.log("Passwords don't match");
  }
});
