const chalk = require("chalk"); // chalk npm library
const yargs = require("yargs");
const getNotes = require("./notes.js"); // Include or import notes.js

// -- Command line arguments
const args = process.argv; // Holds any arguments passed to the terminal
console.log(chalk.bgWhite.red("--- Unparsed ---"));
console.log(args); // args[0] => node exectutable and args[1] => javascript filepath
// console.log(chalk.inverse(args[2])); // Raw arguments, no parsing

// CL third argument
const command = process.argv[2];

if(command === "add") {
    console.log(chalk.bgGreen.black("Adding note!"));
} else if(command === "remove") {
    console.log(chalk.bgRed.black("Removing note!"));
}

console.log(chalk.bgWhiteBright.green("--- Parsed ---"));
console.log(yargs.argv); // Parse command line arguments