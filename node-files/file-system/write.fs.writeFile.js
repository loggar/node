const fs = require("fs");

const data = "This is the new content of the file.";

fs.writeFile("file.txt", data, err => {
  if (err) {
    throw err;
  }
  console.log("Data has been written to file successfully.");
});
