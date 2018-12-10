var casperProcess = (process.platform === "win32" ? "casperjs.cmd" : "casperjs");
var spawn = require("child_process").spawn
var child = spawn(casperProcess, ["screenshots.js"])

child.stdout.on("data", function (data) {
	console.log(String(data));
	console.log("spawnSTDOUT:", JSON.stringify(data))
});
child.stderr.on("data", function (data) {
	console.log("spawnSTDERR:", JSON.stringify(data))
});

child.on("exit", function (code) {
	console.log("spawnEXIT:", code)
});