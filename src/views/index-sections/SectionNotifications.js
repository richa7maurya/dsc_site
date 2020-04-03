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
import { Alert, Container } from "reactstrap";
import styled,{keyframes} from 'styled-components'
// core components
import {bounce} from 'react-animations'

const Bounce=styled.div`animation:2s ${keyframes`${bounce}`} infinite`;

function SectionNotifications() {
  return (
    <>
       <Bounce>richa maurya</Bounce>
    </>
  );
}

export default SectionNotifications;
