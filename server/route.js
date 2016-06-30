import renderIndex from './requestHandler';
import keys from './keys';

const smtpEmail = process.env.SMTPEMAIL || keys.smtpEmail;
const smtpUser = process.env.SMTPUSER || keys.smtpUser;
const smtpPassword = process.env.SMTPPASSWORD || keys.smtpPassword;

export default (app) => {
  app.get('/', renderIndex);

  //route to send email
  //I texted you the PW, but it should probably be an environment variable once deployed.
  //also update the email on line 22 to whatever email you want
  app.post('/send', function (req, res) {
    var email = require('emailjs/email');
    var server  = email.server.connect({
      user: user,
      password: password,
      host: 'smtp.sendgrid.net',
      port: 465,
      ssl: true,
    });

    server.send({
      text: req.body.message,
      from: req.body.name + " <" + req.body.email + ">",
      to: 'SFUFF <' + email + '>',
      subject: 'Message from SFUFF Website',
    }, function (err, message) { console.log(err || message); });
  });
};
