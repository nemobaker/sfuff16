import React from 'react';
import { Grid, Row, Col, Button, FormControl } from 'react-bootstrap';

class Contact extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {};
  }

  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="contact-container">
          <Grid>
            <Row className="show-grid">
              <Col md={2}>
                <h2>
                  <span>contact</span>
                </h2>
              </Col>
              <Col md={1} />
              <Col md={8}>
                <form>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <FormControl
                      type="text"
                      id="name"
                      value={this.props.updateName()}
                      onChange={(e) => this.props.updateName(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <FormControl
                      type="text"
                      id="email"
                      value={this.props.updateEmail()}
                      onChange={(e) => this.props.updateEmail(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <FormControl
                      componentClass="textarea"
                      placeholder="What's on your mind?"
                      type="text"
                      id="message"
                      value={this.props.updateMessage()}
                      onChange={(e) => this.props.updateMessage(e)}
                    />
                  </div>
                  <br></br>
                  <div className="button">
                    <Button
                      type="button"
                      onClick={(e) => this.props.handleContactForm(e)}
                    >
                    Submit
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
