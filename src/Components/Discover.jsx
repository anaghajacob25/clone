import React from 'react'
import './Discover.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Discover() {
  return (
    <>
  
  <Container className='p-4 mt-5'>
   
   <h1 className='text-center mb-5 ' style={{color:'black',fontWeight:'550'}}>Discover</h1>

      <Row className='d-flex  drow' style={{marginBottom:'100px'}}>
        <Col md={4} sm={12} className='dcol'>
         <img src="../src/assets/d1.avif" alt=""   style={{borderRadius:'10px'}}/>
         <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'21px'}}>Take a test drive.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",fontSize:'22px'}} className='p-3 mb-2 me-4'/>
        </div>
        </Col>

        <Col md={4} sm={12} className='dcol'>
        <img src="../src/assets/d2.avif" alt=""  style={{borderRadius:'10px'}}/>
        <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-3 mt-2' style={{fontSize:'21px'}}>Compare Porsche models.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",fontSize:'22px'}} className='p-3 mb-2 me-5'/>
        </div>
        </Col>

        <Col md={4} sm={12} className='dcol'>
        <img src="../src/assets/d3.avif" alt=""   style={{borderRadius:'10px'}}/>
        <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'21px'}}>Finance from Porsche.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",fontSize:'22px'}} className='p-3 mb-2 me-5'/>
        </div>
        </Col>
      </Row>
    </Container>

   
    </>
  )
}

export default Discover

