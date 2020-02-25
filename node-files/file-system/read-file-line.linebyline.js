const readline = require("linebyline");

// read all lines
rl = readline(__dirname + "/files/test.txt");

// listen for `line` event
rl.on("line", (line, lineCount, byteCount) => {
  console.log(line);
}).on("error", err => {
  console.error(err);
});
