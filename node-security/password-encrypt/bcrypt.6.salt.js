const bcrypt = require("bcrypt");

const saltRounds = 10;
const password = "Some-Password@2020";

bcrypt.hash(password, saltRounds, (err, passwordHash) => {
  //we will just print it to the console for now
  //you should store it somewhere and never logs or print it

  console.log("Hashed Password:", passwordHash);
});
