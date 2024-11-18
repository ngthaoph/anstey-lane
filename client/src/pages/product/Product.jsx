import React, { useEffect, useState } from "react";
import axios from "axios";
import AlCard from "../../components/common/AlCard";
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

function Product() {
  const navigate = useNavigate();
  const { user } = useAuth();
  let { id } = useParams(); // Get the data ID from the URL
  // const [data, setProduct] = useState({
  //   id: params.id,
  //   name: "",

  //   price: "",
  //   image: "",
  //   tasting: "",
  //   base: "",
  // });

  const fetchProduct = async () => {
    const response = await axios.get(`/api/products/product/${id}`); // Ensure this API is correct
    console.log(response.data);

    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
  console.log(data);

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
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productWrapper}>
        {/*Product photo */}
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.productWrapper}>
        {/*BASE INFO - GO BACK TAB*/}
        <div className={styles.goBackTab}>
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
            to={`/store/products/${data.base}`}
          >
            <div>
              <MdOutlineKeyboardArrowLeft />
            </div>

            <p>{capitalizeAllLetter(data.base)}</p>
          </Link>
        </div>
        {/*Product name */}
        <h1>{capitalizeFirstLetter(data.name)}</h1>

        {/*Product price */}
        <h1>{priceFormatter(Number(data.price))}</h1>
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
      </div>
    </div>
  );
}

export default Product;
