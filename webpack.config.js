module.exports = {
  entry: './src/client.js',
  output: {
    path: './docs',
    filename: 'client.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
