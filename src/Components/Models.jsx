import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Models.css'
import Button from 'react-bootstrap/Button';

function Models() {
  return (
    <>
    <h1  className='text-center mb-5 ' style={{fontWeight:550}}>Models</h1>
    <Container >
    <Row className='mb-4 mrow' >
      <Col sm={12} md={1}></Col>
      <Col sm={12} md={5} style={{position:'relative'}} className='coll mb-2'>
        <img src="https://images-porsche.imgix.net/-/media/793D8E2DBA74441E976BDF9F39751BC3_9B992E6A294D444EB475BCC11BBBC965_718_Carrange?w=880&q=85&auto=format" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model fst-italic' style={{fontWeight:'600'}}>718</h4>
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
      <Col sm={12} md={5}  style={{position:'relative'}}  className='coll mb-2'>
        <img src="https://images-porsche.imgix.net/-/media/732679710B254798A8B72E015D6783E3_05C275949B6D488AB04CDF08043B23FE_911_Carrange?w=880&q=85&auto=format" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model fst-italic' style={{fontWeight:'600'}}>911</h4>
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
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll mb-4'>
        <img src="https://images-porsche.imgix.net/-/media/A97C759653AA4A05A74F37B976E3B6E8_E376EBCF200043C8863372C731375E70_TA24Q3EOX0004_01-1920?w=880&q=85&auto=format" alt=""   style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model fst-italic' style={{fontWeight:'600'}}>Taycan</h4>
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
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll mb-2'>
        <img src="https://images-porsche.imgix.net/-/media/92740B9ED4D3461CB565E1FDE6DBC324_679C9FD653D546B08FD612ED2B6B19ED_CarRange_Panamera__desktop_new?w=880&q=85&auto=format" alt="" style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model fst-italic' style={{fontWeight:'600'}}>Panamera</h4>
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
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll mb-2'>
        <img src="https://images-porsche.imgix.net/-/media/7222692576E74959AF596EB7D3CE4ABD_6DBACAEC55AB4125933E6A6189AAE282_model-overview-berlin-desktop?w=880&q=85&auto=format" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model fst-italic' style={{fontWeight:'600'}}>Macan</h4>
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
      <Col sm={12} md={5} style={{position:'relative'}}  className='coll mb-2'>
        <img src="https://images-porsche.imgix.net/-/media/30F1725256BD457999C7C3ABB8B5A5D6_27629797CE32469390271EB6C205580E_Cayenne_Carrange?w=880&q=85&auto=format" alt=""  style={{borderRadius:'15px'}}/>
        <div className='model-content '>
            <h4 className='model fst-italic' style={{fontWeight:'600'}}>Cayenne</h4>
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