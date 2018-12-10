const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(``, {
	url: "https://example.org/",
	referrer: "https://example.com/",
	contentType: "text/html",
	userAgent: "Mellblomenator/9000",
	includeNodeLocations: true
});
