# Docker best practices with Node.js

## Setting up the base stage

```dockerfile
FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]
```

`.dockerignore`

```
.git
node_modules
```

## Docker Compose — and don’t forget the build target

`docker-compose.yml`

```yml
version: "3.8"
services:
  web:
    build:
      context: ./
      target: dev
    volumes:
      - .:/src
    command: npm run start:dev
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: development
      DEBUG: nodejs-docker-express:*
```

## Test the app with Docker and Docker Compose

```
$ COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```

```
$ docker-compose up
```

```
$ curl http://localhost:3000
```
