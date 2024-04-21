import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../assets/alexalf.jpg';
import Image2 from '../assets/arrilens.jpg';
import Image3 from '../assets/arrzoom.jpg';
import Image4 from '../assets/arrivr.jpg';
import Image5 from '../assets/boom.jpg';
import Image6 from '../assets/bolt.png';

function products() {
  return (
    <Container style={{paddingTop:'150px'}}>
      <Row className='mt-1 mb-2 '>
        <Col><center><h1 style={{color:'#0d1b2a',fontFamily:'poppins'}}> Most Used Props</h1></center></Col>
      </Row>
        <Row style={{display:'flex',justifyContent:'space-between'}} className='aniup'>
            <Col sm={3}>
    <Card style={{ width: '18rem' ,height:'39rem'}} className='card1 anileft'>
      <Card.Img src={Image1} height={300} width={300}/>
      <Card.Body>
        <Card.Title>ARRI ALEXA LF, Signature Primes, and SkyPanels</Card.Title>
        <Card.Text>
        the ALEXA LF camera records native 4.5K with ARRI’s best overall image quality. This allows filmmakers to explore the immersive large-format aesthetic....</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            </Col>
            <Col sm={3}>
    <Card style={{ width: '18rem' ,height:'39rem'}}className='card1 aniup'>
      <Card.Img src={Image2} height={300} width={300}/>
      <Card.Body>
        <Card.Title>ALEXA Mini LF and LF with Signature Prime</Card.Title>
        <Card.Text>
        Ranging from 12mm to 280mm, The ARRI Signature Prime lenses offer a unique look never seen before in cinema.captures all colors well.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            </Col>
            <Col sm={3}>
    <Card style={{ width: '18rem',height:'39rem' }}className='card1 aniright'>
      <Card.Img src={Image3} height={300} width={300}/>
      <Card.Body>
        <Card.Title>ARRI Signature Zoom</Card.Title>
        <Card.Text>
        new Signature Zoom lenses render the most natural and beautiful images ever seen from a cine zoom. Designed for any large-format or Super 35 camera.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            </Col>
        </Row>

        {/* 2nd cards */}

        <Row style={{display:'flex',justifyContent:'space-between'}} className='mt-3 mb-3'>
            <Col sm={3}>
    <Card style={{ width: '18rem',height:'39rem' }} className='card1 anileft'>
      <Card.Img src={Image4} height={300} width={300}/>
      <Card.Body>
        <Card.Title>Virtual production and green mats</Card.Title>
        <Card.Text>
        Using CGI, augmented reality, motion capture, and other technologies to create realistic environments and effects on a virtual set.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            </Col>
            <Col sm={3}>
    <Card style={{ width: '18rem' ,height:'39rem',zIndex:'1'}}className='card1 anidown'>
      <Card.Img src={Image5} height={300} width={300}/>
      <Card.Body>
        <Card.Title>Sound syncing</Card.Title>
        <Card.Text>
        sound recorded at the time of the filming of movies. It has been widely used in movies since the birth of sound movies.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

            </Col>
            <Col sm={3}>
    <Card style={{ width: '18rem',height:'39rem'}}className='card1 aniright'>
      <Card.Img src={Image6} height={300} width={300}/>
      <Card.Body>
        <Card.Title>The Bolt High-Speed Camera Robot </Card.Title>
        <Card.Text>
        fastest of its kind-capturing images in crisp focus that would be impossible by hand or any other method.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
            </Col>
        </Row>
    </Container>
  )
}

export default products