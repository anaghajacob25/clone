import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
    <div className='p-5 mt-3 ' style={{color:'white',backgroundColor:'black'}} >
        <h4 style={{fontWeight:'600'}}>Current Region / Language</h4>
       <div className='d-flex mt-3'>
            <img src="../src/assets/bflag.png" alt="" height={'40px'} className='me-1'/> 
            <h6 className='p-2'>Great Britain / English</h6>
            <h6 className='text-decoration-underline p-2 ms-3'>Change</h6>
       </div>

       <Container className='mt-5' style={{marginRight:'260px'}}>
      
      <Row>
        <Col xs={12} md={3} >
          <h5 style={{fontWeight:'600'}}  >Newsletter</h5>
          <p >Latest news directly in your inbox</p>
          <Button variant="light"  className='buttonmain btn mt-3' style={{fontSize:'13px',height:'50px'}}>
           Subscribe
         </Button>
        </Col>

        <Col xs={12} md={3} className='col2 ms-2'>
          <h5 style={{fontWeight:'600'}} className='mb-2'>Contact</h5>
          <p style={{fontSize:'17px'}}>Do you have any questions?</p>
          <Button variant="light"  className='buttonmain  mt-3 ' style={{fontSize:'13px',height:'50px'}} >
           Contact Form
         </Button>
        </Col>

        <Col xs={12} md={3} className='col2 ms-2'>
      <h5 style={{ fontWeight: '600' }} className='mb-2'>Social Media</h5>
      <p>Get in touch with us via social media.</p>
      <div className='icons d-flex' style={{ marginTop: '30px' }}>
        <FontAwesomeIcon icon={faFacebookF} style={{ color: "#000000" }} className='li me-3 border border-1 rounded p-3 bg-light' />
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000" }} className='li me-3 border border-1 rounded p-3 bg-light' />
        <FontAwesomeIcon icon={faPinterestP} style={{ color: "#000000" }} className='li me-3 border border-1 rounded p-3 bg-light' />
        <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000" }} className='li me-3 border border-1 rounded p-3 bg-light' />
        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#000000" }} className='li me-3 border border-1 rounded p-3 bg-light' />
        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#000000" }} className='li me-3 border border-1 rounded p-3 bg-light' />
      </div>
    </Col>

        <Col xs={12} md={3}></Col>
      </Row>

      <Row className='mt-5 '>
        <Col xs={12} md={3}>
          <h5 style={{fontWeight:'600'}} className='mb-4'>Company</h5>
          
            <p>Porsche at a Glance</p>
            <p>Career</p>
            <p>Contact</p>
          
        </Col>

        <Col xs={12} md={3} >
          <p>Porsche Cars Great Britain</p>
          <p>Partner Forum</p>
        </Col>

        <Col xs={12} md={3} >
         <p>Sustainability</p>
         <p>Press</p>
        </Col>
        
        <Col xs={12} md={3}></Col>
      </Row>
     
    </Container>

   <hr className='p-4' style={{marginTop:'60px'}}/>

   
<div style={{fontSize:'15px'}}>
      <p style={{marginBottom:'30px'}} >© 2024 All rights reserved to Porsche Cars Great Britain Limited and its licensors. <span className='text-decoration-underline'>Terms of Use </span> |  <span className='text-decoration-underline'>Privacy Policy</span> | <span className='text-decoration-underline'>Cookies</span> |<span className='text-decoration-underline'> Regulatory </span>| <span className='text-decoration-underline'>Trade Marks and other IPRs</span> | <span className='text-decoration-underline'>Slavery and Human Trafficking</span> | <span className='text-decoration-underline'>UGC Terms of Use</span> | <span className='text-decoration-underline'>Tax Strategy</span> | <span className='text-decoration-underline'>Pension and Assurance Scheme</span> | <span className='text-decoration-underline'>Section 172 Statement</span> | <span className='text-decoration-underline'>Open Source Software Notice </span>| <span className='text-decoration-underline'>Whistleblower System</span> | <span className='text-decoration-underline'>Porsche Code of Conduct</span>
    </p>
  
    <p style={{marginBottom:'30px'}}>
  * Data determined in accordance with the Worldwide Harmonized Light Vehicles Test Procedure (WLTP) as required by law. For Plug-in Hybrid Electric Vehicle (PHEV) range and Equivalent All Electric Range (EAER) figures are determined with the battery fully charged, using a combination of both battery power and fuel.</p>

  <p style={{marginBottom:'30px'}}>Values are provided for comparison only. To the extent that fuel and energy consumption or CO2 values are given as ranges, these do not relate to a single, individual car and do not constitute part of the offer. Optional features and accessories can change relevant vehicle parameters such as weight, rolling resistance and aerodynamics which may result in a change in fuel or energy consumption and CO2 values. Vehicle loading, topography, weather and traffic conditions, as well as individual driving styles, can all affect the actual fuel consumption, energy consumption, electrical range, and CO2 emissions of a car.
 </p>

 <p>** Important information about the all-electric Porsche models can be found <span className='text-decoration-underline'>here.</span></p>

<p className='text-center'> <img src="../src/assets/plogo.png" alt="" height={'220px'}  /></p>
     
</div>

</div>
    </>
  )
}

export default Footer