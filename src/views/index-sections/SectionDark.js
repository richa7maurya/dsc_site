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

// core components

const items = [
  {
    src: require("assets/img/gp1.jpeg"),
    altText: "gp1",
    caption: " The one with nikhil raichur"
  },
  {
    src: require("assets/img/gp6.jpg"),
    altText: "gp6",
    caption: "The one with the cores"
  },
  {
    src: require("assets/img/gp3.jpeg"),
    altText: "gp3",
    caption: "GCP cloud"
  },
  {
    src: require("assets/img/gp7.jpg"),
    altText: "gp7",
    caption: "lab"
  },
  {
    src: require("assets/img/gp8.jpg"),
    altText: "gp8",
    caption: "GCP cloud"
  }
];

function SectionDark() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
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
            <Col className="mr-auto" md="2" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/richa.jpg")}
                />
                <p className="text-center">DESIGNER-CORE  RICHA MAURYA</p>
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
             
              <Col className="mr-auto" md="3" sm="3">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/sakshi.jpeg")}
                />
                <p className="text-center">DESIGNER-CORE  SAKSHI DOSHI</p>
              </Col>
              <Col className="mr-auto" md="5" sm="4">
                
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/sudesh.jpg")}
                />
                <p className="text-center">MARKETING-CORE  SUDESH PAWAR</p>
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
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" >
              <h1 className="presentation-title">EVENTS</h1>
              <h1>Google cloud study jam </h1>
              <h3>5th - 6th October 2019</h3>
             
            </Col>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
            </Row>
            </Container>
            
      </div>
    </>
  );
}

export default SectionDark;
