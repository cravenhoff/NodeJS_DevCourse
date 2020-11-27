// getNotes() function
const getNotes = function() {
    return "Your notes...";
}

// addNote()
const addNote = function(title, body) {
    console.log(title);
    console.log(body);
}
// saveNote()
// loadNotes()
// removeNote()

// Export getNotes()
module.exports = {
    addNote: addNote,
    getNotes: getNotes
};