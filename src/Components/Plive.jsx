import React from 'react'
import './Plive.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Plive() {
  return (
    <>
     <div style={{backgroundColor:'white'}} className='p-3'>
        <h1 className='text-center mb-5' style={{color:'black',fontWeight:'550'}}>Porsche Live</h1>

        <Container className='mb-5'>
      <Row>
        <Col sm={12} md={1}></Col>
        <Col sm={12} md={3} >
        <img src="../src/assets/p1.jpg" alt="" height={'350px'} className='img1' />
        </Col>
        <Col sm={12} md={3} className='d-flex ms-5'>
        <img src="../src/assets/p2.jpg" alt="" height={'170px'} className='me-2 img2'/>
        <img src="../src/assets/p3.jpg" alt="" height={'170px'} className='me-2 img2'/>
        </Col>
        <Col sm={12} md={3} style={{marginLeft:'80px'}}>
       
        <img src="../src/assets/p4.jpeg" alt="" height={'350px'} width={'100%'} className='img3'/>
        </Col>
        <Col sm={12} md={1}></Col>
      </Row>


      <Row>
        <Col sm={12} md={1}></Col>
        <Col sm={12} md={3} className='d-flex mt-2'>
        <img src="../src/assets/p5.webp" alt="" height={'190px'} className='img4 me-2'/>
        <img src="../src/assets/p6.jpg" alt="" height={'190px'} width={'100%'} className='img4'/>
        </Col>
        <Col sm={12} md={3} className='d-flex ms-5'>
         <video autoPlay muted loop  src="../src/assets/p7.mp4" height={'365px'}  style={{marginTop:'-165px'}} className='pVideo'></video>
        </Col>
        <Col sm={12} md={3} style={{marginLeft:'80px'}} className='d-flex mt-2'>
          <img src="../src/assets/p8.jpg" alt="" height={'190px'} className=' img5 me-2' width={'45%'} />
          <img src="../src/assets/p9.jpg" alt="" height={'190px'} width={'52%'} className='img5'/>
        </Col>
        <Col sm={12} md={1}></Col>
      </Row>

      
    </Container>
    </div> 
    
    </>
  )
}

export default Plive

