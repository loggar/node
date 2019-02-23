// Before executing code that will make a network request that we want to test, we have to setup a mocked network request that will be used in place of the network request in your code:

const nock = require('nock');

nock('http://httpbin.org')
  .post('/post')
  .reply(500);

// Code we want to make sure handles errors...
