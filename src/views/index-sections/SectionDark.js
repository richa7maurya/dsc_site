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

// reactstrap components
import {  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption } from "reactstrap";
  import styled,{keyframes} from 'styled-components'
  // core components
 
// core components
function SectionDark(){
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" >
              <h1 className="presentation-title">THE TEAM</h1>
              <h1>CORE MEMBERS</h1>

             
            </Col>
            </Row>
            <br/>
            <Row>
            <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/akash.jpeg")}
                />
                <p className="text-center">DEVELOPER-CORE  AKASH LENDE</p>
              </Col>
       
              <Col className="mr-auto" md="4" sm="6">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/parag.jpeg")}
                />
                <p className="text-center">LEAD </p>
                <p className="text-center">PARAG GHODPADE</p>
              </Col>
             
              <Col className="mr-auto" md="4" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/sakshi.jpeg")}
                />
                <p className="text-center">DESIGNER-CORE  SAKSHI DOSHI</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/richa.jpg")}
                />
                <p className="text-center">DESIGNER-CORE  RICHA MAURYA</p>
              </Col>
              <Col className="mr-auto" md="5" sm="4">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/sudesh.jpg")}
                />
                <p className="text-center">MARKETING-CORE  SUDESH PAWAR</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/shreyas.jpg")}
                />
                <p className="text-center">SOCIAL MEDIA-CORE  SHREYAS DHORKHULE</p>
              </Col>
              <Col className="mr-auto" md="4" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/saurabh.jfif")}
                />
                <p className="text-center">MARKETING-CORE SAURABH MIRAJKAR</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/shivani.jpg")}
                />
                <p className="text-center">SOCIAL MEDIA-CORE      SHIVANI SAKPAL</p>
              </Col>
              <Col className="mr-auto" md="2" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/sharavni.jpeg")}
                />
                <p className="text-center">OUTREACH-CORE  SHRAVANI KANADE</p>
              </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" >
              
            <h1>MENTORS</h1>

             
            </Col>
            <br/>
            </Row>
            <Row>
            <Col className="mr-auto " md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/mane.jpeg")}
                />
                <p className="text-center">HRISHIKESH MANE</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faizan.jpg")}
                />
                <p className="text-center">FAIZAN AKTAR</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/mane.jpeg")}
                />
                <p className="text-center">MENTOR3</p>
              </Col>
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/mane.jpeg")}
                />
                <p className="text-center">MENTOR3</p>
              </Col>
            </Row>
        </Container>
       
            
      </div>
    </>
  );
  }

export default SectionDark;
