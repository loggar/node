const http2 = require('http2');
const koa = require('koa');
const router = require('koa-route');
const fs = require('fs');

const app = koa();

app.use(
  router.get('/', async function(ctx, next) {
    ctx.body = 'Hello, World!';
    await next();
  })
);

http2.createServer({}, app.callback()).listen(3000, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on port: 3000.');
});
