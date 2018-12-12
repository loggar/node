# HTTP/2 Server Push (Node-Express)

ref) https://github.com/azat-co/http2-node-server-push

## HTTPS Keys and Certs

``` sh
$ mkdir http2-node-server-push 
$ cd http2-node-server-push
$ openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
$ openssl rsa -passin pass:x -in server.pass.key -out server.key
$ rm server.pass.key
$ openssl req -new -key server.key -out server.csr
$ openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
```

## init project

``` sh
npm init -y
npm i express@4.14.0 morgan@1.7.0 spdy@3.4.0 --save
npm i node-dev@3.1.1 --save-dev
```

package scripts

``` json
	"scripts": {
		"start": "./node_modules/.bin/node-dev .",
		"start-advanced": "./node_modules/.bin/node-dev index-advanced.js",
		"test": "echo \"Error: no test specified\" && exit 1"
	}
```

``` sh
npm start
npm start-advanced
```
