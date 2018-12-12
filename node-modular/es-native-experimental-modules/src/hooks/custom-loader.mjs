/*
For example, a dummy loader to load JavaScript restricted to browser resolution rules with only JS file extension and Node.js builtin modules support could be written:
*/

import path from 'path';
import process from 'process';
import Module from 'module';

const builtins = Module.builtinModules;
const JS_EXTENSIONS = new Set(['.js', '.mjs']);

const baseURL = new URL('file://');
baseURL.pathname = `${process.cwd()}/`;

export function resolve(specifier, parentModuleURL = baseURL, defaultResolve) {
	if (builtins.includes(specifier)) {
		return {
			url: specifier,
			format: 'builtin'
		};
	}
	if (/^\.{0,2}[/]/.test(specifier) !== true && !specifier.startsWith('file:')) {
		// For node_modules support:
		// return defaultResolve(specifier, parentModuleURL);
		throw new Error(
			`imports must begin with '/', './', or '../'; '${specifier}' does not`);
	}
	const resolved = new URL(specifier, parentModuleURL);
	const ext = path.extname(resolved.pathname);
	if (!JS_EXTENSIONS.has(ext)) {
		throw new Error(
			`Cannot load file with non-JavaScript file extension ${ext}.`);
	}
	return {
		url: resolved.href,
		format: 'esm'
	};
}

/*
With this loader, running:

NODE_OPTIONS='--experimental-modules --loader ./custom-loader.mjs' node x.js

would load the module x.js as an ES module with relative resolution support (with node_modules loading skipped in this example).
*/
