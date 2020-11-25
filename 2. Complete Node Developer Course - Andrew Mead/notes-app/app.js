const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create "add" command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function() {
        console.log(chalk.bgGreen.black("Adding a new note!"));
    }
});

// Create "remove" command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function() {
        console.log(chalk.bgRed.black("Removing the note!"));
    }
});

// yargs parsing
console.log(yargs.argv); 