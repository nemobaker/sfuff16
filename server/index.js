import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

app.get('/', function(req, res) {
  res.send('testing');
});

app.listen(port, function(err) {
  if (err) {
  	return console.log(err);
  }
  console.log('Listening on port:' + port);
});