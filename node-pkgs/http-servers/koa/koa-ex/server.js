// app.js
const Koa = require('koa');

// Create Koa app
const app = new Koa();

// Serve requests, here, printing out a simple greeting
app.use(async ctx => {
	ctx.body = 'Hello World';
});

// Start the server
app.listen(3000);  