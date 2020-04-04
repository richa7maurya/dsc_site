import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Col } from "reactstrap";

class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Col className="" md="4">
          <img
            style={{ width: "20rem", borderRadius: 0 }}
            className="card"
            src={this.props.img}
          />
        </Col>
      </>
    );
  }
}

export default PhotoCard;
