const http = require('http');

// local host = '127.0.0.1'
const hostname = 'localhost';
const port = 3000;


// khai bao de chay thoi
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n hoi dan It vs eric');
});

// callback function
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



