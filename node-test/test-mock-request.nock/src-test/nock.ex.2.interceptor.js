// Before executing code that will make a network request that we want to test, we have to setup a mocked network request that will be used in place of the network request in your code:

const nock = require('nock');

nock('http://httpbin.org')
  .get('/get')
  .reply(200, {
    args: {},
    headers: {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'en-US,en;q=0.9',
      Connection: 'close',
      Cookie: `_gauges_unique_hour=1;
        _gauges_unique_day=1; _gauges_unique_month=1;
        _gauges_unique_year=1; _gauges_unique=1",
      "Host": "httpbin.org`,
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': `Mozilla/5.0 (X11; Linux
        x86_64) AppleWebKit/537.36 (KHTML, like
        Gecko) Chrome/70.0.3538.102 Safari/537.36`
    },
    origin: '0.0.0.0',
    url: 'http://httpbin.org/get'
  });

// Some code that GETs http://httpbin.org/get

/*
The nock above will return successfully (200 OK) and return a payload that mimics the data that is returned by httpbin.org. All without actually making the external network request!

While we may be losing out on having a full fledged integration test, this method does speed things up substantially and means your test harness isn’t relying on the third-party service being online.

This is especially useful if your tests have to pass before code is deployed as part of your CI/CD pipeline.

Internally, nock keeps a list of these interceptors and as they are used, they are removed from the list.

The interceptors are used in the order they are created and we can define multiple interceptors that go to the same hostname and URI, but return different payloads.

Because interceptors are removed after they are used, any time we want to test a network call, we have to make sure that we have an interceptor available.
*/
