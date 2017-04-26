'use strict';

var _sendgrid = require('sendgrid');

var _sendgrid2 = _interopRequireDefault(_sendgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

/* eslint-disable no-console */

var contactController = {};

contactController.sendMessage = function (req, res) {
  var _req$body = req.body;
  var name = _req$body.name;
  var email = _req$body.email;
  var message = _req$body.message;

  var helper = _sendgrid2.default.mail;

  var from_email = new helper.Email(process.env.SENDGRID_EMAIL);
  var to_email = new helper.Email(process.env.SENDGRID_EMAIL);
  var subject = name + ' has sent you a message from your site';
  var content = new helper.Content('text/plain', name + ' <' + email + '> has sent you a message:\n                                                     ' + message);
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = (0, _sendgrid2.default)(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log(error);
      return res.json({ error: error, name: name, email: email, message: message });
    } else {
      var statusCode = response.statusCode;
      var body = response.body;
      var headers = response.headers;

      return res.json({ statusCode: statusCode, body: body, headers: headers });
    }
  });
};

module.exports = contactController;
