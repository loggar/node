var sass = require('node-sass');

var result = sass.renderSync({
	file: '/src/file.2.scss',
	data: 'body{background:blue; a{color:black;}}',
	outputStyle: 'compressed',
	outFile: '/to/my/output.css',
	sourceMap: true, // or an absolute or relative (to outFile) path
	importer: function (url, prev, done) {
		// url is the path in import as is, which LibSass encountered.
		// prev is the previously resolved path.
		// done is an optional callback, either consume it or return value synchronously.
		// this.options contains this options hash
		someAsyncFunction(url, prev, function (result) {
			done({
				file: result.path, // only one of them is required, see section Special Behaviours.
				contents: result.data
			});
		});
		// OR
		var result = someSyncFunction(url, prev);
		return { file: result.path, contents: result.data };
	}
});

console.log(result.css);
console.log(result.map);
console.log(result.stats);