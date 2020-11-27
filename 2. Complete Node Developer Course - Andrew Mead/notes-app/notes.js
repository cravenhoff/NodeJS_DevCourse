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

    // Check to see no duplicates
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNote(notes);
        console.log(notes);
    } else {
        console.log(chalk.bgRed.black("Warning: Note taken!"));
        console.log(duplicateNotes);
    }

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
        return parsedNote = JSON.parse(bufferData);
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