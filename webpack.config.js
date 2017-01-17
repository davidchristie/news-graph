const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/js/client.js',
  output: {
    path: './dist',
    filename: 'client.js'
  },
  proxy: {
    '**': 'http://localhost:8080'
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
