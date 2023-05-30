import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import axios from "axios";
import "./Modal.css";
function ModalGamesUpdate(props) {
  const AddComment = async (e) => {
    e.preventDefault();
    const obj = {
      comment: e.target.comment.value,
    };
    console.log("update obj", obj);
    const serverURL = `${process.env.REACT_APP_serverURL}/update/${props.clickedgames.id}`;
    const result = await axios
      .put(serverURL, obj)
      .then((response) => {
        console.log(response.data);
        props.allFavData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    props.handleClose();
    // console.log(item)
  };
  return (
    <>
      <Modal
        centered
        size="sm"
        className="custom-modal"
        show={props.showFlag}
        onHide={props.handleClose}
      >
        <Modal.Header className=".modal-header" closeButton>
          <Modal.Title>{props.clickedgames.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Image src={props.clickedgames.thumb} width="100%"></Image>

          <Form onSubmit={AddComment}>
            <Form.Group className="mb-3">
              <br />
              <Form.Label>Add comment</Form.Label>
              <Form.Control name="comment" type="text" />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalGamesUpdate;
