
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBars.css';
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
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowBasic(false);
  };

  return (
    <div>
      <MDBNavbar
        className='navv'
        expand='lg'
        light
        style={{ width: '100%', backgroundColor: 'rgb(42, 42, 42)', color: 'rgb(234, 234, 234)' }}
      >
        <MDBContainer fluid style={{ display: 'flex', fontSize: '20px', width: '100%', padding: '20px' }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <h5
              id='btn-show'
              style={{
                color: 'rgb(104, 103, 103)',
                fontSize: '30px',
                display: 'flex',
                marginTop: 'auto',
                marginBottom: 'auto',
                color: 'rgb(234, 234, 234)',
              }}
            >
              Games Deals
            </h5>
          </Link>

          <MDBNavbarBrand style={{ marginLeft: '400px' }} href='/'></MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            style={{ color: 'rgb(234, 234, 234)' }}
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav
              style={{ fontSize: '25px', display: 'flex', gap: '30px', color: 'rgb(234, 234, 234)' }}
              right
              className='mb-4 mb-lg-0'
            >
              <MDBNavbarItem active={activeLink === '/'} onClick={() => handleLinkClick('/')}>
                <MDBNavbarLink className='navs' style={{ borderBottom: activeLink === '/' ? '2px solid white' : 'rgb(234, 234, 234)',color:"white" }} aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active={activeLink === '/FavDeals'} onClick={() => handleLinkClick('/FavDeals')}>
                <MDBNavbarLink className='navs' style={{ borderBottom: activeLink === '/FavDeals' ? '2px solid white' : 'rgb(234, 234, 234)',color:"white" }} href='/FavDeals'>
                  Favorite
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active={activeLink === ''} onClick={() => handleLinkClick('')}>
                <MDBNavbarLink className='navs' style={{ borderBottom: activeLink === '/AboutUs' ? '2px solid white' : 'rgb(234, 234, 234)',color:"white" }} href='/AboutUs'>
                  About Us
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active={activeLink === '/News'} onClick={() => handleLinkClick('/News')}>
                <MDBNavbarLink className='navs' style={{ borderBottom: activeLink === '/News' ? '2px solid white' : 'rgb(234, 234, 234)',color:"white" }}href='./News'>
                  NEWS                
               </MDBNavbarLink>
              </MDBNavbarItem>
             
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
</div>    
)

}
export default NavBars;