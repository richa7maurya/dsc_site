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
                        <br/> 
                      </CardTitle>
                      </Col>
                   <Row className="justify-content-center">
                     <Col >
                       
                       <iframe style={{width:"100%",height:"100%",border:"2px solid black",ariahidden:"false", tabindex:"0"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.4351017684096!2d73.8795644!3d18.5347667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19b6e6e8b35%3A0x8cab210bf925c00e!2sDSC%20MESCOE!5e0!3m2!1sen!2sin!4v1586159813051!5m2!1sen!2sin"></iframe>
                   </Col>
                   </Row>
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
                          
                          <h3>
                              <b>
                              LEAVE A MESSAGE
                              </b>
                          </h3>
                              <form>
                              <br />
                                  <input type="text" class="form_text"></input>
                                    <br />
                                    <br />
                                    <button className="btn btn-outline-success btn-style">
                                      SEND
                                    </button>
                              </form>
                           
                            
                      </CardTitle>

                      </Col>
                   
                    </Row>
                    <Row className=" text-center">
                     <Col > 
                        <CardTitle>
                          
                          <h3>
                              <b>
                               STAY IN TOUCH
                              <br />
                              </b>
                           </h3>
                              <form><b>
                                  eMail   : <input type="email" class="form_text"></input>
                                  <br/>
                                  <br/>
                                  Name : <input type="text" class="form_text"></input>
                                    <br />
                                    <br />
                                    <button className="btn btn-outline-success btn-style">
                                        SUBSCRIBE
                                    </button>
                                    </b>
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