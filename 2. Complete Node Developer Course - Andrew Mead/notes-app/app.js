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
        console.log(chalk.underline.green("Progress: Adding new note..."));
        notes.addNote(argv.title, argv.body);
    }
});

/* --- Challenge: Setup command option and function ---
1. Setup the remove command and take a require "--title" option
2. Create and export a removeNote function from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title of the note to be removed
5. Test your work using: node app.js remove --title="some title"

--- Challenge: Wire up removeNote ---
1. Load existing notes
2. Use array filter method to remove the matching note (if any)
3. Save the newly created array
4. Test your work with a title that exists and a title that doesn't exist

--- Challenge: Use chalk to provide useful logs for more ---
1. If a note is removed, print "Note removed!" with a green background
3. If no note is removed, print "No note found!" with a red background
*/

// Create "remove" command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        console.log(chalk.underline.red("Progress: Removing note..."));
        notes.removeNote(argv.title);
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