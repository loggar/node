## webpack 4: extracting CSS to a file

webpack doesn’t know to extract CSS to a file.

In the past it was a job for extract-text-webpack-plugin.

Unfortunately said plugin does not play well with webpack 4.

`mini-css-extract-plugin` is here to overcome those issues.

> NOTE: Make sure to update webpack to version 4.2.0. Otherwise mini-css-extract-plugin won’t work!

```
npm i --save-dev mini-css-extract-plugin css-loader
```

```css
/* src/main.css
*/

body {
    line-height: 2;
}
```

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
```

```js
// src/index.js

import style from "./main.css";
```

```
npm run build
```

and take a look in the `./dist` folder. You should see the resulting CSS!