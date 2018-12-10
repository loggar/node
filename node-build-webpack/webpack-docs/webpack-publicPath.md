# Webpack path, publicPath

output tells the Webpack where and how to store the resulting files. It has two properties “path” and “publicPath” that could be confusing.

“path” simply tells the Webpack where it should store the result. Where as “publicPath” is used by several Webpack’s plugins to update the URLs inside CSS, HTML files when generating production builds.

``` js
// development

output: {
	// path: A place where you store bundle.js and index.html
	path: __dirname + '/public',

	// Do not use publicPath in dev unless static resources like images are not stored locally during development
	// publicPath: 'http://mycdn.com/',
	filename: 'bundle.js'
}
```

``` js
// production

output: {
	// path: A place where you store bundle.js and index.html
	path: __dirname + '/public',

	// publicPath: Used by plugins(url-loader, file-loader, HtmlWebpackPlugin etc)
	// to generate url paths for images, stylesheets etc
	publicPath: 'http://mycdn.com/',
	filename: 'bundle.js'
}
```