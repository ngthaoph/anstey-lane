import React, { useEffect, useState } from "react";
import axios from "axios";
import AlCard from "../../components/common/AlCard";
import AlProductCard from "../../components/common/AlProductCard";
import AlButton from "../../components/common/AlButton";

import { useParams, Link, useNavigate } from "react-router-dom";
import * as styles from "./Product.css";
import { Container, Form, Card } from "react-bootstrap";
import { priceFormatter, capitalizeFirstLetter } from "../../utils/readUtils";
import useAuth from "../../hooks/useAuth";

import { GiCoffeePot } from "react-icons/gi";
import productService from "../../services/productService";

function Product() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const params = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({
    id: params.id,
    name: "",

    price: "",
    image: "",
    tasting: "",
  });
  const { id } = product;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`); // Ensure this API is correct
      const fetchedData = await response.data;
      console.log(fetchedData);
      setProduct((prev) => {
        return {
          ...prev,
          ...fetchedData,
        };
      });
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };
  useEffect(() => {
    fetchProduct();
    setLoading(false);
  }, [id]);

  // DELETE BUTTON FUNCTION
  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API Request
      const response = await productService.del(id);
      console.log(response);

      // On Delete Success
      setLoading(false);
      navigate("/store/products");
    } catch (err) {
      console.log(err?.response);
      setError(true);
      window.scroll({ top: 0, left: 0, behaviour: "smooth" });
    }
  };
  const handleEdit = () => {
    navigate(`/store/product/edit/${id}`);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        {/*Product photo */}
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.productWrapper}>
        {/*Product name */}
        <h1>{capitalizeFirstLetter(product.name)}</h1>

        {/*Product price */}
        <h1>{priceFormatter(Number(product.price))}</h1>
        {/*Product description*/}
        <div>
          <span>{product.tasting}</span>
          <p>
            1kg - whole beans only
            <p>250g - whole beans or pick your preferred grind </p>
          </p>
          <AlButton onClick={handleEdit}>Edit</AlButton>
          <AlButton onClick={handleDelete}>Delete</AlButton>
        </div>
      </div>
    </div>
  );
}

export default Product;
