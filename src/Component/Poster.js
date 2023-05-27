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
function Poster (){

    const [showBasic, setShowBasic] = useState(false);

    return(
        <div id='poster'>

        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://c1.wallpaperflare.com/preview/345/287/635/playstation-controller-blue-dark.jpg')", height: "600px" , width: "100%", }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>MOST GAMES ARE LOST , NOT WON</h1>
              <h4 className='mb-3'>let's show the deal games</h4>
              
              <MDBBtn color='light' tag="a" outline size="lg" className="m-2"rel="nofollow"target="_blank">
               Show deals
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Poster;