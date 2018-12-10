const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom1 = new JSDOM();
const dom2 = new JSDOM();

dom1.window.Element.prototype.expando = "blah";
console.log(dom2.window.document.createElement("frameset").expando); // logs "blah"
