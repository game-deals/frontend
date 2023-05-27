import { useEffect, useState } from "react";
import './favDeals.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from "./style.module.css";

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple
// } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function FavDeals(props) {
  const imagePath = "http://image.tmdb.org/t/p/w500/";

  const [favArrGame, setFavArrGame] = useState([]);
  const [show, setUpdModal] = useState(false);
  const [clickedMovie, setclickedMovie] = useState({});

  const getFavGame = () => {
    const serverURL = `http://localhost:3005/getFav`;
    fetch(serverURL).then((response) => {
      response.json().then((data) => {
        setFavArrGame(data);
      });
    });
  };
  const deleteFavGame = (item) => {
    console.log("delete obj", item);
    const serverURL = `http://localhost:3005/delete/${item.id}`;
    axios
      .delete(serverURL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const displayUpdaModal=(item)=>{
  //   setUpdModal(true);
  //   setclickedMovie(item);
  // }
  // const closeUpdModal=()=>{
  //   setUpdModal(false);
  // }

  useEffect(() => {
  getFavGame();
  },[] );

  return (
    <>
      <Navbar/>
      <h1 style={{ padding: "55px",color:"white" }}>Favorite Deals List</h1>
    
    <div className="cardGrid">
  {favArrGame.map((item) => {
    console.log(item);
    return (
      // <div className="cardCon">
      //   <div className="cardd">
      //     <MDBCard className="mdCard">
      //       <MDBCardImage src={item.thumb} position="top" alt="..." g />
      //       <MDBCardBody className="cardd">
      //         <MDBCardTitle>{item.title}</MDBCardTitle>
      //         <MDBCardText>{item.steamratingcount}</MDBCardText>
      //         <MDBCardText>
      //           steam rating percent: {item.steamratingpercent + "%"}
      //         </MDBCardText>
      //         <MDBCardText>{item.comment}</MDBCardText>
      //         <MDBBtn href="#">Button</MDBBtn>
      //       </MDBCardBody>
      //     </MDBCard>
      //   </div>
      // </div>
      
      <div className="nft">
      <div className='main'>
      <Link to="" className="hero-image-container">
        <img class="hero-image" src={item.thumb} height="250px"width="250px" alt="Spinning glass cube"/>
      </Link>
        <h2>{item.title}</h2>
        
        <div className='tokenInfo'>
          <div className="price">
          Watch: 
            {item.steamRatingCount}
          </div>
          <div className="">
            <ins>Rating: </ins>
            {item.steamRatingPercent+"%"}
          </div>
        </div>
        <hr />
        <div><span style={{fontWeight:"bold"}}>Review: </span>{item.comment}</div>
        <hr />
        <Button variant="dark" >Update</Button><br/>
        <Button variant="outline-danger" onClick={()=>{deleteFavGame(item)}}>Delete</Button>

      </div>
    </div>
    );
  })}
  </div>

     
   {/* <updateModal
   updateModalll={show}
   closeUpdModal={closeUpdModal}
   clickedMovie={clickedMovie}/> */}

  <Footer/>

  
      
   
    </>
);
}
