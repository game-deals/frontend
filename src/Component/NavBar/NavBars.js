
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
import { Image } from 'react-bootstrap';

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
        style={{ padding:"5px", width: '100%', backgroundColor: 'rgb(42, 42, 42)', color: 'rgb(234, 234, 234)' }}
      >
        <MDBContainer fluid style={{ display: 'flex', fontSize: '20px', width: '100%', padding: '20px' }}>
          <Link style={{ textDecoration: 'none' }} to='/'>
          <div  style={{display:"flex" ,width:"100%"}}> 
            <Image style={{width:"150px",borderRadius:"20%"}}  src='https://media.discordapp.net/attachments/1110834493432008734/1112778446515478680/Game_Deals-1_3-removebg-preview.png?width=451&height=215'></Image>

            </div> 
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
              <MDBNavbarItem active={activeLink === '/News'} onClick={() => handleLinkClick('/News')}>
                <MDBNavbarLink className='navs' style={{ borderBottom: activeLink === '/News' ? '2px solid white' : 'rgb(234, 234, 234)',color:"white" }}href='./News'>
                  NEWS                
               </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active={activeLink === ''} onClick={() => handleLinkClick('')}>
                <MDBNavbarLink className='navs' style={{ borderBottom: activeLink === '/AboutUs' ? '2px solid white' : 'rgb(234, 234, 234)',color:"white" }} href='/AboutUs'>
                  About Us
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