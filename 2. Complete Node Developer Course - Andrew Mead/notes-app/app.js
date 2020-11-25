/* --- Challenge: Define and use a function in a new file ---
1. Create a new file called notes.js
2. Create getNotes function that returns "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console
*/

const validator = require("validator"); // validator npm package
const getNotes = require("./notes.js"); // Include or import notes.js

// Invoke getNotes() function
const userNote = getNotes();

console.log(userNote); // Output getNotes() contents
console.log(getNotes()); // Another method of invokation and retrieval

console.log(validator.isEmail("admin@example.com"));
console.log(validator.isEmail("example.com"));
console.log(validator.isURL("https://mead.io"));
console.log(validator.isURL("https/mead.io"));