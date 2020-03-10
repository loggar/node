# Dockerizing a node-express app

## Node Express App

```
// package.json

{
	"name": "node_web_app",
	"version": "1.0.0",
	"description": "Node.js on Docker",
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"dependencies": {
		"express": "^4.16.3"
	}
}

```

```
$ npm install
```

```
// src/server.js

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
```

## Dockerfile

```
// Dockerfile

FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
```

```
// .dockerignore

node_modules
npm-debug.log
```

# Building the image

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

```
$ docker build -t loggar/node-web-app .
Sending build context to Docker daemon  20.99kB
Step 1/7 : FROM node:8
8: Pulling from library/node
3d77ce4481b1: Pull complete
7d2f32934963: Pull complete
0c5cf711b890: Pull complete
9593dc852d6b: Pull complete
4e3b8a1eb914: Pull complete
b568512f3229: Pull complete
3bad5aa27156: Pull complete
da8c9a1d9ae4: Pull complete
Digest: sha256:27797f5281a231f95119ef29bf4e5fc20b7d41f1d5f38e4be9e1350f3cdcd1c5
Status: Downloaded newer image for node:8
 ---> 6f1597cf5206
Step 2/7 : WORKDIR /usr/src/app
 ---> 8f73e678b301
Step 3/7 : COPY package*.json ./
 ---> 9f23716d933e
Step 4/7 : RUN npm install
 ---> Running in 380f24a0e54e
npmadded 50 packages in 1.981s
 WARN docker_web_app@1.0.0 No repository field.
npm WARN docker_web_app@1.0.0 No license field.

 ---> 594ce1f30b6e
Step 5/7 : COPY . .
 ---> 26703008b700
Step 6/7 : EXPOSE 8080
 ---> Running in 29f1eaca90b2
 ---> 109f1107c10c
Step 7/7 : CMD [ "npm", "start" ]
 ---> Running in fe4b788ef8a5
 ---> 246a9c4e8d02
Removing intermediate container 380f24a0e54e
Removing intermediate container 29f1eaca90b2
Removing intermediate container fe4b788ef8a5
Removing intermediate container c87ea2ef2001
Successfully built 246a9c4e8d02
Successfully tagged loggar/node-web-app:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.
```

```
$ docker images
REPOSITORY            TAG                 IMAGE ID            CREATED              SIZE
loggar/node-web-app   latest              246a9c4e8d02        About a minute ago   675MB
```

## Run the image

```
$ docker run -p 49160:8080 -d loggar/node-web-app
d338199642b669971588c580ef495c94d3a2e43ecf514013432e3ecfa73793b1

```

```
$ docker ps
CONTAINER ID        IMAGE                 COMMAND             CREATED             STATUS              PORTS                     NAMES
d338199642b6        loggar/node-web-app   "npm start"         8 seconds ago       Up 7 seconds        0.0.0.0:49160->8080/tcp   quizzical_meninsky
```

```
$ docker logs d338199642b6

> docker_web_app@1.0.0 start /usr/src/app
> node ./src/server.js

Running on http://0.0.0.0:8080
```

If you need to go inside the container you can use the exec command:

```
$ docker exec -it d338199642b6 /bin/bash
```

## Test

```
$ curl -i localhost:49160
curl: (7) Failed to connect to localhost port 49160: Connection refused

$ docker-machine ip default
99.99.99.100

$ curl -i 99.99.99.100:49160
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Thu, 21 Jun 2018 07:53:41 GMT
Connection: keep-alive

Hello world
```HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Thu, 21 Jun 2018 07:53:41 GMT
Connection: keep-alive

Hello world
```
