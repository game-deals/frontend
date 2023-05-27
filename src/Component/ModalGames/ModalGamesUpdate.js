import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import axios from 'axios';
function ModalGamesUpdate(props){


    const AddComment=  (e) =>{
 e.preventDefault();
        const obj = {
           comment: e.target.comment.value,
        }
      console.log("update obj",obj);
        const serverURL = `http://localhost:3005/update/${props.clickedgames.id}`;
       const result= axios.put(serverURL ,obj )
        .then(response=>{
            console.log(response.data)
            props.allFavData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        props.handleClose();
        // console.log(item)
    }
    return(
        <>
        <Modal show={props.showFlag} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedgames.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.clickedgames.thumb} width='100%'></Image>
                   
                    <Form onSubmit={AddComment} >
                        <Form.Group className="mb-3">
                            <br/>
                            <Form.Label>Add comment</Form.Label>
                            <Form.Control name="comment" type="text" />
                        </Form.Group>
                      
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
    
                </Modal.Body>
                <Modal.Footer>
              
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalGamesUpdate;