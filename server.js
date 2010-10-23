// var http = require('http'),
//   fs = require('fs'),
//   io = require('socket.io'),
//   sys = require('sys'),
//   server = http.createServer(function(req, res){ 
//     fs.readFile(__dirname + '/index.html', function(err, data){
//      res.writeHead(200, {'Content-Type': 'text/html'})
//      res.write(data, 'utf8');
//      res.end();
//     });
// }); 


var express = require('express'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});
    
var app = express.createServer();
app.configure(function () {
   app.use(express.bodyDecoder());
   app.use(express.staticProvider(__dirname + '/public'));
});

app.post('/', function(req, res) {
   //console.log(req.body.texto);
   //res.send("enviado com sucesso");
   //res.send(200);
   bayeux.getClient().publish('/temporeal', req.body.texto);
   res.send(200);
});

port = process.env.PORT || "8000";
bayeux.attach(app);
app.listen(port);

// var socket = io.listen(server, {transports:['websocket', 'htmlfile', 'xhr-multipart', 'xhr-polling']}); 
// socket.on('connection', function(client){ 
//   console.log('Num Clients: ' + socket.clients.length);
//   client.on('message', function(data) {
//     if (data == 'disconnect') {
//       client.send('disconnected !!!');
//       client.connection.end();
//     } else {
//       client.send('received your message: ' + data);
//     }
//   }); 
//   client.on('disconnect', function(){ console.log('disconnected'); }); 
// });