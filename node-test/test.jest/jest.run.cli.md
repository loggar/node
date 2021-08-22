# run jest test (cli)

create `jest.config.js`

```js
module.exports = {
  testEnvironment: "node",
};
```

test with jest

```
$ jest -i
```

`-i`, `runInBand`: Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. This can be useful for debugging.
