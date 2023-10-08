import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import { useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function onSubmit() {
    console.log("name", name, "description", description);
  }
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Store Products</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by Luis Felipe M.</Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h3>Create Product</h3>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
            ></Form.Control>

            <Form.Label>Product Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              id="description"
            ></Form.Control>
            <br></br>

            <Button onClick={onSubmit}>Create Product</Button>
          </Col>
        </Row>
        <hr></hr>
        <h3>Product List</h3>
        <Row xs={1} lg={3} className="g-4">
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
