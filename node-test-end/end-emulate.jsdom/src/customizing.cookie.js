const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const cookieJar = new jsdom.CookieJar(store, options);
const dom = new JSDOM(``, { cookieJar });