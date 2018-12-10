# Visual Regression Testing With PhantomCSS CasperJS

## dependencies

```
$ npm install http-server --save-dev
$ npm install phantomcss casperjs phantomjs-prebuilt --save-dev
```

## test server starts

```
"scripts": {
	"start": "http-server src"
},
```

```
$ npm start
```

## run test

```
"scripts": {
	"start": "http-server src",
	"test": "casperjs test src/testcase.js"
}
```

```
$ npm test
```

## Accepting the Changes

```
"scripts": {
	"start": "http-server src",
	"test": "casperjs test src/testcase.js",
	"test-rebase": "casperjs test src/testcase.js --rebase"
}
```

```
$ npm run test-rebase
```

