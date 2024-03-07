import React, { useState } from 'react';
import { Button, Modal, Form, Nav } from 'react-bootstrap';

const Login = () => {
  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav variant="dark" onClick={handleShow}>Login</Nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group controlId="formBasicEmail" className='loginform'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword"  className='loginform'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <div className='text-center submitBtn'>
            <Button onClick={handleClose} type="submit">Login</Button>
            </div>
          </Form>
        </Modal.Body>

      </Modal>
    </div>
  );
};

export default Login;
