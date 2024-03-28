import React from 'react'
import './Plive.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import p3 from '../assets/p3.jpg'
import p5 from '../assets/p5.webp'
import p8 from '../assets/p8.jpg'

function Plive() {
  return (
    <>
      <div style={{ backgroundColor: 'white' }} className='p-3'>
        <h1 className='text-center mb-5' style={{ color: 'black', fontWeight: '550' }}>Porsche Live</h1>

        <Container >
          <Row className='d-flex'>
            
            <Col  md={4} className='img1'>
              <Image  src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/72b7f786a27fa38c4a15f487c56387c524b704897ff0d7f09716405e.jpg" style={{ maxHeight: '100%', height: '320px', width: '100%' }} className='img1'/>
            </Col>

            <Col  md={4} className='d-flex  img2'>
              <Image  src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/d4f0294660babb8ce1946b281878b285d25a382e26bea5cc95d713f4.jpg" alt="" style={{ maxHeight: '100%', height: '180px', width: '100%' }} className='me-2 img2' />
              <Image  src={p3} alt="" style={{ maxHeight: '100%', height: '180px', width: '100%' }} className=' img2' />
            </Col>

            <Col  md={4}  >
              <Image  src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/ba3515b96efa9419d89f2517ae3723f0aa595ad564878f902a880bd1.jpg" alt="" className='img3 mb-2' style={{ maxHeight: '100%', height: '320px', width: '100%' }}/>
            </Col>
            
          </Row>


          <Row className='d-flex'>
         
            <Col sm={12} md={4} className='d-flex mt-2 img4'>
              <Image src={p5} className='img4 me-2' style={{ maxHeight: '100%', height: '180px', width: '100%' }} fluid />
              <Image src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/14256aab121181658e4750314ab0fe9ec3a7d0a5f1e23433aa9107e6.jpg" className='img4 imgt' style={{ maxHeight: '100%', height: '180px', width: '100%' }}  />
            </Col>

            <Col sm={12} md={4} className='img6'>
            <Image src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/fab065f4902e38f50e47ef628cff4a892e2a9e33f180ab6159c6df14.jpg" className='img6' style={{ maxHeight: '100%', height: '470px', width: '100%' }}  />
            </Col>

            <Col sm={12} md={4} className='d-flex img5'>
              <img  src={p8} alt="" style={{ maxHeight: '100%', height: '180px', width: '100%' }} className=' img5 imgg me-2' />
              <img  src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/e9203205ea47e3661eaa3eb0631e9c94685655c29a94b90ab5184b12.jpg" alt="" style={{ maxHeight: '100%', height: '180px', width: '100%' }} className='img5' />
            </Col>
          
          </Row>


        </Container>
      </div>

    </>
  )
}

export default Plive

