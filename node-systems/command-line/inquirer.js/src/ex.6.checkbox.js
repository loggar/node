const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "checkbox",
      name: "reptiles",
      message: "Which reptiles do you love?",
      choices: ["Alligators", "Snakes", "Turtles", "Lizards"]
    }
  ])
  .then(answers => {
    console.info("Answer:", answers.reptiles);
  });

// Similar to the other list types, you can use the arrow keys to navigate. To make a selection, you hit SPACE and can also select all with a or invert your selection with i.

// Unlike the other types we’ve discussed, the answer for this prompt type will return an array instead of a string. It will always return an array, even if the user opted to not select any items.
