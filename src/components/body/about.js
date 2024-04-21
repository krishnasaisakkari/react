import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../assets/arrzoom.jpg';
import Img from '../assets/vrarrr.jpg';
import Img2 from '../assets/onset2.jpg';
import Img3 from '../assets/onsets3.jpg';

function Home() {
  return (
    <div>
      <Row className='mt-5 bg'>
        <Col sm={1}></Col>
        <Col sm={10}><h1 className='aniup landtext'style={{paddingTop:'200px'}}>Marala Ninu Rammani</h1>
        <center><h2 className='aniup'style={{color:'tomato'}}>A rom-com that u have nevere experienced</h2></center>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row><h3 style={{color:'#0D1B2A'}}>About the film:</h3></Row>
      <Row >
        <Col sm={11}><p style={{color:'black',fontSize:'20px'}}> "Marala Ninnu Rammani," a heartfelt romantic film written and directed by Krishna Sai Sakkari, 
          takes viewers on a poignant journey of love, destiny, and self-discovery. The story follows the lives of two individuals, 
          whose paths intertwine in unexpected ways. As they navigate through life's challenges and uncertainties, 
          they find solace and strength in each other's company. The film beautifully captures the essence of love, 
          showcasing its transformative power and the profound impact it has on the lives of those who embrace it. 
          With a blend of heartfelt performances, captivating storytelling, and soulful music, 
          "Marala Ninnu Rammani" is a cinematic experience that resonates with the heart and soul.</p></Col>
      </Row>
      <Row><h3 style={{color:'#0D1B2A'}}>Synopsis:</h3></Row>
      <Row>
        <Col> <p style={{color:'black',fontSize:'20px'}} > "Marala Ninnu Rammani" is a heartwarming tale of love and second chances, 
          following Aditya, a young filmmaker, and Meera, an ambitious entrepreneur, 
          as they navigate life's twists and turns. Their love story, filled with passion and perseverance, 
          explores themes of destiny, forgiveness, and the enduring power of love. Directed by Krishna Sai Sakkari,
           this film captures the beauty of love's resilience and the magic of serendipity.</p></Col>
      </Row>
      <Row className='mt-3'>
        <Col>
        <h2 style={{color:'#0D1B2A'}}>See whats happening on sets:</h2>
        </Col>
      </Row>
      <Row className='mt-2 mb-4'>
        <Col sm={4}><img src={Img} height={200} className='cl'/> </Col>
        <Col sm={4}><img src={Img2} height={200} width={350} className='cl'/></Col>
        <Col sm={4}><img src={Img3} height={200} width={350} className='cl'/></Col>
      </Row>


    </div>
  )
}

export default Home