var logger = require('../lib/modules/logger.winston')(__filename);
var basicAuth = require('express-basic-auth');
var User = require('../lib/models/User');

exports.auth = basicAuth(User.authenticate);

exports.user = function(req, res, next) {
	User.get(req.params.id, function(err, user) {
		logger.debug("api user=", user);

		if (err)
			return next(err);
		if (!user.id)
			return res.send(404);
		res.json(user);
	});
};
