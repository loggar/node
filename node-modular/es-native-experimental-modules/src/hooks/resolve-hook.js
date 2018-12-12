// The resolve hook returns the resolved file URL and module format for a given module specifier and parent file URL:

const baseURL = new URL('file://');
baseURL.pathname = `${process.cwd()}/`;

export async function resolve(specifier,
	parentModuleURL = baseURL,
	defaultResolver) {
	return {
		url: new URL(specifier, parentModuleURL).href,
		format: 'esm'
	};
}

/*
The parentModuleURL is provided as undefined when performing main Node.js load itself.

The default Node.js ES module resolution function is provided as a third argument to the resolver for easy compatibility workflows.

In addition to returning the resolved file URL value, the resolve hook also returns a format property specifying the module format of the resolved module. This can be one of the following:

format	Description
'esm'	Load a standard JavaScript module
'cjs'	Load a node-style CommonJS module
'builtin'	Load a node builtin CommonJS module
'json'	Load a JSON file
'addon'	Load a C++ Addon
'dynamic'	Use a dynamic instantiate hook

*/