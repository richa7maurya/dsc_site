/*!

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

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionButtons() {
 
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div >
             <h2 className="presentation-title text-center " >
            
            <small><small>ABOUT US</small></small>
            </h2>
          </div>
          <div id="buttons">
            <div className="title " >
               <h3 > 
              Developer Student Club (DSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.
               </h3>
            </div>
            <br />
         <div >
            <Row >
              <Col  className=" text-center" >
                <Button
                  className="btn-round mr-1"
                  color="success"
                  outline
                  type="button"
                  
                  onClick={e=>window.open("https://developers.google.com/community/dsc","_blank")}
                >
                  LEARN MORE ABOUT DSC
                </Button>
                
              </Col>
            </Row>
            <br/>
            <br/>
            
            <Row >
              <Col  className=" text-center" >
                <Button
                  className="btn-round mr-1"
                  color="danger"
                
                  type="button"
                  
                  onClick={e=>window.open("https://goo.gl/maps/YEyrDE2ytWZSkWSX9","_blank")}
                >
                  FIND US ON MAP
                </Button>
                
              </Col>
            </Row>
            </div>
            <br />
            <div className="title text-center">
            <h1>What we do?</h1>
          </div>
          <div id="buttons">
            <div className="title">
               <h3>
               Google Developer Clubs can take many forms - from just a few people getting together to watch some videos, to large gatherings with demos, tech talks, hackathons and conferences. We work on various technical domains and try to make use of Google Technologies to empower the audience around us.   </h3>
            </div>
          </div>
          </div>
         
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
