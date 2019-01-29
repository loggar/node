var redis = require("redis"),
	client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call 
// client.select(3, function() { /* ... */ }); 

client.on("error", function (err) {
	console.log("Error " + err);
});

client.hmset(["key", "test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) { });
// Works the same as 
client.hmset("key", ["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) { });
// Or 
client.hmset("key", "test keys 1", "test val 1", "test keys 2", "test val 2", function (err, res) { });


// Note that in either form the callback is optional:
client.set("some key", "some val");
client.set(["some other key", "some val"]);

// If the key is missing, reply will be null. Only if the Redis Command Reference states something else it will not be null.
client.get("missingkey", function (err, reply) {
	// reply is null when the key is missing 
	console.log(reply);
});

// expire
// this key will expire after 10 seconds 
client.set('key2', 'value!', 'EX', 10);

client.hkeys("key", function (err, replies) {
	console.log(replies.length + " replies:");
	replies.forEach(function (reply, i) {
		console.log("    " + i + ": " + reply);
	});
	client.quit();
});
