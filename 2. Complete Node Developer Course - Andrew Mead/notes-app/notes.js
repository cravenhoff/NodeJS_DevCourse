const fs = require("fs");
const chalk = require("chalk");

// getNotes() function
const getNotes = function() {
    return "Your notes...";
}

// addNote()
const addNote = function(title, body) {
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
    console.log(chalk.bgGreen.black("Message: Note(s) sucessfully added!"));
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
const removeNote = function(title) {
    console.log(chalk.bgYellow.black(`"${title}"`));

    // Load current notes
    const notes = loadNotes();

    // Remove matching note using array.filter()
    const notesToKeep = notes.filter(note => {
        return note.title !== title;
    });

    if(notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen.black("Note removed!"));
    } else {
        console.log(chalk.bgRed.black("No note found!"));
    }

    console.log(notesToKeep);
    saveNote(notesToKeep);
}

// Export functions to use externally
module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
};