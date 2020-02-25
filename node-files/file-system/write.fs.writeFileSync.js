const fs = require("fs");

const data = "This is the new content of the file.";

try {
  fs.writeFileSync("file.txt", data);
  console.log("File has been saved.");
} catch (error) {
  console.error(err);
}
