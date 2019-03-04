const inquirer = require("inquirer");

// Sometimes a command-line prompt just isn’t enough to convey a larger bit of input, like say, an essay or the contents of a log file. In those situations, the best bet is to direct the user to a full blown editor where they will have a bit more power:

inquirer
  .prompt([
    {
      type: "editor",
      name: "story",
      message: "Tell me a story, a really long one!"
    }
  ])
  .then(answers => {
    console.info("Answer:", answers.story);
  });

//inquirer will attempt to open a text editor on the user’s system based on the value of the $EDITOR and $VISUAL environment variables. If neither are present, vim (Linux) and notepad.exe (Windows) will be used instead.
