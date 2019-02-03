# webpack plugins

## NoEmitOnErrorsPlugin

Use the NoEmitOnErrorsPlugin to skip the emitting phase whenever there are errors while compiling. This ensures that no assets are emitted that include errors. The emitted flag in the stats is false for all assets.

``` javascript
new webpack.NoEmitOnErrorsPlugin()
```

## StartServerPlugin

``` javascript
import StartServerPlugin from "start-server-webpack-plugin";

export default {
  // This script will be ran after building
  entry: {
    // server: ...
  },
  // ...
  plugins: [
    // ...
    // Only use this in DEVELOPMENT
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect'], // allow debugging
      args: ['scriptArgument1', 'scriptArgument2'], // pass args to script
      signal: false | true | 'SIGUSR2', // signal to send for HMR (defaults to `false`, uses 'SIGUSR2' if `true`)
      keyboard: true | false, // Allow typing 'rs' to restart the server. default: only if NODE_ENV is 'development'
    }),
    // ...
  ],
  // ...
}
```

## HotModuleReplacementPlugin

Enables Hot Module Replacement, otherwise known as HMR.

``` javascript
new webpack.HotModuleReplacementPlugin({
  // Options...
})
```

options

* multiStep (boolean): If true, the plugin will build in two steps -- first compiling the hot update chunks, and then the remaining normal assets.
* fullBuildTimeout (number): The delay between the two steps when multiStep is enabled.
* requestTimeout (number): The timeout used for manifest download (since webpack 3.0.0)

## NamedModulesPlugin

This plugin will cause the relative path of the module to be displayed when HMR is enabled. Suggested for use in development.

``` javascript
new webpack.NamedModulesPlugin()
```

## DefinePlugin

The DefinePlugin allows you to create global constants which can be configured at compile time. This can be useful for allowing different behavior between development builds and release builds. If you perform logging in your development build but not in the release build you might use a global constant to determine whether logging takes place. That's where DefinePlugin shines, set it and forget it rules for development and release builds.

``` javascript
new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  VERSION: JSON.stringify("5fa3b9"),
  BROWSER_SUPPORTS_HTML5: true,
  TWO: "1+1",
  "typeof window": JSON.stringify("object")
})
```

``` javascript
console.log("Running App version " + VERSION);
if(!BROWSER_SUPPORTS_HTML5) require("html5shiv");
```

> Note that because the plugin does a direct text replacement, the value given to it must include actual quotes inside of the string itself. Typically, this is done either with either alternate quotes, such as '"production"', or by using JSON.stringify('production').


### how it works

``` javascript
if (!PRODUCTION) {
  console.log('Debug info')
}

if (PRODUCTION) {
  console.log('Production log')
}
```

After passing through webpack with no minification results in:

``` javascript
if (!true) {
  console.log('Debug info')
}
if (true) {
  console.log('Production log')
}
```

and then after a minification pass results in:

``` javascript
console.log('Production log')
```

### Feature Flags

Enable/disable features in production/development build using feature flags

``` javascript
new webpack.DefinePlugin({
  'NICE_FEATURE': JSON.stringify(true),
  'EXPERIMENTAL_FEATURE': JSON.stringify(false)
})
```

When defining values for process prefer 'process.env.NODE_ENV': JSON.stringify('production') over process: { env: { NODE_ENV: JSON.stringify('production') } }. Using the latter will overwrite the process object which can break compatibility with some modules that expect other values on the process object to be defined.

### Service URLs

Use a different service URL in production/development builds:

``` javascript
new webpack.DefinePlugin({
  'SERVICE_URL': JSON.stringify("http://dev.example.com")
})
```

## extract-text-webpack-plugin

extract-text-webpack-plugin internally uses css-loader and style-loader to gather all the CSS into one place and finally extracts the result into a separate external styles.css file and includes the link to style.css into index.html

``` js
//webpack.config.js
//Take all the .css files, combine their contents and it extract them to a single "styles.css"
var ETP = require("extract-text-webpack-plugin");

module: {
	loaders: [
		{ test: /\.css$/, loader: ETP.extract("style-loader", "css-loader") }
	]
},
plugins: [
	new ExtractTextPlugin("styles.css") //Extract to styles.css file
]
```
