const lineReader = require("line-reader");

lineReader.eachLine(__dirname + "/files/test.txt", line => {
  console.log(line);

  // stop if line contains `NEW`
  if (line.includes("NEW")) {
    // stop reading and close the file
    return false;
  }
});
