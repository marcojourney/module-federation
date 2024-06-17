const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const path = require('path');
const packageJson = require('./package.json');

const version = packageJson.version;

module.exports = {
  entry: './src/index',
  mode: 'production',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'auto',
    // filename: `[name].[contenthash].${version}.js`,
    // path: path.resolve(__dirname, `dist/${version}`),
    // publicPath: '/',
    // clean: true, // Clean the output directory before emit.
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'accounting',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './ChartAccount': './src/ChartAccount',
        './NewChartAccount': './src/NewChartAccount',
        './IncomeStatement': './src/modules/IncomeStatement',
        './BalanceSheet': './src/modules/BalanceSheet',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new ExternalTemplateRemotesPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].${version}.css`,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
