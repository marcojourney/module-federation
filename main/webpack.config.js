const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'production',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'main',
      remotes: {
        inventory: 'inventory@[inventoryUrl]/remoteEntry.js',
        accounting: 'accounting@[accountingUrl]/remoteEntry.js',
        report: 'report@[reportUrl]/remoteEntry.js',
      },
      shared: { 
        react: { singleton: true }, 
        'react-dom': { singleton: true },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
