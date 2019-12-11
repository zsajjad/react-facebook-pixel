const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    demo: ['webpack/hot/dev-server', './demo/index.js'],
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['*', '.js'],
  },
  devServer: {
    contentBase: './demo',
    historyApiFallback: true,
    compress: false,
    host: process.env.IP || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 8080,
  },
};
