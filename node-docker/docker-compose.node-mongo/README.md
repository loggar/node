# Containerizing a Node.js Application for Development With Docker Compose

## Testing the Application

First, build the container images and create the services by running `docker-compose up` with the `-d` flag, which will then run the nodejs and db containers in the background:

```
docker-compose up -d
```

You can also get more detailed information about the startup processes by displaying the log output from the services:

```
docker-compose logs
```

You can also check the status of your containers

```
docker-compose ps
```

Stop and remove your containers and network:

```
docker-compose down
```
