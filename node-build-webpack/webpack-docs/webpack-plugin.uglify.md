# Delete all the Consoles

## webpack

uglifyjs-webpack-plugin `https://github.com/webpack-contrib/uglifyjs-webpack-plugin`

``` js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var dev = process.env.NODE_ENV !== "production";

// ...

optimization: {
        minimizer: dev ? [
            new UglifyJsPlugin({
                // Compression specific options
                uglifyOptions: {
                    // Eliminate comments
                    comments: false,
                    compress: {
                       // remove warnings
                       warnings: false,
                       // Drop console statements
                       drop_console: true
                    },
                }
           })] : []
}
```
