// buffer
// if you prefer to cache binary data in full, use buffer()
// note that buffer() is a node-fetch only API

import fileType from 'file-type';

fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
	.then(res => res.buffer())
	.then(buffer => fileType(buffer))
	.then(type => { /* ... */ });

// meta

fetch('https://github.com/')
	.then(res => {
		console.log(res.ok);
		console.log(res.status);
		console.log(res.statusText);
		console.log(res.headers.raw());
		console.log(res.headers.get('content-type'));
	});

// post

fetch('http://httpbin.org/post', { method: 'POST', body: 'a=1' })
	.then(res => res.json())
	.then(json => console.log(json));