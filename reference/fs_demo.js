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

    // Append file
    fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " I love Node.JS.", err => {
        if(err) {
            throw err;
        }
    
        console.log("File appended...");
    })
})

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
    if(err) {
        throw err
    } else {
        console.log(data);
    }
})