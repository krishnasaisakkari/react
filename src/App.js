import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Fter from './components/body/foot';
import Home from './components/body/about';
import Login from './components/body/login'
import Stat from './components/body/stat';
import About from './components/body/dashboard';
import Products from './components/body/products';
import Sidebar from './components/Sidebar';
import Business from './components/body/business';
import Contact from './components/body/contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Row>
      <Col sm={2} style={{backgroundColor:'#E0E1DD'}}>
      <Sidebar/> </Col>
      <Col sm={10} style={{backgroundColor:'#E0E1DD'}}>
      <Routes>
        <Route path='/about' exact Component={Home}/>
        <Route path='/' exact Component={About}/>
        <Route path='/dashboard' exact Component={About}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/stat' exact Component={Stat}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/business' exact Component={Business}/>
        <Route path='/contact' exact Component={Contact}/>

      </Routes>
      </Col>
      </Row>
      <Fter/>
      </Router>
    
    </div>
  );
}

export default App;
