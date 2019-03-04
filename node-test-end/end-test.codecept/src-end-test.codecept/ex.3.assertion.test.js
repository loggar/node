Feature('CodeceptJS Demonstration');

Scenario('test some forms', I => {
  I.see('User is valid');
  // better to specify context:
  I.see('User is valid', '.alert-success');
});
