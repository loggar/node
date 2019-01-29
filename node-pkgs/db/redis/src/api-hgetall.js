
// The reply from an HGETALL command will be converted into a JavaScript Object by node_redis. That way you can interact with the responses using JavaScript syntax.

client.hmset("hosts", "mjr", "1", "another", "23", "home", "1234");
client.hgetall("hosts", function (err, obj) {
	console.dir(obj);  // { mjr: '1', another: '23', home: '1234' }
});