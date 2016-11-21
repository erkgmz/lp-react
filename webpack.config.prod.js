import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.(scss)$/, loader: ExtractTextPlugin.extract('css?module&localIdentName=[local]---[hash:base64:5]!postcss!resolve-url!sass')},
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]'}
      // {test: /\.(jpg|png)$/, loader: 'url-loader?limit=1000000'},
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      // {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
