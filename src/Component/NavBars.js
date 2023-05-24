

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
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';

function NavBars() {
    const [showBasic, setShowBasic] = useState(false);
return(


< div >
<MDBNavbar expand='lg' light bgColor='white' style={{display:"flex" ,gap:"10px",justifyContent:"space-around" ,fontSize:"20px" }}>
        <MDBContainer  fluid  >
        <MDBNavbarBrand href='#'>Games Deal</MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active >
                <MDBNavbarLink aria-current='page' href='#'> Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Favorite</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Games List</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About Us </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
</div>    
)

}
export default NavBars;