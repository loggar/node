# Install NodeJS in WSL Ubuntu

## Install NodeJS

Install git

```
$ sudo apt install git

# or

$ yum install git
```

Download nvm

```
$ git clone git://github.com/creationix/nvm.git ~/.nvm
```

Run nvm

```
# WSL Ubuntu
$ source /home/loggar/.nvm/nvm.sh

# Centos
$ source /root/.nvm/nvm.sh
```

Install nodejs with specific version

```
$ nvm install v8.10.0

$ nvm ls
```

## reset envs when..

```
$ npm --version
bash: npm: command not found...

```

```
$ source /home/loggar/.nvm/nvm.sh

$ npm --version
6.1.0
```