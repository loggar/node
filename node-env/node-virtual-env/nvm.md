# nvm Node Version Manager

## install

refs) https://github.com/creationix/nvm

Download nvm

```
$ git clone git://github.com/creationix/nvm.git ~/.nvm
```

Run nvm

```
$ source /root/.nvm/nvm.sh
```

Install nodejs with specific version

```
$ nvm install v8.10.0

$ nvm ls
```

## Usage

list

```
nvm ls
```

use

```
vnm use 8.1
```

uninstall

```
nvm uninstall 8.1
```

set the default node version

```
nvm alias default system

# or...
nvm alias default v9.3.0

```

## where actual directory node installed is

redhat

```
/root/.nvm/versions/node/v8.10.0/bin/node
```