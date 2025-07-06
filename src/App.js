// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React-Bootstrap App</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to My Card Gallery</h1>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text>This is a short description of the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text>This is a short description of the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>This is a short description of the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
