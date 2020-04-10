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
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
     <div className="section section-dark">
     <Container>
     
      <Row>
     
      <Col className="mr-auto" md="4" sm="3">
      <ProfilePageHeader />
      <div className="section profile-content">
           <div className="owner">
             <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/parag.jpeg")}
                height="180px"
                  width="240px"
              />
            </div>
            <div className="name">
              <h4 className="title">
                Parag Ghorpade<br />
                <p>
                1 line desciption.....
              </p>
              </h4>
              <h6 className="description">Team Lead</h6>
            </div>
          </div>
      </div>
      </Col>
       <Col className="mr-auto" md="4" sm="3">
            <ProfilePageHeader />
             <div className="section profile-content">
               <div className="owner">
                <div className="avatar">
                  <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/akash.jpeg")}
                  height="180px"
                  width="240px"
                  />
               </div>
            <div className="name">
              <h4 className="title">
                Akash Lende<br />
                <p>
                hey... i m akshi 
                
                </p>
              </h4>
              <h6 className="description">Developer Core</h6>
            </div>
          </div>
        </div>
      </Col>
      <Col className="mr-auto" md="4" sm="3">
            <ProfilePageHeader />
             <div className="section profile-content">
               <div className="owner">
                <div className="avatar">
                  <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/sakshi.jpeg")}
                  height="180px"
                  width="240px"
                  />
               </div>
            <div className="name">
              <h4 className="title">
                Sakshi Doshi<br />
                <p>
                hey.. ... 
                </p>
              </h4>
              <h6 className="description">Designer Core</h6>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <br/>
    <br/>
    </Container>
   
    <Container>
    <Row>
    <Col className="mr-auto" md="4" sm="3">
      <ProfilePageHeader />
      <div className="section profile-content">
           <div className="owner">
             <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/richa.jpg")}
                height="180px"
                  width="240px"
              />
            </div>
            <div className="name">
              <h4 className="title">
                Richa Maurya<br />
                <p>
                hey... i m richa the great
              </p>
              </h4>
              <h6 className="description">Designer Core</h6>
            </div>
          </div>
      </div>
      </Col>
       <Col className="mr-auto" md="4" sm="3">
            <ProfilePageHeader />
             <div className="section profile-content">
               <div className="owner">
                <div className="avatar">
                  <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/shreyas.jpg")}
                  height="180px"
                  width="240px"
                  />
               </div>
            <div className="name">
              <h4 className="title">
               Shreyas Dhorkhule<br />
                <p>
                hi hlw 
                </p>
              </h4>
              <h6 className="description">Social Media Core</h6>
            </div>
          </div>
        </div>
      </Col>
      <Col className="mr-auto" md="4" sm="3">
            <ProfilePageHeader />
             <div className="section profile-content">
               <div className="owner">
                <div className="avatar">
                  <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/sudesh.jpg")}
                  height="180px"
                  width="240px"
                  />
               </div>
            <div className="name">
              <h4 className="title">
                Sudesh Pawar<br />
                <p>
                hey.. ... 
                </p>
              </h4>
              <h6 className="description">Marketing Core</h6>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <br/>
    <br/>
    </Container>
    <Container>
    <Row>
    <Col className="mr-auto" md="4" sm="3">
            <ProfilePageHeader />
             <div className="section profile-content">
               <div className="owner">
                <div className="avatar">
                  <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/saurabh.jfif")}
                  height="180px"
                  width="240px"
                  />
               </div>
            <div className="name">
              <h4 className="title">
                Saurabh Mirajkar<br />
                <p>
                hey.. ... 
                </p>
              </h4>
              <h6 className="description">Marketing Core</h6>
            </div>
          </div>
        </div>
      </Col>
       <Col className="mr-auto" md="4" sm="3">
            <ProfilePageHeader />
             <div className="section profile-content">
               <div className="owner">
                <div className="avatar">
                  <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/shivani.jpg")}
                  height="180px"
                  width="240px"
                  />
               </div>
            <div className="name">
              <h4 className="title">
               Shivani Sakpal<br />
                <p>
                hi hlw 
                </p>
              </h4>
              <h6 className="description">Social Media Core</h6>
            </div>
          </div>
        </div>
      </Col>
    <Col className="mr-auto" md="4" sm="3">
      <ProfilePageHeader />
      <div className="section profile-content">
           <div className="owner">
             <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/sharavni.jpeg")}
                height="180px"
                  width="240px"
              />
            </div>
            <div className="name">
              <h4 className="title">
                Shravani Kanade<br />
                <p>
                hey.
              </p>
              </h4>
              <h6 className="description">Outreach Core</h6>
            </div>
          </div>
      </div>
      </Col>
    
   
    </Row>
   </Container>
   </div>
   <DemoFooter />
    </>
  );
}

export default ProfilePage;
