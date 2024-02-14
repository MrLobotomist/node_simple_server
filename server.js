const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="height: 100%; margin: 0px; padding: 0px; display: flex; align-items: center; ' +
        'justify-content: center;">Hello, world!</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});