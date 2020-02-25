const fs = require("fs");

const data = "Append this data at the end of the file.";

fs.writeFile("file.txt", data, { flag: "a+" }, err => {
  if (err) {
    throw err;
  }
  console.log("FIle is updated.");
});
