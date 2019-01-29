const inquirer = require("inquirer");

// Similar to list, rawlist displays a list of choices and allows the user to enter the index of their choice (starting at 1):

inquirer
  .prompt([
    {
      type: "rawlist",
      name: "reptile",
      message: "Which is better?",
      choices: ["alligator", "crocodile"]
    }
  ])
  .then(answers => {
    console.info("Answer:", answers.reptile);
  });

  // Playing with this prompt type, I found it to be a bit buggy. While it does accept navigating via the arrow keys, navigating up and down between the available choices was fine, but the moment you arrowed up past the first item or arrowed down past the last option, resulted in ever increasing index values as well as NaN showing up in the prompt.