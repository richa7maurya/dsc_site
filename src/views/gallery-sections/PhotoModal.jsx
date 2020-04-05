// core components
import React from "react";
// reactstrap components
import { Modal } from "reactstrap";

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Modal
          isOpen={this.props.liveDemo}
          className="modal-lg"
          modalClassName="bd-example-modal-lg"
          toggle={() => this.props.setLiveDemo(false)}
        >
          <div className="px-1 py-1">
            <button
              aria-label="Close"
              className="close pr-2 text-danger"
              data-dismiss="modal"
              type="button"
              onClick={() => this.props.setLiveDemo(false)}
            >
              <span aria-hidden={true}>×</span>
            </button>
            <img src={this.props.img} style={{ width: "100%" }} />
          </div>
        </Modal>
      </>
    );
  }
}

export default PhotoModal;
