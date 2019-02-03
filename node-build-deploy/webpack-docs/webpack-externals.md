# webpack externals

## webpack-node-externals

> Easily exclude node modules in Webpack

Webpack allows you to define externals - modules that should not be bundled.

When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies. This library creates an externals function that ignores node_modules when bundling in Webpack.
(Inspired by the great Backend apps with Webpack series)

```shell
npm install webpack-node-externals --save-dev
```

```js
// webpack.config.js
var nodeExternals = require('webpack-node-externals');
...
module.exports = {
    ...
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    ...
};
```

Use example
```js
// webpack.config.js
var nodeExternals = require('webpack-node-externals');
...
module.exports = {
    ...
    target: 'node', // important in order not to bundle built-in modules like path, fs, etc.
    externals: [nodeExternals({
        // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
        whitelist: ['jquery', 'webpack/hot/dev-server', /^lodash/]
    })],
    ...
};
```

## Critical dependency: the request of a dependency is an expression @

```
./node_modules/colors/lib/colors.js
  127:29  warning  Critical dependency: the request of a dependency is an expression  @
                   ./node_modules/colors/lib/colors.js  @ ./node_modules/colors/safe.js  @
                   ./node_modules/winston/lib/winston/config.js  @
                   ./node_modules/winston/lib/winston.js  @ ./lib/logger.winston.js  @
                   ./bin/www.js  @ multi ./bin/www

./node_modules/express/lib/view.js
  81:13  warning  Critical dependency: the request of a dependency is an expression  @
                  ./node_modules/express/lib/view.js  @
                  ./node_modules/express/lib/application.js  @
                  ./node_modules/express/lib/express.js  @
                  ./node_modules/express/index.js  @
                  ./src-server/app-class-enroll-status.js  @ ./bin/www.js  @ multi
                  ./bin/www
```


solve : exclude node modules from bundling

```js
// webpack.config.server.prod.js

const nodeExternals = require('webpack-node-externals')

module.exports = {

	externals: [
		nodeExternals({ modulesDir: "./node_modules" })
	],
}
```
