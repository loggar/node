const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt");
  console.log(data.toString());
} catch (err) {
  console.error(err);
}
