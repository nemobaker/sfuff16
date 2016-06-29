import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar className="nav-container">
        <Navbar.Header className="nav-header">
          <img
            src="../client/app/styles/sfuff-logo.jpg"
            alt="sfuff logo"
            className="sfuff-logo"
          />
          <Navbar.Toggle className="toggle-nav" />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className="nav-item" eventKey={1} href="#about">About</NavItem>
            <NavItem className="nav-item" eventKey={2} href="#patreon">Patreon</NavItem>
            <NavItem className="nav-item" eventKey={3} href="#contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
