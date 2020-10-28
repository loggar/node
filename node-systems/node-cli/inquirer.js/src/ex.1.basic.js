const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "faveReptile",
      message: "What is your favorite reptile?",
      default: "Alligators, of course!"
    }
  ])
  .then(answers => {
    console.info("Answer:", answers.faveReptile);
  });
