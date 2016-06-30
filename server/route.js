import renderIndex from './requestHandler';

export default (app) => {
  const _user = process.env.SMTPUSER || 'sfuff';
  const _password = process.env.SMTPPASSWORD || 'goldengate1';
  const _email = process.env.SMTPEMAIL || 'currankim7@gmail.com';

  app.get('/', renderIndex);

  //route to send email
  //I texted you the PW, but it should probably be an environment variable once deployed.
  //also update the email on line 22 to whatever email you want
  app.post('/send', function (req, res) {
    var email = require('emailjs/email');
    var server  = email.server.connect({
      user: _user,
      password: _password,
      host: 'smtp.sendgrid.net',
      port: 465,
      ssl: true,
    });

    server.send({
      text: req.body.message,
      from: req.body.name + " <" + req.body.email + ">",
      to: 'SFUFF <' + _email + '>',
      subject: 'Message from SFUFF Website',
    }, function (err, message) { console.log(err || message); });
  });
};
