var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'), // Middleware to read POST data
	port = Number(process.env.PORT || 27010),
	path = require('path'),
	ip = require('ip');

var Datastore = require('nedb');
var db = new Datastore({
	filename: path.resolve(__dirname, '../.db/todo.db'),
	autoload: true, // automatically load the database
	timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

// To parse JSON:
app.use(bodyParser.json());
// To parse form data:
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function (req, res) {
	res.send('Our first route is working. version 002');
});

app.get('/todo', function (req, res) {
	db.find({}).sort({
		updatedAt: -1
	}).exec(function (err, todo) {
		if (err) res.send(err);
		res.json(todo);
	});
});

app.get('/todo/:id', function (req, res) {
	var id = req.params.id;
	db.findOne({
		_id: id
	}, {}, function (err, todo) {
		if (err) res.send(err);
		res.json(todo);
	});
});

app.post('/todo', function (req, res) {
	var todo = {
		description: req.body.description,
	};
	db.insert(todo, function (err, todo) {
		if (err) res.send(err);
		res.json(todo);
	});
});

app.delete('/todo/:id', function (req, res) {
	var id = req.params.id;
	db.remove({
		_id: id
	}, {}, function (err, todo) {
		if (err) res.send(err);
		res.sendStatus(200);
	});
});

app.listen(port, function () {
	console.log('Listening on localhost (' + ip.address() + '):' + port);
});
