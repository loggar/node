var redis = require("redis");
var bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var client = redis.createClient();

client.set("foo", "bar");

// So instead of writing client.get('foo', cb); you have to write: 
client.getAsync('foo').then(function (res) {
	console.log("1", res); // => 'bar' 
});

// Using multi with promises looks like: 

client.multi().get('foo').execAsync().then(function (res) {
	console.log("2", res); // => 'bar' 
});