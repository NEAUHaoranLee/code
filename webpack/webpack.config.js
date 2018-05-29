const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    host: "127.0.0.1",
    contentBase: path.resolve(__dirname, "dist"),
    port: 8081,
    compress: true
  }
};