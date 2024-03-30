import React, { useRef, useState } from 'react';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGreaterThan, faPause, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import video from '../assets/banner.mp4'


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


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <>
       <div className='head position-relative'>
        <video autoPlay muted loop id="myVideo" ref={videoRef} className='video-bg'>
          <source src={video} type="video/mp4" />
        </video>

        <Navbar expand="lg" className=" navi position-absolute ">
        <Container fluid className='navcon d-flex align-items-center justify-content-evenly'>
        
         
          <Button className='bg-transparent menubtn' style={{border:'1px solid transparent'}} onClick={handleShow}>
          <p href="#" className='menu d-flex ' >
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: '20px' }} className='me-2'/> Menu
          </p>
      </Button>

        <Offcanvas show={show} onHide={handleClose} style={{width:'auto'}}>
        <Offcanvas.Header closeButton>
         
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex  justify-content-center menutitle'>
         <ul style={{listStyle:'none'}} className='mt-5'>
          <li style={{fontSize:'24px'}} className='mb-4'>Models  </li>
          <li style={{fontSize:'24px'}} className='mb-4'> Vehicle Purchase </li>
          <li style={{fontSize:'24px'}} className='mb-4'>Shop </li>
          <li style={{fontSize:'24px'}} className='mb-4'>Services </li>
          <li style={{fontSize:'24px'}} className='mb-4'>Experience </li>
          <li style={{fontSize:'24px'}} className='mb-4'>Find a Dealer </li>
          <li style={{fontSize:'24px'}} className='mb-4'>My Porsche </li>
         </ul>

      

         <ul style={{listStyle:'none'}} className='ms-5 mt-5 '>
           <li className='mb-4' style={{fontSize:'24px'}}><FontAwesomeIcon icon={faGreaterThan} /></li>
           <li style={{marginBottom:'90px',fontSize:'24px'}}><FontAwesomeIcon icon={faGreaterThan} /></li>
           <li></li>
           <li className='mb-4' style={{fontSize:'24px'}}><FontAwesomeIcon icon={faGreaterThan} /></li>
           <li className='mb-4'  style={{fontSize:'24px'}}><FontAwesomeIcon icon={faGreaterThan} /></li>
           <li className='mb-4' style={{fontSize:'24px'}}><FontAwesomeIcon icon={faGreaterThan} /></li>
           <li style={{fontSize:'24px'}}><FontAwesomeIcon icon={faGreaterThan} /></li>
           </ul>


         <ul style={{listStyle:'none'}} className='ms-5 mt-3 menuimg'>
          <li className='mb-3'><img src="https://nav.porsche.com/00BC524/series-assets/1360/718.webp" alt="" /></li>
          <li className='mb-3'><img src="https://nav.porsche.com/00BC524/series-assets/1360/911.webp" alt="" /></li>
          <li className='mb-3'><img src="https://nav.porsche.com/00BC524/series-assets/1360/taycan.webp" alt="" /></li>
          <li className='mb-3'><img src="https://nav.porsche.com/00BC524/series-assets/1360/panamera.webp" alt="" /></li>
          <li className='mb-3'><img src="https://nav.porsche.com/00BC524/series-assets/1360/macan.webp" alt="" /></li>
          <li className='mb-3'><img src="https://nav.porsche.com/00BC524/series-assets/1360/cayenne.webp" alt="" /></li>

         </ul>
        </Offcanvas.Body>
      </Offcanvas>
        
          <img src="../src/assets/plogo.png" alt="" className='logoname'  />

          <div className='uicon'>
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontSize: '20px' }} className='user'/>
         </div>
      
      </Container>
    </Navbar>

        <div className='navdetails d-flex justify-content-between align-items-center position-absolute top-50 w-100'>
          <div className='navd'>
            <h1 className='text-light headCont'>Choose Boldly.</h1>
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



