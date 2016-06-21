var express = require( 'express');
var React = require( 'react');
var ReactDOMServer = require( 'react-dom/server');
import renderFullPage from  './view';

const app = express();

const port = process.env.PORT || 3000;

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <div>
      Hello World!
    </div>
  )
  res.send(renderFullPage(html));
});

app.listen(port, (err) => {
  if (err) {
  	return console.log(err);
  }
  console.log('Listening on port:' + port);
});
