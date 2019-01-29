const mailSend = require('gmail-send');

const send = mailSend({
	user: 'charly.loggar@gmail.com',
	pass: '********',
	to: 'charly.loggar@gmail.com',
	subject: '[mail.smtp.gmail.test]',
	text: "sent from mail.smtp.gmail.test"
	// html: '<b>html text</b>'
});

const filepath = './demo-attachment.txt';  // File to attach

send({
	// subject: 'attached '+filepath,  // Override value set as default
	// files: [ filepath ],
}, function (err, res) {
	if (err) {
		console.log('* [gmail-send] mailSend() callback returned: err:', err);
	}
	if (res) {
		console.log('* [gmail-send] mailSend() callback returned: res:', res);
	}
});
