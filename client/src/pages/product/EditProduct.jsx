import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AlCard from "../../components/common/AlCard";
import AlButton from "../../components/common/AlButton";
import { useNavigate } from "react-router-dom";
import productService from "../../services/productService";
import { useParams } from "react-router-dom";
import { getFileFromUrl } from "../../utils/writeUtils";

function EditProduct() {
  //init state
  const params = useParams();
  const navigate = useNavigate();
  const [editProduct, setEditProduct] = useState({
    id: params.id,
    name: "",
    origin: "",
    tasting: "",
    price: "",
    base: "",
    image: "",
  });
  const { id, name, origin, tasting, price, base, image } = editProduct;
  console.log(editProduct);
  const [loading, setLoading] = useState(false); // true on load - this needs to be pre-populated
  const [error, setError] = useState(false);
  const [preview, setPreview] = useState(true);
  //4.image resubmission state prop
  const [uploadedFile, setUploadedFile] = useState("");
  //
  useEffect(() => {
    fetchProduct(), setLoading(false);
  }, [id]);

  async function fetchProduct() {
    try {
      //API request
      const response = await productService.getById(id);
      const fetchedProduct = await response.data;
      console.log(fetchedProduct);
      //Update state with new API data
      setEditProduct({
        ...editProduct,
        ...fetchedProduct,
      });
      // NEW: Save existing uploaded file glob to state
      if (!fetchedProduct.image) {
        console.log("No downloadUrl provided by DB");
      } else {
        const fileGlob = getFileFromUrl(fetchedProduct.image);
        setUploadedFile(fileGlob);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  //Form function
  //1. handleTextChange

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  //2.handleFileChange
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditProduct({ ...editProduct, image: file });
    setPreview(false);
  };
  //3. handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //api call
      const response = await productService.put(editProduct, id, uploadedFile);
      console.log(response);
      navigate("/store/products");
    } catch (error) {
      console.log(error?.response);
      window.scroll({ top: 0, left: 0, behaviour: "smooth" });
      setTimeout(() => {
        setLoading(false, 1000);
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details.</div>;

  return (
    <AlCard>
      <Form onSubmit={handleSubmit}>
        {/**Name */}
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="name"
            onChange={handleTextChange}
            value={name}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/** Origin*/}
        <Form.Group className="mb-3">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="origin"
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        {/*CONDITIONAL IMAGE PREVIEW*/}
        {preview && (
          <div>
            <h6>Current Image</h6>
            <img
              src={image}
              alt={`preview-${name}`}
              style={{ width: "20%", margin: "1rem auto", opacity: 0.7 }}
            />
          </div>
        )}

        {/*PRODUCT IMAGE*/}
        <Form.Group controlId="image" className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" size="sm" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </AlCard>
  );
}

export default EditProduct;
