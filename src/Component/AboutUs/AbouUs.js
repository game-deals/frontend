import './UboutUs.css';
import {

  MDBBtn
} from 'mdb-react-ui-kit';

import { useEffect, useState } from 'react';

import NavBars from '../NavBar/NavBars';
function AboutUS() {

  const [moviesdata, setMoviesData] = useState([])

  const getAllMovies = () => {
    const serverURL = `http://localhost:3005/getaboutData`;


    fetch(serverURL)
      .then(response => {
        response.json().then(data => {

          setMoviesData(data)


        })
      })
  }


  useEffect(() => {
    getAllMovies()
  }, [])

  return (
    <>
      <NavBars />
      <div id="header">
         
         
          <div id="sub-header">  
         <h5 style={{color:" #9A9A9A"}}>Games Deal is a price comparison website for digital PC Games. We keep track of prices across multiple stores including Steam,and you can show the news about the games , select a game Favorite and <span style={{color:"white"}}>let's start the first deal.</span>
          </h5>
         
         </div></div>
        
      <div className='bodyAboutUs'>
        {moviesdata.map(item => {

          return (


         
             
                <div class="divcontenar">
                 
                 
                 <img  class="imgperson"src={item.src}  alt="personImg" /> 
                    
                   <p class="name">{item.name}</p>  
                   <p class="title"> {item.email} </p>  <MDBBtn outline color="light" floating className='m-1' href={item.linkdin} role='button'>
              <i class="fa-brands fa-linkedin fa-beat"></i>
          </MDBBtn>
                </div>
             
             
             
            
          
          )


        })}




      </div>

    </>


  )
}

export default AboutUS;