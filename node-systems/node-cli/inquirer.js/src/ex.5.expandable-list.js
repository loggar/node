const inquirer = require("inquirer");

// The expand type is reminiscent of some command-line applications that simply present you with a list of characters which map to functionality that can be entered. expand prompts will initially present the user with a list of the available character values and give context to them when the key is pressed:

inquirer
  .prompt([
    {
      type: "expand",
      name: "reptile",
      message: "Which is better?",
      choices: [
        {
          key: "a",
          value: "alligator"
        },
        {
          key: "c",
          value: "crocodile"
        }
      ]
    }
  ])
  .then(answers => {
    console.info("Answer:", answers.reptile);
  });

  // By default the H option is included which stands for “Help” and upon entering H and hitting enter will switch to a list of the options, indexed by their characters that can then be entered to make a selection.