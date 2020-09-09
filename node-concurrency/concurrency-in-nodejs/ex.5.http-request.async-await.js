const fetch = require("node-fetch");

async function start() {
  const response = await fetch("http://a.b.c/1");
  const data = await response.text();
  console.log(JSON.parse(data));
}

start();
