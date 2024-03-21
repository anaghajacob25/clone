import React from 'react'
import './Varient.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';





function Varients() {
  return (
    <>
     <Container className=' p-4 mt-5'>
      <Row className='d-flex  vrow' style={{marginBottom:'100px'}}>
        <Col  md={4} className='col' >
            <img src="../src/assets/h2.avif" alt=""  style={{borderRadius:'20px'}}/>
            <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'15px',fontWeight:550}}>Spring time at Porsche. Ready for <br /> the season.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:'white ',fontSize:'20px'}}  className='p-3 mb-2 me-4' />
           </div>
        </Col>
        <Col  md={4} className='col' >
            <img src="../src/assets/h1.avif" alt=""  style={{borderRadius:'20px'}}/>
            <div className='content d-flex align-items-center justify-content-around  '>
            <p className='me-5 mt-2' style={{fontSize:'17px',fontWeight:550}}>The new all-electric Macan.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:'white ',fontSize:'20px'}}  className='p-3 mb-2 me-4' />
        </div>
        </Col>
        <Col  md={4} className='col' >
        <img src="../src/assets/h3.avif" alt="" style={{borderRadius:'20px'}}/>
        <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'17px',fontWeight:550}}>Staying on top.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:'white ',fontSize:'20px'}}  className='p-3 mb-2 me-4' />
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Varients