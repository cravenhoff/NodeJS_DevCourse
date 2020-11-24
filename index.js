const Logger = require("./logger");

// Instantiate new logger{} object
const logger = new Logger();

logger.on("message", (data) => {
    console.log("Listener Called: ", data);
})

logger.log("Hello There!");
logger.log("Hello You!");
logger.log("Hello People!");