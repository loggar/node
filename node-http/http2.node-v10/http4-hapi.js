const fs = require('fs');
const Hapi = require('hapi');
const http2 = require('http2');

const server = new Hapi.Server();
server.connection({
  listener: http2.createServer(),
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, reply) {
    return reply('Hello, World!');
  }
});

server.start(err => {
  if (err) console.error(err);
  console.log(`Started ${server.connections.length} connections`);
});
