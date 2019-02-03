## webpack 4 : the webpack dev server

Running npm `run dev` whenever you make changes to your code? Far from ideal.

It takes just a minute to configure a development server with webpack.

Once configured `webpack dev server` will launch your application inside a browser.

It will automagically refresh the browser’s window as well, every time you change a file.

```
npm i --save-dev webpack-dev-server
```

`package.json`
```json
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
```

```
npm run start
```

you’ll see webpack dev server launching your application inside the browser.

webpack dev server is great for development. (And it makes React Dev Tools work properly in your browser).