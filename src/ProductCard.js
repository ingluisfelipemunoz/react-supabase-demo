import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { supabase } from "./supabaseClient";
export default function ProductCard({ product }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  function onSubmit() {
    console.log("name", name, "description", description);
    updateProduct();
  }

  async function updateProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .update({
          name: name,
          description: description,
        })
        .eq("id", product.id);
      if (error) throw error;
      alert("Product Updated");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  async function deleteProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", product.id);
      if (error) throw error;
      alert("Product Deleted");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        {editing == false ? (
          <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button onClick={deleteProduct} variant="danger">
              Delete
            </Button>
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
              defaultValue={product.name}
              type="text"
              id="name"
            ></Form.Control>

            <Form.Label>Product Description</Form.Label>
            <Form.Control
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              defaultValue={product.description}
              id="description"
            ></Form.Control>
            <br></br>

            <Button variant="success" onClick={onSubmit}>
              Update Product
            </Button>
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
