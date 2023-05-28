import { useEffect, useState } from "react";
import "./favDeals.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBars";
import { Link } from "react-router-dom";
import ModalGamesUpdate from "../ModalGames/ModalGamesUpdate";

export default function FavDeals(props) {
  
  const [favArrGame, setFavArrGame] = useState([]);
  const [gamesdata, setgamessdata] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const [clickedgames, setclickedgames] = useState({});

  function allFavData(arr) {
    setgamessdata(arr);
  }
  const handleShow = (item) => {
    // console.log(item)
    setclickedgames(item);
    setShowFlag(true);
  };
  const handleClose = () => {
    setShowFlag(false);
  };

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
    setgamessdata(favArrGame);
  }, [favArrGame]);

  return (
    <>
      <NavBar />
      <h1 style={{ padding: "55px", color: "white" }} className="heading">Favorite Deals List</h1>

      {/* <div className="cardGrid"> */}
      <div class="content"> 
        {gamesdata.map((item) => {
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

            // <div className="nft" key={item.gameID}>
            //   <div className="main">
            //     <Link to="" className="hero-image-container">
            //       <img
            //         class="hero-image"
            //         src={item.thumb}
            //         height="250px"
            //         width="250px"
            //         alt="Spinning glass cube"
            //       />
            //     </Link>
            //     <h2>{item.title}</h2>

            //     <div className="tokenInfo">
            //       <div className="price">
            //         Watch:
            //         {item.steamratingcount}
            //       </div>
            //       <div className="">
            //         <ins>Rating: </ins>
            //         {item.steamratingpercent + "%"}
            //       </div>
            //     </div>
            //     <hr />
            //     <div>
            //       <span style={{ fontWeight: "bold" }}>Review: </span>
            //       {item.comment}
            //     </div>
            //     <hr />
            //     <Button
            //       variant="dark"
            //       onClick={() => {
            //         handleShow(item);
            //       }}
            //     >
            //       Update
            //     </Button>
            //     <br />
            //     <Button
            //       variant="outline-danger"
            //       onClick={() => {
            //         deleteFavGame(item);
            //       }}
            //     >
            //       Delete
            //     </Button>
            //   </div>
            // </div>
            


  <a class="card" href="#!">
    <div class="front" >
      <img src={item.thumb}></img>
    </div>
    <div class="back">
      <div>
      <h3>{item.title}</h3>
      <div className="tokenInfo">
                   <div className="price">
                    Watch:
                  {item.steamratingcount}
                   </div>
                   <div className="">
                     <ins>Rating: </ins>
                     {item.steamratingpercent + "%"}
                   </div>
                 </div>
                <hr />
                 <div>
                   <span style={{ fontWeight: "bold" }}>Review: </span>
                   {item.comment}
                 </div>
        <Button style={{margin:"5px"}}
                   variant="dark"
                   onClick={() => {
                     handleShow(item);
                   }}
                 >
                   Update
                 </Button>
               <br />
                 <Button
                   variant="outline-danger"
                   onClick={() => {
                     deleteFavGame(item);
                   }}
                 >
                   Delete
                 </Button>
      </div>
    </div></a>
   

          );
        })}
        </div>
  {/* </div> */}
      <ModalGamesUpdate
        showFlag={showFlag}
        clickedgames={clickedgames}
        handleClose={handleClose}
        allFavData={allFavData}
      />

      <Footer />
    </>
  );
}

{
  /* <updateModal
updateModalll={show}
closeUpdModal={closeUpdModal}
clickedMovie={clickedMovie}/> */
}
