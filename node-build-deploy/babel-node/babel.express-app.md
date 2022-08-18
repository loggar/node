# Configure Babel for a Nodejs Application (express.js)

```
npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/polyfill
```

`.babelrc`

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/plugin-transform-runtime"]]
}
```

`package.json`

```json
{
  "scripts": {
    "start": "npm run build && node ./build/app.js",
    "start:dev": "nodemon --exec babel-node ./app.js",
    "clean": "rm -rf build && mkdir build",
    "build-babel": "babel -d ./build ./app.js -s",
    "build": "npm run clean && npm run build-babel"
  }
}
```
