var program = require('commander');
var colors = require('colors');

program
	.version('0.1.0')
	.command('getstream [url]', 'get stream URL')
	.parse(process.argv);

if (!process.argv.slice(2).length) {
	program.outputHelp(make_red);
}

function make_red(txt) {
	return colors.red(txt); //display the help text in red on the console
}