## mocha with promises

Refs) http://tobyho.com/2015/12/16/mocha-with-promises/

Whereas the traditional way of testing asynchronous code in Mocha is to have your test function take a done callback function:

```
it('reads some file', function(done) {
  fs.readFile('someFile.json', function(err, data) {
    if (err) return done(err);
    assert(data != null, "File should exist.");
    done();
  });
});
```

With built-in promise support - you no longer need the done callback. All you have to do is return a promise from the test function:

```
var fs = require('fs-promise');

it('reads some file', function() {
  return fs.readFile('someFile.json')
    .then(function(data) {
      assert(data != null, "File should exist.");
    });
});
```

What's really nice about this is you can stop writing error handling code for good, even for tests with multiple asynchronous steps. For example, this is a test that makes a post request to the server and then verifies the data in the Mongo database:

```
it('sets settings', function() {
  return agent.post('/settings')
    .send({
      notifications: false
    })
    .expect(200)
    .then(function(resp) {
      expect(resp.body.success).to.equal(true);
      return User.findById(user.id);
    })
    .then(function(user) {
      expect(user.notifications).to.equal(false);
    });
});
```

This code uses superagent-as-promised which is a small wrapper on top of supertest to give it promises support. It uses the supertest.agent API to handle persistent cookies so that authentication can work in the tests. It also uses mongoose - which supports promises out of the box.