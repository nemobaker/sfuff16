import React from 'react';
import ReactDOM from 'react-dom';

// import App from '.app/app.js';

const render = () => {
  ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('app')
  );
};

render();