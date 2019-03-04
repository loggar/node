Feature('CodeceptJS Demonstration');

Before(I => {
  // or Background
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
});

Scenario('test some forms', I => {
  I.click('Create User');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});

Scenario('test title', I => {
  I.seeInTitle('Example application');
});
