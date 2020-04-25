import React from "react";
import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Col,
  CardLink,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <div className="px-5" style={{ height: "75vh", paddingTop: "10vh" }}>
          <Row>
            <Col md="4">
              <h3>
                <b style={{ fontWeight: 600 }}>Developer Students Club</b>
              </h3>
              <p style={{ fontWeight: 500, fontSize: 16 }}>
                MES College of Engineering, <br />
                Wadia College Campus, Pune - 411001 <br />
                India.
              </p>
              <iframe
                style={{
                  width: "inherit",
                  height: "250px",
                  border: "none",
                  ariahidden: "false",
                  tabindex: "0",
                  border: "1px solid #b9b9b9",
                  marginRight: 30,
                }}
                className="ml-0 mt-2 mb-4"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.4351017684096!2d73.8795644!3d18.5347667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19b6e6e8b35%3A0x8cab210bf925c00e!2sDSC%20MESCOE!5e0!3m2!1sen!2sin!4v1586159813051!5m2!1sen!2sin"
              ></iframe>
            </Col>
            <Col md="4">
              <center style={{ marginBottom: 20 }}>
                <h3>
                  <b>Contact Us</b>
                </h3>
              </center>
              <div className="text-center">
                <i
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                  style={{ fontSize: 17 }}
                ></i>
                <a
                  href="mailto: www.dscmescoe@gmail.com"
                  className="pl-2 text-dark"
                  style={{ fontWeight: 400, fontSize: 16 }}
                >
                  www.dscmescoe@gmail.com
                </a>
              </div>
              <center style={{ marginBottom: 20, marginTop: 50 }}>
                <h3>
                  <b>Get Social</b>
                </h3>
              </center>
              <div className="text-center mb-4">
                <a href="" style={{ margin: 10 }}>
                  <i
                    className="fa fa-linkedin"
                    aria-hidden="true"
                    style={{ fontSize: 18 }}
                  ></i>
                </a>
                <a href="" style={{ margin: 10 }}>
                  <i
                    className="fa fa-twitter"
                    aria-hidden="true"
                    style={{ fontSize: 18 }}
                  ></i>
                </a>
                <a href="" style={{ margin: 10 }}>
                  <i
                    className="fa fa-facebook"
                    aria-hidden="true"
                    style={{ fontSize: 18 }}
                  ></i>
                </a>
                <a href="" style={{ margin: 10 }}>
                  <i
                    className="fa fa-instagram"
                    aria-hidden="true"
                    style={{ fontSize: 18 }}
                  ></i>
                </a>
                <a href="" style={{ margin: 10 }}>
                  <i
                    className="fa fa-slack"
                    aria-hidden="true"
                    style={{ fontSize: 18 }}
                  ></i>
                </a>
              </div>
            </Col>
            <Col md="4" className="mb-5">
              <h3 style={{ marginBottom: 20 }}>
                <b>Leave a Message</b>
              </h3>
              <form>
                <FormGroup>
                  <Input type="text" name="name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <FormText color="muted">
                    We'll never share your email with anyone else.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    style={{ resize: "none" }}
                  />
                </FormGroup>
                <Button
                  color="primary"
                  type="submit"
                  className="btn-outline-primary"
                >
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default ContactUs;
