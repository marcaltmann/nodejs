const http = require('http');

let server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
});

server.listen(3000);

console.log('Server running on http://localhost:3000');
