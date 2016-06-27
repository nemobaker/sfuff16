import React from 'react';

class Header extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {}
  }

  render() {
    return (
      <div className="nav-header container">
        <img
          src="../client/app/styles/sfuff-logo.jpg"
          alt="sfuff logo"
          className="sfuff-logo"
        />
        <ul className="nav-list nav-right">
          <li>
            <a href="#about">about</a>
          </li>
          <li>/</li>
          <li>
            <a href="#patreon">patreon</a>
          </li>
          <li>/</li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
