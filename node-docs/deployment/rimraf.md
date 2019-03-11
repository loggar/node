```
{
  "name": "rimraf-ex",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "clean": "rimraf .dist",
    "build": "babel ./src --out-dir .dist",
    "prod": "NODE_ENV=production npm-run-all clean build server:prod",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "rimraf": "^2.6.3"
  }
}
```