// Understanding Asynchronous Node
console.log("Starting");

// Runs after two seconds
setTimeout(() => {
    console.log("2 Second Timer");
}, 2000);

// Runs immediately
setTimeout(() => {
    console.log("0 Second Timer");
}, 0);

console.log("Stopping");