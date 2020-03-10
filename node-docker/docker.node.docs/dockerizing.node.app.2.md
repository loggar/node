# Dockerizing Your Node.js Application

`DockerFile`

```DockerFile
 FROM node:10-alpine

 RUN mkdir -p /home/node/app/node_modules && chown -R node:node
 /home/node/app

 WORKDIR /home/node/app

 COPY package*.json ./

 USER node

 RUN npm install

 COPY --chown=node:node . .

 EXPOSE 8080

 CMD [ "node", "app.js" ]
```

`.dockerignore`

```DockerFile
node_modules
npm-debug.log
Dockerfile
.dockerignore
```

Docker build:

```
docker build -t your_dockerhub_username/nodejs-image-demo .
```

List your docker images:

```
docker images
```

Run your container:

```
docker run --name nodejs-image-demo -p 80:8080 -d your_dockerhub_username/nodejs-image-demo
```

List your running docker containers:

```
docker ps
```
