import fetch from 'node-fetch';
// or
// const fetch = require('node-fetch');

// if you are using your own Promise library, set it through fetch.Promise. Eg.

// import Bluebird from 'bluebird';
// fetch.Promise = Bluebird;

// plain text or html

fetch('https://github.com/')
	.then(res => res.text())
	.then(body => console.log(body));

// json

fetch('https://api.github.com/users/github')
	.then(res => res.json())
	.then(json => console.log(json));

// catching network error
// 3xx-5xx responses are NOT network errors, and should be handled in then()
// you only need one catch() at the end of your promise chain

fetch('http://domain.invalid/')
	.catch(err => console.error(err));

// stream
// the node.js way is to use stream when possible

fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
	.then(res => {
		const dest = fs.createWriteStream('./octocat.png');
		res.body.pipe(dest);
	});