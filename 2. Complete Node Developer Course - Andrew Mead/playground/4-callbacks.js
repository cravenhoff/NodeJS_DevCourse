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

// Geo-Coding Sample: Pre-Callback Function
const geocode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    };

    return data;
}

data = geocode("Port Moresby");
console.log(data);
