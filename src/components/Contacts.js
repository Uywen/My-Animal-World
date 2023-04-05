import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Contact.css'

function Contacts(){

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return(
      <div className='background'>
      <h1 className='about-heading'>How to Contact Us</h1>
     <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">Please Enter your Name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter message"
          />
          <Form.Control.Feedback type='invalid'>Please Enter a message</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
          />
          <Form.Control.Feedback type='invalid'>Please Enter Email</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
        </Form>
      </div>

    )
}

export default Contacts