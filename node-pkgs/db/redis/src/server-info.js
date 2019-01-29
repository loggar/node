var redis = require("redis"),
	client = redis.createClient()

client.on("connect", function () {
	console.log("connected")
});

client.on("ready", function () {
	console.log("ready", client.server_info)
});