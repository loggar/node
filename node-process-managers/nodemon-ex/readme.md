# nodemon

Init

``` sh
npm init -y

npm install --save express

node ./src/app.js
```

Run with `nodemon`

``` sh
npm install --save-dev nodemon

./node_modules/nodemon/bin/nodemon.js /src/app.js
# or
npx nodemon ./src/app.js
```

Run `nodemon` with config file

``` sh
npx nodemon ./src/app.js --config nodemon.json
```

Run with npm script

``` json
"scripts": {
   "start": "node ./src/app.js",
   "dev": "echo 'run dev' & npm start",
   "test": "echo \"Error: no test specified\" && exit 1",
   "nodemon": "./node_modules/nodemon/bin/nodemon.js --config nodemon.json --exec npm run dev "
}
```

``` sh
npm run nodemon
```