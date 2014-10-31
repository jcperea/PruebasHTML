var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var options = {
  dotfiles: 'ignore',
  etag: false,
  index: true,
  maxAge: 10
};

app.use(express.static('public', options));

var server = app.listen(9876, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Servidor chusquero escuchando en http://%s:%s', host, port);

});