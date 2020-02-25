const fs = require("fs");

fs.readFile("404.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    // log the error here
  }
  console.log(data);
});
