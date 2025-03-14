import React, { useEffect, useState } from "react";

import AlProductCard from "../../components/common/AlProductCard";
import AlButton from "../../components/common/AlButton";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as styles from "./Product.css";
import { Container, Form, Card } from "react-bootstrap";
import {
  priceFormatter,
  capitalizeFirstLetter,
  capitalizeAllLetter,
} from "../../utils/readUtils";
import useAuth from "../../hooks/useAuth";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import productService from "../../services/productService";
import ProductForm from "./ProductForm";
function Product({ handleNewCart }) {
  const [displayPrice, setDisplayPrice] = useState("250g");
  const handleDisplayPrice = (size) => {
    setDisplayPrice(size);
  };
  const [form, setForm] = useState([
    {
      quantity: 0,
      size: "",
      grind: "",
    },
  ]);

  let navigate = useNavigate();

  const { user } = useAuth();
  let { id } = useParams(); // Get the data ID from the URL

  const fetchProduct = async () => {
    const response = await productService.getById(id); // Ensure this API is correct

    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  // DELETE BUTTON FUNCTION
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      // API Request
      const response = await productService.del(id);
      console.log(response);

      navigate("/store/products");
    } catch (err) {
      console.log(err?.response);

      window.scroll({ top: 0, left: 0, behaviour: "smooth" });
    }
  };
  const handleEdit = () => {
    navigate(`/store/product/edit/${id}`);
  };
  //ADD PRODUCT TO  IN APP
  function handleAddToCart() {
    if (productCount === 0) return;
  }
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        {/*Product photo */}
        <div style={{ width: "50%", margin: "auto" }}>
          <img src={data.image} alt={data.name} />
        </div>
      </div>
      <div className={styles.productWrapper}>
        {/*BASE INFO - GO BACK TAB*/}
        <div className={styles.goBackTab}>
          <div
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
            onClick={() => navigate("/collection")}
          >
            <div>
              <MdOutlineKeyboardArrowLeft />
            </div>

            <p>{capitalizeAllLetter(data.base)}</p>
          </div>
        </div>
        {/*Product name */}
        <h1>{capitalizeFirstLetter(data.name)}</h1>

        {/*Product price */}
        <h1>
          {priceFormatter(
            Number(displayPrice === "250g" ? data.price : data.price * 4)
          )}
        </h1>
        {/*Product description*/}
        <div>
          <span>{data.tasting}</span>
          <p>
            1kg - whole beans only
            <p>250g - whole beans or pick your preferred grind </p>
          </p>
          {user && (
            <>
              <AlButton onClick={handleEdit}>Edit</AlButton>
              <AlButton onClick={handleDelete}>Delete</AlButton>
            </>
          )}
        </div>
        <div className={styles.productFormContainer}>
          <ProductForm
            handleNewCart={handleNewCart}
            id={id}
            displayPrice={displayPrice}
            setDisplayPrice={setDisplayPrice}
            handleDisplayPrice={handleDisplayPrice}
            form={form}
            setForm={setForm}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
