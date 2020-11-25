const http = require("http");
const path = require("path");
const fs = require("fs");

// Create new server
const server = http.createServer((req, res) => {
    // Test request url
    console.log(req.url);

    // index.html file and root url
    if(req.url === "/") {
        // Output contents of public/index.html file
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            if(err) {
                throw err;
            } else {
                // Specify the status code and content type
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(content);
            }
        })
    }

    // about.html file
    if(req.url === "/about") {
        // Output contents of public/index.html file
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            if(err) {
                throw err;
            } else {
                // Specify the status code and content type
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(content);
            }
        })
    }

    // Rest API or Microserver example
    if(req.url === "/api/users") {
        const users = [
            {name: "Bob Smith", age: 40},
            {name: "John Doe", age: 30}
        ];

        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(users));
    }
});

// Port listener
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})