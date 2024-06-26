import React from 'react'
import './Varient.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import sample from '../assets/h2.avif'




function Varients() {
  return (
    <>
     <Container className=' p-4 mt-5'>
      <Row className='d-flex  vrow' style={{marginBottom:'100px'}}>
        <Col  md={4} className='col' >
            <img src="https://images-porsche.imgix.net/-/media/73CB93AF6E914894B6455DF58D1189B5_8C27F85C0B1044D590A2BC2C7107A481_01---J1-TOP-GT-WP?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format" alt=""  style={{borderRadius:'20px'}}/>
            <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'15px',fontWeight:550}}>The new all-electric Macan.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:'white ',fontSize:'20px'}}  className='p-3 mb-2 me-4' />
           </div>
        </Col>
        <Col  md={4} className='col' >
            <img src="https://images-porsche.imgix.net/-/media/E82F8FB69E084D19842C2F15A61C5B66_DC00CF012DA145B4986DFD381C28F471_KW13---Formel-E---Tokyo?w=600&q=85&crop=faces%2Centropy%2Cedges&auto=format" alt=""  style={{borderRadius:'20px'}}/>
            <div className='content d-flex align-items-center justify-content-around  '>
            <p className='me-5 mt-2' style={{fontSize:'17px',fontWeight:550}}> Formula E Electrifies Tokyo.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:'white ',fontSize:'20px'}}  className='p-3 mb-2 me-4' />
        </div>
        </Col>
        <Col  md={4} className='col' >
        <img src="https://images-porsche.imgix.net/-/media/66CD5B15F12E4750B21ACD39C851B030_5F53E33F81D84CC7B6E0524D7F46D707_MA24T4COX0001-macan-4-side?w=1583&q=45&dpr=2&auto=formathttps://images-porsche.imgix.net/-/media/66CD5B15F12E4750B21ACD39C851B030_5F53E33F81D84CC7B6E0524D7F46D707_MA24T4COX0001-macan-4-side?w=1583&q=45&dpr=2&auto=format" alt="" style={{borderRadius:'20px'}}/>
        <div className='content d-flex align-items-center justify-content-around '>
            <p className='me-5 mt-2' style={{fontSize:'17px',fontWeight:550}}>The new all-electric Macan.</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:'white ',fontSize:'20px'}}  className='p-3 mb-2 me-4' />
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Varients