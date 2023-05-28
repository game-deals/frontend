import './UboutUs.css';
import { useEffect, useState } from 'react';

import NavBars from '../NavBar/NavBars';
function AboutUS(){

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
  
       
  useEffect(()=>{
      getAllMovies()
  },[])
    
    return(
    <>
<NavBars />

<div className='bodyAboutUs'> 
{moviesdata.map(item => {
         
                return (
         

<div class="person">
<div class="container">
  <div class="container-inner">
    <img
      class="circle"
      src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" alt="imag"/>
   
    <img
      class="img img1"
    src={item.src}  alt="personImg" />
  </div>
</div>
<div class="divider"></div>
<div class="name">{item.name}</div>
<div class="title">{item.email}</div>
</div>
                )


            })}



           
    </div>
    <p className='disc'>
Welcome to our gaming website! Our platform features the latest and most popular games for players of all ages. With a user-friendly interface, 
you can easily discover new games and know last news for it
.Our website is designed to provide a seamless  experience,  You can access our games directly from your browser, anytime and anywhere. 
 Join our community of gamers today and let the fun begin!
</p>
    </>
         
       
    )
}

export default AboutUS;