// Include or import "fs" module
const fs = require("fs");

// Write to file using the synchronous method
// fs.writeFileSync("notes.txt", "My name is Crystal.");

/* --- Challenge: Append a message to notes.txt ---
1. Use appendFileSync to append to the file
2. Run the script
3. Check your work by opening the file and viewing the appended text
*/

// Append notes.txt
fs.appendFileSync("notes.txt", " I'm from Papua New Guinea!");
