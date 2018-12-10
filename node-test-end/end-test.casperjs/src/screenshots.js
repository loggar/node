var links = [];
var casper = require('casper').create({
	viewportSize : {
		width : 1024,
		height : 768
	}
});

function getLinks() {
	var links = document.querySelectorAll('h3.r a');
	return Array.prototype.map.call(links, function(e) {
		return e.getAttribute('href');
	});
}

casper.start('http://google.fr/', function() {
	var fileLocate = '_test-output/1.jpg';
	this.captureSelector(fileLocate, "html");
	this.fill('form[action="/search"]', {
		q : 'seotory'
	}, true);
});

casper.then(function() {
	var fileLocate = '_test-output/2.jpg';
	this.captureSelector(fileLocate, "html");
	links = this.evaluate(getLinks);
	this.fill('form[action="/search"]', {
		q : 'wordpress'
	}, true);
});

casper.then(function() {
	var fileLocate = '_test-output/3.jpg';
	this.captureSelector(fileLocate, "html");
	links = links.concat(this.evaluate(getLinks));
});

casper.run(function() {
	this.echo(links.length + ' links found:');
	this.echo(' - ' + links.join('\n - ')).exit();
});