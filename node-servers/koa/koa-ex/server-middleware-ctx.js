// app.js
const Koa = require('koa');

// Create Koa app
const app = new Koa();

app.use(async (ctx, next) => {
	ctx.assert(ctx.request.accepts('xml'), 406);
	// equivalent to:
	// if (!ctx.request.accepts('xml')) ctx.throw(406);
	await next();
});

// Start the server
app.listen(3000);  