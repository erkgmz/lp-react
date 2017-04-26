'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _connectHistoryApiFallback = require('connect-history-api-fallback');

var _connectHistoryApiFallback2 = _interopRequireDefault(_connectHistoryApiFallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-console*/

var port = 8080;

var app = (0, _express2.default)();
var bodyParser = require('body-parser');

var contactRoute = require('./routes/contactRoute.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, _connectHistoryApiFallback2.default)());
app.use((0, _compression2.default)());
app.use(_express2.default.static('dist/static'));

app.use('/contact', contactRoute);
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, './static/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log('App is now running on ' + port);
    // open(`http://localhost:${port}`);
  }
});
