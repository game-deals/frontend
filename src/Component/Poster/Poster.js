import React, { useState } from 'react';

import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
function Poster (){

    const [showBasic, setShowBasic] = useState(false);

    return(
        <div id='poster'>

        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://wallpapercave.com/uwp/uwp3536518.jpeg')", height: "600px" , width: "100%",  }}
       
      >
        <Image src='./Assets/Header.jpeg'></Image>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Opportunities don't happen , you create them</h1>
              <h4 className='mb-3'>let's show the deal games</h4>
              
              <a href='#Deals'><MDBBtn color='light'  outline size="lg" className="m-2"rel="nofollow"target="_blank">
               Show deals 
              </MDBBtn></a>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Poster;