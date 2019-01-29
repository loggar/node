// app.js
const Koa = require('koa');

// Create Koa app
const app = new Koa();

app.use(async (ctx, next) => {
	await next();
	ctx.response.type = 'xml';
	ctx.response.body = fs.createReadStream('really_large.xml');
});

// Start the server
app.listen(3000);  