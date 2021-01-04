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

// Geo-Coding Sample: Asynchronous Pre-Callback Function with setTimeout()
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
    
        return data;
    }, 2000);
}

data = geocode("Port Moresby");
console.log(data);
