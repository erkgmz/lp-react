import nodemailer from 'nodemailer';

let contactController = {};

/* eslint-disable no-console */

contactController.sendMessage = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  // create reusable transporter object using the default SMTP transport
  let  transporter = nodemailer.createTransport({
    service: 'Yahoo',
    auth: {
      user: 'senderforkire@yahoo.com',
      pass: 'DwUT6A4krBqe'
    }
  });

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
  transporter.sendMail(mailOptions, function(error, data){
    if(error){
      console.log(error);
      res.json({error: error});
    }
    console.log('Message sent: ' + data.response);
    res.json({name: name, email: email, message: message, data: data});
  });
};

module.exports = contactController;
