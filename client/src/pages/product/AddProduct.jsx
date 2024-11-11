import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AlCard from "../../components/common/AlCard";
import { useNavigate } from "react-router-dom";
import productService from "../../services/productService";

function AddProduct() {
  const navigate = useNavigate();
  const [addProduct, setAddProduct] = useState({
    name: "",
    origin: "",
    tasting: "",
    price: "",
    base: "",
    image: "",
  });
  console.log(addProduct);
  const [loading, setLoading] = useState(true);
  console.log(addProduct);
  const { name, origin, tasting, price, base } = addProduct;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddProduct({ ...addProduct, [name]: value });
  };
  //HANDLE FILE CHANGE
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAddProduct({ ...addProduct, image: file });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //api call
      const response = await productService.post(addProduct);
      console.log(response);
      navigate("/store/products");
    } catch (error) {
      console.log(error.response);
      window.scroll({ top: 0, left: 0, behaviour: "smooth" });
      setTimeout(() => {
        setLoading(false, 1000);
      });
    }
  };
  return (
    <AlCard>
      <Form onSubmit={handleSubmit}>
        {/**Name */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="name"
            onChange={handleChange}
            value={name}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/** Origin*/}
        <Form.Group className="mb-3" controlId="origin">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="origin"
            onChange={handleChange}
            value={origin}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/** Tasting*/}
        <Form.Group className="mb-3" controlId="tasting">
          <Form.Label>Tasting</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="tasting"
            value={tasting}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/** Price*/}
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="price"
            value={price}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/*Base*/}
        <Form.Group className="mb-3" controlId="base">
          <Form.Label>Base</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="base"
            value={base}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        {/*Form*/}
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control type="file" size="sm" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </AlCard>
  );
}

export default AddProduct;
