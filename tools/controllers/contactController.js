// import nodemailer from 'nodemailer';
import sendgrid from 'sendgrid';

let contactController = {};

/* eslint-disable no-console */

contactController.sendMessage = (req, res) => {
  let {name, email, message} = req.body;

  let helper = require('sendgrid').mail;
  let from_email = new helper.Email(email);
  let to_email = new helper.Email(process.env.SENDGRID_EMAIL);
  let subject = `You've received a message from ${name}!`;
  let content = new helper.Content('text/plain', message);
  let mail = new helper.Mail(from_email, subject, to_email, content);

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

//   let name = req.body.name;
//   let email = req.body.email;
//   let message = req.body.message;
//
//   // create reusable transporter object using the default SMTP transport
//   let  transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'senderforkire@gmail.com',
//       pass: 'B3nI2EkAYvFA'
//     }
//   });
//
//   let mailOptions = {
//       from: `"${name}" <${email}>`, // sender address
//       to: 'e@erikgomez.co', // list of receivers
//       subject: `${name}(${email}) has sent you a message.`, // Subject line
//       text: `
//         BEGIN MESSAGE: ${message}
//         name: ${name}
//         email: ${email}
//         `
//   };
//   console.log(mailOptions);
//
//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, function(error, data){
//     if(error){
//       console.log(error);
//       res.json({error: error});
//     } else {
//       console.log('Message sent: ' + data.response);
//       res.json({name: name, email: email, message: message, data: data});
//     }
//   });
};

module.exports = contactController;
