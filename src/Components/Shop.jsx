import React, { useRef, useState } from 'react'
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function Shop() {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [clickCount, setClickCount] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const scrollLeft = () => {
      if (containerRef.current && clickCount > 0) {
        setClickCount((prevCount) => prevCount - 1);
        setScrollPosition((prevPosition) => prevPosition + 25);
        containerRef.current.style.transform = `translateX(${scrollPosition + 25}%)`;
        setActiveIndex(activeIndex - 1);
      }
    };
  
    const scrollRight = () => {
      if (containerRef.current && clickCount < 4) {
        setClickCount((prevCount) => prevCount + 1);
        setScrollPosition((prevPosition) => prevPosition - 25);
        containerRef.current.style.transform = `translateX(${scrollPosition - 25}%)`;
        setActiveIndex(activeIndex + 1);
      }
    };
  
    const handleRoundClick = (index) => {
      setActiveIndex(index);
      setScrollPosition(-25 * index);
      containerRef.current.style.transform = `translateX(${-25 * index}%)`;
    };

  return (
    <>
    <h1 className='text-center mb-1' style={{fontWeight:550,color:'black'}}>Online Shop Highlights</h1>
    <div className='scroll d-flex ' >
    <Button  style={{border:'1px solid transparent',backgroundColor:'white'}} onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeft} style={{color: "black",fontSize:'20px'}} className='me-4'  /></Button>
    <Button  style={{border:'1px solid transparent',backgroundColor:'white'}} onClick={scrollRight}><FontAwesomeIcon icon={faArrowRight} style={{color: "#000000",fontSize:'20px'}} /></Button>

    </div>
     
  
        
      <div className='slider d-flex mt-5 '>
     
     <ul className='slider-container' ref={containerRef}>
        <li >
        <Card style={{ width: '19rem',border:'2px solid transparent' }} className='p-2'>
      <Card.Img variant="top" src="../src/assets/s1.avif" />
      <Card.Body>
        <Card.Title style={{fontWeight:550,fontSize:'18px'}}>Porsche Classic Care Set</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        The best care for your Porsche classic is offered by the 17-piece care set in a high-quality storage bag.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>Care Set </p>
      </Card.Body>
       </Card>
        </li>

        <li >
        <Card style={{ width: '19rem' ,border:'2px solid transparent'}}>
    <Card.Img variant="top" src="../src/assets/s2.avif" />     
     <Card.Body>
        <Card.Title style={{fontWeight:550,fontSize:'18px'}}>Porsche Poster Set – 75 years</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        Powerful motifs and high-quality printing: the limited-edition poster sets portray various Porsche models.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>Poster Set </p>

      </Card.Body>
    </Card>
        </li>

        <li>
           
    <Card style={{ width: '19rem',border:'2px solid transparent' }}>
    <Card.Img variant="top" src="../src/assets/s3.avif" />
          <Card.Body>
        <Card.Title style={{fontWeight:550,fontSize:'18px'}}>Sunglasses P´8478</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        The Porsche Design men's sunglasses with interchangeable lenses are a design classic.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>Sunglasses </p>
      </Card.Body>
    </Card>
        </li>

        <li>
        <Card style={{ width: '19rem',border:'2px solid transparent' }}>
    <Card.Img variant="top" src="../src/assets/s4.avif" />
      <Card.Body>
        <Card.Title style={{fontWeight:550,fontSize:'18px'}}>Crest T-shirt - Essential</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        Perfect cut, casual design: high-quality Porsche T-shirt is decorated with a print of the historic Porsche Crest.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>T-shirt </p>

      </Card.Body>
    </Card>
        </li>

        <li>
        <Card style={{ width: '19rem',border:'2px solid transparent' }}>
    <Card.Img variant="top" src="../src/assets/s5.avif" />
      <Card.Body>
        <Card.Title style={{fontWeight:550,fontSize:'18px'}}>XL thermos cup</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        High-quality, extra-large Porsche thermal mug for hot and cold drinks.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>Thermos cup </p>

      </Card.Body>
    </Card>
        </li>


        <li >
            
    <Card style={{ width: '19rem',border:'2px solid transparent' }}>
    <Card.Img variant="top" src="../src/assets/s6.avif" />
      <Card.Body>
        <Card.Title  style={{fontWeight:550,fontSize:'18px'}}>Porsche Car Cover</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        With the custom-fit indoor and outdoor vehicle covers, your Porsche is always well protected.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>Car Cover</p>

      </Card.Body>
    </Card>
        </li>


        <li >
           
    <Card style={{ width: '19rem',border:'2px solid transparent' }}>
    <Card.Img variant="top" src="../src/assets/s7.avif" />
      <Card.Body>
        <Card.Title style={{fontWeight:550,fontSize:'18px'}}>Roadster Hardcase 4W Trolley M</Card.Title>
        <Card.Text style={{fontSize:'15px'}}>
        Medium sized expandable designer suitcase made from lightweight plastic.
        </Card.Text>
        <p><FontAwesomeIcon icon={faArrowRight} style={{fontSize:'20px',color:'rgb(48, 45, 45)'}} className='me-2'/>Trolley</p>

      </Card.Body>
    </Card>

        </li>
     </ul>
    
    </div>   
    <div className='mb-5'>
        <ul className='d-flex align-items-center justify-content-center'>
        <li className={`round ms-2 ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleRoundClick(0)}></li>
          <li className={`round ms-2 ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleRoundClick(1)}></li>
          <li className={`round ms-2 ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleRoundClick(2)}></li>
          <li className={`round ms-2 ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleRoundClick(3)}></li>
          <li className={`round ms-2 ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleRoundClick(4)}></li>
        
        </ul>
      </div> 

    
   
    </>
  )
}

export default Shop