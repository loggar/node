# Docker Image and Containers

Docker Build

```
docker build -t loggar/node-web-app-1 .

docker images
```

Docker Run Container

```
docker run -p 13010:3000 loggar/node-web-app-1
```

My machine:

```
$ docker-machine ip default
192.168.99.100

$ curl 192.168.99.100:13010
```

## Running Modes

Daemon mode `-d`:

```
$ docker run -d -p 13010:3000 loggar/node-web-app-1
e03f426cb4b4354625ef6447e14cbaa9d7c0480e2be67cce287c05cf7b7dd4c1
```

Run Command inside the container:

```
$ docker exec e03 cat package.json
{
  "name": "docker-volume",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Interactive mode `-it` with bash:

```
$ docker exec -it e03 bash
root@e03f426cb4b4:/node-web-app-1# ls
Dockerfile  app.js  docker-volume.md  node_modules  package-lock.json  package.json
root@e03f426cb4b4:/node-web-app-1#
```

## Cleaning up

Container:

```
$ docker stop e03f426cb4b4
$ docker rm e03f426cb4b4
```

Image:

```
$ docker rmi loggar/node-web-app-1
```
