

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


< div  >
      <MDBNavbar className='navv' expand='lg' light bgColor='white' style={{width:"100%"}} >
        <MDBContainer fluid style={{display:"flex"  ,fontSize:"20px", width:"100%"  }}  >
        <h1 style={{color:"rgb(104, 103, 103)"}}>Gamer</h1>

        <MDBNavbarBrand style={{marginLeft:"500px"}} href='/'></MDBNavbarBrand>
          <MDBNavbarToggler 
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler >
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav   right className='mb-4 mb-lg-0'>
              <MDBNavbarItem active >
                <MDBNavbarLink  aria-current='page' href='/'> Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/FavDeals'>Favorite</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href=''>Deal List</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='./News'>News </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/AboutUs'>About Us </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
</div>    
)

}
export default NavBars;