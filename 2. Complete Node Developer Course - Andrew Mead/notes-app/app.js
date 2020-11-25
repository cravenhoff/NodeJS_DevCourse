/* --- Challenge: Define and use a function in a new file ---
1. Create a new file called notes.js
2. Create getNotes function that returns "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console
*/

// Include or import notes.js
const getNotes = require("./notes.js");

// Invoke getNotes() function
const userNote = getNotes();

// Output getNotes() contents
console.log(userNote);
console.log(getNotes()); // Another method of invokation and retrieval