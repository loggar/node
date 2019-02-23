const nock = require('nock');

nock('http://httpbin.org')
  .post('/post', { id: '123' })
  .reply(200, { status: 'OK' });
