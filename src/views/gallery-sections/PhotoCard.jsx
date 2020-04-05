import React from "react";
import { Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Col className="" md="4">
          <LazyLoadImage
            style={{ width: "95%", borderRadius: 0 }}
            onClick={() => this.props.openModal(this.props.img)}
            effect="blur"
            className="card"
            src={this.props.img}
          />
          <img />
        </Col>
      </>
    );
  }
}

export default PhotoCard;
