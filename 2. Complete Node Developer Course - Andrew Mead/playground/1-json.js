const fs = require("fs");

// Create sample object
// const book = {
//     title: "Grit",
//     author: "Angela Duckworth"
// }

// Output book{} object
// console.log(book);

// Stringify the object to JSON
// const JSONData = JSON.stringify(book);
// Output JSON Data
// console.log(JSONData);
// console.log(JSONData.title); // Can't access property as JSONData is now a string.

// Parse JSON Data
// const parsedData = JSON.parse(JSONData);
// console.log(parsedData.author);

// Create file for JSON Data
// fs.writeFileSync("1-json.json", JSONData);

// Read stored JSON Data
const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer); // Output buffer data from JSON File
const dataJSON = dataBuffer.toString(); // Conver buffer data to JSON
console.log(dataJSON);
const data = JSON.parse(dataJSON); // Parse JSON string
console.log(`${data.title} by ${data.author}`);
