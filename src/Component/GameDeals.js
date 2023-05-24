import React from 'react';
import './gameDeals.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

export default function GameDeals() {
  return(
    <>
    <h1 style={{display:"flex",alignItems:"center",color:"black", height:"60px" ,}}>Best Deals</h1>

    <div style={{width:"100%"  ,display:"flex", flexWrap:"wrap",}} >  
    
       <Row   style={{maxWidth:"100%" ,textAlign:"center" , }} >
     
        <Col width="100%">
          {/*deals.map(item=>{
          return(
          
          )
          })  */}
           <div className="div-imgs title" width="100%"> 
          <Card  className="card">
            <div className="wrapper">
            <Card.Img variant="top" src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image"  />
            </div>
            <Card.Body>
              <Card.Title className='title' >Card title</Card.Title>
              <Button variant='dark'>Add Fovarite</Button>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
          
          </div>
        </Col>
        
     
    </Row>
   {/* 
     <div className="div-imgs"> 
       
     <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
    
  </div>
</a>

  </div> */}
</div>
</>
  )
}
