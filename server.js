var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World no.de\n' + process.env.PORT);
});

port = process.env.PORT || "8000";

server.listen(Number(port));

console.log('Server running at http://127.0.0.1:8000/');
