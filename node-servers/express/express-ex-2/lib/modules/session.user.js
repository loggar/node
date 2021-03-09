var User = require('../models/User');

module.exports = function(req, res, next) {
	// if rest api,
	if (req.remoteUser) {
		res.locals.user = req.remoteUser;
	}
	
	var uid = req.session.uid;
	if (!uid) {
		return next();
	}
	
	User.get(uid, function(err, user) {
		if (err)
			return next(err);
		req.user = res.locals.user = user;
		next();
	});
};
