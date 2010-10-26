express = require 'express'
faye = require 'faye'

bayeux = new faye.NodeAdapter
  mount: '/faye'
  timeout: 45

app = express.createServer()
app.configure ->
  app.use express.logger()
  app.use express.bodyDecoder()
  app.use express.staticProvider("#{__dirname}/public")

app.post '/lance', (req, res) ->
  if req.param('token') != 'abc'
    res.send(403) 
    return
  bayeux.getClient().publish '/temporeal', 
    time: req.body.time
    texto: req.body.texto
  res.send 200
  
port = process.env.PORT || "8000"
bayeux.attach app
app.listen port 