var client = require('scp2')

// Copy a file to the server
client.scp('file.txt', 'admin:password@example.com:/home/admin/', function (err) {
})

// with port
client.scp('file.txt', 'admin:password@example.com:port:/home/admin/', function (err) {
})

// with options
client.scp('file.txt', {
	host: 'example.com',
	username: 'admin',
	password: 'password',
	path: '/home/admin/'
}, function (err) { })

// rename the file
client.scp('file.txt', 'admin:password@example.com:/home/admin/rename.txt', function (err) {
})

// copy a dir
client.scp('data/', 'admin:password@example.com:/home/admin/data/', function (err) {
})

// copy via glob pattern
client.scp('data/*.js', 'admin:password@example.com:/home/admin/data/', function (err) {
})

// download a file from server
client.scp('admin:password@example.com:/home/admin/file.txt', './', function (err) {
})

// download with options
client.scp({
	host: 'example.com',
	username: 'admin',
	password: 'password',
	path: '/home/admin/file.txt'
}, './', function (err) { })
