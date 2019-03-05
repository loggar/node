var express = require('express'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	verify = require('./lib/password-auth.js'),
	app = express();

passport.use(new LocalStrategy(verify));

app.post('/login',
	passport.authenticate('local', {
		failureRedirect: '/login'
	}),
	function (req, res) {
		res.redirect('/');
	});

app.listen(3000);