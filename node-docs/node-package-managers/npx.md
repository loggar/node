# npx

npm package runner

## Using locally-installed tools without npm run-script

```shell
$ npm i -D cowsay

$ npx cowsay something
```

## Executing one-off commands

```shell
$ npx create-react-app my-new-react-app

$ npx browserify ./src/main.js -o ./dist/bundle.js

$ npx watchify ./src/main.js -o ./dist/bundle.js -v

$ npx node-sass --watch scss/ -o css/

$ npx eslint src/sample.js

$ npx mocha ./src-test
```

## Run commands with different Node.js versions

```shell
λ node --version
v8.10.0

λ npx node@10 --version
npx: installed 1 in 2.64s
Path must be a string. Received undefined
null
v10.7.0

λ node --version
v8.10.0
```

```
npx -p node@8 npm run build
```

## Execute a full shell command using one npx call with multiple packages

```whell
$ npx -p lolcatjs -p cowsay -c \
  'echo "$npm_package_name@$npm_package_version" | cowsay | lolcatjs'
...
 _____
< your-cool-package@1.2.3 >
 -----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Invoking gist-based scripts

```shell
λ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
...
yay gist
```

## Invoking a command from a github repository

```shell
λ npx github:piuccio/cowsay hello
...
 _______
< hello >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Run node binary with --inspect

```shell
$ npx --node-arg=--inspect cowsay
Debugger listening on ws://127.0.0.1:9229/....
```

## Shell auto-fallback

You can configure npx to run as your default fallback command when you type something in the command line with an @ but the command is not found. This includes installing packages that were not found in the local prefix either.

For example:

```shell
$ npm@4 --version
(stderr) npm@4 not found. Trying with npx...
4.6.1
$ asdfasdfasf
zsh: command not found: asfdasdfasdf
```

You can optionally pass through --no-install when generating the fallback to prevent it from installing packages if the command is missing.

### For bash@>=4:

```shell
$ source <(npx --shell-auto-fallback bash)
```

### For zsh:

```shell
$ source <(npx --shell-auto-fallback zsh)
```

### For fish:

```shell
$ source (npx --shell-auto-fallback fish | psub)
```

# awesome-npx

* https://github.com/suarasaur/awesome-npx

packages and resources that work really well with `npx`.

## useful
alex - check text or markdown documents for insensitive or inconsiderate writing
```
npx alex README.md cat README.md | npx alex
```

decode-zhuyin - decode Chinese word to Zhuyin password
```
npx decode-zhuyin <text>
```

goops - add gitignore rules heuristically based on files in your current directory
```
npx goops
```

http-server - run a static web server in your current directory
```
npx http-server
```

json-server - run a mock REST API server with JSON-based response configuration
```
npx json-server https://raw.githubusercontent.com/typicode/jsonplaceholder/master/data.json
```

NodeSchool Workshoppers - Learn something new!
```
npx learnyounode npx how-to-npm npx git-it npx elementary-electron
```

okimdone - execute a long-running command and be told out loud when it's done
```
npx okimdone npm install
```

pa11y - check websites for accessibility issues
```
npx pa11y http://example.com
```

shx - portable shell commands like ls, cp, rm
```
npx shx ls npx shx rm -rf /tmp
```

strip-ansi-cli - remove terminal color codes from piped text
```
echo -e "\033[33m hello" | npx strip-ansi-cli
```

## node.js development
dist-upgrade - install the latest global node and npm
```
npx dist-upgrade
```

npm-check - interactively update npm dependencies
```
npx npm-check npx npm-check --skip-unused --update
```

nsp - scan your npm project for vulnerabilities and security alerts
```
npx nsp check
```

snyk - scan for vulnerabilities in your project and its dependencies and even fix them (requires account with service)
```
npx snyk test npx snyk monitor
```

sort-package-json - sort your package.json keys
```
npx sort-package-json
```