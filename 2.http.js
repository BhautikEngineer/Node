// Import the core 'http' module
const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response content
  res.end('Hello, Node.js!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});