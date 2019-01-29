var express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	app = express();

var User = (function () {
	var user = [{ username: "xxx" }];
	var findOne = function (user, fn) {
		fn(null, user[0]);
	}

	var findById = function (id, fn) {
		fn(null, user[0]);
	}

	return {
		findOne: findOne,
		findById: findById
	}
})();

/* Strategies */
passport.use(new LocalStrategy(
	function (username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (!user.verifyPassword(password)) { return done(null, false); }
			return done(null, user);
		});
	}
));

/* Sessions */
passport.serializeUser(function (user, done) {
	done(null, user.id);
});
passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

/* Middleware */
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

/* Authenticate Requests */
app.post('/login',
	passport.authenticate('local', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/');
	});

app.listen(3000);