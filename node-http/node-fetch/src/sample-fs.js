// post with stream from file

import { createReadStream } from 'fs';

const stream = createReadStream('input.txt');
fetch('http://httpbin.org/post', { method: 'POST', body: stream })
	.then(res => res.json())
	.then(json => console.log(json));

// post with JSON

var body = { a: 1 };
fetch('http://httpbin.org/post', {
	method: 'POST',
	body: JSON.stringify(body),
	headers: { 'Content-Type': 'application/json' },
})
	.then(res => res.json())
	.then(json => console.log(json));