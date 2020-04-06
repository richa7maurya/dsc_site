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
import { Container, Row,Col } from "reactstrap";
import { relativeTimeRounding } from "moment";

const img1={
 portion:"absolute",
 marginTop:"",
 width:"90px",
 marginLeft:"80%"
};
const img2={
  portion:"absolute",
 marginBottom:"15%",
 marginLeft:"10%",
 marginTop:"10%",
 width:"40px",
 float:"left"
};
const img3={
  portion:"absolute",
 marginLeft:"60%",
 marginTop:"",
 width:"80px",
 marginBottom:"3%"
};
const img4={
  portion:"absolute",
 marginTop:"2%",
 marginLeft:"10%",
 marginBottom:"12%",
 width:"50px"
};
const img5={
  portion:"absolute",
 marginTop:"8%",
 width:"230px",
 float:"right"
};
const img6={
portion:"absolute",
marginBottom:"2%",
fontFamily:"googlesans",
marginLeft:"5%",
width:"700px"
};
const img61={
  color:"black",
  portion:"relative",
  fontFamily:"googlesans",
  marginLeft:"13%",
  width:"700px"
  };
const img7={
  portion:"relative",
  marginLeft:"30%",
  marginTop:"-12%",
  width:"100px",
  float:"left",
  padding:"1%"
  };

  const img8={
    portion:"relative",
  width:"140px",
  float:"left",
  padding:"2%",
  marginTop:"10%",
  marginLeft:"20%"
    };

    const img9={
      portion:"relative",
      marginTop:"5%",
  width:"100px",
  padding:"2%",
  float:"right"
      };
      
const img10={
  portion:"relative",
  width:"100px",
  float:"left",
  padding:"1%"
  };
  const img11={
    portion:"relative",
    width:"80px",
    float:"left",
    marginLeft:"1%",
    marginTop:"16%",
    padding:"1%"
    };
            
// core components

function IndexHeader() {
  return (
    <>
      <div >
      <img style={img9} src={require('assets/img/red-triangle.svg')} />
      <img style={img4} src={require('assets/img/Asset 4logo.png')} />
      <img style={img2} src={require('assets/img/Asset 2logo.png')} />
      <img style={img11} src={require('assets/img/light-blue-circle.svg')} />
      <img style={img5} src={require('assets/img/Asset 5logo.png')} />
      <img style={img8} src={require('assets/img/green-rectangle.svg')} /> 
      <h1 style={img6}  >DSC MESCOE</h1>
      <h2 style={img61}>POWERED BY GOOGLE DEVELOPERS</h2>
      <img style={img1} src={require('assets/img/Asset1logo (1).png')} />
      <img style={img10} src={require('assets/img/yellow-rectangle.svg')} />
      <img style={img3} src={require('assets/img/Asset 3logo.png')} />
      <img style={img7} src={require('assets/img/red-rectangle.svg')} />
     
       
        
        
        
         
        
      </div>
    </>
  );
}

export default IndexHeader;
