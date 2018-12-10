var express = require('express');
var res = express.response;

res.message = function(msg, type) {
	type = type || 'message_info';
	var sess = this.req.session;
	sess.messages = sess.messages || [];
	sess.messages.push({
		type : type,
		content : msg
	});
};

res.error = function(msg) {
	return this.message(msg, 'message_error');
};

module.exports = function(req, res, next) {
	res.locals.messages = req.session.messages || [];
	res.locals.removeMessages = function() {
		req.session.messages = [];
	};
	next();
};
