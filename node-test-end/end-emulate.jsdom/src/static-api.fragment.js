const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const frag = JSDOM.fragment(`<p>Hello</p><p><strong>Hi!</strong>`);

frag.childNodes.length === 2;
frag.querySelector("strong").textContent = "Why hello there!";
// etc.


const frag2 = JSDOM.fragment(`<p>Hello</p>`);
console.log(frag2.firstChild.outerHTML); // logs "<p>Hello</p>"