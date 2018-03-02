var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
      index: './components/index.js'
    },
    output: {
      path: __dirname + '/dist/',
      filename: '[name].js',
      libraryTarget: 'umd'
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom'
    },
    plugins: [
      new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    ],
    resolve: {
      extensions: ['.js', '.jsx' ]
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          },
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          },
          exclude: /node_modules/
        },
        {
          test: /\.(svg)$/,
          loader: 'svg-url-loader'
        },
        {
          test: /\.(gif|png|jpg)$/,
          loader: 'url-loader',
          query: {
            limit: '25000'
          },
        },
        { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] }) },
        { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader',
          use: [ 'css-loader', 'less-loader' ] }) }
      ]
    }
};