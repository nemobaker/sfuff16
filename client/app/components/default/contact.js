import React from 'react';

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {};
  }

  render() {
    return (
      <div>
        <h2>contact</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
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