var redis = require('redis');
var assert = require('assert');
var client = redis.createClient();

client.on('error', function (err) {
	assert(err instanceof Error);
	assert(err instanceof redis.AbortError);
	assert(err instanceof redis.AggregateError);
	// The set and get get aggregated in here 
	assert.strictEqual(err.errors.length, 2);
	assert.strictEqual(err.code, 'NR_CLOSED');
});
client.set('foo', 123, 'bar', function (err, res) { // Too many arguments 
	assert(err instanceof redis.ReplyError); // => true 
	assert.strictEqual(err.command, 'SET');
	assert.deepStrictEqual(err.args, ['foo', 123, 'bar']);

	redis.debug_mode = true;
	client.set('foo', 'bar');
	client.get('foo');
	process.nextTick(function () {
		// Force closing the connection while the command did not yet return 
		client.end(true);
		redis.debug_mode = false;
	});
});