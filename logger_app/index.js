const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

// Instantiate new logger{} object
const logger = new Logger();

logger.on("message", (data) => {
    // Console out data
    // console.log("Listener Called: ", data);

    // Write data to logs.txt file
    fs.writeFile(path.join(__dirname, "logs.txt"), `${data.id}: ${data.msg} \n`, err => {
        if(err) {
            throw err;
        }

        console.log("File successfully written to...");

        // Append data to logs.txt file
        fs.appendFile(path.join(__dirname, "logs.txt"), `${data.id}: ${data.msg} \n`, err => {
            if(err) {
                throw error;
            } else {
                console.log("File successfully appended...");
            }
        })

        // Read from logs.txt file
        fs.readFile(path.join(__dirname, "logs.txt"), "utf8", (err, data) => {
            if(err) {
                throw err;
            }

            console.log(data);
        })
    })
})

logger.log("Hello There!");
logger.log("Hello You!");
logger.log("Hello People!");