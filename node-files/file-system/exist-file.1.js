const fs = require("fs");

try {
  if (fs.existsSync(__dirname + "/files/file.txt")) {
    console.log("The file exists.");
  } else {
    console.log("The file does not exist.");
  }
} catch (err) {
  console.error(err);
}
