// app.js
const Koa = require('koa');

// Create Koa app
const app = new Koa();

// Middleware normally takes two parameters (ctx, next), ctx is the context for one request,
// next is a function that is invoked to execute the downstream middleware. It returns a Promise with a then function for running code after completion.

app.use((ctx, next) => {
	const start = Date.now();
	return next().then(() => {
		const ms = Date.now() - start;
		console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
	});
});

// Start the server
app.listen(3000);  