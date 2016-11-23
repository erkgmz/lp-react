import sendgrid from 'sendgrid';

let contactController = {};

/* eslint-disable no-console */

contactController.sendMessage = (req, res) => {
  let {name, email, message} = req.body;

  let helper = sendgrid.mail;
  let from_email = new helper.Email(email);
  let to_email = new helper.Email(process.env.SENDGRID_EMAIL);
  let subject = `You've received a message from ${name}!`;
  let content = new helper.Content('text/plain', message);
  let mail = new helper.Mail(from_email, subject, to_email, content);
  console.log(mail);

  let sg = sendgrid(process.env.SENDGRID_API_KEY);
  let request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
    if(error) {
      console.log(error);
      return res.json({error});
    } else {
      let {statusCode, body, headers} = response;
      return res.json({statusCode, body, headers});
    }
  });
};

module.exports = contactController;
