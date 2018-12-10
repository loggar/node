const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const window = (new JSDOM(``, { pretendToBeVisual: true })).window;

window.requestAnimationFrame(timestamp => {
	console.log(timestamp > 0);
});

/*
When the pretendToBeVisual option is set to true, jsdom will pretend that it is rendering and displaying content. It does this by:

Changing document.hidden to return false instead of true
Changing document.visibilityState to return "visible" instead of "prerender"
Enabling window.requestAnimationFrame() and window.cancelAnimationFrame() methods, which otherwise do not exist
*/

// Note that jsdom still does not do any layout or rendering, so this is really just about pretending to be visual, not about implementing the parts of the platform a real, visual web browser would implement.
