const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
};
