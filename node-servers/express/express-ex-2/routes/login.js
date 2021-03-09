var logger = require('../lib/modules/logger.winston')(__filename);
var User = require('../lib/models/User');

exports.form = function(req, res) {
	res.render('login', {
		title : 'Login'
	});
};

exports.submit = function(req, res, next) {
	var data = req.body;
	
	User.authenticate(data['user[name]'], data['user[pass]'], function(err, user) {
		logger.debug("user=", user);
		
		if (err)
			return next(err);
		if (user) {
			req.session.uid = user.id;
			res.message('success login.');
			res.redirect('/');
		} else {
			res.error("Sorry! invalid credentials.");
			res.redirect('back');
		}
	});
};

exports.logout = function(req, res) {
	req.session.destroy(function(err) {
		if (err)
			throw err;
		res.redirect('/');
	});
};
