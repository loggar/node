var path = require('path');
var fs = require("fs");
var jsonfile = require('jsonfile');

var filepath = path.join(__dirname, './sample-json/sample.json');

var read = function () {
	var contents = fs.readFileSync(filepath);
	var json = JSON.parse(contents);
	return json;
}

var write = function (json, new_value) {
	json.test = new_value;
	json.date = (new Date()).toString();

	jsonfile.writeFile(filepath, json, function (err) {
		if (err) console.error(err);
		return console.log(read());
	});
}

module.exports = {
	read, write
}

var a = read();
console.log(a);
write(a, 'no');
