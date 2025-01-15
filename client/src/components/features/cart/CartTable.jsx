import React from "react";
import * as styles from "./CartTable";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import ButtonFrame from "../../common/ButtonFrame";

function CartTable({ queries, cartProducts, handleRemove, updateQuantity }) {
  return (
    <div>
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
                    <td style={{ display: "flex", flex: 1, gap: "10px" }}>
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
    </div>
  );
}

export default CartTable;
