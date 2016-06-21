import React from 'react';

class Header extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {}
  }

  render() {
  	return (
      <div>
        <h2>sf urban film fest</h2>
        <ul>
          <li>about</li>
          <li>patreon</li>
          <li>contact</li>
        </ul>
      </div>
  	);
  }
}

export default Header;