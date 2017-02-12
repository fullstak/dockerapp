var path = require("path");

module.exports = {  
  entry: './src/app.ts',
  output: {
    filename: './build/app.js'
  },
  watch: true,
  target: 'node',
  resolve: {
    extensions: ['.js','.ts']
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: path.resolve(__dirname, "node_modules") },
      { test: /\.js$/,  exclude: path.resolve(__dirname, "node_modules")}
    ]
  }
}