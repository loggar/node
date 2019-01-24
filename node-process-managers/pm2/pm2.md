## pm2

### Installing PM2

> λ npm install pm2 -g

### Start an application

> λ pm2 start ./src/app.js

```
[PM2] Spawning PM2 daemon with pm2_home=C:\Users\webnl\.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting C:\Users\webnl\Documents\_workspace_js\loggar_js\js-build-deploy\pm2\src\app.js in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬──────────┬───────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem      │ user  │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼──────────┼───────┼──────────┤
│ app      │ 0  │ fork │ 23916 │ online │ 0       │ 0s     │ 0%  │ 8.7 MB   │ webnl │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴──────────┴───────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

> λ pm2 ls

```
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬───────────┬───────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user  │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼───────────┼───────┼──────────┤
│ app      │ 0  │ fork │ 23916 │ online │ 0       │ 2m     │ 0%  │ 31.9 MB   │ webnl │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴───────────┴───────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

### Managing a Process

```
$ pm2 list
$ pm2 describe <id|app_name>
$ pm2 monit
```

### Cluster Mode: Node.js Load Balancing & Hot Reload

```
$ pm2 start api.js -i <processes>
$ pm2 reload all
```

### Container Support

```
FROM keymetrics/pm2:latest-alpine
[...]
CMD [ "pm2-runtime", "npm", "--", "start" ]
```

### Monitor PM2 and Applications with our SaaS

```
$ pm2 register
```

### Log facilities

> $ pm2 logs ['all'|app_name|app_id] [--json] [--format] [--raw]

```
$ pm2 logs APP-NAME       # Display APP-NAME logs 
$ pm2 logs --json         # JSON output 
$ pm2 logs --format       # Formated output 
 
$ pm2 flush               # Flush all logs 
$ pm2 reloadLogs          # Reload all logs 
```

### Startup script generation

```
# Auto detect init system + generate and setup PM2 boot at server startup 
$ pm2 startup
 
# Manually specify the startup system 
# Can be: systemd, upstart, launchd, rcd 
$ pm2 startup [platform]
 
# Disable and remove PM2 boot at server startup 
$ pm2 unstartup

$ pm2 save
```

### Commands Cheatsheet

```
# General 
$ npm install pm2 -g            # Install PM2 
$ pm2 start app.js              # Start, Daemonize and auto-restart application (Node) 
$ pm2 start app.py              # Start, Daemonize and auto-restart application (Python) 
$ pm2 start npm -- start        # Start, Daemonize and auto-restart Node application 
 
# Cluster Mode (Node.js only) 
$ pm2 start app.js -i 4         # Start 4 instances of application in cluster mode 
                                # it will load balance network queries to each app 
$ pm2 reload all                # Zero Second Downtime Reload 
$ pm2 scale [app-name] 10       # Scale Cluster app to 10 process 
 
# Process Monitoring 
$ pm2 list                      # List all processes started with PM2 
$ pm2 list --sort=<field>       # Sort all processes started with PM2 
$ pm2 monit                     # Display memory and cpu usage of each app 
$ pm2 show [app-name]           # Show all information about application 
 
# Log management 
$ pm2 logs                      # Display logs of all apps 
$ pm2 logs [app-name]           # Display logs for a specific app 
$ pm2 logs --json               # Logs in JSON format 
$ pm2 flush
$ pm2 reloadLogs
 
# Process State Management 
$ pm2 start app.js --name="api" # Start application and name it "api" 
$ pm2 start app.js -- -a 34     # Start app and pass option "-a 34" as argument 
$ pm2 start app.js --watch      # Restart application on file change 
$ pm2 start script.sh           # Start bash script 
$ pm2 start app.json            # Start all applications declared in app.json 
$ pm2 reset [app-name]          # Reset all counters 
$ pm2 stop all                  # Stop all apps 
$ pm2 stop 0                    # Stop process with id 0 
$ pm2 restart all               # Restart all apps 
$ pm2 gracefulReload all        # Gracefully reload all apps in cluster mode 
$ pm2 delete all                # Kill and delete all apps 
$ pm2 delete 0                  # Delete app with id 0 
 
# Startup/Boot management 
$ pm2 startup                   # Detect init system, generate and configure pm2 boot on startup 
$ pm2 save                      # Save current process list 
$ pm2 resurrect                 # Restore previously saved processes 
$ pm2 unstartup                 # Disable and remove startup system 
 
$ pm2 update                    # Save processes, kill PM2 and restore processes 
$ pm2 init                      # Generate a sample js configuration file 
 
# Deployment 
$ pm2 deploy app.json prod setup    # Setup "prod" remote server 
$ pm2 deploy app.json prod          # Update "prod" remote server 
$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2 
 
# Module system 
$ pm2 module:generate [name]    # Generate sample module with name [name] 
$ pm2 install pm2-logrotate     # Install module (here a log rotation system) 
$ pm2 uninstall pm2-logrotate   # Uninstall module 
$ pm2 publish                   # Increment version, git push and npm publish 
```

### Updating PM2

```
# Install latest PM2 version 
$ npm install pm2@latest -g
# Save process list, exit old PM2 & restore all processes 
$ pm2 update
```

### PM2 Module system

> $ pm2 install <module_name>

```
Here are some PM2 compatible modules (standalone Node.js applications managed by PM2):

pm2-logrotate auto rotate logs of PM2 and applications managed
pm2-webshell expose a fully capable terminal in browsers
pm2-server-monit monitor your server health
```