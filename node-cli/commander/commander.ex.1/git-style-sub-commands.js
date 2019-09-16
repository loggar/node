// file: ./examples/pm
var program = require('commander');

program
	.version('0.1.0')
	.command('install [name]', 'install one or more packages')
	.command('search [query]', 'search with optional query')
	.command('list', 'list packages installed', { isDefault: true })
	.parse(process.argv);