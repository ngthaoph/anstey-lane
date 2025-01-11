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

  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleSelectedCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const { logInSaveUser } = useAuth();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const category = `${
      selectedCategory === "all" ? "" : `/${selectedCategory}`
    }`;
    const response = await productService.getAll(category);

    // const response = await productService.getProducts(category);
    // console.log(response.data);

    return response.data;
  };

  //react query
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () => fetchProducts(selectedCategory),
  });
  if (isLoading) {
    return (
      <div>
        <Dots style={{ alignItems: "center" }} />
      </div>
    );
  }
  if (isError === true) {
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

      <div className={styles.resultNumber}>
        <span>SHOWING {products.length} RESULTS</span>
      </div>

      {isLoading ? (
        <div style={{ flex: 1, alignItems: "center" }}>
          <Dots />
        </div>
      ) : (
        <Container className={styles.collectionContainer}>
          <div
            style={{
              display: "flex",

              flex: "1 1 auto",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              padding: "20px 20px",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <Link
                style={{
                  textDecoration: "none",
                }}
                key={product.id}
                to={`/store/products/product/${product.id}`}
              >
                <div style={{ padding: "10px" }}>
                  <AlProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    base={product.base}
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}

export default ProductsPage;
