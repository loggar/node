#!/usr/bin/env node

var program = require('commander');

program
	.command('rm <dir>')
	.option('-r, --recursive', 'Remove recursively')
	.action(function (dir, cmd) {
		console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
	})

program.parse(process.argv)