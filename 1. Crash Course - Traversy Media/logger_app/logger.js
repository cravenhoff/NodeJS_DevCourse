const EventEmitter = require("events");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

// console.log(uuid.v4());

class Logger extends EventEmitter {
    // log() Method
    log(msg) {
        // Call event
        this.emit("message", {id: uuid.v4(), msg});
    }
}

// Export module
module.exports = Logger;