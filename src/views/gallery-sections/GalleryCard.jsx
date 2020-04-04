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
                this.props.cover
              )
            }
          >
            <CardImg
              top
              src={this.props.cover}
              alt="Event 1"
              style={{ height: 200, objectFit: "cover" }}
            ></CardImg>
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
