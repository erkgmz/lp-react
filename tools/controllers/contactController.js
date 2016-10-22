import nodemailer from 'nodemailer';

let contactController = {};

/* eslint-disable no-console */

contactController.sendMessage = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  // create reusable transporter object using the default SMTP transport
  let  transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'senderforkire@gmail.com', pass: 'B3nI2EkAYvFA' } });

  let mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: 'e@erikgomez.co', // list of receivers
      subject: `${name}(${email}) has sent you a message.`, // Subject line
      text: `
        BEGIN MESSAGE: ${message}
        name: ${name}
        email: ${email}
        `
  };
  console.log(mailOptions);

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  res.json({name: name, email: email, message: message});
};

module.exports = contactController;
