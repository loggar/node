# Docker best practices with Node.js

## Use multi-stage builds for leaner and more secure Docker images

```dockerfile
FROM node:14.4.0 AS build

COPY . .
RUN npm install && npm run build

FROM node:slim-14.4.0

USER node
EXPOSE 8080

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./
RUN npm install --production

CMD [ "node", "dist/app.js" ]
```

## Bootstrap using 'node' command, avoid `npm start`

Use CMD ['node','server.js'] to start your app, avoid using npm scripts which don't pass OS signals to the code. This prevents problems with child-process, signal handling, graceful shutdown and having processes.

```dockerfile
FROM node:12-slim AS build


WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

CMD ["node", "server.js"]
```

## Let the Docker runtime handle replication and uptime

When using a Docker run time orchestrator (e.g., Kubernetes), invoke the Node.js process directly without intermediate process managers or custom code that replicate the process (e.g. PM2, Cluster module). The runtime platform has the highest amount of data and visibility for making placement decision - It knows best how many processes are needed, how to spread them and what to do in case of crashes

```dockerfile
FROM node:12-slim

# The build logic comes here

CMD ["node", "index.js"]
```

## Use `.dockerignore` to prevent leaking secrets

Include a `.dockerignore` file that filters out common secret files and development artifacts. By doing so, you might prevent secrets from leaking into the image. As a bonus the build time will significantly decrease. Also, ensure not to copy all files recursively rather explicitly choose what should be copied to Docker

```dockerfile
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

## Clean-up dependencies before production

```dockerfile
FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# The rest comes here
```

## Shutdown smartly and gracefully

Handle the process SIGTERM event and clean-up all existing connection and resources. This should be done while responding to ongoing requests. In Dockerized runtimes shutting down containers is not a rare event, rather a frequent occurrence that happen as part of routine work. Achieving this demands some thoughtful code to orchestrate several moving parts: The load balancer, keep-alive connections, the HTTP server and other resources

Placing Node.js as the root process allows passing signals to the code:

```dockerfile

FROM node:12-slim

# Build logic comes here

CMD ["node", "index.js"]
#This line above will make Node.js the root process (PID1)
```

Using Tiny process manager to forward signals to Node:

```dockerfile
FROM node:12-slim

# Build logic comes here

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["node", "index.js"]
#Now Node will run a sub-process of TINI which acts as PID1
```

## Set memory limits using both Docker and v8

Memory limit with Docker:

```
docker run --memory 512m my-node-app
```

Memory limit with Kubernetes and v8:

```
apiVersion: v1
kind: Pod
metadata:
  name: my-node-app
spec:
  containers:
  - name: my-node-app
    image: my-node-app
    resources:
      requests:
        memory: "400Mi"
      limits:
        memory: "500Mi"
    command: ["node index.js --max-old-space-size=450"]
```

## Plan for efficient caching

Rebuilding a whole docker image from cache can be nearly instantaneous if done correctly. The less updated instructions should be at the top of your Dockerfile and the ones constantly changing (like app code) should be at the bottom.

Dependencies install first, then code:

```dockerfile
COPY "package.json" "package-lock.json" "./"
RUN npm ci
COPY ./app ./app"
```

**Anti-pattern** – Dynamic labels

```dockerfile
#Beginning of the file
FROM node:10.22.0-alpine3.11 as builder

# Don't do that here!
LABEL build_number="483"

#... Rest of the Dockerfile
```

Install "system" packages first:

```dockerfile
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

COPY "package.json" "package-lock.json" "./"
RUN npm ci --production
COPY . "./"

FROM node as app
USER node
WORKDIR /app
COPY --from=builder /app/ "./"
RUN npm prune --production

CMD ["node", "dist/server.js"]
```

## Use explicit image reference, avoid `latest` tag

```
$ docker build -t company/image_name:0.1 .
$ docker build -t company/image_name:0.2 .
$ docker pull ubuntu@sha256:45b23dee
```

## Clean-out build-time secrets, avoid secrets in args

Avoid secrets leaking from the Docker build environment. A Docker image is typically shared in multiple environment like CI and a registry that are not as sanitized as production. A typical example is an npm token which is usually passed to a Dockerfile as argument. This token stays within the image long after it is needed and allows the attacker indefinite access to a private npm registry. This can be avoided by coping a secret file like `.npmrc` and then removing it using multi-stage build (beware, build history should be deleted as well) or by using Docker build-kit secret feature which leaves zero traces.

Using Docker mounted secrets (experimental but stable):

```dockerfile
# syntax = docker/dockerfile:1.0-experimental

FROM node:12-slim
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# The rest comes here
```

Building securely using multi-stage build:

```dockerfile
FROM node:12-slim AS build
ARG NPM_TOKEN
WORKDIR /usr/src/app
COPY . /dist
RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

FROM build as prod
COPY --from=build /dist /dist
CMD ["node","index.js"]

# The ARG and .npmrc won't appear in the final image but can be found in the Docker daemon un-tagged images list - make sure to delete those
```

## Scan images for multi-layers of vulnerabilities

Besides checking code dependencies vulnerabilities also scan the final image that is shipped to production. Docker image scanners check the code dependencies but also the OS binaries. This E2E security scan covers more ground and verifies that no bad guy injected bad things during the build. Consequently, it is recommended to run this as the last step before deployment. There are a handful of free and commercial scanners that also provide CI/CD plugins

Scanning with Trivvy:

```
sudo apt-get install rpm
$ wget https://github.com/aquasecurity/trivy/releases/download/{TRIVY_VERSION}/trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ sudo dpkg -i trivy_{TRIVY_VERSION}_Linux-64bit.deb
trivy image [YOUR_IMAGE_NAME]
```

## Clean `node_modules` cache

```dockerfile
FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# The rest comes here
```

## Generic Docker practices

* Prefer COPY over ADD command: COPY is safer as it copies local files only while ADD supports fancier fetches like downloading binaries from remote sites
* Avoid updating the base OS: Updating the local binaries during build (e.g. apt-get update) creates inconsistent images every time it runs and also demands elevated privileges. Instead use base images that are updated frequently
* Classify images using labels: Providing metadata for each image might help Ops professionals treat it adequately. For example, include the maintainer name, build date and other information that might prove useful when someone needs to reason about an image
* Use unprivileged containers: Privileged container have the same permissions and capabilities as the root user over the host machine. This is rarely needed and as a rule of thumb one should use the 'node' user that is created within official Node images
* Inspect and verify the final result: Sometimes it's easy to overlook side effects in the build process like leaked secrets or unnecessary files. Inspecting the produced image using tools like Dive can easily help to identify such issues
* Perform integrity check: While pulling base or final images, the network might be mislead and redirected to download malicious images. Nothing in the standard Docker protocol prevents this unless signing and verifying the content. Docker Notary is one of the tools to achieve this

## Lint your Dockerfile

Inspecting a Dockerfile using hadolint:

```
hadolint production.Dockerfile
hadolint --ignore DL3003 --ignore DL3006 <Dockerfile> # exclude specific rules
hadolint --trusted-registry my-company.com:500 <Dockerfile> # Warn when using untrusted FROM images
```

