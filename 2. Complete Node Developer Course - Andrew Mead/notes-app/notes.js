const fs = require("fs");
const chalk = require("chalk");

// getNotes() function
const getNotes = function() {
    return "Your notes...";
}

// addNote()
const addNote = function(title, body) {
    // console.log(title);
    // console.log(body);

    const notes = loadNotes();

    notes.push({
        title: title,
        body: body
    });

    saveNote(notes);

}

// saveNote()
const saveNote = function(notes) {
    const jsonNote = JSON.stringify(notes);
    fs.writeFileSync("notes.json", jsonNote);
    console.log(chalk.bgGreen.black("Note sucessfully added!"));
}

// loadNotes()
const loadNotes = function() {
    try {
        const noteData = fs.readFileSync("notes.json");
        const bufferData = noteData.toString();
        const parsedNote = JSON.parse(bufferData);
    } catch(e) {
        return [];
    }
}

// removeNote()

// Export getNotes()
module.exports = {
    addNote: addNote,
    getNotes: getNotes
};