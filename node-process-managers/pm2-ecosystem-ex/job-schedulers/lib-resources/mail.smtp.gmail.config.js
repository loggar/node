var mail_smtp_gmail_config = (function () {
	var auth = {
		user: 'job-schedulers@example.com',
		pass: 'uPr7A=Z='
	};

	return {
		auth: function () {
			return auth;
		}
	}
})();