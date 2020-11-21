const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if(err) {
//         throw err;
//     } else {
//         console.log("Folder created...");
//     }
// })

// Create and write file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello Node World!", err => {
    if(err) {
        throw err;
    }

    console.log("File created and written to...");
})

// Replace contents of file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), " I love Node.JS.", err => {
    if(err) {
        throw err;
    }

    console.log("File overidden...");
})