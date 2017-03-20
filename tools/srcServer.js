/* eslint-disable no-console */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import historyApiFallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

// routes
const contactRoute = require('./routes/contactRoute.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(historyApiFallback());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.ejs'));
});

// mount routes
app.use('/contact', contactRoute);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  } else {
    console.log(`App is now running on ${port}`);
    open(`http://localhost:${port}`);
  }
});
