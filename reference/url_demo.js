const url = require("url");

// Instantiate new sample URL
const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

// Output sample URL
console.log(myUrl);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Get host (root domain)
console.log(myUrl.host);

// Get hostname
console.log(myUrl.hostname);

// Get pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Query (params) object
console.log(myUrl.searchParams);
