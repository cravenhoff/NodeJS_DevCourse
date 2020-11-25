const http = require("http");

// Output the http object construct
// console.log(http);

// Create server
http.createServer((req, res) => {
    // Write to server
    res.write("Hello World");
    res.end();
}).listen(5050, () => {
    console.log("Server running at port: 5050");
})
