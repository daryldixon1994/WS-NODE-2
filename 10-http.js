// create server
const path = require("path");
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        // res.write("<h1>THIS IS RESPONSE</h1> <button>Clcik me </button>");
        const file = fs.readFileSync(path.resolve("content", "index.html"));
        res.write(file);
        res.end();
    } else if (req.url === "/about") {
        const file = fs.readFileSync(path.resolve("content", "about.html"));
        res.write(file);
        res.end();
    } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("WRONG REQUEST");
        res.end();
    }
});

// listen to the request
server.listen(5000, () => {
    console.log("server is runnig and listening ");
});
// url
