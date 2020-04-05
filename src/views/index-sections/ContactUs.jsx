import React from "react";
import { Row,Card, CardImg, CardBody, CardText, CardTitle, Col, CardLink } from "reactstrap";

function ContactUs()
{
    return(
    <>
        <div className="">
            <Row>
              <Col md="4" >
               <Card  className="card-style" >
                <CardBody >
                    <Row >
                     <Col > 
                     <CardImg
               src= {require("assets/img/DSCLogomescoe.png")}
              
              alt="Event 1"
              style={{ height: 80, objectFit: "scale-down" }}
            ></CardImg>
                       
                           <h2> <b>DEVELOPER STUDENT CLUB
                           </b> 
                           </h2>
                           <h4> 
                               <b>MES College Of Engineering,
                        Wadia College Campus, Pune 411001
                        India
                        </b>
                        </h4>
                     
                      </Col>
                   
                    
                     
                    </Row>
                    <Row>
                        <Col>
                        <CardTitle>
                            <b>
                           <h4>email: dscmescoe@gmail.com</h4>
                           </b>
                        </CardTitle>
                        </Col>
                    </Row>
                   
                </CardBody>
               </Card>
           </Col>
           <Col md="4">
               <Card  className="card-style">
                <CardBody >
                    <Row className=" text-center">
                     <Col > 
                        <CardTitle>
                         <h2> <b>
                         LOCATE US ON GOOGLE MAP

                        </b>
                        </h2>
                        <br/>
                        <br/>
                        <br/> 
                        <CardLink className="btn-style" href="https://goo.gl/maps/YEyrDE2ytWZSkWSX9" >HERE</CardLink>
                      </CardTitle>
                      </Col>
                   
                    </Row>
                </CardBody>
               </Card>
           </Col>
           <Col md="4">
               <Card className="card-style" >
                <CardBody >
                    <Row className=" text-center">
                     <Col > 
                        <CardTitle>
                          
                          <h2>
                              <b>
                              LEAVE A MESSAGE
                              </b>
                              </h2>
                              <form>
                              <br />
                                  <input type="text" class="form_text"></input>
                                    <br />
                                    <br />
                                    <br />
                                    <button className="btn btn-outline-success btn-style">
                                      SEND
                                    </button>
                              </form>
                           
                            
                      </CardTitle>

                      </Col>
                   
                    </Row>
                </CardBody>
                
               </Card>
               <Card  className="card-style" >
                <CardBody >
                    <Row className=" text-center">
                     <Col > 
                        <CardTitle>
                          
                          <h2>
                              <b>
                              STAY IN TOUCH
                              <br />
                              </b>
                              </h2>
                              <form>
                                  eMail   : <input type="email" class="form_text"></input>
                                  <br/>
                                  <br/>
                                  Name : <input type="text" class="form_text"></input>
                                    <br />
                                    <br />
                                    <br />
                                    <button className="btn btn-outline-success btn-style">
                                      SUBSCRIBE
                                    </button>
                              </form>
                           
                            
                      </CardTitle>

                      </Col>
                   
                    </Row>
                </CardBody>
                
               </Card>
           </Col>
           
           </Row>
        </div>
        </>
    );
}
export default ContactUs;