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
import DemoFooter from "components/Footers/DemoFooter.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// core components
import React from "react";
// reactstrap components
import { Container, Row } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";

import GalleryCard from "views/gallery-sections/GalleryCard";
import PhotoCard from "views/gallery-sections/PhotoCard";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      photos: [],
      name: "Gallery",
      description: "Creating a timeless look, coupled with a flawless moment",
      img: "none"
    };
    this.loadEventGallery = this.loadEventGallery.bind(this);
    this.events = React.createRef();
  }
  componentDidMount() {
    fetch("http://localhost/logo.php")
      .then(response => response.json())
      .then(events => {
        let array = [];
        let i = 0;
        events.forEach(event => {
          array.push(
            <GalleryCard
              key={`event-${i++}`}
              id={event.id}
              name={event.name}
              date={event.date}
              description={event.description}
              img={event.img}
              loadEventGallery={this.loadEventGallery}
            />
          );
        });
        this.setState({ events: array });
      });
  }

  loadEventGallery(id, name, description, img) {
    this.events.current.className = "d-none";
    this.setState({ name: name, description: description, img: img });
    fetch(`http://localhost/logo.php?event=${id}`)
      .then(response => response.json())
      .then(photos => {
        let array = [];
        let i = 0;
        photos.forEach(photo => {
          array.push(<PhotoCard />);
        });
        this.setState({ events: array });
      });
  }

  render() {
    return (
      <>
        <IndexNavbar />
        <LandingPageHeader
          name={this.state.name}
          description={this.state.description}
          img={this.state.img}
        />
        <div className="main">
          <div className="section text-center">
            <Container>
              <div id="events" className="d-block" ref={this.events}>
                <Row>{this.state.events}</Row>
              </div>
              <div id="photos" className="d-none" ref={this.events}>
                <Row>{this.state.photos}</Row>
              </div>
            </Container>
          </div>
        </div>
        <DemoFooter />
      </>
    );
  }
}

export default LandingPage;
