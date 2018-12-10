var should = require('chai').should();

var db = {
	get: function (num, cb) {
		setTimeout(function () {
			if (num > 0) {
				cb(null, { n: num });
			} else {
				cb(Error("Invalid Number", null));
			}
		}, 500);

	}
}

db.get(1234, function (err, doc) {
	should.not.exist(err);
	should.exist(doc);
	doc.should.be.an('object');
});

db.get(0, function (err, doc) {
	should.not.exist(err);
	should.exist(doc);
	doc.should.be.an('object');
});