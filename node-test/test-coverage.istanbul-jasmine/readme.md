# Istanbul - a JS code coverage tool written in JS

> https://github.com/gotwarlost/istanbul

install

```shell
$ npm install --save-dev istanbul
```

run istanbul

```shell
$ npx istanbul cover node_modules\jasmine\bin\jasmine.js
```

or with `package.json` script

```json
"scripts": {
    "test": "istanbul cover node_modules/jasmine/bin/jasmine.js"
}
```
