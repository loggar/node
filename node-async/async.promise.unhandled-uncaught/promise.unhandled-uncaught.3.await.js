// async function version
const { readFile } = require("fs").promises;

async function readJsonFile(file) {
  // Promise is rejected if fails to read or if unexpected JSON input.
  return JSON.parse(await readFile(file));
}
