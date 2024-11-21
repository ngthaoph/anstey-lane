import React from "react";
import * as styles from "./Cart.css";

function Cart({ cartProducts }) {
  return (
    <div className={styles.container}>
      <div>Your Cart</div>
      <div>Continue Shopping</div>
      {/* PRODUCT INFOMRATION */}
      <div>
        {cartProducts.map((product) => (
          <div>{product.grind}</div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
