# Set up a Nginx Load balancer for a dockerized Node.js Application

`app/Dockerfile`

```dockerfile
FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]
```

`app/.dockerignore`

```
node_modules
npm-debug.log
```

Docker Terminal,

Build Docker Image:

```
$ docker build -t loggar/node-nginx-app .

$ docker images
```

Run Container:

```
$ docker container run -p 5001:5000 --name helloworld -d loggar/node-nginx-app

$ docker container run -p 5002:5000 --name helloworld-customized -e "name=charly" -d loggar/node-nginx-app
```

```
$ docker container ls
```

`app-nginx/Dockerfile`

```dockerfile
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

`app-nginx/nginx.conf`

```conf
upstream loadbalance {
    least_conn;
    server 3.81.136.216:5001;
    server 3.81.136.216:5002;
}

server {
    location / {
        proxy_pass http://loadbalance;
    }
}
```

Docker Terminal,

```
docker build -t loggar/node-nginx-loadbalancer .

docker container run -p 5000:80 -d loggar/node-nginx-loadbalancer
```
