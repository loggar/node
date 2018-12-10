const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<p>Hello</p>`, {
	beforeParse(window) {
		window.document.childNodes.length === 0;
		window.someCoolAPI = () => { /* ... */ };
	}
});