import React from 'react';
import Sidenav from "../sidenav/sidenav";
import Body from "../body/body";
import { Container, Row, Col} from 'react-bootstrap'
import './home.css';

const Home = () => {
  return (
    <Container fluid className="container_item">
      <Row>
        <Col md={2} className="full_width">
          <Sidenav />
        </Col>
        <Col className="full_width" >
          <Body />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
