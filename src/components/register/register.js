import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaSuse } from "react-icons/fa"
import './register.css';

const Register = () => {
  return (
    <Container fluid className="container_item">
      <Row>
        <Col className="form_init d-flex align-items-center">
          <Container>
            <Col md={{ span: 10, offset: 1 }} className="shadow-lg p-3 mb-5 bg-white rounded">
              <h1 className="text-center text-success"> <FaSuse size={72} /> Eco App</h1>
              <p className="text-center mt-3">
                <small className="text-secondary">Aplicación de transeferencia y manejo adecuado de residuos</small>
              </p>
              <Form className="mt-4">
                <Form.Row>
                <Form.Group as={Col} controlId="formBasicUsername" className="">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu usuario" />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo" />
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicConfirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Confirmar contraseña" />
                </Form.Group>
                </Form.Row>

                <Form.Group controlId="formBasicConfirmPassword" inline>
                  <Form.Label>Rol:</Form.Label>
                  <Form.Control as="select" custom >
                    <option>Empresa</option>
                    <option>Usuario</option>
                  </Form.Control>
                </Form.Group>
                <p className="text-right hoover_custom"><small><a href="/">Ya tengo una cuenta</a></small></p>
                <Button variant="primary" type="submit" block>
                  Registrarse
                </Button>
              </Form>
            </Col>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Register;
