/*!

About us page

=========================================================
* Paper Kit React - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create switch buttons
import styled from "styled-components";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function SectionButtons() {
  return (
    <>
      <div className="section section-buttons" style={{ height: "100vh" }}>
        <Container>
          <div>
            <h2 className="presentation-title text-center ">
              <small>
                <b>ABOUT US</b>
              </small>
            </h2>
          </div>
          <div id="buttons">
            <div className="title " style={{ color: "white" }}>
              <h3>
                <b>
                  Developer Student Club (DSC) is a Google Developers program
                  for university students to learn mobile and web development
                  skills. The club will be open to any student, ranging from
                  novice developers who are just starting, to advanced
                  developers who want to further their skills. The club is
                  intended as a space for students to try out new ideas and
                  collaborate to solve mobile and web development problems.
                </b>{" "}
              </h3>
            </div>
            <br />
            <div>
              <Row>
                <Col className=" text-center">
                  <Button
                    className="btn-round mr-1"
                    color="danger"
                    outline
                    type="button"
                    onClick={(e) =>
                      window.open(
                        "https://developers.google.com/community/dsc",
                        "_blank"
                      )
                    }
                  >
                    LEARN MORE ABOUT DSC
                  </Button>
                </Col>
              </Row>
              <br />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
