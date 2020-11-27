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