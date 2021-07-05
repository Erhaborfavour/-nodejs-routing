const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
    // req.statusCode = 200;

    let path = "./"
    if (req.url === "/" || req.url === '/home') {
         path = path + "index.html" }
else if (req.url === "/contact") {
        path = path + "contact.html" 
    } else if (req.url === "/about" || req.url === "/about-us") {
       path = path + "about.html"
    } else  {
        path = path + "error.html"

    }

    fs.readFile(path, (err, data) => {
        if (path === './error.html') {
            res.writeHead (404, {"Content-Type": "text/html"});
        } else {
            res.writeHead (200, {"Content-Type": "text/html"});
        }

        if (err) {
            console.log(err)
            return; 
        } else {
        res.end(data)   
        }
        
    })
})

server.listen (port, hostname, ()=>{

console.log(`Server running at http://${hostname}:${port}`)
});