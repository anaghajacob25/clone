import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';





function About() {
  return (
    <>
   <Container className='p-3 mt-5'>
      <Row className='arow'>
        <Col sm={12} md={1}></Col>
        <Col sm={12} md={5}>
         <h2 style={{fontWeight:'550',fontFamily:'sans-serif'}}>Find your New or Pre-Owned Porsche.</h2>
         <p style={{fontSize:'17px'}}>Helping you find your dream Porsche. Locate your nearest Porsche Centre and explore the range of New and Pre-Owned vehicles.</p>
         <Form >
         
           
              <Form.Label className='mt-3'>Find your nearest Porsche Centre</Form.Label>
              
                {/* <InputGroup.Text ><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c6c8cd",}} /></InputGroup.Text> */}
                <Form.Control className='mb-5'  style={{height:'55px',border:'2px solid black',width:"90%"}}
                  type="text"
                  placeholder="Enter City or Postal Code"
                  
                />
            </Form>
           
        </Col>

        <Col sm={12} md={6} className='m-0 p-0'>
          <Image src="src/assets/about.avif"  width={'760px'} className='abtImg'/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About