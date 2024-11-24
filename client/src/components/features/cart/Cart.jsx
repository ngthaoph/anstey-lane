import React from "react";
import * as styles from "./Cart.css";
import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";
import Table from "react-bootstrap/Table";
import CartItem from "./CartItem";
import productService from "../../../services/productService.js";

const fetchProduct = async (productId) => {
  const response = await axios.get(
    `http://localhost:5005/api/products/product/${productId}`
  ); // Ensure this API is correct
  return response.data;
};

function Cart({ cartProducts }) {
  //product 1
  const cartIds = cartProducts.map((product) => product.id);
  console.log(cartIds);
  const queries = useQueries({
    queries: cartIds.map((id) => {
      return {
        queryKey: ["productCart", id],
        queryFn: async () => {
          const product = await fetchProduct(id);
          return product;
        },
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
  if (queries.pending) {
    return <div>...Loading</div>;
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
      {/* // <CartItem product={product} cartProducts={cartProducts} /> */}
      <div>
        {cartProducts ? (
          <div>
            {/* CART INFORMATION */}
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
                {queries.data.map((product) => (
                  <tbody>
                    <tr>
                      <td>
                        {/*PRODUCT INFORAMTION */}
                        <div style={{ display: "flex" }}>
                          <div>
                            <img
                              style={{
                                maxHeight: "95px",
                                display: "block",
                                margin: "0 auto;",
                              }}
                              src={product.image}
                              alt={product.name}
                            />
                            {product.name}
                          </div>
                        </div>
                      </td>

                      <td>{product?.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product?.price}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </form>
            {/* TOTAL */}
            <div>Note to seller</div>
          </div>
        ) : (
          "Your cart is empty"
        )}
      </div>
    </div>
  );
}

export default Cart;
