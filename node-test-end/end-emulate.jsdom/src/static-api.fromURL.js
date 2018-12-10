const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromURL("https://example.com/", options).then(dom => {
	console.log(dom.serialize());
});
