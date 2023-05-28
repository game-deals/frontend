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
  <div id='div-All-deals'>
    <h2 id='Deals'>Best Deals</h2>
    <div className='div-card' > 
       

{gamesdata.map((item, index) => {
  let urlsteam = `http://store.steampowered.com/app/${item.steamAppID}/`
   let url =`/${item.title}`
  if (index < 26 && index !=0 && index!=11) {
    return (
      <Card className="card" key={index}  > 
      <Link to={urlsteam} variant='white'  style={{  width: "100%", padding: 0 }} >
        <div >      
        <Card.Img className="wrapper"  src={item.thumb}  />
        </div>
        </Link>
        <Card.Body style={{ display: "flex" ,justifyContent:"space-around" }}>
       <div style={{display:"flex",flexDirection:"column" ,gap:"10px"}}  >
          <Card.Title className='title'><h4 style={{color:"black",fontFamily:"Roboto, sans-serif;",fontSize:"22px",fontWeight:"bold"}}>{item.title}</h4></Card.Title>
          <Link   to={url} variant='white' style={{ marginTop:"auto",color:"black",fontFamily:"Roboto, sans-serif;",fontSize:"22px",fontWeight:"bold",textDecoration:"none"}}>
<h3 id='news'>News</h3>
</Link></div><Card.Text></Card.Text>
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
  <a href='#btn-show'><BsFillArrowUpCircleFill  style={{ width:"50px", height:"100px",color:"white"}}/></a></div>

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