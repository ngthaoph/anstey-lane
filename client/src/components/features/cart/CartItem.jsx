import React from "react";
import * as styles from "./CartItem.css";
import Table from "react-bootstrap/Table";

function CartItem({ product, cartProducts }) {
  return (
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
                  <td>1</td>
                  <td>{product?.price}</td>
                </tr>
              </tbody>
            </Table>
          </form>
          {/* TOTAL */}
          <div>Note to seller</div>
        </div>
      ) : (
        "Your cart is empty"
      )}
    </div>
  );
}

export default CartItem;
