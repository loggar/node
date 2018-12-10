async function sendMultipleMails(mails) {
	let sendMails = 0;

	// logic for sending multiple mails

	return sendMails;
}

// receive message from master process
process.on('message', async (message) => {
	const numberOfMailsSend = await sendMultipleMails(message.mails);

	// send response to master process
	process.send({ counter: numberOfMailsSend });
});
