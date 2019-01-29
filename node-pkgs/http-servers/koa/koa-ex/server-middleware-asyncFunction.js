// app.js
const Koa = require('koa');

// Create Koa app
const app = new Koa();

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// Start the server
app.listen(3000);  