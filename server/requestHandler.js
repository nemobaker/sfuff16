import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/app/app';
import renderFullPage from './view';

export default (req, res) => {
  const html = ReactDOMServer.renderToString(
    <div>
      <App />
    </div>
  );
  res.send(renderFullPage(html));
};
