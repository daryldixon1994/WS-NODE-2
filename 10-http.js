// create server
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/profile") {
        res.write("<h1>Profile Page</h1>");
        res.end();
    } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Hello </h1> <button>play</button>");
        res.end();
    }
});

// listen to the request
server.listen(5000, () => {
    console.log("server is runnig and listening ");
});
// url
