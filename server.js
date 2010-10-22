var http = require('http'),
  fs = require('fs'),
  io = require('socket.io'),
  sys = require('sys'),
  server = http.createServer(function(req, res){ 
    fs.readFile(__dirname + '/index.html', function(err, data){
    	res.writeHead(200, {'Content-Type': 'text/html'})
    	res.write(data, 'utf8');
    	res.end();
    });
}); 

port = process.env.PORT || "8000";
server.listen(port);

var socket = io.listen(server, {transports:['websocket', 'htmlfile', 'xhr-multipart', 'xhr-polling']}); 
socket.on('connection', function(client){ 
  console.log('Num Clients: ' + socket.clients.length);
  client.on('message', function(data) {
    if (data == 'disconnect') {
      client.send('disconnected !!!');
      client.connection.end();
    } else {
      client.send('received your message: ' + data);
    }
  }); 
  client.on('disconnect', function(){ console.log('disconnected'); }); 
});