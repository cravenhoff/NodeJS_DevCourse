const http = require("http");
const path = require("path");
const fs = require("fs");

// Create new server
const server = http.createServer((req, res) => {
    // Test request url
    console.log(req.url);

    if(req.url === "/") {
        // Specify the status code and content type
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end("<h1>Home</h1>");
    }
});

// Port listener
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})