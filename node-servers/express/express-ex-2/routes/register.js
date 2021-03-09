var logger = require('../lib/modules/logger.winston')(__filename);
var User = require('../lib/models/User');

exports.form = function(req, res) {
	res.render('register', {
		title : 'Register'
	});
};

exports.submit = function(req, res, next) {
	User.getByName(req.body['user[name]'], function(err, user) {
		if (err)
			return next(err);
		
		logger.debug(user);
		
		if (user.id) {
			res.error("User name already taken!");
			res.redirect('back');
		} else {
			user = new User({
				name : req.body['user[name]'],
				pass : req.body['user[pass]']
			});

			user.save(function(err) {
				if (err)
					return next(err);
				req.session.uid = user.id;
				res.redirect('/');
			});
		}
	});
};
