var webpack = require('webpack');

var config = {
  entry: {
     app: ['webpack/hot/dev-server', './src/index']
  },
  output: {
    filename: '[name].js',
    path: '/build',
    publicPath: 'http://localhost:3000/build'
  },
  devServer: {
    publicPath: 'http://localhost:3000/build',
    inline: true,
    progress: true,
    hot: true,
    quiet: false,
    stats: { colors: true },
    devtool: "#eval-source-map"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel?stage=0'] },
      { test: /\.styl$/, loader: 'style/url!file?name=[hash].css!stylus' }
    ]
  }
};

module.exports = config;
