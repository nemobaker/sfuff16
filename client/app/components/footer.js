import React from 'react';

class Footer extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
      <footer>
        <ul>
          <li>patreon</li>
          <li>facebook</li>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
      </footer>
  	);
  }
}

export default Footer;