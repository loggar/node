var client = require("redis").createClient();
client.monitor(function (err, res) {
	console.log("Entering monitoring mode.");
});
client.set('foo', 'bar');

client.on("monitor", function (time, args, raw_reply) {
	console.log(time + ": " + args); // 1458910076.446514:['set', 'foo', 'bar'] 
});