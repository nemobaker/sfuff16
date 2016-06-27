import React from 'react';

class Landing extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {};
  }

  render() {
    return (
      <div className="landing-header">
        <h1>sf urban film fest</h1>
        <h4>festival dates go here</h4>
      </div>
    );
  }
}

export default Landing;