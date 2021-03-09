const bcrypt = require("bcrypt");

const incomingPassword = "Some-Password@2020";
const existingHash = "some-hash-previously-generated";

bcrypt.compare(incomingPassword, existingHash, (err, res) => {
  if (res && res === true) {
    return console.log("Valid Password");
  }
  //invalid password handling here
  else {
    console.log("Invalid Password");
  }
});
