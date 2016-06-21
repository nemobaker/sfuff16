var express = require( 'express');
var React = require( 'react');
var ReactDOMServer = require( 'react-dom/server');
import renderFullPage from './view';
import App from '../client/app/app';

const app = express();

const port = process.env.PORT || 3000;

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <div>
      <App />
    </div>
  )
  res.send(renderFullPage(html));
});

app.post('/send', function (req, res) {
  var email = require('emailjs/email');
  var server  = email.server.connect({
     user:    "sfuff",
     password:"goldengate1",
     host:    "smtp.sendgrid.net",
     port:    465,
     ssl:     true
  });

  server.send({
     text:    "example body text",
     from:    "you <username@your-email.com>",
     to:      "Neems <nemobaker@gmail.com>",
     subject: "SFUFF"
  }, function(err, message) { console.log(err || message); });
});

app.listen(port, (err) => {
  if (err) {
  	return console.log(err);
  }
  console.log('Listening on port:' + port);
});
