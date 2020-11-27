const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create "add" command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: { // Command options
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note content/body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log(chalk.underline.green("Adding a new note..."));
        notes.addNote(argv.title, argv.body);
        // Output title property and option
        // console.log("Title: " + argv.title);
        // console.log("Body: " + argv.body);
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

/* --- Challenge: Add two new commands ---
1. Setup command to support "list" command {print out placeholder message for now}
2. Setup command to support "read" command {print out placeholder message for now}
3. Test your wokr by running both commands and ensure correct output
*/

// Create "list" command
yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function() {
        console.log(chalk.bgBlue.black("Listing all the notes!"));
    }
});

// Create "read" command
yargs.command({
    command: "read",
    describe: "Read note",
    handler: function() {
        console.log(chalk.bgWhite.black("Reading the note!"));
    }
})

// yargs parsing
yargs.parse();