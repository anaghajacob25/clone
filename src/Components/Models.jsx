import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Models.css'
import Button from 'react-bootstrap/Button';

function Models() {
  return (
    <>
    <h1  className='text-center mb-5' style={{fontWeight:550}}>Models</h1>
    <Container>
    <Row className='mb-4 mrow' >
      <Col sm={12} md={1}></Col>
      <Col sm={12} md={5} style={{position:'relative'}} className='coll'>
        <img src="../src/assets/m1.avif" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model'>718</h4>
            <div className='details p-3'>
                <h4>The mid-engine sports car for two made for pure driving pleasure.</h4>
                <h5 style={{fontSize:'19px'}}>from £ 51,800.00 incl. VAT</h5>
            </div>
            <div className='details'  style={{marginLeft:'40px'}}>
            <Button variant="light" className='btn mb-3'>Build Your 718</Button>{' '}
            <Button variant="outline-light" style={{border:'2px solid white'}} className='btn'>All 718 models</Button>{' '}
            </div>
        </div>
      </Col>
      <Col sm={12} md={5}  style={{position:'relative'}}  className='coll'>
        <img src="../src/assets/m2.avif" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model'>911</h4>
            <div className='details p-3'>
                <h4>The iconic, rear-engine sports car with exceptional performance.</h4>
                <h5 style={{fontSize:'19px'}}>from £ 97,000.00 incl. VAT</h5>
            </div>
            <div className='details'  style={{marginLeft:'40px'}}>
            <Button variant="light"  className='btn mb-3'>Build Your 911</Button>{' '}
            <Button variant="outline-light" style={{border:'2px solid white'}} className='btn'>All 911 models</Button>{' '}
            </div>
        </div>
      </Col>
      <Col sm={12} md={1}></Col>

    </Row>

    <Row className='mb-4 mrow'>
      <Col sm={12} md={1}></Col>
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll'>
        <img src="../src/assets/m3.avif" alt=""   style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model'>Taycan</h4>
            <div className='details p-3'>
                <h4>The pure expression of an electric sports car with motorsport performance.</h4>
                <h5 style={{fontSize:'19px'}}>from £ 86,500.00 incl. VAT</h5>
            </div>
            <div className='details ' style={{marginLeft:'40px'}}>
            <Button variant="light"  className='btn mb-3'>Build Your Taycan</Button>{' '}
            <Button variant="outline-light" style={{border:'2px solid white'}} className='btn'>All Taycan models</Button>{' '}
            </div>
        </div>
      </Col>
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll'>
        <img src="../src/assets/m4.avif" alt="" style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model'>Panamera</h4>
            <div className='details  p-3'>
                <h4>The sports car limousine for an active lifestyle with highest comfort.</h4>
                <h5 style={{fontSize:'19px'}}>from £ 79,500.00 incl. VAT</h5>
            </div>
            <div className='details' style={{marginLeft:'40px'}}>
            <Button variant="light"  className='btn mb-3'>Build Your Panamera</Button>{' '}
            <Button variant="outline-light" style={{border:'2px solid white'}} className='btn'>All Panamera models</Button>{' '}
            </div>
        </div>
      </Col>
      <Col sm={12} md={1}></Col>

    </Row>

    <Row className='mb-4 mrow'>
      <Col sm={12} md={1}></Col>
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll'>
        <img src="../src/assets/m5.avif" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model'>Macan</h4>
            <div className='details p-3'>
                <h4>The sports car of compact SUVs.</h4>
                <h5 style={{fontSize:'19px'}}>from £ 69,800.00 incl. VAT</h5>
            </div>
            <div className='details' style={{marginLeft:'40px'}}>
            <Button variant="light"  className='btn mb-3'>Build Your Macan</Button>{' '}
            <Button variant="outline-light" style={{border:'2px solid white'}} className='btn'>All Macan models</Button>{' '}
            </div>
        </div>
      </Col>
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll'>
        <img src="../src/assets/m6.avif" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model'>Cayenne</h4>
            <div className='details p-3'>
                <h4>The versatile SUV with sports car performance and up to five seats.</h4>
                <h5>from £ 70,400.00 incl. VAT</h5>
            </div>
            <div className='details' style={{marginLeft:'40px'}}>
            <Button variant="light"  className='btn mb-3'>Build Your Cayenne</Button>{' '}
            <Button variant="outline-light" style={{border:'2px solid white'}} className='btn'>All Cayenne models</Button>{' '}
            </div>
        </div>
      </Col>
      <Col sm={12} md={1}></Col>

    </Row>
  </Container>
  </>
  )
}

export default Models