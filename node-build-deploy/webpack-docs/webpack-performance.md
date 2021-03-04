# Enforcing performance budgets with webpack

`webpack.config.js`

```js
module.exports = {
  performance: {
    maxAssetSize: 50000,
    maxEntrypointSize: 50000,
    hints: "error",
  },
};
```

We can exclude certain assets from the budget

```js
module.exports = {
  performance: {
    maxAssetSize: 50000,
    maxEntrypointSize: 50000,
    hints: "error",
    assetFilter: function (assetFilename) {
      return !assetFilename.endsWith(".jpg");
    },
  },
};
```
