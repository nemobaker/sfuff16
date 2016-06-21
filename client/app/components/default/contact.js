import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      name: 'nemo',
      email: null,
      message: null,
    };
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  sendEmail(){
    $.post('http://localhost:3000/send', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
  }

  render() {
    return (
      <div>
        <h2>contact</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.changeName.bind(this)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={this.state.name} onChange={console.log('clicked')} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" />
          </div>
          <div className="button">
            <button onClick={this.sendEmail.bind(this)}>Submit</button>
          </div>
      </div>
    );
  }
}

export default Contact;
