const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

// Instantiate new logger{} object
const logger = new Logger();

logger.on("message", (data) => {
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

// Messages for logx.txt file
// logger.log("Hello There!");
// logger.log("Hello You!");
// logger.log("Hello People!");
logger.log("Adding more now that we got the file logging correct.");
logger.log("Let's give it up some more for the hussle.");
logger.log("Who said it couldn't be done, huh?!");
logger.log("We just proved them wrong, again...");
logger.log("We optimized the codebase and made it better and much more clearner!");
logger.log("appendFil() and readFile() did the job perfectly.");
logger.log("Let's see if we can build on from this to create even better applications...");
logger.log("Peace... This is the last message from me... for now! :)");