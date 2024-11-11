import { useState, useEffect } from "react";
import ProductsList from "../../components/features/products/ProductsList";
import { Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
//import productService from "../../services/productService";
import { Link } from "react-router-dom";

import * as styles from "./CollectionPage.css";
import Product from "./Product";
import { Dots } from "@holmesdev/ponder-spinners";

import AlProductCard from "../../components/common/AlProductCard";
import productService from "../../services/productService";
import ShopOptionsFilter from "./ShopOptionsFilter";

function ProductsPage() {
  // PRODUCTS STATEs
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true); //it needs to loads something - making a call to the api
  const [error, setError] = useState(false);
  // console.log(productService.getByBase(products.base.filter));

  const handleGetAllProducts = async () => {
    // const response = await axios("/api/products", products);
    // await productService.getAll();
    const response = await productService.getAll(products);
    const data = response.data;
    console.log(data);

    setProducts(data);
    setLoading(false);
  };

  function handleGetProductById(id) {
    // console.log("Get product by id:", id);
    const product = products.find((product) => product.id === id);
    console.log(product.id);
    return product;
  }
  // const handleGetProductsByBase = async (base) => {
  //   const response = await productService.getByBase(products);
  //   const data = response.data;
  //   console.log(data);
  //   setProducts(data);
  //   setLoading(false);
  // };
  // handleGetProductsByBase();
  if (error) {
    return (
      <div>
        <p>Error loading page ...</p>
        <Link to="/">Return to Home page</Link>
      </div>
    );
  }

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return (
    <>
      <ShopOptionsFilter
        baseOptions={["all", "espresso", "decaf", "filter", "sale"]}
      />
      {loading ? (
        <Dots />
      ) : (
        <Container className={styles.container}>
          {products.map((product) => (
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
    </>
  );
}

export default ProductsPage;
