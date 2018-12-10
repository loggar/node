const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// On the Node.js side:
const window = (new JSDOM(``)).window;
window.onModulesLoaded = () => {
	console.log("ready to roll!");
};
