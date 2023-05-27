
import './news.css';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import { MDBCard, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle, MDBRipple } from 'mdb-react-ui-kit';
import NavBars from '../NavBar/NavBars';

   



function News (){
  const [moviesdata, setMoviesData] = useState([])

  const getAllMovies = () => {
    const serverURL = `http://localhost:3005/trending`;

 
    fetch(serverURL)
        .then(response => {
            response.json().then(data => {
           
                setMoviesData(data)
               

            })
        })
}

     
useEffect(()=>{
    getAllMovies()
},[])

   
    return(
        <>
    
    <NavBars/>
       

        {moviesdata.map(item => {
          if (!item.urlToImage) {
            return null; 
          }
                return (
         
                  <a href={item.url}>      <CardGroup >  <MDBCard background='dark' className='text-white'>
   <MDBCardImage overlay src={item.urlToImage} alt='...' /> <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      <MDBCardOverlay>
     
   <MDBCardTitle style={{ textAlign:"center"}}> <h1>{item.title}</h1></MDBCardTitle>
        <MDBCardText style={{ textAlign:"center"}}>
       <p> {item.description}</p>
        </MDBCardText>
       
      </MDBCardOverlay>
    </MDBCard>
    </CardGroup>   </a>
                )


            })}
      
          
        </>
    )
}

export default News;
