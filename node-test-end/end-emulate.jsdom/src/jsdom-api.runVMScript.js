const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { Script } = require("vm");

const dom = new JSDOM(``, { runScripts: "outside-only" });
const s = new Script(`
  if (!this.ran) {
    this.ran = 0;
  }
 
  ++this.ran;
`);

dom.runVMScript(s);
dom.runVMScript(s);
dom.runVMScript(s);

dom.window.ran === 3;
