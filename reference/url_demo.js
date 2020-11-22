const url = require("url");

// Create sample URL
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());
