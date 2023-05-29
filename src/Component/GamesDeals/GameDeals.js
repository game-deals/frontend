import React from 'react';
import './gameDeals.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useEffect,useState } from "react";
import axios from 'axios';
import ModalGames from '../ModalGames/ModalGames';
import { Link } from 'react-router-dom';
import { BsFillArrowUpCircleFill, BsFillBookmarkStarFill} from "react-icons/bs";

export default function GameDeals() {
  const [gamesdata,setgamessdata]=useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const [catogery,setCatogry] = useState("1");
  const [btnFlag,setBtnFlag]=useState("active")

  const [clickedgames, setclickedgames] = useState({});

  const handleShow = (item) => {
    // console.log(item)
    setclickedgames(item)
    setShowFlag(true)

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

  console.log("succes item",item)
}

  const getAllgames=()=>{

    const serverURL =`http://localhost:3005/${catogery}`

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
},[catogery])
const handleImageClick = (item) => {
  // Logic to handle the click event and show the modal
  // You can set the clicked image in the state or perform any other action you want.
  console.log("Clicked image:", item);
}

return (
  <div id='div-All-deals'>
    <h2 id='Deals'>Best Deals</h2>
  
    <div  className='category'>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("1")}}>Steam</Button>

 {/* size big */} <Button   variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("2")}}>GamersGate</Button>
   
    <Button  variant="secondary"   className='btn-category' onClick={ ()=>{setCatogry("3")  }}>GreenManGaming</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("7")}}>GOG</Button>
    <Button  variant="secondary"  className='btn-category' onClick={ ()=>{setCatogry("8")}}>Origin</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("11")}}>Humble Store</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("13")}}>Uplay</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("15")}}>Fanatical</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("21")}}>WinGameStore</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("23")}}>GameBillet</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("24")}}>Voidu</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("25")}}>Epic Games</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("27")}}>Gamesplanet</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("28")}}>Gamesload</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("29")}}>2Game</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("30")}}>IndieGala</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("31")}}>Blizzard Shop</Button>
    <Button  variant="secondary"  className='btn-category' onClick={ ()=>{setCatogry("33")}}>DLGamer</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("34")}}>Noctre</Button>
    <Button  variant="secondary" className='btn-category' onClick={ ()=>{setCatogry("35")}}>DreamGame</Button>

</div>
    <div className='div-card' > 

{gamesdata.map((item, index) => {
  let urlsteam = `http://store.steampowered.com/app/${item.steamAppID}/`
   let url =`/${item.title}`
   
  if (index < 26 && index !=0 && index!=11 && item.steamAppID!=null) {
    return (
      <Card className="card" key={index}  > 
      <Link to={urlsteam} variant='white'  style={{  width: "100%", padding: 0 }} >
        <div  >      
        <Card.Img   src={item.thumb}  />
        </div>
        </Link>
        <Card.Body style={{ display: "flex" ,justifyContent:"space-around" }}>
       <div style={{display:"flex",flexDirection:"column" ,gap:"10px"}}  >
          <Card.Title className='title'><h4 style={{color:"black",fontFamily:"Roboto, sans-serif;",fontSize:"22px",fontWeight:"bold"}}>{item.title}</h4></Card.Title>
          </div><Card.Text></Card.Text>
          <div   style={{ display:"flex" ,height:"50px",marginLeft:"auto",marginTop:"auto" }}>
            <Button  variant="dark" onClick={() => { addToFav(item); handleShow(item) }}>    <BsFillBookmarkStarFill/>
</Button>
           


          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return null;
  }
})}
</div>
<div style={{display:"flex",flexDirection:"row-reverse" , paddingLeft:"500px"}}>
  <a href='#Deals'><BsFillArrowUpCircleFill  style={{ width:"50px", height:"100px",color:"white"}}/></a></div>

    <ModalGames showFlag={showFlag} clickedgames={clickedgames} handleClose={handleClose}/>
  </div >
);
}



// <div className="cardGrid">
//   {gamesdata.map((item,index) => {
    
//     if(index<10){
//     return (
//       // <div className="cardCon">
//       //   <div className="cardd">
//       //     <MDBCard className="mdCard">
//       //       <MDBCardImage src={item.thumb} position="top" alt="..." g />
//       //       <MDBCardBody className="cardd">
//       //         <MDBCardTitle>{item.title}</MDBCardTitle>
//       //         <MDBCardText>{item.steamratingcount}</MDBCardText>
//       //         <MDBCardText>
//       //           steam rating percent: {item.steamratingpercent + "%"}
//       //         </MDBCardText>
//       //         <MDBCardText>{item.comment}</MDBCardText>
//       //         <MDBBtn href="#">Button</MDBBtn>
//       //       </MDBCardBody>
//       //     </MDBCard>
//       //   </div>
//       // </div>
      
//       <div className="nft">
//       <div className='main'>
//          <Button variant='white'  style={{ width: "100%", padding: 0 }} onClick={() => { handleImageClick(item) }}>

//          <div > 
//                 <Card.Img variant="top" src={item.thumb} className="cover-image" />
//                 </div>   </Button>
                
//         {/* <img class="hero-image" src={item.thumb} height="250px"width="250px" alt="Spinning glass cube"/> */}
//         <h2>{item.title}</h2>
        
//           <Button variant="dark" onClick={() => { addToFav(item); handleShow(item) }}>Add to Favorite</Button>

//       </div>
//     </div>
    
//     )}else {
//       return null}

//   })}
//   </div>