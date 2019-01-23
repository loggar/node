// Axios — Promise based HTTP client for the browser and node.js
// https://github.com/mzabriskie/axios
// $ npm install axios

const axios = require('axios');
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
	.then(response => {
		console.log(response.data.url);
		console.log(response.data.explanation);
	})
	.catch(error => {
		console.log(error);
	});

/*
I use axios often specially in my front-end projects for React.js and Vue.js . It easily integrates with google firebase.

Axios is a Promise based HTTP client for the browser as well as node.js.
Using Promises is a great advantage when dealing with code that requires a more complicated chain of events.
Writing asynchronous code can get confusing, and Promises are one of several solutions to this problem.
They are even useful in other languages such as Swift.
*/
