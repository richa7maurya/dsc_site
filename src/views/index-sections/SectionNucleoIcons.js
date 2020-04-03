/*!

EVENT PAGE

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
import { Button, Container, Row, Col } from "reactstrap";
import Gallery from 'react-photo-gallery';

// core components
 class SectionNucleoIcons extends React.Component {
  render() {
return (
  <>
  <div>
 
  <div className="section section-dark">
   
    <Container >
          <Row>
            <Col className="ml-auto mr-auto text-center" >
              <h1 className="presentation-title">EVENTS</h1>
            </Col>
            </Row>
            <Row>
          
           
            <Col className="ml-auto mr-auto text-center" >
            <h1>Google cloud study jam </h1>
              <h3>5th - 6th October 2019</h3>
              <Gallery photos={PHOTO_SET} />

            </Col>
            </Row>
            <Row>
            <Col className="ml-auto mr-auto text-center" >
            <h1>Google cloud study jam </h1>
              <h3>5th - 6th October 2019</h3>
              <Gallery photos={PHOTO_SET1} />
            </Col>
            </Row>
            </Container>
    </div>
    </div>
    </>
);
  }
}
const PHOTO_SET = [
{
  src: require("assets/img/gp2.jpg"),
  width: 3,
  height: 2
},
{
  src: require("assets/img/gp1.jpeg"),
  width: 4,
  height: 3
},
{
  src: require("assets/img/gp3.jpeg"),
  width: 3,
  height: 2
},
{
  src: require("assets/img/gp4.jpg"),
  width: 4,
  height: 3
},
{
  src: require("assets/img/gp5.jpg"),
  width: 2,
  height: 3
},
{
  src: require("assets/img/gp6.jpg"),
  width: 4,
  height: 3
},
{
  src: require("assets/img/gp7.jpg"),
  width: 1,
  height: 1
}
,{
  src: require("assets/img/gp8.jpg"),
  width: 1,
  height: 1
},
{
  src: require("assets/img/gp1.jpeg"),
  width: 1,
  height: 1
}
];
const PHOTO_SET1 = [
  {
    src: require("assets/img/gp2.jpg"),
    width: 3,
    height: 2
  },
  {
    src: require("assets/img/gp1.jpeg"),
    width: 4,
    height: 3
  },
  {
    src: require("assets/img/gp3.jpeg"),
    width: 3,
    height: 2
  },
  {
    src: require("assets/img/gp4.jpg"),
    width: 4,
    height: 3
  },
  {
    src: require("assets/img/gp5.jpg"),
    width: 2,
    height: 3
  },
  {
    src: require("assets/img/gp6.jpg"),
    width: 4,
    height: 3
  }
  ];
  export default SectionNucleoIcons;