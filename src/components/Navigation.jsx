import React, { useState } from 'react';
import {Container,Nav, Navbar,Form, Button} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import logo from '../imgs/logo.png';
import Login from './Login';


function Navigation(){
  const [modalShow, setModalShow] = useState(false);
  
    return(
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Nav className='justify-content-front'>
            <Navbar.Brand href='/'><img src={logo} className='logo'/></Navbar.Brand>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href='/movies'>Moives</Nav.Link>
              <Nav.Link href='/tvs'>TV</Nav.Link>
              <Nav.Link href='/free'>Free</Nav.Link>
              <Nav.Link href='/myvudu'>MyVudu</Nav.Link>
              
            </Nav>

            <Nav className='justify-content-end'>
            <Nav.Link href='/Redeem'>Redeem</Nav.Link>
            {/* model from bootstrap */}
            <Nav.Link > <Login show={modalShow} onHide={() => setModalShow(false)} onClick={() => Login(true)} /></Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search"><FaSearch color='White' size={20}/></Button>
          </Form>
            </Nav>
          </Container>
        </Navbar>
       
      </div>
    );
}
export default Navigation;