// Asynchronous Function: setTimeout()
setTimeout(() => {
    console.log("Two seconds are up!");
}, 2000);

// Synchronous Function: Array.Filter()
const people = ["George", "Scott", "Mike", "Kyle", "Sam", "Max"];
const shortNames = people.filter((person) => {
    return person.length <= 4;
});

console.log(people);
console.log(shortNames);