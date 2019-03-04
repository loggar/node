var assert = require('assert');

Feature('CodeceptJS Demonstration');

Scenario('test page title', async I => {
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
  var title = await I.grabTitle();
  assert.equal(
    title,
    'Example application with SimpleForm and Twitter Bootstrap'
  );
});
