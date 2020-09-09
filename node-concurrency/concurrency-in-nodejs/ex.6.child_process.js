const { spawn } = require("child_process");

const ls = spawn("echo", ["Hello World!!"]);
let data = "";

ls.stdout.on("data", (_data) => {
  data += _data;
});

ls.on("close", (code) => {
  console.log(data);
});
