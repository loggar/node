var redis = require("redis"),
	client = redis.createClient();

client.on("connect", function () {
	client.set("foo_rand000000000000", "some fantastic value", redis.print);
	client.get("foo_rand000000000000", redis.print);

	client.quit();
});