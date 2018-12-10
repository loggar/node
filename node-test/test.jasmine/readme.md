# jasmine

> https://jasmine.github.io/setup/nodejs.html
> https://jasmine.github.io/2.0/introduction

install

```shell
$ npm i -D jasmine
```

add `spec/jasmine.json` the jasmine configuration file

```json
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": true
}
```

or just init jasmine

```shell
$ node node_modules/jasmine/bin/jasmine init
```

at this point, just generate jasmine examples codes.

```shell
$ jasmine examples
```

run jasmine

```shell
$ jasmine
```
