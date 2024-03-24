import React, { useRef, useState } from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPause, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
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
       <div className='head position-relative'>
        <video autoPlay muted loop id="myVideo" ref={videoRef} className='video-bg'>
          <source src="src/assets/banner.mp4" type="video/mp4" />
        </video>

        <Navbar expand="lg" className=" navi position-absolute ">
        <Container fluid className='navcon d-flex align-items-center justify-content-evenly'>
        
          <p href="#"  >
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: '20px' }} /> Menu
          </p>
          
        
          <img src="../src/assets/plogo.png" alt="" className='logoname'  />

          <div className='uicon'>
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontSize: '20px' }} />
         </div>
      
      </Container>
    </Navbar>

        <div className='navdetails d-flex justify-content-between align-items-center position-absolute top-50 w-100'>
          <div className='navd'>
            <h1 className='text-light headCont'>Overfeel.</h1>
            <Button className='headButton bg-transparent p-1' style={{ border: '2px solid white' }}>Discover the new Taycan</Button>
          </div>

          <div className="playpause position-absolute end-0">
            <button className='play bg-transparent' style={{ fontSize:'large' }}  onClick={handlePlayPause}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className='icon' />
            </button>
          </div>
        </div>

      </div>
   
 

   </>
  );
}

export default Header;



