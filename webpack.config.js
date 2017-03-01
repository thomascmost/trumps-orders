var webpack = require('webpack');
var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true
    }
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true
    }
  }
]

module.exports = {
  resolve: {
    alias: {
      moment: 'moment/moment.js',
    },
    extensions: ['.scss', '.ts', '.js']
  },

  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'Thomas Constantine Moore',
      inject: 'body',
      hash: true,
      template: 'src/index.html'
    }),
    new LiveReloadPlugin(),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 4000,
      server: { baseDir: ['public'] }
    })
  ],

  entry: ['./src/client/main.ts'],
  output: {
    path: __dirname + "/public/",
    publicPath: '/',
    filename: "bundle.js"
  },

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.jpg$/,    loader: "url-loader?limit=10000&minetype=image/jpg" },
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader', // The backup style loader
              loader: styleLoaders
          })
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: true
  }
};