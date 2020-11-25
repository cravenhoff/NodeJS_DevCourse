/* --- Challenge: Define and use a function in a new file ---
1. Create a new file called notes.js
2. Create getNotes function that returns "Your notes..."
3. Export getNotes function
4. From app.js, load in and call the function printing message to console
*/

const chalk = require("chalk");
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

/* --- Challenge: Use the chalk library in your project ---
1. Install latest version of chalk
2. Load chalk into app.js
3. Use it to print the string "Success!" to the console in green
4. Test your work

Bonus: Use docs to mess around with other styles. Make text bold and inversed.
*/

// Use the text colors
console.log(chalk.green("Success!"));
console.log(chalk.red("Error!"));
console.log(chalk.blue("In progress..."));

// Background colors
console.log(chalk.bgGreen.black("Hooray!"));
console.log(chalk.bgRed("Oops!"));
console.log(chalk.bgBlueBright("Smackdown!"));

// Underline and bold
const inactiveLink = chalk.underline.bold.green("Inactive link");
const visitedLink = chalk.underline.bold.magenta("Visited link");
const activeLink = chalk.underline.bold.blueBright("Active link");
const text = chalk.underline.bold.white("Normal text");

console.log(inactiveLink);
console.log(visitedLink);
console.log(activeLink);
console.log(text);