// get filesystem module
const fs = require("fs");

const buffer = fs.readFileSync("./data.json");

// use the toString() method to convert
// Buffer into String
const fileContent = buffer
  .toString()
  .trim()
  .replace(/^\n|\s+|\s+$/g, "");

console.log(fileContent);
