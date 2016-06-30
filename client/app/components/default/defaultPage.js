import React from 'react';
import Landing from './landing';
import About from './about';
import Patreon from './patreon';
import Contact from './contact';
import $ from 'jquery';

class Default extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      message: null,
    };
  }

  handleContactForm(e){
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (this.state.name && validateEmail(this.state.email) && this.state.message) {
      const _user = 'sfuff';
      const _password = 'goldengate1';
      const _email = 'nemobaker@gmail.com';

      var email = require('emailjs/email');
      var server  = email.server.connect({
        user: _user,
        password: _password,
        host: 'smtp.sendgrid.net',
        port: 465,
        ssl: true,
      });

      server.send({
        text: this.state.message,
        from: this.state.name + " <" + this.state.email + ">",
        to: 'SFUFF <' + _email + '>',
        subject: 'Message from SFUFF Website',
      }, function (err, message) { console.log(err || message); });

      // $.post('/send', {
      //   name: this.state.name,
      //   email: this.state.email,
      //   message: this.state.message,
      // })

      alert('Thanks for reaching out! We\'ll be in touch');

      this.setState({
        name: '',
        email: '',
        message: '',
      });
    } else {
      alert('Whoops! Please include your name, e-mail, and a message');
    }
  }

  updateName(e){
    if (e) {
      let newName = e.target.value;
      this.setState({
        name: newName,
      });
    } else {
      return this.state.name;
    }
  }

  updateEmail(e){
    if (e) {
      let newEmail = e.target.value;
      this.setState({
        email: newEmail,
      })
    } else {
      return this.state.email;
    }
  }

  updateMessage(e){
    if (e) {
      let newMessage = e.target.value;
      this.setState({
        message: newMessage,
      });
    } else {
      return this.state.message;
    }
  }

  render() {
    return (
      <div>
        <Landing />
        <About />
        <Patreon />
        <Contact
          handleContactForm={this.handleContactForm.bind(this)}
          updateName={this.updateName.bind(this)}
          updateEmail={this.updateEmail.bind(this)}
          updateMessage={this.updateMessage.bind(this)}/>
      </div>
    );
  }
}

export default Default;
