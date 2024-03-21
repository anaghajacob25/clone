import React, { useRef, useState } from 'react';
import './Header.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPause, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function Header() {

    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
  
    const handlePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

  return (

    <>
   <div className='position-relative '>
   <video autoPlay muted loop id="myVideo" ref={videoRef} style={{ width: '100%', zIndex: 0 }}>
    <source src="src/assets/banner.mp4" type="video/mp4" />
  </video> 

  
  <div className='navdetails d-flex justify-content-between align-items-center position-absolute top-50 w-100'>
  <div style={{ marginLeft: '50px' }}>
    <h1 className='text-light headCont' style={{ fontSize: '87px' }}>Overfeel.</h1>
    <Button className='head-button p-3 bg-transparent' style={{ border: '2px solid white' }}>Discover the new Taycan</Button>
  </div>

  <div className="playpause position-absolute end-0">
    <Button className='play bg-transparent' variant="outline-light" size="lg" onClick={handlePlayPause}>
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} style={{ color: 'white', fontSize: '24px' }} className='icon bg-transparent' />
    </Button>
  </div>
</div>

    <Navbar expand="lg" className='w-100 mb-4' style={{position:'absolute',bottom:'85%'}}>
      <Container fluid >
        <p href="#" style={{color:'white',marginLeft:'40px'}} className='mt-5' ><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",fontSize:'20px'}}/> Menu</p>
        
        
          <Nav
            className="me-auto  my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <img src="../src/assets/plogo.png" alt="" height={'200px'} style={{marginLeft:'600px'}} className='logoname'/>
          </Nav>
          <div className="d-flex me-5 mt-4" >
          <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",fontSize:'20px'}} />
          </div>
      
      </Container>
    </Navbar>

    
   </div>

   </>
  );
}

export default Header;