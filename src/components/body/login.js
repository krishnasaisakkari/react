import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function login() {
 
  return (

    <div className='mt-5 aniup' style={{paddingTop:'50px',height:'700px',backgroundColor:'#E0E1DD'}}>
      
 <Form style={{paddingTop:'150px',}}>
    <Row>
    <center><h1 style={{color:'#415a77',fontFamily:'poppins'}}>For Team</h1></center>
        <Col sm={3}></Col>
        <Col sm={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="usnm"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      </Col>
      <Col sm={3}></Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="pswd"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      </Col>
      <Col sm={3}></Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
     
      <Button variant="primary" type="submit"
      onClick={() =>
      alert("login sucessfully")
      }>
        Login
      </Button>
      </Col>
      <Col sm={3}></Col>
      </Row>
    </Form>
    </div>
  )
  }


export default login