import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Carousel } from 'react-bootstrap'
import { FaUserCircle } from "react-icons/fa"
import './login.css'

const Login = () => {
  return (
    <Container fluid className="container_item">
      <Row>
        <Col md={4} className="picture">
          <p>I</p>
        </Col>

        <Col md={8} className="form_init d-flex align-items-center">
          <Container>
            <Col md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
              </Button>
              </Form>
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;
