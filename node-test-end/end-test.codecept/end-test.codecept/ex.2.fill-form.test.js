Feature('CodeceptJS Demonstration');

Scenario('test some forms', I => {
  // by name
  I.fillField('user_basic[email]', 'hello@world.com');
  // by CSS
  I.fillField('#user_basic_email', 'hello@world.com');
  // don't make us guess locator type, specify it
  I.fillField({ css: '#user_basic_email' }, 'hello@world.com');
});
