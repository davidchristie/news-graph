module.exports = {
  entry: './src/js/client.js',
  output: {
    path: './docs',
    filename: 'client.js'
  },
  proxy: {
    '**': 'http://localhost:8080'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
