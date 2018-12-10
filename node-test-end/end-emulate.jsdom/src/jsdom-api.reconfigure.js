const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM();

dom.window.top === dom.window;
dom.window.location.href === "about:blank";

dom.reconfigure({ windowTop: myFakeTopForTesting, url: "https://example.com/" });

dom.window.top === myFakeTopForTesting;
dom.window.location.href === "https://example.com/";
