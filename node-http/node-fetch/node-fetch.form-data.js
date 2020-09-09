// post with form-data (custom headers)
// note that getHeaders() is non-standard API

import FormData from 'form-data';

const form = new FormData();
form.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: form, headers: form.getHeaders() })
	.then(res => res.json())
	.then(json => console.log(json));

// node 7+ with async function

(async function () {
	const res = await fetch('https://api.github.com/users/github');
	const json = await res.json();
	console.log(json);
})();