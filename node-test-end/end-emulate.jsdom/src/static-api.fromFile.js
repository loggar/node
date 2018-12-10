const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("stuff.html", options).then(dom => {
	console.log(dom.serialize());
});
