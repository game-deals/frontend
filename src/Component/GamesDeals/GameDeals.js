import React from 'react';
import './gameDeals.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useEffect,useState } from "react";
import axios from 'axios';
import ModalGames from '../ModalGames/ModalGames';
import { Link } from 'react-router-dom';
export default function GameDeals() {
  const [gamesdata,setgamessdata]=useState([]);
  const [showFlag, setShowFlag] = useState(false);

  const [clickedgames, setclickedgames] = useState({});

  const handleShow = (item) => {
    // console.log(item)
    setclickedgames(item)
}
const handleClose = () => {
  setShowFlag(false)
}

const addToFav =  (item) =>{
  console.log("home obj",item)
  item.comment=" "
  const serverURL = `http://localhost:3005/addToFav`;
   axios.post(serverURL , item )
  .then( response=>{
      console.log(response.data)
  })
  .catch((error)=>{
      console.log(error)
  })
  setShowFlag(true)

  console.log("succes item",item)
}

  const getAllgames=()=>{
    const serverURL =`http://localhost:3005/`

      // using axios
    // axios.get(serverURL)
    // .then(response=>{
    //     console.log(response.data)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
    fetch(serverURL)
        .then(response => {
            response.json().then(data => {
                console.log(data)
                setgamessdata(data)

            })
        })
}


useEffect(()=>{
  getAllgames();
},[])
const handleImageClick = (item) => {
  // Logic to handle the click event and show the modal
  // You can set the clicked image in the state or perform any other action you want.
  console.log("Clicked image:", item);
}
return (
  <>
    <h1 id='Deals' style={{ display: "flex", alignItems: "center", color: "black" , padding:"20px" , alignItems:"center"}}>Best Deals</h1>

    <div className='div-card' style={{ display: "flex", flexWrap: "wrap" , justifyContent:"center" }}>
      {gamesdata.map((item, index) => {
        if (index < 14) {
          return (

            <Card className="card" key={index}>
            <Button className="wrapper" style={{ backgroundColor: "inherit", width: "100%", padding: 0 }} onClick={() => { handleImageClick(item) }}>

              <div className="wrapper">
              <Card.Img  variant="top" src={item.thumb} className="cover-image" />
              </div>
              </Button>

              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title className='title'>{item.title}</Card.Title>
                <Card.Text></Card.Text>
                <div style={{ marginTop: "auto" }}>
                  <Button variant="dark" onClick={() => { addToFav(item); handleShow(item) }}>Add to Favorite</Button>
                </div>
              </Card.Body>
            </Card>
          );
        } else {
          return null;
        }
      })}
    </div>
    <ModalGames showFlag={showFlag} clickedgames={clickedgames} handleClose={handleClose}/>
  </>
);
}