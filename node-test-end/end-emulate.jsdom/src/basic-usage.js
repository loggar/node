const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

const { window } = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// or even
const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;

console.log(window.name);
console.log(document.location);