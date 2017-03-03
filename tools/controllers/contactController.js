import sendgrid from 'sendgrid';

require('dotenv').config();

/* eslint-disable no-console */

let contactController = {};

contactController.sendMessage = (req, res) => {
  let {name, email, message} = req.body;
  let helper = sendgrid.mail;

  let from_email = new helper.Email(process.env.SENDGRID_EMAIL);
  let to_email   = new helper.Email(process.env.SENDGRID_EMAIL);
  let subject    = `${name} has sent you a message from your site`;
  let content    = new helper.Content('text/plain', `${name} <${email}> has sent you a message:
                                                     ${message}`);
  let mail       = new helper.Mail(from_email, subject, to_email, content);

  let sg = sendgrid(process.env.SENDGRID_API_KEY);
  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    if(error) {
      console.log(error);
      return res.json({error, name, email, message});
    } else {
      let {statusCode, body, headers} = response;
      return res.json({statusCode, body, headers});
    }
  });
};

module.exports = contactController;
