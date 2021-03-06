const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../build/server'),
    publicPath: '/build/server/'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      },
      {
        test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		        	fallback: 'style-loader',
		          	use: 'css-loader?modules',
		        }),
      }
    ]
  },
  target: 'node',
  plugins: [
    new ExtractTextPlugin('../build/statics/styles.css'),
  ],
}
