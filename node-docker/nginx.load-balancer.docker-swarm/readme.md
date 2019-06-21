# Load Balance and Scale Node.js Containers with Nginx and Docker Swarm

`app/`

```
docker build -t loggar/balancer_swarm_demo_nodeapp .
```

`app-nginx/`

```
docker build -t loggar/balancer_swarm_demo_nginx .
```

`/`

```
docker swarm init

docker stack deploy -c docker-compose.yml swarmnodeapp

docker service ls

docker service ps <service-name>

docker container ls
```

Now comes the point of scaling, you can scale your containers pretty easily with swarm all you need run is:

```
docker service scale servicename=replicas
```

for example

```
docker service scale swarmnodeapp_nodeapp=50
```

In order to have a better visualization of running contianers we can use the docker visualizer. Simply run:

```
docker container run -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock -d dockersamples/visualizer
```

And then visit your IP:8080 to have a proper view of the containers running in your swarm.
