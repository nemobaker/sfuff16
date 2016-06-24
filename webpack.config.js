const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: { path: __dirname, filename: '/client/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
};
