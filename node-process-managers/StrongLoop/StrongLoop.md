# StrongLoop Node Production Process Manager

StrongLoop Process Manager (StrongLoop PM) is a production process manager for Node.js applications. StrongLoop PM has built-in load balancing, monitoring, and multi-host deployment, and a graphical console. You can use StrongLoop PM for the following tasks:

* Build, package, and deploy your Node.js application to a local or remote system.
* View CPU profiles and heap snapshots to optimize performance and diagnose memory leaks.
* Keep processes and clusters alive forever.
* View performance metrics on your application.
* Easily manage multi-host deployments with Nginx integration.
* Unify multiple StrongLoop PMs to a distributed microservices runtime that is managed from Arc.

Install

```
$ [sudo] npm install -g strongloop
```

View the status of Process Manager and all deployed apps:

```
$ slc ctl
Service ID: 1
Service Name: my-app
Environment variables:
  No environment variables defined
Instances:
    Version  Agent version  Cluster size
     4.1.13      1.5.14           4
Processes:
        ID      PID   WID  Listening Ports  Tracking objects?  CPU profiling?
    1.1.57692  57692   0
    1.1.57693  57693   1     0.0.0.0:3001
    1.1.57694  57694   2     0.0.0.0:3001
    1.1.57695  57695   3     0.0.0.0:3001
    1.1.57696  57696   4     0.0.0.0:3001
```

List all the apps (services) under management:

```
$ slc ctl ls
Id          Name         Scale
 1          my-app       1
```

Stop an app:

```
$ slc ctl stop my-app
```

Restart an app:

```
$ slc ctl restart my-app
```

You can also “soft restart,” which gives worker processes a grace period to close existing connections, then restarts the current application:

```
$ slc ctl soft-restart my-app
```

To remove an app from management:

```
$ slc ctl remove my-app
```
