import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../Resource/assests';
import { navlink_style } from '../Resource/style';




function NavScrollExample() {
  const [mode,setMode]=useState(true);
  document.body.style.setProperty("background-color", mode?"#000":"#FFF", "important");
  document.body.style.setProperty("color", mode?"#FFF":"#000", "important");
  const showing =(e)=>{
    setMode(e.target.checked)
}
  return (

    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Link to="/"> <img src={images.netflix_logo} height="40px" alt="" /> </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className='text-decoration-none m-2' style={navlink_style} >Home</NavLink>

            <NavDropdown title="Movie Type" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Action 🎬
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Adventure 😎
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Horror 😣
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Triller ⚡
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Comedy 😜
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/contact" className='text-decoration-none  m-2' id="point" style={navlink_style} >Contact</NavLink>
            <NavLink to="/player" className='text-decoration-none  m-2' style={navlink_style} >Player</NavLink>
          </Nav>

          <div className="form-check form-switch me-3">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={showing} checked={mode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Mode</label>
            </div>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;