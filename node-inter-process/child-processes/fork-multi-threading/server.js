const { fork } = require('child_process');
app.get('/endpoint', (request, response) => {
	// fork another process
	const process = fork('./send_mail.js');

	const mails = request.body.emails;

	// send list of e-mails to forked process
	process.send({ mails });

	// listen for messages from forked process
	process.on('message', (message) => {
		log.info(`Number of mails sent ${message.counter}`);
	});
	
	return response.json({ status: true, sent: true });
});
