// import { useEffect, useState } from "react";

// import Card from 'react-bootstrap/Card';
// import { Button } from 'react-bootstrap';
// import NavBars from "../NavBar/NavBars";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// function GamesDetails() {
 
//   const [game, setGameData] = useState({});

//   const param = useParams();
//   const id = param.id;

//   const getAllMovies = () => {
//     const serverURL = `http://localhost:3005/getGames/${id}`;

//     fetch(serverURL).then((response) => {
//       response.json().then((data) => {
//         setGameData(data);
//       });
//     });
//   };
//   console.log(game);


//   useEffect(() => {
//     getAllMovies();
//   }, []);

//   return (
//     <>
//       <NavBars />

//       {

 
//       <Card className="card" >
//       <Link to={} variant='white' className="wrapper" style={{  width: "100%", padding: 0 }} onClick={() => {  }}>

//         <div className="wrapper">
//         <Card.Img  variant="top" src={game.thumb} className="cover-image" />
//         </div>
//         </Link>

//         <Card.Body style={{ display: "flex", flexDirection: "column" }}>
//           <Card.Title className='title'>{game.name}</Card.Title>
//           <Card.Text></Card.Text>
//           <div style={{ marginTop: "auto" }}>
//             <Link to={url} variant="dark" onClick={() => { }}>Add to Favorite</Link>
//           </div>
//         </Card.Body>
//       </Card>
//       }
//     </>
//   );
// }

// export default GamesDetails;
