import React from "react";
import AlButton from "../../common/AlButton";
import * as styles from "./CartBottom.css";

function CartBottom({ subtotal, priceWithDelivery }) {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
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
        <p className={styles.cartBold}>SUBTOTAL BEFORE DELIVERY: ${subtotal}</p>

        <p className={styles.cartBold}>
          TOTAL PRICE: ${" "}
          {subtotal > 150 ? subtotal : (priceWithDelivery = subtotal + 15)}
        </p>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: "0 30px",
          }}
        >
          <div className={styles.cartBold}>
            <a href="/store/products" className={styles.cartContainerLink}>
              CONTINUE SHOPPING
            </a>
          </div>
          <AlButton>CHECK OUT</AlButton>
        </div>
      </div>
    </div>
  );
}

export default CartBottom;
