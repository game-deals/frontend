import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
   MDBInput,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Footer() {
  return (

    <div style={{width:"100%"}} >

<MDBFooter style={{padding:"20px" }} className='bg-dark text-center text-white'>
   

        <section className=''>
         
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Your Feedback</strong>
                </p>
              </MDBCol>

              

              <MDBCol size="auto">
                
                <MDBBtn style={{height:"40px"}} outline color='light' type='submit' className='mb-4'>
                  <a style={{textDecoration:"none",color:"black"}} href='mailto:a.shaheen20001@.com'>Send on Email</a>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          
        </section>


        <section className='mb-4'>
          <p>
          We thank ASAC for given us  the opportunities in this course to make this Website .
          </p>
        </section>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
        

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
   
  );
}
