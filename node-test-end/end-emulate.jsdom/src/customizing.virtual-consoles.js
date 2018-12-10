const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();
const dom = new JSDOM(``, { virtualConsole });


// If you simply want to redirect the virtual console output to another console, like the default Node.js one, you can do
virtualConsole.sendTo(console);
