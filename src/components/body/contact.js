import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextControlsExample() {
  return (

    <Row style={{paddingTop:'100px'}} className='mb-5 aniup'>
        <Col><h2 style={{color:'#0D1B2A'}}>contact form:</h2>
    
        <Row>
        
        <Col sm={11}>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:'#0D1B2A'}}>Enter your Name:</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:'#0D1B2A'}}>Enter Your Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:'#0D1B2A'}}>Your contact nuber:</Form.Label>
        <Form.Control type="number" placeholder="1234567890" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color:'#0D1B2A'}}>Write Us Here:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label style={{color:'#0D1B2A'}}>If it's in file format</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Select aria-label="Default select example">
      <option>Choose type of query</option>
      <option value="1">general</option>
      <option value="2">tickets related</option>
      <option value="3">promotion related</option>
    </Form.Select>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Allow Notifications"
      />
       <Link onClick={() => {
      
      window.location.href="/dashboard"
        alert("Got Your reqest will get in touch with you soon");
}}
>

      <Button variant="primary">submit</Button>
    </Link>
    </Col>
    <Col sm={1}></Col>
    </Row>
    </Col>
    </Row>
  );
}

export default TextControlsExample;