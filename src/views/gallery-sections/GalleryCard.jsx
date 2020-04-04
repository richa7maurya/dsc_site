import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Col } from "reactstrap";

class GalleryCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Col className="" md="4">
          <Card
            style={{ width: "20rem" }}
            onClick={() =>
              this.props.loadEventGallery(
                this.props.id,
                this.props.name,
                this.props.description,
                this.props.img
              )
            }
          >
            <CardImg top src={this.props.img} alt="Event 1"></CardImg>
            <CardBody>
              <CardTitle>
                <h3 style={{ marginBottom: 15 }}>{this.props.name}</h3>
              </CardTitle>
              <CardText>{this.props.description}</CardText>
              <CardText>
                <small className="text-muted">{this.props.date}</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default GalleryCard;
