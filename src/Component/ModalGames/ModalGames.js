import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import './Modal.css'
import axios from 'axios';
function ModalGames(props){


const AddComment=  (e) =>{
 e.preventDefault();
        const obj = {
           comment: e.target.comment.value,
        }
      console.log("update obj",obj);
        const serverURL = `http://localhost:3005/update/${props.clickedgames.gameID}`;
        axios.put(serverURL ,obj )
        .then(response=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        props.handleClose();
        // console.log(item)
    }
    return(     <div >
        <Modal      centered
   size="sm"
  className="custom-modal" show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header className='.modal-header' closeButton>
                    <Modal.Title >{props.clickedgames.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <Image   src={props.clickedgames.thumb} ></Image>
                   
                    <Form  onSubmit={AddComment} >
                        <Form.Group className="mb-3">
                            <br/>
                            <Form.Label style={{color:"white"}} >Review</Form.Label>
                            <Form.Control name="comment" type="text" />
                        </Form.Group>
                        <Button variant="dark" type="submit"   >Submit</Button>
                    </Form>
    
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                

                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalGames;