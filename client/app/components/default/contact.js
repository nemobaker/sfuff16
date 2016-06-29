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
        <div className="contact-container container-fluid">
          <Grid>
            <Row className="show-grid">
              <Col md={2}>
                <h2 className="section-header">
                  <span>contact</span>
                </h2>
              </Col>
              <Col md={1} />
              <Col md={8}>
                <form className="contact-form">
                  <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <FormControl
                      type="text"
                      id="name"
                      value={this.props.updateName()}
                      onChange={(e) => this.props.updateName(e)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email:</label>
                    <FormControl
                      type="text"
                      id="email"
                      value={this.props.updateEmail()}
                      onChange={(e) => this.props.updateEmail(e)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Message:</label>
                    <FormControl
                      componentClass="textarea"
                      rows="4"
                      type="text"
                      id="message"
                      value={this.props.updateMessage()}
                      onChange={(e) => this.props.updateMessage(e)}
                    />
                  </div>
                  <br />
                  <div>
                    <Button
                      type="button"
                      className="contact-button"
                      onClick={(e) => this.props.handleContactForm(e)}
                    >
                    submit
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
