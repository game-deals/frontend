import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Footer() {
  return (

    <div style={{width:"100%"}} >
<MDBFooter style={{padding:"20px" }} className='bg-dark text-center text-white'>
          <MDBBtn   outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon  fab icon='facebook-f' />
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
      

      <div style={{height:"100%",padding:"20px",gap:"20px"}} className='text-center ' >
        © 2023 Copyright 
          GamesDeals
        
      </div>
    </MDBFooter>
   
    </div>
  );
}