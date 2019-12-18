# Node.js Mongoose with in-memory database mongodb-memory-server

```
npm install --save mongoose
npm install --save-dev jest mongodb-memory-server
```

## Configure Jest

`package.json`

```json
"scripts": {
  "test": "jest --runInBand ./test"
}
```

```json
"jest": {
  "testEnvironment": "node"
}
```


