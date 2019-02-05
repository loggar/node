# Cluster Mode

The cluster mode allows networked Node.js applications (http(s)/tcp/udp server) to be scaled accross all CPUs available, without any code modifications. This greatly increases the performance and reliability of your applications, depending on the number of CPUs available. Under the hood, this uses the Node.js cluster module such that the scaled application’s child processes can automatically share server ports. To learn more, see How It Works in the official Node.js documentation on the cluster module.

To enable the cluster mode, just pass the `-i` option:

```
pm2 start app.js -i max
```

`max` means that PM2 will auto detect the number of available CPUs and run as many processes as possible

Or via a `js/yaml/json` file:

```json
{
  "apps": [
    {
      "script": "api.js",
      "instances": "max",
      "exec_mode": "cluster"
    }
  ]
}
```

> NOTE: you need to set the exec_mode to cluster so PM2 know you want to load balance between each instances, by default it will not

Then to start the Process File:

```
pm2 start processes.json
```

The `-i` or instances option can be:

- `0/max` to spread the app across all CPUs
- `-1` to spread the app across all CPUs - 1
- `number` to spread the app across number CPUs

## Reload

As opposed to `restart`, which kills and restarts the process, `reload` achieves a **0-second-downtime** reload.

To reload an app:

```
pm2 reload <app_name>

pm2 reload process.json

pm2 reload process.json --only api
```

If the reload system hasn’t managed to reload your application, a timeout will fallback to a classic restart.

## Graceful Shutdown

In production environment, you may need to wait for remaining queries to be processed or close all connections before exiting the application. On the PM2 reload context it can be translated into a very long reload or a reload that doesn’t work (fallback to restart) meaning that your application still has open connections on exit. You may alternatively need to close all databases connections, clear data queues or whatever.

To Gracefully Shutdown an application you can catch the SIGINT signal (the first signal sent on exit by PM2) and execute actions to wait/clear all these states:

```js
process.on("SIGINT", function() {
  db.stop(function(err) {
    process.exit(err ? 1 : 0);
  });
});
```

Now pm2 reload will become a gracefulReload.

### Configure the kill timeout

Via CLI, this will lengthen the timeout to 3000ms:

```
pm2 start app.js --kill-timeout 3000
```

Via json

```json
{
  "apps": [
    {
      "name": "api",
      "script": "app.js",
      "kill_timeout": 3000
    }
  ]
}
```

### Graceful start

Sometimes you might need to wait for your application to have etablished connections with your `DBs/caches/workers/whatever`. PM2 needs to wait before considering your application as online. To do this, you need to provide `--wait-ready` to the CLI or provide `wait_ready: true` in a process file. This will make PM2 listen for that event. In your application you will need to add `process.send('ready');` when you want your application to be considered as ready.

```js
var http = require("http");
var app = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("hey");
});
var listener = app.listen(0, function() {
  console.log("Listening on port " + listener.address().port);
  // Here we send the ready signal to PM2
  process.send("ready");
});
```

Then start the application:

```
pm2 start app.js --wait-ready
```

### Configure the ready timeout

By default, PM2 wait 3000ms for the `ready` signal.

Via CLI, this will lengthen the timeout to 3000ms:

```
pm2 start app.js --wait-ready --listen-timeout 3000
```

Via json:

```json
{
  "apps": [
    {
      "name": "api",
      "script": "app.js",
      "listen_timeout": 3000
    }
  ]
}
```

### Graceful start using `http.Server.listen`

There is still the default system that hooks into `http.Server.listen` method. When your http server accepts a connection, it will automaticaly state your application as ready. You can increase the PM2 waiting time the listen using the same variable as `--wait-ready` graceful start : `listen_timeout` entry in process file or `--listen-timeout=XXXX` via CLI.

### Explanation: Signals flow

When a process is stopped/restarted by PM2, some system signals are sent to your process in a given order.

First a **SIGINT** a signal is sent to your processes, signal you can catch to know that your process is going to be stopped. If your application does not exit by itself before 1.6s (customizable) it will receive a **SIGKILL** signal to force the process exit.

### Windows graceful stop

When signals are not available your process gets killed. In that case, you need to listen for `shutdown` events:

```js
process.on("message", function(msg) {
  if (msg == "shutdown") {
    console.log("Closing all connections...");
    setTimeout(function() {
      console.log("Finished closing connections");
      process.exit(0);
    }, 1500);
  }
});
```

## Statelessify your application

Be sure your application is stateless meaning that no local data is stored in the process, for example sessions/websocket connections, session-memory and related. Use Redis, Mongo or other databases to share states between processes.

Another resource on how to write efficient, production ready stateless application is The Twelve Factor Application manifesto.
