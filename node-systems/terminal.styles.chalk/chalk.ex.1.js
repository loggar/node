import chalk from "chalk";

// string concatenation - template literals
console.log(`${chalk.blue("Hello")} World${chalk.red("!")}`);

// chainable API
console.log(chalk.blue.bgRed.bold("Hello world!"));
