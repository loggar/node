// npm i koa koa-router koa-ejs axios

const koa = require("koa");
const path = require("path");
const render = require("koa-ejs");
const koaRouter = require("koa-router");
const axios = require("axios");

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    ctx.body = "Ops, something wrong happened:<br>" + err.message;
  }
});
