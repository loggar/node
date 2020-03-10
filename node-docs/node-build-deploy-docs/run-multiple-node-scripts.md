# Run Multiple Node.js or NPM Commands Simultaneously

## Bash chained Commands

```json
"scripts": {
    "start": "react-scripts start",
    "dev": "(cd server && npm run start) && npm run start"
  }
```

## npm `concurrently`

```
$ npm install concurrently
```

```json
"scripts": {
    "start": "react-scripts start",
    "dev": "concurrently \"cd server && npm run start\" \"npm run start\""
  }
```

## npm-run-all

```
$ npm install npm-run-all
```

```json
"scripts": {
  "all": "npm-run-all build -p lint test -s pub",
  "build": "webpack",
  "lint": "eslint",
  "test": "mocha",
  "pub": "npm publish"
}
```

## docker-compose

```dockerfile
FROM node:9
WORKDIR /app
CMD ls -ltr && npm install && npm start
```
