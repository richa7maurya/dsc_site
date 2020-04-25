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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { relativeTimeRounding } from "moment";

// core components

function IndexHeader() {
  let img1 = {
    marginTop: "",
    width: "5%",
    marginLeft: "80%",
    zIndex: 10,
  };
  let img2 = {
    marginBottom: "15%",
    marginLeft: "10%",
    marginTop: "10%",
    width: "5%",
    float: "left",
    zIndex: 9,
  };
  let img3 = {
    marginLeft: "60%",
    marginTop: "",
    width: "5%",
    marginBottom: "3%",
    zIndex: 8,
  };
  let img4 = {
    marginTop: "2%",
    marginLeft: "10%",
    marginBottom: "12%",
    width: "5%",
    zIndex: 7,
  };
  let img5 = {
    marginTop: "8%",
    width: "5%",
    float: "right",
    zIndex: 6,
  };
  let text1 = {
    color: "black",
    fontWeight: "bold",
    marginBottom: "2%",
    marginLeft: "5%",
    width: "inherit",
    zIndex: 100,
  };
  let text2 = {
    color: "black",
    fontWeight: "bold",
    marginLeft: "5%",
    width: "inherit",
    zIndex: 100,
  };
  let img7 = {
    marginLeft: "30%",
    marginTop: "-12%",
    width: "3%",
    float: "left",
    padding: "1%",
    zIndex: 5,
  };

  let img8 = {
    //green square
    portion: "absolute",
    width: "3%",
    float: "left",
    padding: "2%",
    marginTop: "10%",
    marginLeft: "20%",
    zIndex: 4,
  };

  let img9 = {
    //red triangle
    marginTop: "5%",
    marginRight: "10%",
    width: "5%",
    float: "right",
    zIndex: 3,
  };

  let img10 = {
    //yellow square
    width: "5%",
    float: "right",
    marginRight: "10%",
    zIndex: 2,
  };
  let img11 = {
    //blue circle
    width: "5%",
    left: "50%",
    top: "50%",
    zIndex: 1,
  };
  let x = window.innerWidth;
  if (x <= 768) {
    text1.fontSize = 30;
    text2.fontSize = 28;
    text1.marginTop = "-5vh";
    img9.marginTop = "10vh";
    img9.width = "10vw";
    img4.marginTop = "40vh";
    img4.width = "7vw";
    img2.marginTop = "20vh";
    img2.width = "10vw";
    img11.marginTop = "5vh";
    img11.width = "10vw";
    img5.display = "none";
    img8.width = "10vw";
    img8.marginTop = "15vh";
    img1.display = "none";
    img10.width = "15vw";
    img10.marginTop = "30vh";
    img3.width = "10vw";
    img3.marginTop = "10vh";
    img7.width = "10vw";
    img7.marginTop = "5vh";
  }
  if (x <= 426) {
    text1.fontSize = 18;
    text1.marginTop = "-5vh";
    text2.fontSize = 16;
  }
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <img style={img9} src={require("assets/img/red-triangle.svg")} />
        <img style={img4} src={require("assets/img/Asset 4logo.png")} />
        <img style={img2} src={require("assets/img/Asset 2logo.png")} />
        <img style={img11} src={require("assets/img/light-blue-circle.svg")} />
        <img style={img5} src={require("assets/img/Asset 5logo.png")} />
        <img style={img8} src={require("assets/img/green-rectangle.svg")} />
        <h1 style={text1}>DSC MESCOE</h1>
        <h2 style={text2}>POWERED BY GOOGLE DEVELOPERS</h2>
        <img style={img1} src={require("assets/img/Asset1logo (1).png")} />
        <img style={img10} src={require("assets/img/yellow-rectangle.svg")} />
        <img style={img3} src={require("assets/img/Asset 3logo.png")} />
        <img style={img7} src={require("assets/img/red-rectangle.svg")} />
      </div>
    </>
  );
}

export default IndexHeader;
