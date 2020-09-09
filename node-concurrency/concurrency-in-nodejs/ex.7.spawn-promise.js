const spawn = require("spawn-promise");

async function start() {
  const out = await spawn("echo", ["Hello World!!"]);
  console.log(out.toString());
}

start();
