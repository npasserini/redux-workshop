var webpack = require('webpack');

var publicPath = 'http://localhost:3001/build';

var config = {
  entry: {
     app: [
      'webpack-dev-server/client?http://localhost:3000', 
      'webpack/hot/dev-server', 
      './src/index']
  },
  output: {
    filename: '[name].js',
    path: '/build',
    publicPath: publicPath
  },
  devServer: {
    publicPath: publicPath,
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
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};

module.exports = config;
