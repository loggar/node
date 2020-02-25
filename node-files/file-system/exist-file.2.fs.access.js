const fs = require("fs");

fs.access(__dirname + "/files/test.txt", err => {
  if (err) {
    console.log("The file does not exist.");
  } else {
    console.log("The file exists.");
  }
});
