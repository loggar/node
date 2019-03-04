var Client = require('scp2').Client;

// set the default values for the remote server.
client.defaults({
	port: 22,
	host: 'example.com',
	username: 'admin',
	privateKey: '....',
	// password: 'password', (accepts password also)
});

// You can also initialize the instance with these values:
var client = new Client({
	port: 22
});

/*
More on the values at ssh2.

sftp function(callback) -> callback(err, sftp)

Get the sftp.

close function()

Close all sessions.

mkdir function(dir, [attr], callback) -> callback(err)

Make a directory on the remote server. It behaves like mdkir -p.
*/

// write function(options, callback) -> callback(err)
// Write content on the remote server.

client.write({
	destination: '/home/admin/data/file.txt',
	content: 'hello world'
}, callback)

// upload function(src, dest, callback) -> callback(err)
// upload a local file to the server.

client.upload('file.txt', '/home/admin/file.txt', callback)

/*
download function(src, dest, callback) -> callback(err)
*/