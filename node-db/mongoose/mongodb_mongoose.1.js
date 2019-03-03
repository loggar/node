var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log("connection done");
	
	/*
	 * Mongodb schema : String Number Date Boolean Buffer ObjectID Mixed Array ..
	 */
	var schema_1 = mongoose.Schema({
		name: String
	})
	
	// add method at the schema
	schema_1.methods.speak = function () {
		var greeting = this.name ? "Hello Name : " + this.name
								: "No Name";
		console.log(greeting);
	}
	
	// set model
	var SomeModel = mongoose.model('SomeModel', schema_1);
	
	// use model
	var charly = new SomeModel({name: 'Charly'});
	charly.speak();
	
	// mongodb save
	charly.save(function(err, charly) {
		if(err) {
			console.log("mongodb save err");
			throw err;
		}
		
		console.log("mongodb save done");
	});
	
	// mongodb find
	SomeModel.find({name: /^Cha/}, function(err, arrSomeModel) {
		if(err) {
			console.log("mongodb find err");
			throw err;
		}
		
		console.log("mongodb find done");
		console.log(arrSomeModel);
		
		mongoose.disconnect();
	});
	

});
