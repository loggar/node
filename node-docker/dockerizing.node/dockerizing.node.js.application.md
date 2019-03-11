# Dockerizing Your Node.js Application

## simple

```DockerFile
FROM node:8

WORKDIR /home/nodejs/app

COPY . .
RUN npm install --production

CMD ["node", "index.js"]
```

## DON’T RUN THE APPLICATION AS ROOT

```DockerFile
FROM node:8

RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs

USER nodejs

...
```

In the above example, a few lines of code have been added to the original Dockerfile example to pull down the image of the latest LTS version of Node.js, as well as add and set a new user, nodejs. This way, in the event that a vulnerability in the application is exploited, and someone manages to get into the container at the system level, at best they are user nodejs which does not have root permissions, and does not exist on the host.

## CACHE NODE_MODULES

Docker builds each line of a Dockerfile individually. This forms the 'layers' of the Docker image. As an image is built, Docker caches each layer.

```DockerFile
...
WORKDIR /home/nodejs/app

COPY package.json .
RUN npm install --production
COPY . .

CMD ["node.js", "index.js"]
...
```

On line 10 of the above Dockerfile, the package.json file is being copied to the working directory established on line 8. After the `npm install` on line 12, line 13 copies the entire current directory into the working directory (the image).

If no changes are made to your package.json, Docker won’t rebuild the `npm install` image layer, which can dramatically improve build times.

## SETUP YOUR ENVIRONMENT

```DockerFile
...
COPY . .

ENV  NODE_ENV production

CMD ["node.js", "index.js"]
```

With aims of comprehensive image and container services, DockerHub "provides a centralized resource for container image discovery, distribution and change management, user and team collaboration, and workflow automation throughout the development pipeline."

To link the Docker CLI to your DockerHub account, use `docker login`: `docker login [OPTIONS] [SERVER]`

## PRIVATE GITHUB ACCOUNTS AND NPM MODULES

Docker runs its builds inside of a sandbox, and this sandbox environment doesn’t have access to information like `ssh` keys or npm credentials. To bypass this constraint, there are a couple recommended options available to developers:

- **Store keys and credentials on the CI/CD system**. The security concerns of having sensitive credentials inside of the Docker build can be avoided entirely by never putting them in there in the first place. Instead, store them on and retrieve them from your infrastructure’s CI/CD system, and manually copy private dependencies into the image.

- **Use an internal npm server**. Using a tool like Verdaccio, setup an npm proxy that keeps the flow of internal modules and credentials private.

## BE EXPLICIT WITH TAGS

Tags help differentiate between different versions of images. Tags can be used to identify builds, teams that are working on the image, and literally any other designation that is useful to an organization for managing development of and around images. If no tag is explicitly added, Docker will assign a default tag of `latest` after running `docker build`. As a tag, `latest` is okay in development, but can be very problematic in staging and production environments.

To avoid the problems around `latest`, **be explicit with your build tags**. Here is an example script assigning tags with environment variables for the build’s git sha, branch name, and build number, all three of which can be very useful in versioning, debugging, and deployment management:

```sh
# !/bin/sh
docker tag helloworld:latest yourorg/helloworld:$SHA1
docker tag helloworld:latest yourorg/helloworld:$BRANCH_NAME
docker tag helloworld:latest yourorg/build_$BUILD_NUM
```

### Tag the image

The notation for associating a local image with a repository on a registry is `username/repository:tag`. The tag is optional, but recommended, since it is the mechanism that registries use to give Docker images a version. Give the repository and tag meaningful names for the context, such as `get-started:part2`. This puts the image in the `get-started` repository and tag it as `part2`.

Now, put it all together to tag the image. Run `docker tag image` with your username, repository, and tag names so that the image uploads to your desired destination. The syntax of the command is:

```
docker tag image username/repository:tag
```

For example:

```
docker tag friendlyhello gordon/get-started:part2

docker image ls
```

## Containers and Process Management

Containers are designed to be lightweight and map well at the process level, which helps keep process management simple: if the process exits, the container exits. However, this 1:1 mapping is an idealization that is not always maintained in practice.

As Docker containers do not come with a process manager included, add a tool for simple process management.

dumb-init from Yelp is a simple, lightweight process supervisor and init system designed to run as `PID 1` inside container environments. This `PID 1` designation to the dumb-init process is normally assigned to a running Linux container, and has its own kernel-signaling idiosyncrasies that complicate process management. dumb-init provides a level of abstraction that allows it to act as a signal proxy, ensuring expected process behavior.

## What to Include in Your Application Containers

A principal advantage of containers is that they provide only what is needed. Keep this in mind when adding layers to your images.

Here is a checklist for what to include when building container images:

- Your application code and its dependencies.
- Necessary environment variables.
- A simple signal proxy for process management, like dumb-init.
