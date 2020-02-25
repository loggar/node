const fs = require("fs");

try {
  fs.accessSync("file.txt", fs.constants.F_OK);

  console.log("The file exists.");
} catch (err) {
  console.error(err);
}
