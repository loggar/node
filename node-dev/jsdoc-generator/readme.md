# JSDoc

refs)

* http://usejsdoc.org/

Read more )

* [npm jsdoc3](https://www.npmjs.com/package/jsdoc)
* [configuration](http://usejsdoc.org/about-configuring-jsdoc.html)
* [jsdoc to markdown](https://github.com/jsdoc2md/jsdoc-to-markdown)

## Use JSDoc

configuration

```json
// jsdoc.conf.json

{
  "source": {
    "include": ["lib"],
    "exclude": []
  },
  "opts": {
    "destination": "docs/js",
    "recurse": true,
    "tutorials": "docs/js/tutorials"
  }
}
```

generate jsdoc

```json
// package.json
"scripts": {
  "jsdoc": "jsdoc -c jsdoc.conf.json"
}
```

```
npm run jsdoc
```