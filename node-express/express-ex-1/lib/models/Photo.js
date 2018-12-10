var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app');

var schema = new mongoose.Schema({
	name : String,
	path : String,
	original : String
});

module.exports = mongoose.model('Photo', schema);
