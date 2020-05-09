# lite-server

## install

```
$ npm install lite-server --save-dev
$ yarn add lite-server --dev # or yarn
```

## run

`package.json`

```json
  "scripts": {
    "dev": "lite-server"
  },
```

```
$ npm run dev
```

## cli

- global

```
$ lite-server
```

- custom configuration file

```
$ lite-server -c ./bs-config.js
```

- bs-config.json

```
{
  "port": 4340,
  "files": ["./src/**/*.{html,htm,css,js}"],
  "server": { "baseDir": "./src" }
}
```
