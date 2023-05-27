import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './news.css';
import Nav from './NavBars'
function News (){
   
    return(
        <>
        <Nav/>
        <img className='mainImg'src='https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-10/121017-bayonetta-se-1218p-bea611.jpg' alt='img' />
        <div>
          <h3>Title of the News</h3>
         
          <p>News Discr</p>
         
          <Col xs={6} md={4}>
          <Image className='imgClass'src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" roundedCircle />
        </Col>
        <h4>author Name:...........</h4>
          <Button className='buttonnews' variant="info" onClick={()=>{

          }}>More Information</Button>{' '}
   
        </div>
        <div>
          <h3>Title of the News</h3>
         
          <p>News Discr</p>
         
          <Col xs={6} md={4}>
          <Image   className='imgClass' src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" roundedCircle />
        </Col>
        <h4>author Name:...........</h4>
          <Button   className='buttonnews' variant="info" onClick={()=>{

          }}>More Information</Button>{' '}
   
        </div>
     
        </>
    )
}

export default News;
