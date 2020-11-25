const path = require("path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));
console.log(__dirname);

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).dir);
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);

// Concatenate paths
console.log(path.join(__dirname, "test"));
console.log(path.join(__dirname, "test", "hello.html"));