/**
 * mail sender
 * @author Charly Lee <charly.loggar@gmail.com>
 * @description with gmail smtp
 * @version 0.1.1
 */

var env_mode = process.env.NODE_ENV || 'development';
var path = require("path");
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('./logger.winston').init(env_mode, __filename, log_file);

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../lib-resources/mail.smtp.gmail.config');

var transporter = nodemailer.createTransport(smtpTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: config.auth
}));

var sendMail = function (mailOptions) {
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			logger.error('%j', error);
		} else {
			logger.info('Email sent to %s : %j', mailOptions.to, info.response);
		}
	});
}

module.exports = {
	send: sendMail
}

