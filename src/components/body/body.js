import React from 'react';
// import { FaSuse } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import './body.css';

const Body = () => {
  return (
    <Container fluid className="body_style">
      <Row>
        <Col>
          <Container className="text-light bg-secondary">
            Empresas
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Body;
