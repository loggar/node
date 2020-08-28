const NotificationCenter = require('node-notifier').NotificationCenter;

var notifier = new NotificationCenter({
	withFallback: false, // Use Growl Fallback if <= 10.8
	customPath: void 0 // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
});

notifier.notify({
	'title': void 0,
	'subtitle': void 0,
	'message': 'Click "reply" to send a message back!',
	'sound': false, // Case Sensitive string for location of sound file, or use one of macOS' native sounds (see below)
	'icon': 'Terminal Icon', // Absolute Path to Triggering Icon
	'contentImage': void 0, // Absolute Path to Attached Image (Content Image)
	'open': void 0, // URL to open on Click
	'wait': false, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds

	// New in latest version. See `example/macInput.js` for usage
	timeout: 5, // Takes precedence over wait if both are defined.
	closeLabel: void 0, // String. Label for cancel button
	actions: void 0, // String | Array<String>. Action label or list of labels in case of dropdown
	dropdownLabel: void 0, // String. Label to be used if multiple actions
	reply: false // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
}, function (error, response, metadata) {
	console.log(error, response, metadata);
});
