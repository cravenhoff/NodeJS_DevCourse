const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Initialize object
const myEmitter = new MyEmitter();
// const myEmitter = new EventEmitter(); // Achieves the same thing...

// Event listener
myEmitter.on("event", () => {
    console.log("Event Fired!");
})

// Initialize or emit event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");