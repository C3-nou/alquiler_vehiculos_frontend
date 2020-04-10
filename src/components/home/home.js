import React from 'react';
import Sidenav from "../sidenav/sidenav";
import Body from "../body/body";
import { Container, Row, Col} from 'react-bootstrap'
import './home.css';

const Home = () => {
  return (
    <Container fluid className="container_item">
      <Row>
        <Col md={2}>
          <Sidenav />
        </Col>
        <Col>
          <Body />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
