import { useEffect, useState } from "react";
import './favDeals.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function FavDeals() {
  const imagePath = "http://image.tmdb.org/t/p/w500/";

  const [favArr, setFavArr] = useState([]);
  // const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setclickedMovie] = useState({});
  const [showFlagUpdate, setShowFlagUpdate] = useState(false);
  const [newArr, setNewArr] = useState([]);

  const showUpdateModal = (item) => {
    setShowFlagUpdate(true);
    setclickedMovie(item);
    console.log(item);
  };
  const handleClose = () => {
    setShowFlagUpdate(false);
  };

  const deleteFavMovie = (item) => {
    console.log("delete obj", item);
    const serverURL = `${process.env.REACT_APP_serverURL}/deleteMovies/${item.id}`;
    axios
      .delete(serverURL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const takeNewDataFromUpdatedModal = (arr) => {
    setNewArr(arr);
    // console.log(newArr)
  };

  const getFavMovie = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getMovies`;
    fetch(serverURL).then((response) => {
      response.json().then((data) => {
        setFavArr(data);
        // console.log(data)
      });
    });
  };
  useEffect(() => {
    getFavMovie();
    setNewArr(favArr);
  }, [favArr]);

  return (
    <>
      <Navbar />
      <h1 style={{ padding: "55px",color:"white" }}>Favorite Deals List</h1>


      <div style={{width:"100%", display:"flex", flexWrap:"wrap", padding:"20px", gap:"25px"}} >
      <div style={{width:"250px"}} >

      <MDBCard className="mdCard">
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>  

        <div style={{width:"250px"}}>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div> 
        <div style={{width:"250px"}}>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div> 
   </div>

  <Footer/>

        {/* <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/> */}
      
   
    </>
);
}
