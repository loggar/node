# Code Coverage with Istanbul

## Http server

Example of an API test coverage:

```javascript
// a simple app
var express = require('express');
var app = express();

var people = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    },
    {
        name: 'Jim Doe'
    }
]

app.use('/assets', express.static(__dirname + '/public'));
app.get('/people', function(req, res){
    res.send(people);
});

var server = app.listen(3000);
module.exports = server;
```

Corresponding test

```javascript
var expect = require('chai').expect;
var request = require('supertest');

describe('app', function(){
    var server;
    beforeEach(function(){
        server = require('../app');
    });
    afterEach(function () {
        server.close();
    });
    it('should respond with status code 200', function(done){
        request(server)
            .get('/people')
            .expect(200)
            .end((err, res) => {
               expect(res.body).to.be.an('array');
               done();
            });

        })
})
```

## Async operation with conditions

Consider following api

```javascript
app.get('/api/todos/:uname', function(req, res, next){
    Todos.find({username: req.params.uname}, function(err, results){
       if(err) {  // here
            next(err)
        }else{
           res.send(results);
       }
    });
});
```

Corresponding test:

```javascript
it('should respond successfully to /api/todos for a username', function(done){
    request(server)
        .get('/api/todos/test')
        .expect(200)
        .end(function(req, res) {
            expect(res.body).to.be.an('array');
            done();
        });
});
```

Coverage is down because we have not yet checked for error condition.

### Introducing Stubs

Stubs or mocks play very important part in unit testing. When you do not know how you can encounter an error condition in a normal scenario, you need to use a stub, basically, a mimic of original function, but which is under your control. You can force this function to throw an error the way you want.

Going back to the above scenario, we need to cover the error condition which is highlighted in pink. sinon is a popular library in Node which can be used for this purpose.

We create an object of Error and pass it on to stub as a result of the callback from find method on Todos. Notice that we are using the yields API on sinon.stub for this. yields takes the argument list that the callback should be called with.

```javascript
it('should throw an error when any kind of error is encountered', function(done){
    var stub = sinon.stub(Todos, 'find');
    var expectedError = new Error('oops');
    stub.yields(expectedError);

    request(server)
      .get('/api/todos/test')
      .expect(function(res){
        expect(res.error).to.have.deep.property('text').to.contain('oops')
        })
      .end(done);
});
```

So our complete test suite looks like below:

```javascript
var expect = require('chai').expect;
var request = require('supertest');
var sinon = require('sinon');
var Todos = require('../models/todomodel');
var AssertionError = require("assert").AssertionError;

describe('main app', function(){
    var server;
    beforeEach(function(){
        server = require('../app');
    });
    afterEach(function () {
        server.close();
    });
    it('should respond successfully to /api/todos for a username', function(done){
        request(server)
            .get('/api/todos/test')
            .expect(200)
            .end(function(req, res) {
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should throw an error when any kind of error is encountered', function(done){
        var stub = sinon.stub(Todos, 'find');
        var expectedError = new Error('oops');
        stub.yields(expectedError);

        request(server)
            .get('/api/todos/test')
            .expect(500)
            .expect(function(res){
             expect(res.error).to.have.deep.property('text').to.contain('oops')
            })
            .end(done);
    });

});
```
