var redis = require("redis"),
	client = redis.createClient();

client.set("foo_rand000000000000", "some fantastic value", function (err, reply) {
	// This will either result in an error (flush parameter is set to true) 
	// or will silently fail and this callback will not be called at all (flush set to false) 
	console.log(err);
});
client.end(true); // No further commands will be processed 
client.get("foo_rand000000000000", function (err, reply) {
	console.log(err); // => 'The connection has already been closed.' 
});