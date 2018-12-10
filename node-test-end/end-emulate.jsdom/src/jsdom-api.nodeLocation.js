const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(
	`<p>Hello
	  <img src="foo.jpg">
	</p>`,
	{ includeNodeLocations: true }
);

const document = dom.window.document;
const bodyEl = document.body; // implicitly created
const pEl = document.querySelector("p");
const textNode = pEl.firstChild;
const imgEl = document.querySelector("img");

console.log(dom.nodeLocation(bodyEl));   // null; it's not in the source
console.log(dom.nodeLocation(pEl));      // { startOffset: 0, endOffset: 39, startTag: ..., endTag: ... }
console.log(dom.nodeLocation(textNode)); // { startOffset: 3, endOffset: 13 }
console.log(dom.nodeLocation(imgEl));    // { startOffset: 13, endOffset: 32 }
