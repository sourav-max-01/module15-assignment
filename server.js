// Import the necessary modules
const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Home Page route
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page');
    } 
    // About Page route
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page');
    } 
    // Contact Page route
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page');
    } 
    // File Write route
    else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Failed to write file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File written successfully');
            }
        });
    } 
    // 404 Not Found route
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// The server should listen on port 5500
const PORT = 5500;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
