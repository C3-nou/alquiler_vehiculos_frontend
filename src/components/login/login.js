import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { FaSuse, FaKey } from "react-icons/fa"
import './login.css'

const Login = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="container_item">
      <Row>
        <Col className="form_init d-flex align-items-center">
          <Container>
            <Col md={{ span: 4, offset: 4 }} className="shadow-lg p-3 mb-5 bg-white rounded">
              <h1 className="text-center text-success"> <FaSuse size={72} /> Eco App</h1>
              <p className="text-center mt-3">
                <small className="text-secondary">Aplicación de transeferencia y manejo adecuado de residuos</small>
              </p>
              <Form className="mt-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <p className="text-right text-primary hoover_custom" onClick={handleShow}><small>¿Olvidaste tu contraseña?</small></p>
                <p className="text-right hoover_custom"><small><a href="/register">Registrarse</a></small></p>
                <Button variant="primary" type="submit" block>
                  Ingresar
                </Button>
              </Form>
            </Col>
          </Container>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FaKey size={25} /> Recuperar contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ingresa el correo electrónico con el que ingresas a tu usuarios</p>
          <Form className="mt-4">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Ingresa tu correo" />
                </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export default Login;
