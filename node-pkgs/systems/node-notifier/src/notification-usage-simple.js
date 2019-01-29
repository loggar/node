const notifier = require('node-notifier');

// String
notifier.notify('empty option usage!');

// Object
notifier.notify({
	'title': 'TITLE',
	'subtitle': 'SUB-TITLE',
	'message': 'MESSAGE!',
	'icon': 'icon.png',
	'contentImage': 'content.png',
	'sound': 'ding.mp3',
	'wait': true
});
