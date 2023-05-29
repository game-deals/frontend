import React, { useState } from 'react';
import './Poster.css'
import {
  MDBCarousel,
  MDBCarouselItem,

    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
function Poster (){
    const [showBasic, setShowBasic] = useState(false);

  try {
    return(

      <div id='poster'  >

<MDBCarousel showIndicators showControls fade 
style={{width:"40%" ,marginRight: "auto"} }
>
      <MDBCarouselItem 
        itemId={1}
        src='https://images2.alphacoders.com/597/597965.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700949284.jpg'
        alt='...'
      >
        <h5>survival games</h5>
        <p>War… War Never Changes</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        itemId={3}
        src='https://images-ext-1.discordapp.net/external/tAYUbqTAV7UrX6zc4BK6gelJ9dscIOZIW5Wi48628lM/https/images8.alphacoders.com/601/601898.png?width=1072&height=670'
        alt='...'
      >
        <h5>shooters games</h5>
        <p>I Don't Need A Weapon; My Friends Are My Power!</p>
      </MDBCarouselItem>
    </MDBCarousel>

    <div id='sub-poster'>
     <h3 style={{color:"white"}}>BLACK OPS III
</h3>
     <h4 > Welcome to 2065. A new breed of Black Ops soldier emerges and the lines are blurred between our own humanity and the cutting-edge military robotics that define the future of combat.</h4>
    <Link to="https://store.steampowered.com/app/311210/Call_of_Duty_Black_Ops_III/">
    <Button variant='top' style={{backgroundColor:"white",width:"50%" }}>Download Now</Button>
 </Link>
    </div>
  </div>
    )
  } catch (error) {
    console.log(error)
  }

  
}

export default Poster;


//   <div id='poster'>

//   <div
//   className='p-5 text-center bg-image'
//   style={{ backgroundImage: "url('https://wallpapercave.com/uwp/uwp3536518.jpeg')", height: "800px" , width: "100%",  }}
 
// >
//   <Image src='./Assets/Header.jpeg'></Image>
//   <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
//     <div className='d-flex justify-content-center align-items-center h-100'>
//       <div className='text-white'>
//         <h1 className='mb-3'>Opportunities don't happen , you create them</h1>
//         <h4 className='mb-3'>let's show the deal games</h4>
        
//         <a href='#Deals'><MDBBtn color='light'  outline size="lg" className="m-2"rel="nofollow"target="_blank">
//          Show deals 
//         </MDBBtn></a>
//       </div>
//     </div>
//   </div>
// </div>
//   </div>