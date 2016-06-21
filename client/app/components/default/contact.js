import React from 'react';
import $ from 'jquery';

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  let sendEmail =     $.post('http://localhost:3000/send', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })

  render() {
    return (
      <div>
        <h2>contact</h2>
        <form>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label for="message">Message:</label>
            <input type="text" id="message" />
          </div>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
