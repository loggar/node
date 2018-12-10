var fs = require('fs');
var http = require('http');
var path = require('path');

var dir = path.dirname(__filename);

function getEntries() {
	var filepath = path.resolve(dir, './blog_entries.txt');
	var entries = [];
	var entriesRaw = fs.readFileSync(filepath, 'utf8');

	entriesRaw = entriesRaw.split("---");

	entriesRaw.map(function(entryRaw) {
		var entry = {};
		var lines = entryRaw.split("\n");

		lines.map(function(line) {
			if (line.indexOf('title: ') === 0) {
				entry.title = line.replace('title: ', '');
			} else if (line.indexOf('date: ') === 0) {
				entry.date = line.replace('date: ', '');
			} else {
				entry.body = entry.body || '';
				entry.body += line;
			}
		});
		entries.push(entry);
	});
	return entries;
}

// getEntries.test
var entries = getEntries();
console.log(entries);

var ejs = require('ejs');
var template = fs.readFileSync(path.resolve(dir, './blog_page.ejs'), 'utf8');

function blogPage(arr) {
	return ejs.render(template, {
		entries : arr
	});
}

// blogPage.test
console.log(blogPage(getEntries()));

// test http server.
var server = http.createServer(function(req, res) {
	if(req.url == '/') {
		var output = blogPage(entries);
		res.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		res.end(output);
	} else {
		res.statusCode = 404;
		res.end('Page not found');
	}
});
