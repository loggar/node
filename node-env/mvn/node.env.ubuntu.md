# Install NodeJS in WSL Ubuntu

## Install NodeJS

```
$ sudo apt update

$ sudo apt install nodejs npm

$ node -v && npm -v
```

## Installing Node.js and NPM using NVM

Install nvm

```
$ sudo apt-get install curl

$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

$ source ~/.profile

$ nvm --version
```

Install node and npm

```
$ nvm install node

$ node -v
```

Install LTS version

```
$ nvm install --lts
```

List available versions

```
$ nvm ls-remote
```

Install specific version

```
$ nvm install 8.10.0
```

List installed versions

```
$ nvm ls
```

Use specific version

```
$ nvm use 10.16.3
```

Change default version

```
$ nvm alias default 10.16.3
```
