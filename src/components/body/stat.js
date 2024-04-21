import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Tab } from 'bootstrap';

function BasicExample() {
  return (
<Container style={{paddingTop:'100px'}}>
  <center><h2>Budget alloted for 4 schedules</h2></center>
    <Table striped bordered hover className='mt-3 aniright'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'white'}}>S.no</th>
          <th style={{color:'white'}}>schedule</th>
          <th style={{color:'white'}}>Alloted budget</th>
          <th style={{color:'white'}}>Spent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>schedule 1</td>
          <td style={{color:'black'}}>5</td>
          <td style={{color:'black'}}>3</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>schedule 2</td>
          <td style={{color:'black'}}>7</td>
          <td style={{color:'black'}}>5</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>schedule 3</td>
          <td style={{color:'black'}}>9</td>
          <td style={{color:'black'}}>7</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>4</td>
          <td style={{color:'black'}}>schedule 4</td>
          <td style={{color:'black'}}>10</td>
          <td style={{color:'black'}}>7</td>
        </tr>
        
        <tr style={{backgroundColor:'gray'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>22Cr</b></td>
        </tr>
        
      </tbody>
    </Table>
    <center><h2>Budget alloted for the next 3 schedules</h2></center>
    <Table striped bordered hover className='mt-3 anileft'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'white'}}>S.no</th>
          <th style={{color:'white'}}>schedule</th>
          <th style={{color:'white'}}>no. of scenes to be shot</th>
          <th style={{color:'white'}}>Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>schedule 5</td>
          <td style={{color:'black'}}>15</td>
          <td style={{color:'black'}}>0.5cr</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>schedule 6</td>
          <td style={{color:'black'}}>10</td>
          <td style={{color:'black'}}>0.7cr</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>schedule 7</td>
          <td style={{color:'black'}}>17</td>
          <td style={{color:'black'}}>1.5cr</td>
        </tr>
        <tr style={{backgroundColor:'gray'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>2.7Cr</b></td>
        </tr>
        
      </tbody>
      </Table>
    <Row className='aniright'>
      <Col sm={6}>
    <center><h2>Budget alloted for the film marketing</h2></center>
    <Table striped bordered hover className='mt-3'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'white'}}>S.no</th>
          <th style={{color:'white'}}>event</th>
          <th style={{color:'white'}}>place</th>
          <th style={{color:'white'}}>Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>trailar launch</td>
          <td style={{color:'black'}}>hyd</td>
          <td style={{color:'black'}}>1cr</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>pre release</td>
          <td style={{color:'black'}}>hyd</td>
          <td style={{color:'black'}}>1.2cr</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>theatre tours</td>
          <td style={{color:'black'}}>ap,ts</td>
          <td style={{color:'black'}}>5cr</td>
        </tr>
        <tr style={{backgroundColor:'gray',color:'red'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>7.2cr</b></td>
        </tr>
        
      </tbody>
    </Table>
   </Col>

      <Col sm={6}>
      <center><h2>Budget alloted pre & post poduction</h2></center>
    <Table striped bordered hover className='mt-3'>
      <thead>
        <tr style={{backgroundColor:'#415a77'}}>
          <th style={{color:'white'}}>S.no</th>
          <th style={{color:'white'}}>pre/post</th>
          <th style={{color:'white'}}>rentals</th>
          <th style={{color:'white'}}>Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color:'black'}}>1</td>
          <td style={{color:'black'}}>pre</td>
          <td style={{color:'black'}}>-</td>
          <td style={{color:'black'}}>1cr</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>2</td>
          <td style={{color:'black'}}>post</td>
          <td style={{color:'black'}}>props</td>
          <td style={{color:'black'}}>25cr</td>
        </tr>
        <tr>
          <td style={{color:'black'}}>3</td>
          <td style={{color:'black'}}>marketing</td>
          <td style={{color:'black'}}>-</td>
          <td style={{color:'black'}}>7.2cr</td>
        </tr>
        <tr style={{backgroundColor:'gray',color:'red'}}>
          <td colSpan={3} style={{color:'black'}}><b>Total</b></td>
          <td style={{color:'black'}}><b>33.2cr</b></td>
        </tr>
        
      </tbody>
    </Table>

      </Col>
    </Row>
   
    </Container>
  );
}

export default BasicExample;