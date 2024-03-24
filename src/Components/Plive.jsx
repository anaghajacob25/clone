import React from 'react'
import './Plive.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Plive() {
  return (
    <>
     <div style={{backgroundColor:'white'}} className='p-3'>
        <h1 className='text-center mb-5' style={{color:'black',fontWeight:'550'}}>Porsche Live</h1>

        <Container className='mb-5 '>
      <Row >
        <Col sm={12} md={1}></Col>
        <Col sm={12} md={3} >
        
        <Image fluid src="../src/assets/p1.jpg"    />
        </Col>
        <Col sm={12} md={3} className='d-flex  '>
        <Image fluid  src="../src/assets/p2.jpg" alt="" style={{ maxHeight: '100%', height: '140px', width: '100%' }}  className='me-2 img2'/>
        <Image fluid  src="../src/assets/p3.jpg" alt="" style={{ maxHeight: '100%', height: '140px', width: '100%' }}  className='me-2 img2'/>
        </Col>
        <Col sm={12} md={3} className='ms-2' >
       
        <Image fluid src="../src/assets/p4.jpeg" alt="" style={{ maxHeight: '100%', height: '290px', width: '100%' }}  className='img3'/>
        </Col>
        <Col sm={12} md={1}></Col>
      </Row>


      <Row >
        <Col sm={12} md={1}></Col>
        <Col sm={12} md={3} className='d-flex mt-2'>
        <Image src="../src/assets/p5.webp"  className='img4 me-2' style={{ maxHeight: '100%', height: '140px', width: '100%' }} fluid/>
        <Image src="../src/assets/p6.webp" className='img4 imgt' style={{ maxHeight: '100%', height: '140px', width: '100%' }} fluid/>

        </Col>
        <Col sm={12} md={3} className='d-flex '>
         <video autoPlay muted loop  src="../src/assets/p7.mp4"  width={'328px'} style={{marginTop:'-145px'}} className='pVideo'></video>
        </Col>
        <Col sm={12} md={3}  className='d-flex ms-2'>
          <Image fluid src="../src/assets/p8.jpg" alt="" style={{ maxHeight: '100%', height: '140px', width: '100%' }} className=' img5 imgg me-2'  />
          <Image fluid src="../src/assets/p9.jpg" alt="" style={{ maxHeight: '100%', height: '135px', width: '100%' }} className='img5'/>
        </Col>
        <Col sm={12} md={1}></Col>
      </Row>

      
    </Container>
    </div> 
    
    </>
  )
}

export default Plive

