const path = require('path');

module.exports = {
  entry: '',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public', 'scripts')
  }
};
