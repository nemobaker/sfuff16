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
                <h2>
                  <span>patreon</span>
                </h2>
              </Col>
              <Col md={1} />
              <Col md={8}>
                <h4>patreon info here</h4>
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