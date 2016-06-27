import React from 'react';

class Footer extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
      <footer className="social-footer">
        <div className="container">
          <ul className="social-icons">
            <li>
              <a href="#"><i className="fa fa-facebook fa-2x"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-instagram fa-2x"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-youtube fa-2x"></i></a>
            </li>
          </ul>
        </div>
      </footer>
  	);
  }
}

export default Footer;