# Webpack Loaders

Loaders are additional node modules that help ‘load’ or ‘import’ files of various types into browser acceptable formats like JS, Stylesheets and so on. Further loaders also allow importing such files into JS via “require” or “import” in ES6.

For example: You can use babel-loader to convert JS written in ES6 to browser acceptable ES5 like so:

``` js
module: {
	loaders: [{
		test: /\.js$/, // Test for ".js" file, if it passes, use the loader
		exclude: / node_modules /,  // Exclude node_modules folder
		loader: 'babel' // Use babel(short for 'babel - loader')
	}],
	// ...
}
```

## Chaining Loaders ( works right to left)

Multiple Loaders can be chained and made to work on the same file type. The chaining works from right-to-left and the loader are separated by “!”.

For example, Let’s say we have a CSS file `myCssFile.css` and we want to dump it’s content into `<style>CSS content</style>` tag inside our HTML. We can accomplish that using two loaders: `css-loader` and `style-loader`.

``` js
module: {
	loaders: [{
		test: /\.css$/,
		loader: 'style!css' // short for style-loader!css-loader)
	}]
	// ...
}
```

1. Webpack searches for CSS files dependencies inside the modules. That is Webpack checks to see if a JS file has `require(myCssFile.css)`. If it finds the dependency, then the Webpack gives that file first to the `css-loader`
2. `css-loader` loads all the CSS and CSS’ own dependencies (i.e `@import otherCSS`) into JSON. Webpack then passes the result to `style-loader`.
3. `style-loader` to take the JSON and add it to a style tag — `<style>CSS contents</style>` and inserts the tag into the `index.html` file.

## Loader with options

``` js
{
	test: /\.png$/,
	loader: 'url-loader?limit=1024'
}
```

or

``` js
{
	test: /\.png$/,
	loader: 'url-loader',
	query: {
		limit: 1024
	}
}
```

Another Example: babel-loader without `.babelrc `

```
module: {
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}
	]
}
```

## Loaders vs plugins

As you might have realized, Loaders work at the individual file level during or before the bundle is generated.

Where as Plugins work at bundle or chunk level and usually work at the end of the bundle generation process.

