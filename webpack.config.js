module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './public',
    filename: 'client.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
