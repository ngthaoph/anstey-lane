import React, { useEffect } from "react";
import * as styles from "./Cart.css";
import { useQueries } from "@tanstack/react-query";

import FreeShipping from "./FreeShipping";
import productService from "../../../services/productService.js";

import CartBottom from "./CartBottom";
import CartTable from "./CartTable";

// Fetch product data by ID
const fetchProduct = async (id) => {
  const response = await productService.getById(id);
  return response.data;
};

function Cart({ cartProducts, setCartProducts }) {
  // Fetch data for all products in the cart using useQueries
  let priceWithDelivery;
  const queries = useQueries({
    queries: cartProducts.map((product) => ({
      queryKey: ["productCart", product.id],
      queryFn: () => fetchProduct(product.id),
    })),
  });

  const handleRemove = (id) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(updatedCartProducts);
  };
  const calculateTotalPrice = (queries) =>
    queries.map((query, index) => {
      const product = query.data;
      if (product) {
        const cartProduct = cartProducts[index];
        const size = cartProducts[index].size;
        const results =
          size === "250g"
            ? product.price * cartProduct.quantity
            : product.price * 4 * cartProduct.quantity;
        return results;
      }
    });

  const updateQuantity = (id, delta) => {
    const results = cartProducts.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 0,
        };
      } else return item;
    });

    setCartProducts(results);
  };

  const subtotal = calculateTotalPrice(queries).reduce((a, b) => a + b, 0);

  // Check if any queries are loading or if there are any errors
  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);

  // Early return for loading or error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className={styles.container}>
      {/* CART HEADER */}
      <div className={styles.container}>
        <div className={styles.cartContainerH1}>Your Cart</div>
      </div>
      {subtotal < 150 && (
        <div>
          <FreeShipping subtotal={subtotal} />
        </div>
      )}

      {/* CART INFORMATION */}

      {cartProducts.length > 0 ? (
        <form style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: "30px",
              padding: "20px 20px",
            }}
          >
            <CartTable
              queries={queries}
              cartProducts={cartProducts}
              handleRemove={handleRemove}
              updateQuantity={updateQuantity}
            />

            {/* CART TOTAL BOTTOM */}
            <CartBottom
              subtotal={subtotal}
              priceWithDelivery={priceWithDelivery}
            />
          </div>
        </form>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}

export default Cart;
