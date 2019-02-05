# Webpack Entry - String, Array, Object

If you have a single starting point (like most apps), you can use any format and the result will be the same.

String

``` js
{
	entry: './src/index.js',

	output: {
		path: '/dist',
		filename: 'bundle.js'
	}
}
```

Array

``` js
{
	entry: ['./src/index.js'],

	output: {
		path: '/dist',
		filename: 'bundle.js'
	}
}
```

Object

``` js
{
	entry: {
		index: './src/index.js'
	},

	output: {
		path: '/dist',
		filename: 'bundle.js'
	}
}
```

## entry - Array

If you want to append multiple files that are NOT dependent on each other, you can use the Array format.

``` js
{
	// creates a bundle out of index and then appends googleAnalytics to the end of the bundle.
	entry: ['./src/index.js', './src/googleAnalytics.js'],

	output: {
		path: '/dist',
		filename: 'bundle.js'
	}
}
```

## enrty - Object

You can tell Webpack to generate multiple bundles at once by using entry object.

``` js
{
	entry: {
		'index': './src/index.js',
		'profile': './src/profile.js'
	},

	output: {
		path: '/dist',
		filename: '[name]Bundle.js' // indexBundle.js, profileBundle.js
	}
}
```

## enrty - combination

You can also use the Array type entries inside an entry object.

``` js
{
	entry: {
		'index': './src/index.js',
		'profile': './src/profile.js',
		'vendor': ['jquery', 'analytics.js', 'optimizely.js']
	},

	output: {
		path: '/dist',
		filename: '[name]Bundle.js' // indexBundle.js, profileBundle.js and vendorBundle.js that contains three venor files.
	}
}
