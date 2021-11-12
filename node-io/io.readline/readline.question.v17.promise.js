// main.mjs
import readline from "readline/promises";
import process from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = await rl.question(`What's your name?`);
console.log(`Hi ${name}!`);
rl.close();
