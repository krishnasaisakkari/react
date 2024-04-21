import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line,} from 'recharts';



const data = [
  {
    name: 'schedule 1',
    alloted: 5,
    spent: 3,
    amt: 3,
  },
  {
    name: 'schedule 2',
    alloted: 7,
    spent: 5,
    amt: 5,
  },
  {
    name: 'schedule 3',
    alloted: 9,
    spent: 7,
    amt: 7,
  },
  {
    name: 'shedule 4',
    alloted: 10,
    spent: 7,
    amt: 7,
  },
  
];

function AutoLayoutSizingExample() {
  return (
    <Container style={{paddingTop:'100px'}}>
      <Row>
      <Col sm={1}></Col>
      <Col sm={10} style={{backgroundColor:'#1B263B', padding:'30px',borderRadius:'5px',color:'white'}} className='sk aniup'>
        <center><h1 className='aniup'>Hello! here's the progress of our film so far</h1></center></Col>
        <Col sm={1}></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={12}><h1><center>Status</center></h1></Col>
        <Col sm={1}></Col>
        <Col sm={5} style={{backgroundColor:'#415a77',padding:'30px',borderRadius:'5px',color:'white'}} className='sk anileft'>
          <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={99}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>done</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='anileft' style={{paddingTop:'25px'}}> started an year ago but scripting is done with final bound</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col xs={5}style={{backgroundColor:'#778da9',padding:'20px',borderRadius:'5px',marginLeft:'10px',color:'white'}} className='sk aniright'>
        <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={99}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>done</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='aniright' style={{paddingTop:'25px'}}> An year ago strted recce and found some amaging places</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={1}></Col>
        <Col sm={5} style={{backgroundColor:'#1B263B',padding:'30px',borderRadius:'5px',color:'white'}} className='sk anileft'>
          <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={70}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>ongoing</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='anileft' style={{paddingTop:'25px'}}> 70% of pre-release works are done already.As ott platforms aproching</h4><br/>
            </Col>
          </Row>
        </Col>
        <Col xs={5}style={{backgroundColor:'#89A7A7',padding:'20px',borderRadius:'5px',marginLeft:'10px',color:'white'}} className='sk aniright'>
        <Row>
            <Col sm={3}> <Gauge
           width={100} height={100} value={45}
             startAngle={0}
              endAngle={360}
               innerRadius="70%"
               outerRadius="90%"
                 />
                 <Typography style={{paddingLeft:'5px'}}>status:<b>ongoing</b></Typography>
                 </Col>
            <Col sm={9}><h4 className='aniright' style={{paddingTop:'25px'}}> only 45% of shoot has been done so far and the remaining part is taking place </h4><br/>
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>

      <Row className='mt-3'>
        <Col><center><h1>Budget expenditure</h1></center></Col>
      </Row>
                                                               {/* graphs */}
     <Row> 
     <Col sm={6}>
      <center>
      <Typography style={{}}>no of scenecs shot on schedule1-3</Typography>
      <Link onClick={() => {
      
                  window.location.href="/stat"
                    alert("Redirecting to stats");
      }}
            >
        <BarChart
          width={600}
          height={400}
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
          <Bar dataKey="alloted" fill="#1B263B" activeBar={<Rectangle fill="lightgreen" stroke="blue" />} />
          <Bar dataKey="spent" fill="#89A7A7" activeBar={<Rectangle fill="coral" stroke="purple" />} />
        </BarChart>
        </Link>
        </center>
        </Col>
        <Col sm={6}>
          <center>
          <Typography style={{}}>no of scenecs shot on schedule1-3</Typography>
      <LineChart
        width={600}
        height={400}
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
        <Line type="monotone" dataKey="alloted" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="spent" stroke="#82ca9d" />
      </LineChart>
      </center>
      </Col>
      </Row>

    <Row>
      <Col sm={6}>
      <center>
      <Typography style={{paddingRight:'70px'}}>Pre-release bussiness</Typography>
      <PieChart
  series={[
    {
      data: [
        { id: 0, value: 25, label: 'netflix' },
        { id: 1, value: 15, label: 'star' },
        { id: 2, value: 150, label: 'theater' },
      ],
    },
  ]}
  width={600}
  height={300}
/>
      </center>
      </Col>
      <Col sm={6}>
  <center><h2>Pre-release bussiness</h2></center>
    <Table striped bordered hover className='mt-3'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'white'}}>S.no</th>
          <th style={{color:'white'}}>Medium of rights</th>
          <th style={{color:'white'}}>Offered by</th>
          <th style={{color:'white'}}>Offered amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>satlight rights</td>
          <td>star media</td>
          <td>15cr</td>
        </tr>
        <tr>
          <td>2</td>
          <td>distribution nzm</td>
          <td>sv productions</td>
          <td>150cr</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ott rights</td>
          <td>netflix</td>
          <td>25cr</td>
        </tr>
        <tr style={{backgroundColor:'gray',color:'red'}}>
          <td colSpan={3}><b>Total</b></td>
          <td><b>190Cr</b></td>
        </tr>
        
      </tbody>
    </Table>


      </Col>
    </Row>
    </Container>
    
  );
}

export default AutoLayoutSizingExample;