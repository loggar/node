const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "password",
      name: "secret",
      message: "Tell me a secret"
    }
  ])
  .then(answers => {
    // Logging out the secret defeats the purpose though ;)
    console.info("Answer:", answers.secret);
  });
