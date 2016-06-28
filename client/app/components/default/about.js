import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {};
  }

  render() {
    return (
      <div className="about-section" id="about">
        <div className="about-container">
          <Grid>
            <Row className="show-grid">
              <Col md={2}>
                <h2>
                  <span>about</span>
                </h2>
              </Col>
              <Col md={1} />
              <Col md={8}>
                <h4>The SF Urban Film Fest (SFUFF) is a unique film festival that focuses on cities and civic engagement inspired by great storytelling.  The festival believes compelling stories can help shape urbanist ideas, practice, and project implementation to improve our cities.</h4>
                <br />
                <h4>SFUFF is organized by urban planners and screens films in tandem with panel discussions and storytelling workshops.   Our 3rd annual week-long festival will be November 14-20, 2016.</h4>
              </Col>
              <Col md={1} />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;