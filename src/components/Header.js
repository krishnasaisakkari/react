import React from 'react'
import { Link } from 'react-router-dom'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Form from 'react-bootstrap/Form';
import Input from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
function Header() {
  return (
    <Row>
    <div className='header'>
      <h1>Krishna's film</h1>
      <Form>
        <Row>
          <Col sm={6}>
        <Input type='text' className='Formcontrol mt-3' placeholder='search'/>
        </Col>
        <Col sm={2}>
        <Button className='btn mt-3'>search</Button>
        </Col>
        </Row>
      </Form>
    </div>
    </Row>
  )
}

export default Header