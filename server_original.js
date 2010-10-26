var express = require('express'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});
    
var app = express.createServer();
app.configure(function () {
   app.use(express.logger());
   app.use(express.bodyDecoder());
   app.use(express.staticProvider(__dirname + '/public'));
});

app.post('/lance', function(req, res) {
  if (req.param('token') != 'abc') { res.send(403); return; }
  bayeux.getClient().publish('/temporeal', {equipe: req.body.equipe, texto: req.body.texto});
  res.send(200);
});

port = process.env.PORT || "8000";
bayeux.attach(app);
app.listen(port);