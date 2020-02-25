const fs = require("fs");

const data = "Some data to append";

fs.appendFile("file.txt", data, err => {
  if (err) {
    throw err;
  }
  console.log("FIle is updated.");
});
