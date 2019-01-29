'use strict';

var _mariasqlPromise = require('mariasql-promise');

var _mariasqlPromise2 = _interopRequireDefault(_mariasqlPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _mariasqlPromise2.default();

// API
console.log(_mariasqlPromise2.default.toString());
console.log(db);

db.connect({
	host: '127.0.0.1',
	user: 'root',
	password: 'admin',
	db: 'database_test_1'
}).then(function () {
	console.log('connected');

	var selectQuery = db.query('Select 1 + 1 as result').then(function (rows) {
		console.log('result was', rows[0].result);
	});
	var escapedQuery = db.query('Select * from member where id = ? LIMIT 1', [1]).then(function (rows) {
		console.log('the member was', rows.length ? 'found' : 'not found');
	});
	var parameterizedQuery = db.query('Select * from member where id = :id and name = :name LIMIT 1', [1, 'steel']).then(function (rows) {
		console.log('steel was', rows.length ? 'found' : 'not found');
	});
	var preparedQuery = db.query(db.prepare('Select COUNT(id) as count from member as a where EXISTS(Select 1 from member where member.name = a.name AND member.id != a.id)')).then(function (rows) {
		console.log('number of member with same name is', rows[0].count);
	});

	return Promise.all([selectQuery, escapedQuery, parameterizedQuery, preparedQuery]);
}).catch(function (e) {
	console.log('We have a problem', e.message, e.stack);
});
