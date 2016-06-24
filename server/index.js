import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

import middleware from './middleware';
middleware(app, express);

import routes from './route';
routes(app, express);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening on port:' + port);
});
