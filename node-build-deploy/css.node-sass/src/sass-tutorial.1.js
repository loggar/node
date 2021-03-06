var sass = require('node-sass');

sass.render({
	file: '/src/file.1.scss',
	data: 'body{background:blue; a{color:black;}}',
	importer: function (url, prev, done) {
		// url is the path in import as is, which LibSass encountered.
		// prev is the previously resolved path.
		// done is an optional callback, either consume it or return value synchronously.
		// this.options contains this options hash, this.callback contains the node-style callback
		someAsyncFunction(url, prev, function (result) {
			done({
				file: result.path, // only one of them is required, see section Special Behaviours.
				contents: result.data
			});
		});
		// OR
		/*
		var result = someSyncFunction(url, prev);
		return { file: result.path, contents: result.data };
		*/
	},
	includePaths: ['lib/', 'mod/'],
	outputStyle: 'compressed'
}, function (error, result) { // node-style callback from v3.0.0 onwards
	if (error) {
		console.log(error.status); // used to be "code" in v2x and below
		console.log(error.column);
		console.log(error.message);
		console.log(error.line);
	}
	else {
		console.log(result.css.toString());
		console.log(result.stats);
		console.log(result.map.toString());
		// or better
		console.log(JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
	}
});

console.log(result.css);
console.log(result.map);
console.log(result.stats);