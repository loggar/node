# clinic.js

Install

```
npm install --save-dev clinic
```

clinic doctor

```
clinic doctor -- node server.js
```

benchmark your server with wrk or autocannon

```
wrk http://localhost:3000

autocannon http://localhost:3000
```

If you want to run autocannon as soon as your server starts listening you can use the --autocannon option using subarg syntax.

```
clinic doctor --autocannon [ / --method POST ] -- node server.js
```

Other benchmarking tools like wrk can be started in a similar way using the --on-port flag

```
clinic doctor --on-port 'wrk http://localhost:13000' -- node server.js
```

Finally shut down your server (Ctrl+C). Once the server process has shutdown clinic doctor will analyse the collected data and detect what type of issue you are having. Based on the issue type, it will provide a recommendation for you.

For example, to debug I/O issues, use clinic bubbleprof:

```
clinic bubbleprof -- node server.js
```
