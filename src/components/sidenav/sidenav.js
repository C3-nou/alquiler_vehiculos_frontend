import React from 'react';
import { FaUserCircle, FaHome, FaUserFriends, FaPiggyBank } from "react-icons/fa"
import './sidenav.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';


const Sidenav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column full_color">
      <Container className="shadow-lg p-3 mb-4 rounded">
        <Row className="d-flex align-items-center">
          <Col>
            <FaUserCircle size={50} />
          </Col>
          <Col>
            <h4 className="text-right" >Username</h4>
            <p className="text-right border_top">$ 1000.00</p>
          </Col>
        </Row>
      </Container>

      <Nav.Link href="/home" className="mt-2 text-light shadow-lg p-3">
        <Container>
          <FaHome size={25} /> <span>Home</span>
        </Container>
      </Nav.Link>
      <Nav.Link eventKey="link-1" className="mt-2 text-light shadow-lg p-3">
        <Container>
          <FaPiggyBank size={25} /> <span>Buscar Ofertas</span>
        </Container>
      </Nav.Link>
      <Nav.Link eventKey="link-3" className="mt-2 text-light shadow-lg p-3">
        <Container>
          <FaUserFriends size={25} /> <span>Negociar</span>
        </Container>
      </Nav.Link>
    </Nav>
  )
}

export default Sidenav;
