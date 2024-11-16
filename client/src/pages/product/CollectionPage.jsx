import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import ProductsList from "../../components/features/products/ProductsList";
import { Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
//import productService from "../../services/productService";
import { Link } from "react-router-dom";

import * as styles from "./CollectionPage.css";

import { Dots } from "@holmesdev/ponder-spinners";

import AlProductCard from "../../components/common/AlProductCard";
import productService from "../../services/productService";
import ShopOptionsFilter from "./ShopOptionsFilter";
import AlButton from "../../components/common/AlButton";

function ProductsPage() {
  // PRODUCTS STATEs

  const [selectedCategory, setSelectedCategory] = useState();
  const handleSelectedCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const [loading, setLoading] = useState(true); //it needs to loads something - making a call to the api
  const [error, setError] = useState(false);

  const { logInSaveUser } = useAuth();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await axios.get(
      `http://localhost:5005/api/products/${selectedCategory}`
    );
    console.log(response.data);
    setLoading(false);
    return response?.data;
  };

  //react query
  const {
    isPending,
    errorQuery,
    data: products,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => fetchProducts(selectedCategory),
  });

  if (errorQuery) {
    return (
      <div>
        <p>Error loading page ...</p>
        <Link to="/">Return to Home page</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ShopOptionsFilter
        baseOptions={["all", "espresso", "decaf", "filter", "sale"]}
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
      {logInSaveUser && (
        <AlButton onClick={() => navigate("/store/product")}>
          Add Product
        </AlButton>
      )}

      {/* <p style={{ alignItems: "center" }}>SHOWING {products.length} RESULTS</p> */}

      {loading ? (
        <Dots />
      ) : (
        <Container className={styles.collectionContainer}>
          {products?.map((product) => (
            <Link
              style={{
                textDecoration: "none",
              }}
              key={product.id}
              to={`/store/products/product/${product.id}`}
            >
              <AlProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                base={product.base}
              />
            </Link>
          ))}
        </Container>
      )}
    </div>
  );
}

export default ProductsPage;
