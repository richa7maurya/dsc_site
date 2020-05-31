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
import ReactDOM from "react-dom";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import ContactUs from "views/index-sections/ContactUs.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.getContact = props.getContact;
    this.contact = React.createRef();
  }

  componentDidMount() {
    if (this.getContact == 1) {
      let rect = ReactDOM.findDOMNode(
        this.contact.current
      ).getBoundingClientRect();
      window.scrollTo(0, rect.y);
    }
  }

  render() {
    document.documentElement.classList.remove("nav-open");

    document.body.classList.add("index");

    return (
      <div style={{ overflowX: "hidden" }}>
        <IndexNavbar />
        <IndexHeader />
        <div className="main">
          <SectionButtons />
          <ContactUs ref={this.contact} />
        </div>
      </div>
    );
  }
}

export default Index;
