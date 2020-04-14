const path = require('path');

module.exports = {
  entry: './source/javascript/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public', 'scripts')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
