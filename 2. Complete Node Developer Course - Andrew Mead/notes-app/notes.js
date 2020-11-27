const fs = require("fs");
const chalk = require("chalk");

// getNotes() function
const getNotes = () => "Your notes...";

// addNote()
const addNote = (title, body) => {
    const notes = loadNotes();

    // Check to see no duplicates
    const duplicateNotes = notes.filter(note => note.title === title);

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
const saveNote = notes => {
    const jsonNote = JSON.stringify(notes);
    fs.writeFileSync("notes.json", jsonNote);
    console.log(chalk.bgGreen.black("Message: Note(s) sucessfully added!"));
}

// loadNotes()
const loadNotes = () => {
    try {
        const noteData = fs.readFileSync("notes.json");
        const bufferData = noteData.toString();
        return parsedNote = JSON.parse(bufferData);
    } catch(e) {
        return [];
    }
}

// removeNote()
const removeNote = title => {
    console.log(chalk.bgYellow.black(`"${title}"`));

    // Load current notes
    const notes = loadNotes();

    // Remove matching note using array.filter()
    const notesToKeep = notes.filter(note => note.title !== title);

    if(notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen.black("Note removed!"));
    } else {
        console.log(chalk.bgRed.black("No note found!"));
    }

    console.log(notesToKeep);
    saveNote(notesToKeep);
}

// listNotes()
const listNotes = () => {
    console.log(chalk.white.inverse("Your notes:"));
    const notes = loadNotes();

    notes.forEach(note => {
        console.log(note.title);
    });
    // console.log("Listing notes function...");
    // console.log(notes);
}

// readNote()
const readNote = title => {
    const notes = loadNotes();

    const matchingNote = notes.filter(note => note.title === title);
    console.log(matchingNote);
    console.log(matchingNote.length);

    if(matchingNote.length === 0) {
        console.log(chalk.bgRed.black("No note with that title exists!"));
    } else {
        matchingNote.forEach(note => {
            console.log(chalk.bgGreen.black(note.title));
            console.log(note.body);
        })
    }

    // notes.forEach(note => {
    //     if(note.title === title) {
    //         console.log(chalk.bgGreen.inverse(note.title), note.body);
    //     }
    // });
    // console.log(title);
    // console.log(notes);
}

// Export functions to use externally
module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};