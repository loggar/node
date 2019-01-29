var storage = require('node-persist');

//you must first call storage.init 
storage.init( /* options ... */).then(function () {
	//then start using it 
	storage.setItem('name', 'yourname')
		.then(function () {
			return storage.getItem('name')
		})
		.then(function (value) {
			console.log(value); // yourname 
		})
});