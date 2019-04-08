var express = require('express');
var app = express();
var woodlot = require('woodlot').middlewareLogger;

app.use(
  woodlot({
    streams: ['./logs/app.log'],
    stdout: false,
    routes: {
      whitelist: ['/api', '/dashboard'],
      strictChecking: false
    },
    userAnalytics: {
      platform: true,
      country: true
    },
    format: {
      type: 'json',
      options: {
        cookies: true,
        headers: true,
        spacing: 4,
        separator: '\n'
      }
    }
  })
);
