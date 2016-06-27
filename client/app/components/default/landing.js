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
        <h4>november 14 - 20, 2016</h4>
      </div>
    );
  }
}

export default Landing;