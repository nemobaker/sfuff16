import React from 'react';
import Landing from './landing';
import About from './about';
import Patreon from './patreon';
import Contact from './contact';

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