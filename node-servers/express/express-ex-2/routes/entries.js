var logger = require('../lib/modules/logger.winston')(__filename);
var Entry = require('../lib/models/Entry');

exports.list = function(req, res, next) {
	var page = req.page || {
		from : 0,
		to : 100
	};
	logger.debug('page=', page);

	Entry.getRange(page.from, page.to, function(err, entries) {
		if (err)
			return next(err);
		
		if (req.remoteUser) {
			res.format({
				json : function () {
					res.send(entries);
				},
				xml : function () {
					res.render('entries.xml', {entries, entries});
				}
			});
		} else {
			res.render('entries', {
				title : 'Entries',
				entries : entries,
			});
		}
	});
};

exports.form = function(req, res) {
	res.render('post', {
		title : 'Post'
	});
};

exports.submit = function(req, res, next) {
	var username = null;
	try {
		username = res.locals.user.name;
	} catch (err) {
		username = 'unknown';
	}

	var entry = new Entry({
		"username" : username || 'unknown',
		"title" : req.body["entry[title]"],
		"body" : req.body["entry[body]"]
	});

	entry.save(function(err) {
		if (err)
			return next(err);
		if (req.remoteUser) {
			res.json({
				message : 'Entry added.'
			});
		} else {
			res.redirect('/entries');
		}
	});
};
