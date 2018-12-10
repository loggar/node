# SystemD

SystemD is the default process manager on modern Linux distributions. Running a Node service based on SystemD is very simple.

## setting up

Create a file in `/etc/systemd/system/express.service`:

```
[Unit]
Description=Express
# Set dependencies to other services (optional)
#After=mongodb.service

[Service]
# Run Grunt before starting the server (optional)
#ExecStartPre=/usr/bin/grunt

# Start the js-file starting the express server
ExecStart=/usr/bin/node server.js
WorkingDirectory=/usr/local/express
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=Express
# Change to a non-root user (optional, but recommended)
#User=<alternate user>
#Group=<alternate group>
# Set environment options
Environment=NODE_ENV=production PORT=8080

[Install]
WantedBy=multi-user.target
```

## Enable service

```
$ systemctl enable express.service
```

## Start service

```
$ systemctl start express.service
```

## Check service status

```
$ systemctl status express.service
```
