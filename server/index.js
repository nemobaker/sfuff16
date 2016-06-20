var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Testing');
});

app.listen(3000, function() {
  console.log('Listening on Port 3000');
});