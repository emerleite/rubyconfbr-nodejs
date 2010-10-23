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
   bayeux.getClient().publish('/temporeal', req.body.texto);
   res.send(200);
});

port = process.env.PORT || "8000";
bayeux.attach(app);
app.listen(port);