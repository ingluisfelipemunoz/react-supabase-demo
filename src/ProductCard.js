import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
export default function ProductCard() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  function onSubmit() {
    console.log("name", name, "description", description);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>Product Description</Card.Text>
            <Button variant="danger">Delete</Button>
            <Button onClick={(e) => setEditing(true)} variant="secondary">
              Edit
            </Button>
          </>
        ) : (
          <>
            <h4>Editing Product</h4>
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
            <hr></hr>
            <Button
              variant="warning"
              size="sm"
              onClick={() => setEditing(false)}
            >
              {" "}
              Cancel Edit
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
