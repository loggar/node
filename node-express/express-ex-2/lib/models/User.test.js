var User = require('./User');

function test_save(user) {
	user.save(function(err) {
		if(err) throw err;
		console.log('User.save');
		console.log(user);
		test_get(user.id);
		test_getByName(user.name);
	});
}

function test_get(id) {
	User.get(tobi.id, function(err, user) {
		if(err) throw err;
		if(user) console.log(user);
		else console.log('fail get: %s', id);
	});
}

function test_getByName(name) {
	User.getByName(name, function(err, user) {
		if(err) throw err;
		if(user) console.log(user);
		else console.log('fail getByName: %s', name);
	});
}

function test_authenticate(name, pass) {
	User.authenticate(name, pass, function(err, user) {
		if(err) throw err;
		if(user) console.log(user.toJSON());
		else console.log('fail authenticate: %s %s', name, pass);
	});
}

var tobi_1 = new User({
	name: 'Tobi2',
	pass: 'Passwd',
	age: '2'
});


var tobi_2 = new User({
	name: 'Tobi2',
	pass: 'Passwd2',
	age: '2'
});

//test_save(tobi);
//test_getByName(tobi.name);
test_authenticate(tobi_1.name, tobi_1.pass);
test_authenticate(tobi_2.name, tobi_2.pass);