import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line,} from 'recharts';



const data = [
  {
    name: 'netflix',
    offered: 25,
  },
  {
    name: 'star media',
    offered: 30,
  },
  {
    name: 'sv production',
    offered: 90,
  },
  {
    name: 'prime',
    offered: 27,

  },
  
];
const data1 = [
  {
    name: 'dist-ap',
    expected: 50,
  },
  {
    name: 'dist-nijam',
    expected: 45,
  },
  {
    name: 'dist-tg',
    expected: 50,
  },
  {
    name: 'dist-us,uk',
    expected: 25,
  },
  
];


function business() {
  return (
    <div>
        
      <Row style={{paddingTop:'100px'}}>
      <Col sm={1}></Col>
      <Col sm={10} style={{backgroundColor:'#1B263B', padding:'30px',borderRadius:'5px',color:'white'}} className='sk'>
        <center><h1 className='aniup'>Lets devide it in two parts</h1></center></Col>
        <Col sm={1}></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5} style={{backgroundColor:'#415a77',padding:'30px',borderRadius:'5px',color:'white'}} className='sk'>
          <Row>
            <Col sm={3}> 
            <Gauge
           width={100} height={100} value={99}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>done</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='anileft' style={{paddingTop:'25px'}}>Pre-release Business</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col xs={5}style={{backgroundColor:'#778da9',padding:'20px',borderRadius:'5px',marginLeft:'10px',color:'white'}} className='sk'>
        <Row>
            <Col sm={3}> 
            <Gauge
           width={100} height={100} value={0}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>not yet</b></Typography>
           
                 </Col>
            <Col sm={9}><h4 className='aniright' style={{paddingTop:'25px'}}>Post release business</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row className='mt-5'>
        <Col sm={1}></Col>
        <Col><h2 style={{color:'#1B263B'}}>Pre-release Business:</h2></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5} style={{textAlign:'justify'}}>
          <h5>Marala Ninnu Rammani" has garnered significant attention and anticipation in the pre-release phase, 
            particularly from OTT (Over-the-Top) platforms. The film's captivating storyline and promising direction by Krishna Sai Sakkari 
            have attracted substantial interest, leading to lucrative deals with OTT platforms. This pre-release business success not only validates 
            the film's potential but also indicates a strong audience demand. As the film prepares for its release,
             this positive reception sets a promising tone for its success in the digital streaming space.</h5>

        </Col>
        <Col sm={5}>
        <BarChart
          width={550}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="offered" fill="#1B263B" activeBar={<Rectangle fill="lightgreen" stroke="blue" />} />
        </BarChart>
        
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col sm={1}></Col>
        <Col><h2 style={{color:'#1B263B'}}>Expected post release Business:</h2></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5}>
        <BarChart
          width={550}
          height={350}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expected" fill="#89A7A7" activeBar={<Rectangle fill="coral" stroke="purple" />} />
        </BarChart>
        
        </Col>
        <Col sm={5} style={{textAlign:'justify'}}>
          <h5>Marala Ninnu Rammani" has garnered significant attention and anticipation in the pre-release phase, 
            particularly from OTT (Over-the-Top) platforms. The film's captivating storyline and promising direction by Krishna Sai Sakkari 
            have attracted substantial interest, leading to lucrative deals with OTT platforms. This pre-release business success not only validates 
            the film's potential but also indicates a strong audience demand. As the film prepares for its release,
             this positive reception sets a promising tone for its success in the digital streaming space.</h5>

        </Col>
        
      </Row>

    </div>
  )
}

export default business