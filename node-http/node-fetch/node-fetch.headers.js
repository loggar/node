// Example adapted from https://fetch.spec.whatwg.org/#example-headers-class

const meta = {
	'Content-Type': 'text/xml',
	'Breaking-Bad': '<3'
};
const headers = new Headers(meta);

// The above is equivalent to
const meta = [
	['Content-Type', 'text/xml'],
	['Breaking-Bad', '<3']
];
const headers = new Headers(meta);

// You can in fact use any iterable objects, like a Map or even another Headers
const meta = new Map();
meta.set('Content-Type', 'text/xml');
meta.set('Breaking-Bad', '<3');
const headers = new Headers(meta);
const copyOfHeaders = new Headers(headers);