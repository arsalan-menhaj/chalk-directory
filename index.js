var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
console.log("My name is chalkBot, but you might also know me as Academy award winner " + chalk.underline(chalk.blue("Anthony " + chalk.red("Hothead ") + "Hopkins")));