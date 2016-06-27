import React from 'react';

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {};
  }

  render() {
    return (
      <div className="contact-section">
        <h2>contact</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={this.props.updateName()} onChange={(e) => this.props.updateName(e)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={this.props.updateEmail()} onChange={(e) => this.props.updateEmail(e)} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" value={this.props.updateMessage()} onChange={(e) => this.props.updateMessage(e)} />
          </div>
          <div className="button">
            <button type="button" onClick={(e) => this.props.handleContactForm(e)}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
