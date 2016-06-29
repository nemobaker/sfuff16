import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="social-footer">
        <div className="container">
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/sfurbanfilmfest/"><i className="fa fa-facebook fa-2x"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/sfurbanfilmfest/"><i className="fa fa-instagram fa-2x"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/sfurbanfilmfest"><i className="fa fa-twitter fa-2x"></i></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCa0T4tQBqEqVx-OApGF0QKg/feed"><i className="fa fa-youtube fa-2x"></i></a>
            </li>
          </ul>
          <h5>© SF Urban Film Fest 2016</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
