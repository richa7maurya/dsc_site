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
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import ReactAnime from 'react-anime'
const Anime = ReactAnime.default;
// core components
function SectionProgress(){
  return (
    <>
      <div>
 
 <Anime easing="easeOutElastic"
          loop={true}
          duration={1000}
          direction="alternate"
          delay={(el, index) => index * 240}
          translateX='13rem'
          scale={[.75, .9]}>
       <div className="blue"/>
       <div className="green"/>
       <div className="red"/>
     </Anime>
</div>

    </>
  );
}

export default SectionProgress;
