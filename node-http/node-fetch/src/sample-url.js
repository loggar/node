// post form parameters (x-www-form-urlencoded)

import { URLSearchParams } from 'url';

const params = new URLSearchParams();
params.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: params })
	.then(res => res.json())
	.then(json => console.log(json));

// post with form-data (detect multipart)

import FormData from 'form-data';

const form = new FormData();
form.append('a', 1);
fetch('http://httpbin.org/post', { method: 'POST', body: form })
	.then(res => res.json())
	.then(json => console.log(json));