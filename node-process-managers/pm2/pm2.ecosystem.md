# node - ecosystem with pm2

## Service Specification

- Node.JS Runtime v8.10.0
- Package Manager npm 5.6.0
- Node Version Manager 0.33.8
- Process Manager pm2 2.10.2

## Install NodeJS

Install git

```
$ yum install git
```

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

## reset envs when..

```
$ npm --version
bash: npm: command not found...

$ source /root/.nvm/nvm.sh

$ npm --version
6.1.0
```

## Install Ecosystem Manager

```
$ npm install pm2 -g

$ pm2 ls
```

## Deploy Applications

> ~/job_schedulers

```
$ npm install
```

## Ecosystem of Application Jobs with Environment value

```
// ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "job-schedulers",
      script: "./job-schedulers/src/job-schedules.js",
      watch: false,
      env: {
        PORT: 29110,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 29110,
        NODE_ENV: "production"
      }
    },
    {
      name: "class-enroll-status",
      script: "./class-enroll-status/.dist/main.server-bundle.js",
      watch: false,
      env: {
        PORT: 28110,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 28110,
        NODE_ENV: "production"
      }
    }
  ]
};

```

Start Application Jobs with env option.

```
// windows 

$ set SERVER_ID=local
$ pm2 start ecosystem.config.js --env development
```

in imitaion(test) server : 

```
$ SERVER_ID=imitation pm2 start ecosystem.config.js --env production
```

in production : 

```
$ SERVER_ID=real pm2 start ecosystem.config.js --env production
```

## Generating a startup script

http://pm2.keymetrics.io/docs/usage/startup/

To get the automatically-configured startup script for your machine you need to type this command:

```
$ pm2 startup
```

Once you started all the applications you want to manage, you can save the list across expected/unexpected server restart by typing this command:

```
$ pm2 save
```

### Manually resurrect processes

This brings back previously saved processes (via pm2 save):

```
$ pm2 resurrect
```

### Update startup script

To update the startup script (in case you changed the Node.js version via NVM for example) run the following commands:

```
$ pm2 unstartup
$ pm2 startup
```

### SystemD installation checking

```
# Check if pm2-<USER> service has been added
$ systemctl list-units

# Check logs
# journalctl -u pm2-<USER>
$ journalctl -u pm2-root

# Cat systemd configuration file
# systemctl cat pm2-<USER>
$ systemctl cat pm2-root

# Analyze startup
$ systemd-analyze plot > output.svg
```

To wait efficiently that machine is online for PM2 to run:

```
[Unit]
Wants=network-online.target
After=network.target network-online.target

[....]

[Install]
WantedBy=multi-user.target network-online.target
```

## Disabling Ecosystem of Application Jobs

Disabling startup syste

```
$ pm2 unstartup

or 

$ pm2 unstartup systemd
```

Stop/Delete applications

```
$ pm2 stop all

$ pm2 delete all
```

## etc

show pm2 logs

http://pm2.keymetrics.io/docs/usage/log-management/

```
$ pm2 logs

$ pm2 flush # Clear all the logs
```
