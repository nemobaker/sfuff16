import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Patreon extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {};
  }

  render() {
    return (
      <div className="patreon-section" id="patreon">
        <div className="patreon-container container-fluid">
          <Grid>
            <Row className="show-grid">
              <Col md={2}>
                <h2 className="section-header">
                  <span>patreon</span>
                </h2>
              </Col>
              <Col md={1} />
              <Col md={8}>
                <h4>Patreon is a crowdfunding platform for artists. This year SFUFF will be featured on Patreon, allowing us to adopt a sustainable business model as we grow and also to expand our presence in the virtual world.</h4>
                <h4>By joining our Patreon community and sponsoring SFUFF, receive exclusive access to festival updates, weekly behind-the-scenes content, a monthly Q&A session, and special film screenings. </h4>
                <h4>For more information, visit our Patreon page here.</h4>
              </Col>
              <Col md={1} />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Patreon;