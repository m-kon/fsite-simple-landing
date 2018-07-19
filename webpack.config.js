const path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /js/],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    inline: true
  },
};