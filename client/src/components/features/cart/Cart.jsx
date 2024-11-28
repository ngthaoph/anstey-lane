import React from "react";
import * as styles from "./Cart.css";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import Table from "react-bootstrap/Table";
import productService from "../../../services/productService.js";

// Fetch product data by ID
const fetchProduct = async (productId) => {
  const response = await axios.get(
    `http://localhost:5005/api/products/product/${productId}`
  );
  return response.data;
};

function Cart({ cartProducts }) {
  // Fetch data for all products in the cart using useQueries
  const queries = useQueries({
    queries: cartProducts.map((product) => ({
      queryKey: ["productCart", product.id],
      queryFn: () => fetchProduct(product.id),
    })),
  });

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
      <div>
        <h1 className={styles.cartContainerH1}>Your Cart</h1>
        <a className={styles.cartContainerLink} href="/store/products">
          Continue Shopping
        </a>
      </div>

      {/* CART INFORMATION */}
      <div>
        {cartProducts.length > 0 ? (
          <form>
            <Table>
              <thead>
                <tr
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.4737",
                    textTransform: "inherit",
                    borderBottom: "1px solid #2b2c30",
                    padding: "18px 0",
                    textAlign: "left !important",
                  }}
                >
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((query, index) => {
                  const product = query.data;
                  console.log(query.data);
                  if (product) {
                    const cartProduct = cartProducts[index];
                    const size = cartProducts[index].size;
                    const totalPrice =
                      size === "250g"
                        ? product.price * cartProduct.quantity
                        : product.price * 4 * cartProduct.quantity;

                    //product.price * cartProduct.quantity;

                    return (
                      <tr key={product.id}>
                        <td style={{ display: "flex" }}>
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
                          </div>
                        </td>
                        <td>{product.price}</td>
                        <td>{cartProduct.quantity}</td>
                        <td>{totalPrice}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </Table>

            {/* TOTAL */}
            <div>Add a note to your order</div>
            <div>
              <p>SUBTOTAL BEFORE DELIVERY</p>
              <p>TOTAL PRICE</p>
            </div>
          </form>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
