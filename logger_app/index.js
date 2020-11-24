const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

// Instantiate new logger{} object
const logger = new Logger();

logger.on("message", (data) => {
    // Console out data
    // console.log("Listener Called: ", data);

    // Append data to logs.txt file and read from it
    fs.writeFile(path.join(__dirname, "logs.txt"), `${data.id}: ${data.msg} \n`, err => {
        if(err) {
            throw err;
        }

        console.log("File successfully written to...");
    })
})

logger.log("Hello There!");
logger.log("Hello You!");
logger.log("Hello People!");