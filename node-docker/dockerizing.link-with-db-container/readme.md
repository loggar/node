# Link with db container

Run a database container (Postgres)

```
docker run -d --rm -p 5432:5432 -e POSTGRES_USER=admin -v $(pwd)/.data:/var/lib/postgresql/data -v $(pwd)/sql:/sql --name nd-db postgres:9.6
```

* `-d` - Adding this flag causes the container to run in detached mode, meaning that your terminal isn't attached to the container's process. This will allow us to run another container without opening a new terminal window.
* `-e POSTGRES_USER=admin` - This passes in an environmental variable that tells Postgres to create a user and database called admin. If we were running this app in a hosted environment, we would definitely want to add a password using the POSTGRES_PASSWORD environmental variable, but we'll skip that for this tutorial.
* `--name nd-db` - Naming your containers is optional, but it will make linking to them easier. If you don't name your container, Docker will make up a name, but it will be different each time you run the image.
* `postgres:9.6` - One of the advantages to Docker is the ability to switch to different database versions effortlessly. If you wanted to use another version of Postgres, you would simply edit the container name to one of the other available versions.

Run Scripts

```
docker exec nd-db psql admin admin -f /sql/migrations.sql

docker exec nd-db psql admin admin -f /sql/seeds.sql
```

Run wep-app container

```
docker build -t node-docker .

docker run --rm -p 3000:3000 -d -v $(pwd)/app:/src/app -v $(pwd)/public:/src/public --link nd-db --name nd-app node-docker
```

*` docker run` - This is the Docker command that runs a container from an image. There are dozens of options you can set when using the docker run command, but we've used a bare minimum set to get started.
* `--rm` - By default, Docker runs a container's command and then shuts the container down, but instead of deleting it, Docker keeps that container around in case it's needed later. Because we don't want to re-run this container, we've set the --rm flag. This saves space and is generally a good practice for one-off scripts like this.
* `-v $(pwd):/app` - Each container has its own isolated filesystem, so it typically won't be able to access files on your computer (called the "host" machine). In order to get the hello.js file into the container, we use a bind mount. This "binds" files in the host machine's directory to the /app directory within our Docker container's filesystem.
* `-w /app` - Docker images usually define a "working directory", but we've overridden this value. This sets the base path for any commands run in this container to /app.
* `node:9` - At this point in the command, we've set all the options for the container, and this piece tells Docker what image to use. Docker Hub is the official image host for most open source images. In this case, we're using the Node v9 image. If we wanted to use a different version of Node to run this script, it would be as easy as changing this part of the command to node:4 or node:6.
* `node hello.js` - Finally, this is the actual command run in the container. Containers should run only one command, but in some cases that command may be a long-running one (for example, running a Node server) as we'll see in the next example.

List containers

```
docker ps
```

Visit `localhost:3000/`
