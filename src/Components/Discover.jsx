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
  
  <Container className='p-4 '>
   
   <h1 className='text-center mb-5 ' style={{color:'black',fontWeight:'550'}}>Discover</h1>

      <Row className='d-flex  drow' style={{marginBottom:'100px'}}>
        <Col md={4} sm={12} className='dcol'>
         <img src="https://images-porsche.imgix.net/-/media/251A8C2673294CBEA8829DEAFABD2F39_C5C944D1262B4D5B98E265E3CEA3F25D_SM22V04OD0008_1-1?w=387&q=85&auto=format" alt=""   style={{borderRadius:'10px'}}/>
         <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'21px'}}>Take a test drive.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",fontSize:'22px'}} className='p-3 mb-2 me-4'/>
        </div>
        </Col>

        <Col md={4} sm={12} className='dcol'>
        <img src="https://images-porsche.imgix.net/-/media/5B4A936D6E4B4BD280D795E8751DE807_393FA4DBE9174685822B51D25504059E_EX24MODOX0001_1-1?w=387&q=85&auto=format" alt=""  style={{borderRadius:'10px'}}/>
        <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-3 mt-2' style={{fontSize:'21px'}}>Compare Porsche models.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",fontSize:'22px'}} className='p-3 mb-2 me-5'/>
        </div>
        </Col>

        <Col md={4} sm={12} className='dcol'>
        <img src="https://images-porsche.imgix.net/-/media/F1214B8F251048DDBB9F7A6550E26ABC_87E7C8ED4B514FDCBF980FFB7EAA2590_1-1_PCGB-TestDrive_1200x1200?w=387&q=85&auto=format" alt=""   style={{borderRadius:'10px'}}/>
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

