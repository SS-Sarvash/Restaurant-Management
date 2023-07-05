import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar = ()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{
        border:"1px solid white",
        borderRadius: "10px",
        margin:"10px",  
    }}>

        <Navbar.Brand href="#home" style={{color:"rgb(212, 211, 211)"}}>RMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" class="nav-item" style={{color:"rgb(212, 211, 211)"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/Login" class="nav-item" style={{color:"rgb(212, 211, 211)"}}>Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;