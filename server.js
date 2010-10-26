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
  if (req.param('token') != 'f54d6efbde3034508e37aa0df14c3d8fe0c1b506c') { res.send(403); return; }
  bayeux.getClient().publish('/temporeal', {equipe: req.body.equipe, texto: req.body.texto});
  res.send(200);
});

port = process.env.PORT || "8000";
bayeux.attach(app);
app.listen(port);