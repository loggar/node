# Docker Mysql

## Mysql Container

```
$ docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=complexpassword -d -p 19010:3306 mysql
```

## Connect Mysql container

Test mysql in the container

```
$ docker exec -it 60a8cd49608a bash

root@60a8cd49608a:/# mysql -uroot -pcomplexpassword -h 192.168.99.100 -P 19010

mysql> create database Customers;

Query OK, 1 row affected (0.01 sec)
```

Test mysql container from the host

`app.js`

```js
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "192.168.99.100",
  port: 19010,
  user: "root",
  password: "complexpassword",
  database: "Customers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.end();
  console.log("End!");
});
```

```
$ node app.js

Error: connect ECONNREFUSED 127.0.0.1:19010
```

> This is because caching_sha2_password is introduced in MySQL 8.0, but the Node.js version is not implemented yet.

```
$ docker exec -it 60a8cd49608a bash

root@60a8cd49608a:/# mysql -uroot -pcomplexpassword -h 192.168.99.100 -P 19010

mysql> ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'complexpassword';
mysql> FLUSH PRIVILEGES;
```

```
$ node app.js

Connected!
End!
```

## Linking containers

`app-linked.js`

```js
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "complexpassword",
  database: "Customers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.end();
  console.log("End!");
});
```

```
$ docker build -t loggar/node-app-1 .

$ docker run -d -p 13020:3000 --name node-app-1-1 --link mysql-db:mysql loggar/node-app-1

$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                     PORTS                                NAMES
141a06b17cb3        loggar/node-app-1   "npm start"              6 seconds ago        Exited (1) 4 seconds ago                                        node-app-1-1
60a8cd49608a        mysql               "docker-entrypoint..."   About a minute ago   Up About a minute          33060/tcp, 0.0.0.0:19010->3306/tcp   mysql-db
```

## Linking with Docker Network

```
$ docker network create --driver bridge isolated_network
```

```
$ docker run -d -p 13020:3000 --net isolated_network --name node-app-1-1 loggar/node-app-1
```

```
$ docker run -p 19010:3306 --net isolated_network --name mysql-db -e MYSQL_ROOT_PASSWORD=complexpassword -d mysql
```
