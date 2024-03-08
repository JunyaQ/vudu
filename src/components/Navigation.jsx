import React, { useState } from 'react';
import {Container,Nav, Navbar,Form, Button} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import Login from './Login';


function Navigation(){
    return(
        <div>
        <Navbar className='navigation'>
          <Container>
          <Nav className='justify-content-front '>
            <Navbar.Brand href='/'><RiMovie2Fill size={40} color='white'/></Navbar.Brand>
            </Nav>
            <Nav className="me-auto navlinks navphone">
              <Nav.Link href='/movies' className='navlinks'>Moives</Nav.Link>
              <Nav.Link href='/tvs' className='navlinks'>TV</Nav.Link>
              <Nav.Link href='/free' className='navlinks'>Free</Nav.Link>
              
            </Nav>

            <Nav className='justify-content-end navlinks'>
            {/* model from bootstrap */}
            <Nav.Link  className='navlinks' href='/loginSignup'> Login </Nav.Link>
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