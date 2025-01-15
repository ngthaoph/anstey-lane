import React, { useEffect } from "react";
import * as styles from "./Cart.css";
import { useQueries } from "@tanstack/react-query";

import FreeShipping from "./FreeShipping";
import productService from "../../../services/productService.js";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import ButtonFrame from "../../common/ButtonFrame";

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
    console.log(results);
    setCartProducts(results);
  };

  console.log(cartProducts);
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
        <div className={styles.cartContainerLink} href="/store/products">
          Continue Shopping
        </div>
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
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>Product</th>
                  <th className={styles.tableHeader}>Quantity</th>
                  <th className={styles.tableHeader}>Price</th>
                  <th className={styles.tableHeader}>Total</th>
                </tr>
              </thead>
              <tbody style={{ padding: "10px 10px" }}>
                {queries.map((query, index) => {
                  const product = query.data;

                  if (product) {
                    const cartProduct = cartProducts[index];
                    const size = cartProducts[index].size;
                    const totalPrice =
                      size === "250g"
                        ? product.price * cartProduct.quantity
                        : product.price * 4 * cartProduct.quantity;

                    return (
                      <tr key={product.id}>
                        {/* 1. PRODUCT INFORMATION*/}
                        <div style={{ display: "flex" }}>
                          <td style={{ display: "flex", flex: 1, gap: "5px" }}>
                            <img
                              style={{
                                maxHeight: "95px",
                                display: "block",
                                margin: "0 auto;",
                              }}
                              src={product.image}
                              alt={product.name}
                            />
                            <div>
                              <div>{product.name}</div>
                              <div>{size}</div>

                              <div>
                                <div onClick={() => handleRemove(product.id)}>
                                  Remove
                                  <AiOutlineDelete />
                                </div>
                              </div>
                            </div>
                          </td>
                        </div>
                        {/* 2. QUANTITY */}
                        <td>
                          <ButtonFrame>
                            <div
                              type="button"
                              onClick={() => updateQuantity(product.id, 1)}
                            >
                              <FaPlus />
                            </div>
                            <div>{cartProduct.quantity}</div>
                            <div onClick={() => updateQuantity(product.id, -1)}>
                              <FaMinus />
                            </div>
                          </ButtonFrame>
                        </td>
                        {/* 3. QUANTITY */}

                        <td>${product.price}</td>
                        {/* */}
                        <td>${totalPrice}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            {/* CART TOTAL BOTTOM */}
            <div
              style={{
                display: "flex",
                flex: 1,

                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{ display: "flex", flex: 1, flexDirection: "column" }}
              >
                <label>Add a note to your order</label>
                <textarea className={styles.orderNote}></textarea>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,

                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <p className={styles.cartBold}>
                  SUBTOTAL BEFORE DELIVERY: ${subtotal}
                </p>

                <p className={styles.cartBold}>
                  TOTAL PRICE: ${" "}
                  {subtotal > 150
                    ? subtotal
                    : (priceWithDelivery = subtotal + 15)}
                </p>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}

export default Cart;
