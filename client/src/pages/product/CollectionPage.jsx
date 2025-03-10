import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

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

function ProductsPage({ limit = false }) {
  //display 5 products
  const [showAllProducts, setShowAllProducts] = useState(false);
  const handleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  //PRODUCT MENU
  const [selectedCategory, setSelectedCategory] = useState("all");
  console.log(selectedCategory);
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
      <div
        style={{
          display: "flex", // Enable flexbox layout
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "100vh", // Take full viewport height
          width: "100vw", // Take full viewport width
        }}
      >
        <Dots />
      </div>
    );
  }
  if (isError === true) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>Error loading page ...</p>
        <Link to="/">Return to Home page</Link>
      </div>
    );
  }
  const displayedProducts = limit ? products.slice(0, limit) : products;
  console.log("displayedProducts:", displayedProducts);
  return (
    <div className={styles.container}>
      {!limit && (
        <ShopOptionsFilter
          baseOptions={["all", "espresso", "decaf", "filter", "sale"]}
          selectedCategory={selectedCategory}
          handleSelectedCategory={handleSelectedCategory}
        />
      )}
      {logInSaveUser && (
        <AlButton onClick={() => navigate("/store/product")}>
          Add Product
        </AlButton>
      )}

      {isLoading ? (
        <div style={{ flex: 1, alignItems: "center" }}>
          <Dots />
        </div>
      ) : (
        <Container className={styles.collectionContainer}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",

              padding: "20px 20px",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {/* <div className={styles.resultNumber}>
              <span>SHOWING {products.length} RESULTS</span>
            </div> */}
            {/*products.map*/}
            {displayedProducts?.map((product) => (
              <Link
                style={{
                  textDecoration: "none",
                }}
                key={product.id}
                to={`/${product.id}`}
              >
                <div style={{ padding: "10px" }}>
                  <AlProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    base={product.base}
                    button={!limit && true}
                  />
                </div>
              </Link>
            ))}
          </div>
          {limit && (
            <div className={styles.seeMoreButton}>
              <AlButton onClick={() => navigate("/collection")}>
                Explore our full range
              </AlButton>
            </div>
          )}
        </Container>
      )}
    </div>
  );
}

export default ProductsPage;
