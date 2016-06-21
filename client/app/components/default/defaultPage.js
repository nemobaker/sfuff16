import React from 'react';

class Default extends React.Component {
  constructor (props) {
  	super(props);

  	this.state = {};
  }

  render() {
  	return (
      <div>
        <Landing />
        <About />
        <Patreon />
        <Contact />
      </div>
  	)
  }
}

export default Default;